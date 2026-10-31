/**
 * Apex Peptides V3 前端核心交互控制器 (Swiss Executive Dual-View B2B Controller)
 * 核心职责：
 * 1. 全局 WhatsApp Business / LINE Official (+852 44379192) 直联锚点注入与剪贴板一键复制
 * 2. 14 款源厂多肽目录的双视图引擎（Studio Cards 画册卡片视图 <-> Executive Spec Table 商务规格总表）
 * 3. 实时多维检索（品名 / 简称 / SKU / CAS 号 / 分子式）、六大分类过滤与多规格点选跨视图同步报价
 * 4. 实验室标准白底批次 COA (Certificate of Analysis) 弹窗与 Waters Symmetry C18 RP-HPLC 色谱峰图动态渲染
 * 5. B2B 结构化询价单生成器 (Executive RFQ Desk -> WhatsApp / LINE 一键直发)
 * 6. 英 (en) / 简中 (zh) / 泰 (th) 三语无刷新 100% 本地化重绘（含产品角标、库存状态与表头）
 *
 * @date 2026-10-30
 * @author Apex Peptides Corporate Frontend Engineering
 */

(function () {
  'use strict';

  /**
   * 页面运行时交互状态对象
   */
  const state = {
    activeCategory: 'all',
    searchQuery: '',
    // 目录展示模式：'cards' (画册卡片视图) | 'table' (B2B 商务规格总表)
    viewMode: 'cards',
    // 记录每款多肽当前点选的毫克/克级规格（默认取各自 specs[0]）
    selectedSpecs: {}
  };

  /**
   * 跨国药企级线性矢量 SVG 图标集（全站严格 0 Emoji）
   */
  const SVG_ICONS = {
    wa: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    line: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10.5C21 6.36 16.97 3 12 3S3 6.36 3 10.5c0 3.7 3.2 6.8 7.53 7.4.29.06.68.19.78.44.09.22.06.57.03.79l-.13.76c-.04.22-.18.88.77.48.95-.4 5.13-3.02 7.01-5.17C20.32 13.78 21 12.22 21 10.5z"/></svg>',
    doc: '<svg width="13.5" height="13.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></svg>',
    dot: '<svg width="7" height="7" viewBox="0 0 8 8" fill="currentColor" aria-hidden="true"><circle cx="4" cy="4" r="4"/></svg>'
  };

  /**
   * HTML 安全转义工具函数，防止动态渲染属性或搜索词注入
   * @param {string} str - 原始字符串
   * @returns {string} 转义后的安全 HTML 字符串
   */
  function escapeHtml(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * 构造带 SKU、CAS 号与选中规格的标准化 B2B 询盘主题串
   * [2026-10-30 对接系统: WhatsApp Business Official Desk +852 44379192 预填参数映射]
   * @param {Object} product - PRODUCTS 中的多肽实体对象
   * @param {string} chosenSpec - 当前激活的规格标签
   * @returns {string} 结构化产品询盘标识
   */
  function buildProductInquirySubject(product, chosenSpec) {
    return `${product.name} [SKU: ${product.sku} | CAS: ${product.cas} | Spec: ${chosenSpec}]`;
  }

  /**
   * 为全站所有静态直联锚点统一注入官方 WhatsApp / LINE (+852 44379192) 地址
   * [2026-10-30 对接系统: WhatsApp API & LINE Official URL Scheme]
   */
  function bindStaticContactLinks() {
    if (typeof getWhatsAppUrl !== 'function' || typeof getLineUrl !== 'function') return;

    const waElements = document.querySelectorAll('[data-wa-link]');
    waElements.forEach(function (el) {
      const customTopic = el.getAttribute('data-wa-topic') || '';
      el.setAttribute('href', customTopic ? getWhatsAppUrl(customTopic) : getWhatsAppUrl());
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });

    const lineElements = document.querySelectorAll('[data-line-link]');
    lineElements.forEach(function (el) {
      el.setAttribute('href', getLineUrl());
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    });
  }

  /**
   * 同步切换目录展示视图（画册卡片视图 vs B2B 商务规格总表）
   * @param {'cards'|'table'} mode - 目标视图模式
   */
  function applyCatalogViewMode(mode) {
    state.viewMode = mode === 'table' ? 'table' : 'cards';
    const grid = document.getElementById('products-grid');
    const tableWrap = document.getElementById('products-table-wrap');

    if (grid) {
      grid.classList.toggle('hidden-view', state.viewMode === 'table');
    }
    if (tableWrap) {
      tableWrap.classList.toggle('active-view', state.viewMode === 'table');
    }

    document.querySelectorAll('[data-view-mode]').forEach(function (btn) {
      const btnMode = btn.getAttribute('data-view-mode');
      const isActive = btnMode === state.viewMode;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
  }

  /**
   * 渲染六大产品分类筛选标签栏（随三语切换实时本地化）
   */
  function renderCategoryTabs() {
    const container = document.getElementById('category-tabs');
    if (!container || typeof CATEGORIES === 'undefined') return;

    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';

    container.innerHTML = CATEGORIES.map(function (cat) {
      let label = cat.nameEn;
      if (lang === 'zh') label = cat.nameZh;
      else if (lang === 'th') label = cat.nameTh;

      const activeCls = state.activeCategory === cat.id ? 'cat-tab active' : 'cat-tab';
      return `<button type="button" class="${activeCls}" data-cat-id="${escapeHtml(cat.id)}">${escapeHtml(label)}</button>`;
    }).join('');

    container.querySelectorAll('[data-cat-id]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        state.activeCategory = btn.getAttribute('data-cat-id') || 'all';
        renderCategoryTabs();
        renderProductsGrid();
      });
    });
  }

  /**
   * 根据当前分类与搜索关键词计算过滤后的多肽列表
   * @param {string} lang - 当前语言代码 ('en' | 'zh' | 'th')
   * @returns {Array<Object>} 匹配的多肽对象数组
   */
  function getFilteredProducts(lang) {
    if (typeof PRODUCTS === 'undefined') return [];
    const q = state.searchQuery.trim().toLowerCase();

    return PRODUCTS.filter(function (item) {
      const catMatch = state.activeCategory === 'all' || item.category === state.activeCategory;
      if (!catMatch) return false;
      if (!q) return true;

      const descText = (item.description && (item.description[lang] || item.description.en)) || '';
      const badgeText = (item.badgeI18n && (item.badgeI18n[lang] || item.badgeI18n.en)) || item.badge || '';
      const haystack = [
        item.name,
        item.shortCode,
        item.sku,
        item.cas,
        item.formula,
        badgeText,
        (item.specs || []).join(' '),
        descText
      ].join(' ').toLowerCase();

      return haystack.indexOf(q) !== -1;
    });
  }

  /**
   * 同步渲染 14 款多肽产品的【画册卡片视图】与【B2B 商务规格总表】
   * 采用克制深海军蓝主按钮 + 瓷白细边框副按钮，消除廉价电商绿块噪音
   */
  function renderProductsGrid() {
    const grid = document.getElementById('products-grid');
    const tableBody = document.getElementById('products-table-body');
    if (!grid || typeof PRODUCTS === 'undefined') return;

    const lang = typeof getCurrentLanguage === 'function' ? getCurrentLanguage() : 'en';
    const filtered = getFilteredProducts(lang);

    if (filtered.length === 0) {
      const emptyMsg = typeof t === 'function' ? t('noSearchMatch') : 'No matching compound found.';
      const waHref = typeof getWhatsAppUrl === 'function'
        ? getWhatsAppUrl('Custom Peptide Sequence SPPS: ' + state.searchQuery)
        : 'https://wa.me/85244379192';
      const emptyMarkup = `
        <div class="catalog-empty-state">
          <p style="margin-bottom:14px;font-weight:600;color:#0b1d33;">${escapeHtml(emptyMsg)}</p>
          <a href="${escapeHtml(waHref)}" target="_blank" rel="noopener noreferrer" class="btn btn-navy">
            ${SVG_ICONS.wa}
            <span>WhatsApp Desk: +852 44379192</span>
          </a>
        </div>
      `;
      grid.innerHTML = emptyMarkup;
      if (tableBody) {
        tableBody.innerHTML = `<tr><td colspan="6">${emptyMarkup}</td></tr>`;
      }
      return;
    }

    const lblPurity = typeof t === 'function' ? t('purityLabel') : 'HPLC';
    const lblSpec = typeof t === 'function' ? t('specLabel') : 'Available Specifications:';
    const lblPkg = typeof t === 'function' ? t('pkgLabel') : 'Format';
    const lblMw = typeof t === 'function' ? t('mwLabel') : 'Mol. Weight';
    const lblCoa = typeof t === 'function' ? t('btnViewCoa') : 'Batch COA';
    const lblWa = typeof t === 'function' ? t('btnInquireWa') : 'WhatsApp Quote';
    const lblLine = typeof t === 'function' ? t('btnInquireLine') : 'LINE Desk';
    const lineHref = typeof getLineUrl === 'function' ? getLineUrl() : 'https://line.me/ti/p/F6s-63sxJf';

    const cardsHtmlList = [];
    const rowsHtmlList = [];

    filtered.forEach(function (prod) {
      const specs = Array.isArray(prod.specs) && prod.specs.length > 0 ? prod.specs : ['Standard 10-Vial Kit'];
      if (!state.selectedSpecs[prod.id]) {
        state.selectedSpecs[prod.id] = specs[0];
      }
      const currentSpec = state.selectedSpecs[prod.id];
      const localizedDesc = (prod.description && (prod.description[lang] || prod.description.en)) || '';
      const localizedBadge = (prod.badgeI18n && (prod.badgeI18n[lang] || prod.badgeI18n.en)) || prod.badge || 'GMP Verified';
      const localizedStock = (prod.stockI18n && (prod.stockI18n[lang] || prod.stockI18n.en)) || prod.stockStatus || 'In Stock';

      const waInquiryHref = typeof getWhatsAppUrl === 'function'
        ? getWhatsAppUrl(buildProductInquirySubject(prod, currentSpec))
        : 'https://wa.me/85244379192';

      const chipsHtml = specs.map(function (sp) {
        const cls = sp === currentSpec ? 'spec-chip active' : 'spec-chip';
        return `<button type="button" class="${cls}" data-spec-prod="${escapeHtml(prod.id)}" data-spec-val="${escapeHtml(sp)}">${escapeHtml(sp)}</button>`;
      }).join('');

      // 1. 构造 Studio Card 画册卡片 HTML
      cardsHtmlList.push(`
        <article class="product-card" data-product-id="${escapeHtml(prod.id)}">
          <div class="product-photo-header">
            <img src="${escapeHtml(prod.image)}" alt="${escapeHtml(prod.name)} lyophilized peptide vials" loading="lazy" />
            <span class="prod-shortcode-tag">${escapeHtml(prod.shortCode || prod.sku)}</span>
            <span class="prod-purity-tag">${escapeHtml(lblPurity)} ${escapeHtml(prod.purity)}</span>
            <button type="button" class="prod-coa-quick-btn" data-open-coa="${escapeHtml(prod.id)}">
              ${SVG_ICONS.doc}
              <span>${escapeHtml(lblCoa)}</span>
            </button>
          </div>
          <div class="product-body">
            <div class="product-sku-row">
              <span class="product-sku">SKU: ${escapeHtml(prod.sku)}</span>
              <span class="product-badge-inline">${escapeHtml(localizedBadge)}</span>
            </div>
            <h3 class="product-title">${escapeHtml(prod.name)}</h3>
            <div class="chem-meta-table">
              <div class="chem-meta-item">
                <span class="chem-meta-key">CAS No.</span>
                <span class="chem-meta-val">${escapeHtml(prod.cas)}</span>
              </div>
              <div class="chem-meta-item">
                <span class="chem-meta-key">${escapeHtml(lblMw)}</span>
                <span class="chem-meta-val">${escapeHtml(prod.mw)}</span>
              </div>
              <div class="chem-meta-item">
                <span class="chem-meta-key">Formula</span>
                <span class="chem-meta-val">${escapeHtml(prod.formula)}</span>
              </div>
              <div class="chem-meta-item">
                <span class="chem-meta-key">${escapeHtml(lblPkg)}</span>
                <span class="chem-meta-val">${escapeHtml(prod.packaging)}</span>
              </div>
            </div>
            <p class="product-desc">${escapeHtml(localizedDesc)}</p>
            <div class="spec-selector-block">
              <span class="spec-selector-label">${escapeHtml(lblSpec)}</span>
              <div class="spec-chips">${chipsHtml}</div>
            </div>
            <div class="product-stock-line">
              <span class="stock-ready">${SVG_ICONS.dot} ${escapeHtml(localizedStock)}</span>
              <span class="mono">Lot: ${escapeHtml(prod.coa ? prod.coa.batchNo : 'AP2610')}</span>
            </div>
            <div class="product-actions">
              <a href="${escapeHtml(waInquiryHref)}" target="_blank" rel="noopener noreferrer" class="btn btn-card-primary" data-card-wa="${escapeHtml(prod.id)}">
                ${SVG_ICONS.wa}
                <span>${escapeHtml(lblWa)}</span>
              </a>
              <a href="${escapeHtml(lineHref)}" target="_blank" rel="noopener noreferrer" class="btn btn-card-secondary">
                ${SVG_ICONS.line}
                <span>${escapeHtml(lblLine)}</span>
              </a>
            </div>
          </div>
        </article>
      `);

      // 2. 构造 Executive Spec Table 商务规格表行 HTML
      rowsHtmlList.push(`
        <tr data-table-row="${escapeHtml(prod.id)}">
          <td>
            <div class="tbl-compound-cell">
              <img src="${escapeHtml(prod.image)}" alt="${escapeHtml(prod.name)}" class="tbl-thumb" loading="lazy" />
              <div>
                <span class="tbl-sku">${escapeHtml(prod.sku)} · ${escapeHtml(localizedBadge)}</span>
                <div class="tbl-name">${escapeHtml(prod.name)}</div>
              </div>
            </div>
          </td>
          <td>
            <div class="mono" style="font-weight:600;color:#0b1d33;font-size:0.79rem;">${escapeHtml(prod.cas)}</div>
            <div class="mono" style="color:#5b6b7f;font-size:0.74rem;">${escapeHtml(prod.mw)}</div>
          </td>
          <td>
            <span class="tbl-purity-pill">${escapeHtml(prod.purity)}</span>
          </td>
          <td>
            <div class="spec-chips">${chipsHtml}</div>
          </td>
          <td>
            <button type="button" class="tbl-coa-btn" data-open-coa="${escapeHtml(prod.id)}">
              ${SVG_ICONS.doc}
              <span>${escapeHtml(prod.coa ? prod.coa.batchNo : lblCoa)}</span>
            </button>
          </td>
          <td>
            <div class="tbl-actions-group">
              <a href="${escapeHtml(waInquiryHref)}" target="_blank" rel="noopener noreferrer" class="btn btn-card-primary" data-row-wa="${escapeHtml(prod.id)}">
                ${SVG_ICONS.wa}
                <span>${escapeHtml(lblWa)}</span>
              </a>
              <a href="${escapeHtml(lineHref)}" target="_blank" rel="noopener noreferrer" class="btn btn-card-secondary">
                ${SVG_ICONS.line}
                <span>LINE</span>
              </a>
            </div>
          </td>
        </tr>
      `);
    });

    grid.innerHTML = cardsHtmlList.join('');
    if (tableBody) {
      tableBody.innerHTML = rowsHtmlList.join('');
    }

    bindCatalogDynamicItemEvents(grid, tableBody);
  }

  /**
   * 为动态渲染的卡片与表格行绑定规格切换及批次 COA 弹窗事件
   * 点选任意规格时，卡片与表格双视图的激活芯片及 WhatsApp 预填链接实时同步
   * @param {HTMLElement} grid - 卡片网格容器
   * @param {HTMLElement|null} tableBody - 规格表 tbody 容器
   */
  function bindCatalogDynamicItemEvents(grid, tableBody) {
    const roots = [grid];
    if (tableBody) roots.push(tableBody);

    roots.forEach(function (rootEl) {
      rootEl.querySelectorAll('[data-spec-prod]').forEach(function (chipBtn) {
        chipBtn.addEventListener('click', function () {
          const prodId = chipBtn.getAttribute('data-spec-prod');
          const specVal = chipBtn.getAttribute('data-spec-val');
          if (!prodId || !specVal) return;

          state.selectedSpecs[prodId] = specVal;
          const targetProd = PRODUCTS.find(function (p) { return p.id === prodId; });
          const updatedHref = (targetProd && typeof getWhatsAppUrl === 'function')
            ? getWhatsAppUrl(buildProductInquirySubject(targetProd, specVal))
            : 'https://wa.me/85244379192';

          // 同步卡片与表格中的所有同款产品芯片与 WhatsApp 按钮
          roots.forEach(function (r) {
            r.querySelectorAll('[data-spec-prod="' + prodId + '"]').forEach(function (b) {
              b.classList.toggle('active', b.getAttribute('data-spec-val') === specVal);
            });
            const cardWa = r.querySelector('[data-card-wa="' + prodId + '"]');
            if (cardWa) cardWa.setAttribute('href', updatedHref);
            const rowWa = r.querySelector('[data-row-wa="' + prodId + '"]');
            if (rowWa) rowWa.setAttribute('href', updatedHref);
          });
        });
      });

      rootEl.querySelectorAll('[data-open-coa]').forEach(function (coaBtn) {
        coaBtn.addEventListener('click', function () {
          const prodId = coaBtn.getAttribute('data-open-coa');
          openCoaModal(prodId);
        });
      });
    });
  }

  /**
   * 根据产品保留时间生成白底实验室标准 Waters Symmetry C18 RP-HPLC 色谱曲线 SVG
   * @param {Object} product - 多肽产品实体
   * @returns {string} 内联矢量色谱图 SVG 字符串
   */
  function buildChromatogramSvg(product) {
    const rtText = (product.coa && product.coa.rt) ? product.coa.rt : '12.40 min';
    const purityText = (product.coa && product.coa.hplcPurity) ? product.coa.hplcPurity : product.purity;
    return `
      <svg class="chromatogram-svg" viewBox="0 0 560 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="RP-HPLC Analytical Chromatogram">
        <rect x="0" y="0" width="560" height="175" fill="#ffffff"/>
        <g stroke="#e5eaf1" stroke-width="1">
          <line x1="48" y1="20" x2="540" y2="20"/>
          <line x1="48" y1="55" x2="540" y2="55"/>
          <line x1="48" y1="90" x2="540" y2="90"/>
          <line x1="48" y1="125" x2="540" y2="125"/>
          <line x1="130" y1="15" x2="130" y2="145"/>
          <line x1="230" y1="15" x2="230" y2="145"/>
          <line x1="330" y1="15" x2="330" y2="145"/>
          <line x1="430" y1="15" x2="430" y2="145"/>
        </g>
        <line x1="48" y1="15" x2="48" y2="145" stroke="#334155" stroke-width="1.3"/>
        <line x1="48" y1="145" x2="542" y2="145" stroke="#334155" stroke-width="1.3"/>
        <g fill="#64748b" font-family="monospace" font-size="9.5" text-anchor="end">
          <text x="43" y="24">1000</text>
          <text x="43" y="59">750</text>
          <text x="43" y="94">500</text>
          <text x="43" y="129">250</text>
          <text x="43" y="148">0</text>
        </g>
        <g fill="#64748b" font-family="monospace" font-size="9.5" text-anchor="middle">
          <text x="48" y="162">0.0</text>
          <text x="130" y="162">5.0</text>
          <text x="230" y="162">10.0</text>
          <text x="330" y="162">15.0</text>
          <text x="430" y="162">20.0</text>
          <text x="530" y="162">25.0 min</text>
        </g>
        <path d="M 48 143 L 92 143 Q 98 139 103 143 L 245 143 Q 252 141.2 257 143 L 288 143 C 296 143 299 22 304 20 C 309 22 313 143 323 143 L 540 143"
              fill="none" stroke="#16437e" stroke-width="2" stroke-linejoin="round"/>
        <line x1="288" y1="143" x2="323" y2="143" stroke="#b5945b" stroke-width="1" stroke-dasharray="3,2"/>
        <text x="316" y="32" fill="#0b1d33" font-family="monospace" font-size="10.5" font-weight="bold">
          RT: ${escapeHtml(rtText)} | Area: ${escapeHtml(purityText)}
        </text>
        <text x="56" y="32" fill="#475569" font-family="monospace" font-size="9.5">
          UV 214 nm · Waters Symmetry C18
        </text>
      </svg>
    `;
  }

  /**
   * 打开指定多肽的实验室批次 COA (Certificate of Analysis) 质检详情弹窗
   * @param {string} productId - 产品唯一标识 ID
   */
  function openCoaModal(productId) {
    if (typeof PRODUCTS === 'undefined') return;
    const prod = PRODUCTS.find(function (p) { return p.id === productId; });
    if (!prod) return;

    const modal = document.getElementById('coa-modal');
    const body = document.getElementById('coa-modal-body');
    const titleEl = document.getElementById('coa-modal-title');
    if (!modal || !body) return;

    const coa = prod.coa || {};
    const selectedSpec = state.selectedSpecs[prod.id] || (prod.specs && prod.specs[0]) || 'Standard';
    const waCoaUrl = typeof getWhatsAppUrl === 'function'
      ? getWhatsAppUrl(`Request Raw PDF COA & Tiered Quote for ${prod.name} (Lot ${coa.batchNo || prod.sku}, Spec: ${selectedSpec})`)
      : 'https://wa.me/85244379192';
    const lineUrl = typeof getLineUrl === 'function' ? getLineUrl() : 'https://line.me/ti/p/F6s-63sxJf';

    if (titleEl) {
      titleEl.textContent = `Certificate of Analysis — ${prod.name} (${coa.batchNo || prod.sku})`;
    }

    body.innerHTML = `
      <div class="coa-paper-sheet" style="box-shadow:none;padding:18px;">
        <div class="coa-sheet-header">
          <div>
            <div class="coa-sheet-title">APEX PEPTIDES ANALYTICAL QC LABORATORY</div>
            <div class="coa-sheet-sub">Compound: ${escapeHtml(prod.name)} | CAS: ${escapeHtml(prod.cas)} | Lot No: ${escapeHtml(coa.batchNo || 'AP2610')}</div>
          </div>
          <span class="coa-pass-stamp">QC RELEASED · PASS</span>
        </div>
        <div class="coa-params-grid">
          <div class="coa-param-cell">
            <span>RP-HPLC Purity</span>
            <strong>${escapeHtml(coa.hplcPurity || prod.purity)}</strong>
          </div>
          <div class="coa-param-cell">
            <span>Retention Time</span>
            <strong>${escapeHtml(coa.rt || '12.4 min')}</strong>
          </div>
          <div class="coa-param-cell">
            <span>ESI-MS Expected</span>
            <strong>${escapeHtml(coa.msExpected || prod.mw)}</strong>
          </div>
          <div class="coa-param-cell">
            <span>ESI-MS Found</span>
            <strong>${escapeHtml(coa.msFound || prod.mw)}</strong>
          </div>
          <div class="coa-param-cell">
            <span>Appearance</span>
            <strong>${escapeHtml(coa.appearance || 'White Lyophilized Cake')}</strong>
          </div>
          <div class="coa-param-cell">
            <span>Water Content</span>
            <strong>${escapeHtml(coa.waterContent || '≤2.0%')}</strong>
          </div>
        </div>
        <div class="chromatogram-box">
          ${buildChromatogramSvg(prod)}
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:16px;">
          <a href="${escapeHtml(waCoaUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-wa" style="flex:1 1 240px;">
            ${SVG_ICONS.wa}
            <span>Request Raw PDF COA on WhatsApp (+852 44379192)</span>
          </a>
          <a href="${escapeHtml(lineUrl)}" target="_blank" rel="noopener noreferrer" class="btn btn-outline" style="flex:1 1 170px;">
            ${SVG_ICONS.line}
            <span>Verify via LINE Desk</span>
          </a>
        </div>
      </div>
    `;

    modal.classList.add('open');
  }

  /**
   * 初始化 B2B 在线询价单产品下拉列表
   */
  function populateQuoteProductsDropdown() {
    const select = document.getElementById('quote-product');
    if (!select || typeof PRODUCTS === 'undefined') return;

    const currentVal = select.value;
    const options = [
      '<option value="Full Wholesale Price Sheet (All 14 Ready-Stock Lines)">Full Wholesale Price Sheet (All 14 Ready-Stock Lines)</option>'
    ];
    PRODUCTS.forEach(function (p) {
      const specsSummary = Array.isArray(p.specs) ? p.specs.join(' / ') : '';
      options.push(`<option value="${escapeHtml(p.name)} (${escapeHtml(p.sku)})">${escapeHtml(p.name)} — [${escapeHtml(specsSummary)}]</option>`);
    });
    options.push('<option value="Custom Peptide Sequence Synthesis / Bulk Raw API (10g-50kg)">Custom Peptide Sequence Synthesis / Bulk Raw API (10g–50kg)</option>');

    select.innerHTML = options.join('');
    if (currentVal) {
      select.value = currentVal;
    }
  }

  /**
   * 采集 B2B 询价单表单字段并组装标准化跨国采购询盘报文
   * [2026-10-30 对接系统: WhatsApp Business & LINE Official +852 44379192]
   * @returns {string} 结构化外贸询盘文本
   */
  function collectQuoteMessage() {
    const roleEl = document.getElementById('quote-role');
    const prodEl = document.getElementById('quote-product');
    const qtyEl = document.getElementById('quote-qty');
    const countryEl = document.getElementById('quote-country');
    const notesEl = document.getElementById('quote-notes');

    const role = roleEl && roleEl.options[roleEl.selectedIndex] ? roleEl.options[roleEl.selectedIndex].text : 'Institutional Buyer';
    const prod = prodEl ? prodEl.value : 'Peptide Wholesale';
    const qty = (qtyEl && qtyEl.value.trim()) ? qtyEl.value.trim() : 'Tiered Wholesale MOQ';
    const country = (countryEl && countryEl.value.trim()) ? countryEl.value.trim() : 'International Express';
    const notes = (notesEl && notesEl.value.trim()) ? notesEl.value.trim() : 'Please share factory tiered price sheet & latest batch COA.';

    return [
      'Hello Apex Peptides Factory Export Desk (+852 44379192),',
      'We would like to request an official B2B quotation:',
      `- Organization Profile: ${role}`,
      `- Target Compound / Line: ${prod}`,
      `- Estimated Volume: ${qty}`,
      `- Destination Country: ${country}`,
      `- Technical & Packaging Notes: ${notes}`
    ].join('\n');
  }

  /**
   * 显示底部轻量反馈提示条
   * @param {string} msg - 提示信息
   */
  function showToast(msg) {
    const toast = document.getElementById('copy-toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(function () {
      toast.classList.remove('show');
    }, 2600);
  }

  /**
   * 复制文本至系统剪贴板（兼容现代 Clipboard API 与传统降级策略）
   * @param {string} text - 待复制文本
   * @param {string} toastMessage - 成功提示文案
   */
  function copyTextToClipboard(text, toastMessage) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast(toastMessage);
      }).catch(function () {
        fallbackCopy(text, toastMessage);
      });
    } else {
      fallbackCopy(text, toastMessage);
    }
  }

  function fallbackCopy(text, toastMessage) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast(toastMessage);
    } catch (e) {}
    document.body.removeChild(ta);
  }

  /**
   * 绑定全站核心交互事件（搜索过滤、双视图切换、事业部导航卡、RFQ 表单、三语重绘、弹窗及移动端菜单）
   */
  function bindInteractiveEvents() {
    // 1. 实时搜索框与清空按钮
    const searchInput = document.getElementById('catalog-search');
    const clearBtn = document.getElementById('catalog-search-clear');
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        state.searchQuery = searchInput.value || '';
        if (clearBtn) {
          clearBtn.classList.toggle('visible', state.searchQuery.length > 0);
        }
        renderProductsGrid();
      });
    }
    if (clearBtn && searchInput) {
      clearBtn.addEventListener('click', function () {
        searchInput.value = '';
        state.searchQuery = '';
        clearBtn.classList.remove('visible');
        renderProductsGrid();
        searchInput.focus();
      });
    }

    // 2. 双目录视图切换器：[Studio Cards | Executive Spec Table]
    document.querySelectorAll('[data-view-mode]').forEach(function (viewBtn) {
      viewBtn.addEventListener('click', function () {
        const targetMode = viewBtn.getAttribute('data-view-mode') || 'cards';
        applyCatalogViewMode(targetMode);
      });
    });

    // 3. 四大事业部卡片点击联动过滤并平滑滚动至目录区
    document.querySelectorAll('[data-jump-cat]').forEach(function (card) {
      card.addEventListener('click', function () {
        const targetCat = card.getAttribute('data-jump-cat') || 'all';
        state.activeCategory = targetCat;
        renderCategoryTabs();
        renderProductsGrid();
        const catalogSection = document.getElementById('products');
        if (catalogSection && catalogSection.scrollIntoView) {
          catalogSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // 4. B2B 询价单直发 WhatsApp 或 LINE
    const btnQuoteWa = document.getElementById('btn-quote-wa');
    const btnQuoteLine = document.getElementById('btn-quote-line');
    if (btnQuoteWa) {
      btnQuoteWa.addEventListener('click', function () {
        const msg = collectQuoteMessage();
        const phoneNum = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.whatsappNumber) ? SITE_CONFIG.whatsappNumber : '85244379192';
        const url = `https://wa.me/${phoneNum}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    }
    if (btnQuoteLine) {
      btnQuoteLine.addEventListener('click', function () {
        const msg = collectQuoteMessage();
        copyTextToClipboard(msg, 'RFQ copied to clipboard — paste directly in LINE (+852 44379192).');
        const lineUrl = typeof getLineUrl === 'function' ? getLineUrl() : 'https://line.me/ti/p/F6s-63sxJf';
        window.open(lineUrl, '_blank', 'noopener,noreferrer');
      });
    }

    // 5. 一键复制官方号码 (+852 44379192)
    document.querySelectorAll('[data-copy-phone]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const phone = (typeof SITE_CONFIG !== 'undefined' && SITE_CONFIG.phone) ? SITE_CONFIG.phone : '+852 44379192';
        const copiedLabel = typeof t === 'function' ? t('copiedText') : 'Copied +852 44379192';
        copyTextToClipboard(phone, copiedLabel);
      });
    });

    // 6. 二维码弹窗与 COA 弹窗开关控制
    const qrModal = document.getElementById('qr-modal');
    const coaModal = document.getElementById('coa-modal');

    document.querySelectorAll('[data-open-qr]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (qrModal) qrModal.classList.add('open');
      });
    });

    document.querySelectorAll('[data-close-modal]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (qrModal) qrModal.classList.remove('open');
        if (coaModal) coaModal.classList.remove('open');
      });
    });

    [qrModal, coaModal].forEach(function (modalEl) {
      if (!modalEl) return;
      modalEl.addEventListener('click', function (e) {
        if (e.target === modalEl) {
          modalEl.classList.remove('open');
        }
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        if (qrModal) qrModal.classList.remove('open');
        if (coaModal) coaModal.classList.remove('open');
      }
    });

    // 7. 英 / 中 / 泰 三语无刷新切换（同步重绘分类标签、产品角标与双视图目录）
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = btn.getAttribute('data-lang-btn');
        if (lang && typeof setLanguage === 'function') {
          setLanguage(lang);
          renderCategoryTabs();
          renderProductsGrid();
        }
      });
    });

    // 8. 移动端折叠抽屉菜单
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    if (menuToggle && mobileDrawer) {
      menuToggle.addEventListener('click', function () {
        mobileDrawer.classList.toggle('open');
      });
      mobileDrawer.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          mobileDrawer.classList.remove('open');
        });
      });
    }
  }

  /**
   * 应用初始化引导入口
   */
  function initApp() {
    if (typeof initI18n === 'function') {
      initI18n();
    }
    if (typeof window !== 'undefined' && window.location && window.location.search && typeof URLSearchParams !== 'undefined') {
      try {
        const qView = new URLSearchParams(window.location.search).get('view');
        if (qView === 'table' || qView === 'cards') {
          state.viewMode = qView;
        }
      } catch (e) {}
    }
    bindStaticContactLinks();
    populateQuoteProductsDropdown();
    renderCategoryTabs();
    renderProductsGrid();
    applyCatalogViewMode(state.viewMode);
    bindInteractiveEvents();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
