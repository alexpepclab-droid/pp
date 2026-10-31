/**
 * Apex Peptides V3 跨国药企级三语引擎 (Executive Pharmaceutical Trilingual i18n Engine)
 * 支持 English (en), 简体中文 (zh), ภาษาไทย (th)
 * 全站 0 Emoji，100% 覆盖所有角标、视图切换器、商务规格表头、合作流程与车间图注，切换语言零残留
 *
 * @date 2026-10-30
 * @author Apex Peptides International Division
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    const i18n = factory();
    root.TRANSLATIONS = i18n.TRANSLATIONS;
    root.setLanguage = i18n.setLanguage;
    root.getCurrentLanguage = i18n.getCurrentLanguage;
    root.t = i18n.t;
    root.initI18n = i18n.initI18n;
    root.applyLanguageToDOM = i18n.applyLanguageToDOM;
  }
})(typeof self !== 'undefined' ? self : this, function () {

  let currentLang = 'en';

  const TRANSLATIONS = {
    // ==================== ENGLISH ====================
    en: {
      announcement: 'WHO-GMP & ISO 9001:2015 CERTIFIED PEPTIDE SYNTHESIS GROUP',
      topOverseas: 'Tax-Paid Air Lanes: USA · EU · UK · Canada · Thailand · Australia',
      brandSub: 'GMP Peptide Synthesis Group',
      navHome: 'Home',
      navCategories: 'Product Lines',
      navProducts: 'Peptide Catalog',
      navFactory: 'Facilities',
      navQuality: 'Analytical QC',
      navOem: 'Logistics & OEM',
      navQuote: 'RFQ Desk',
      navContact: 'Contact',
      navWaBtn: 'WhatsApp Desk',
      navLineBtn: 'LINE Official',

      // Hero
      heroBadge: 'SOLID-PHASE PEPTIDE SYNTHESIS (SPPS) & LYOPHILIZATION CDMO',
      heroTitle: 'Institutional-Grade Peptide Synthesis Base & Global Bulk Supply Partner',
      heroSubtitle: 'Direct reactor-to-client supply from multi-kilogram API peptide powders to sterile 10-vial lyophilized kits. Every production lot undergoes Waters Acquity UPLC-MS release testing with full blind third-party Janoshik analytical support.',
      heroDeskLabel: 'GLOBAL B2B EXPORT & TECHNICAL DESK',
      heroCtaWa: 'WhatsApp Business: +852 44379192',
      heroCtaLine: 'LINE Official Desk: +852 44379192',
      heroCtaCatalog: 'Explore Specification Catalog',
      heroPhotoCaption: 'ISO Class 7 Solid-Phase Synthesis & Preparative RP-HPLC Suite',
      heroSub1Title: '100% Optical Vial Inspection',
      heroSub1Desc: '+3% precision peristaltic dosing overfill standard',
      heroSub2Title: 'Robotic UPLC-MS Batch Assay',
      heroSub2Desc: 'Traceable lot COA & Janoshik blind-test guarantee',
      stat1Val: '10,000 m²',
      stat1Lbl: 'ISO Class 7 Synthesis & Lyophilization Campus',
      stat2Val: '500,000+',
      stat2Lbl: 'Monthly Sterile Lyophilized Vials Capacity',
      stat3Val: '≥99.2%',
      stat3Lbl: 'Mean Batch-Certified RP-HPLC Purity',
      stat4Val: '24–48 hrs',
      stat4Lbl: 'Cold-Chain Stock Dispatch & Tax-Paid Transit',

      // About & 4 Core Pillars
      aboutTag: 'CORPORATE MANUFACTURING ARCHITECTURE',
      aboutTitle: 'Integrated Source Synthesis — Eliminating Trading Intermediaries',
      aboutDesc: 'Apex Peptides operates a vertically integrated solid-phase peptide synthesis (SPPS), preparative C18 chromatography, and pharmaceutical freeze-drying complex. We serve regional wholesalers, compounding laboratories, and private-label brand owners with factory-direct tiered pricing and strict batch-to-batch reproducibility.',
      aboutCap1: '10,000 m² Integrated GMP Cleanroom & High-Bay Cold-Chain Masterplan',
      aboutCap2: 'Rotary Sterile Vial Optical QC',
      aboutCap3: 'Sealed API Fiber Drum Reserve',
      badgePurity: 'WHO-GMP & ISO 9001 Quality Architecture',
      badgePurityDesc: 'Automated multi-channel SPPS reactors and preparative RP-HPLC deliver ≥99% purity with <0.1% residual TFA.',
      badgeCoa: 'Waters UPLC-MS & Third-Party COA',
      badgeCoaDesc: 'Every lot ships with original HPLC chromatograms, ESI-MS spectra, and full Janoshik blind verification backing.',
      badgeShipping: 'Global Tax-Paid & Discreet Logistics',
      badgeShippingDesc: 'Dedicated customs-cleared express lanes to USA, Europe, UK, Canada, Thailand, Southeast Asia, and Australia.',
      badgeFactoryPrice: 'Transparent Factory-Gate Tiered Pricing',
      badgeFactoryPriceDesc: 'Direct manufacturer economics across neutral 10-vial kits, kilogram API powders, and turnkey OEM production.',

      // Major Product Categories
      majCatTag: 'FOUR CORE BUSINESS DIVISIONS',
      majCatTitle: 'Core Manufacturing & Supply Lines',
      majCatSubtitle: 'Structured B2B supply spanning neutral 10-vial finished kits, nitrogen-sealed API raw powders, co-lyophilized complexes, and custom OEM branding.',
      majCatLine1: 'DIVISION 01 · FINISHED KITS',
      majCatLine2: 'DIVISION 02 · BULK API POWDER',
      majCatLine3: 'DIVISION 03 · COMPLEX BLENDS',
      majCatLine4: 'DIVISION 04 · TURNKEY OEM',
      majCat1Title: 'Lyophilized Finished Vials (10 Vials/Kit)',
      majCat1Desc: 'Sterile 3ml & 10ml borosilicate vials in neutral white shockproof 10-vial boxes with 12 anodized flip-off cap options.',
      majCat2Title: 'Bulk Peptide Raw Powder (10g – 50kg)',
      majCat2Desc: 'Double nitrogen-flushed pharmaceutical aluminum-foil bags & fiber drums with verified Net Peptide Content (NPC).',
      majCat3Title: 'Co-Lyophilized Multi-Peptide Blends',
      majCat3Desc: 'Precision-dosed synergistic formulations including GLOW 70mg, Wolverine 20mg, CagriSema, and CJC-1295/Ipamorelin.',
      majCat4Title: 'Private-Label OEM & USP BAC Water',
      majCat4Desc: 'Low-MOQ custom cap colors, cryo-proof labels, bespoke 10-vial rigid boxes, and USP 0.9% Bacteriostatic Water.',

      // Product Catalog & Dual View Switcher
      catalogTag: 'READY-STOCK SPECIFICATION MATRIX',
      catalogTitle: 'Executive Peptide Catalog & Batch Specifications',
      catalogSubtitle: 'Switch between Studio Cards and our B2B Executive Specification Table. Select any dosage chip to pre-fill an exact factory quotation request.',
      viewCards: 'Studio Cards',
      viewTable: 'Executive Spec Table',
      tblColCode: 'SKU / Compound',
      tblColCas: 'CAS No. / MW',
      tblColPurity: 'RP-HPLC',
      tblColSpecs: 'Select Specification',
      tblColCoa: 'Batch COA',
      tblColAction: 'Direct Inquiry',
      searchPlaceholder: 'Filter by compound name, code (Reta, Tirze, Glow) or CAS registry number...',
      filterAll: 'All Catalog',
      specLabel: 'Available Specifications (Select to Quote):',
      purityLabel: 'HPLC',
      statusLabel: 'Status:',
      pkgLabel: 'Format',
      mwLabel: 'Mol. Weight',
      btnInquireWa: 'WhatsApp Quote',
      btnInquireLine: 'LINE Desk',
      btnViewCoa: 'Batch COA',
      noSearchMatch: 'Compound not listed in standard ready-stock. Contact our synthesis engineers via WhatsApp (+852 44379192) for custom SPPS synthesis.',
      customSeqTitle: 'Custom Peptide Synthesis (CRO) & Kilogram Contract Manufacturing (CDMO)',
      customSeqDesc: 'Linear, disulfide-cyclized, lactam-bridged, PEGylated, and unnatural amino-acid sequences synthesized from 10g pilot lots to 50kg commercial batches.',
      customSeqBtn: 'Connect with Synthesis Engineering',

      // Facilities Gallery
      factoryTag: 'GMP PRODUCTION INFRASTRUCTURE',
      factorySectionTitle: 'Cleanroom Synthesis Suites & Analytical Laboratories',
      factorySectionSubtitle: 'Verified photographic documentation of our solid-phase synthesis reactors, pharmaceutical freeze-dryers, RABS sterile filling lines, and QC center.',
      zoneATag: 'SUITE A · SOLID-PHASE SYNTHESIS',
      zoneBTag: 'SUITE B · -55°C LYOPHILIZATION',
      zoneCTag: 'SUITE C · RABS ASEPTIC ISOLATOR',
      zoneDTag: 'SUITE D · WATERS UPLC-MS QC',
      featCleanroomTitle: 'Stainless-Steel Jacketed SPPS Reactor Bay',
      featCleanroomDesc: 'ISO Class 7 synthesis cleanroom housing automated solid-phase reactors delivering over 50kg monthly crude polypeptide output.',
      featLyophilizationTitle: 'Pharmaceutical Vacuum Freeze-Drying Systems',
      featLyophilizationDesc: '-55°C shelf-regulated sublimation chambers yielding dense, transport-stable lyophilized cakes with Karl Fischer moisture ≤2.0%.',
      featSynthesizerTitle: 'RABS Aseptic Filtration & Automated Crimping Line',
      featSynthesizerDesc: 'Dual 0.22μm sterile membrane filtration, precision peristaltic filling (+3% overfill), nitrogen headspace purge, and automated capping.',
      featDiscreetTitle: 'Waters Acquity UPLC & Xevo QToF-MS Analytical Center',
      featDiscreetDesc: 'Dedicated quality control division executing chromatographic purity, exact mass deconvolution, residual TFA, and LAL endotoxin assays.',

      // Quality & Anti-Counterfeit Notice
      qualityTag: 'QUALITY ASSURANCE & AUTHENTICITY',
      qualitySectionTitle: 'Batch Certificate of Analysis (COA) & Official Verification Advisory',
      qualitySectionSubtitle: 'Every released lot carries a unique traceable batch identifier backed by raw chromatographic data and third-party verification.',
      antiScamTitle: 'Official Anti-Counterfeit & Lab Report Verification Advisory',
      antiScamDesc: 'Unauthorized trading intermediaries occasionally misappropriate factory imagery and third-party Janoshik reports. Please authenticate all batch COAs and proforma invoices exclusively through our sole official Hong Kong export desk on WhatsApp or LINE: +852 44379192. Apex Peptides operates no public Telegram groups.',
      hplcTitle: 'RP-HPLC Gradient Purity Determination',
      hplcDesc: 'Waters Symmetry C18 analytical elution at 214nm verifies ≥99.0% target peak area and strict removal of deletion sequences.',
      msTitle: 'High-Resolution ESI-MS Molecular Mass Verification',
      msDesc: 'Multi-charge envelope deconvolution confirms molecular weight accuracy within ±0.2 Da of theoretical sequence mass.',
      blindTestPromise: 'Independent Blind-Test Warranty: Full replacement or refund should any blind sample tested at Janoshik Analytical or MZ Biolabs fall below certified purity or fill weight.',

      // Warehouse, OEM & 4-Step B2B Process
      warehouseTag: 'COLD-CHAIN LOGISTICS & PRIVATE LABELING',
      oemSectionTitle: 'Controlled Cold Storage, Discreet Export Packaging & Turnkey OEM',
      oemSectionSubtitle: 'Segregated -20°C and 2–8°C inventory vaults paired with shockproof vacuum-sealed export cartons for seamless global customs clearance.',
      whPhoto1Title: 'Segregated Cold-Storage Kit Vaults',
      whPhoto1Desc: '50,000+ neutral white 10-vial kits indexed by batch number under continuous temperature monitoring for 24–48h dispatch.',
      whPhoto2Title: 'Shockproof Pearl-Foam & Foil Vacuum Packing',
      whPhoto2Desc: 'Custom die-cut foam trays, heat-sealed barrier foil pouches, and neutral outer cartons achieving a 99.8% delivery success rate.',
      whPhoto3Title: 'Multi-Ton Bulk Synthesis Intermediate Reserve',
      whPhoto3Desc: 'Protected raw amino-acid derivatives and pharmaceutical drum inventory supporting rapid large-scale CMO production.',
      oemCapTitle: 'Anodized & Matte Flip-Off Caps',
      oemCapDesc: '12 standard cap colors in stock with custom top-embossed brand insignias available for private-label partners.',
      oemLabelTitle: 'Cryogenic Waterproof Vial Labels',
      oemLabelDesc: '-80°C rated medical adhesive labels featuring metallic foil stamping, batch coding, and anti-tamper security seals.',
      oemBoxTitle: 'Bespoke 10-Vial Rigid Presentation Boxes',
      oemBoxDesc: 'Custom-printed magnetic or tuck-top 10-vial kit boxes with precision inserts starting at a streamlined 50-kit MOQ.',

      // 4-Step B2B Procurement Workflow
      procTag: 'STANDARDIZED B2B PROCUREMENT WORKFLOW',
      procTitle: 'Streamlined Institutional Ordering & Delivery Protocol',
      proc1Title: '01 · Specification & Tiered Quote',
      proc1Desc: 'Submit target compounds and quantities via WhatsApp/LINE (+852 44379192) for live stock status and factory price tiers.',
      proc2Title: '02 · Batch COA & Invoice Confirmation',
      proc2Desc: 'Review current-lot HPLC/MS analytical reports and confirm destination tax-paid air shipping terms.',
      proc3Title: '03 · 24–48h Cold-Chain Vacuum Dispatch',
      proc3Desc: 'Orders are packed in pearl-foam vacuum barrier cartons and dispatched with full door-to-door tracking.',
      proc4Title: '04 · Customs-Cleared Receipt & After-Sales',
      proc4Desc: 'Guaranteed safe arrival across USA, EU, UK, Thailand & Australia backed by our third-party blind-test warranty.',

      // Request a Quote Form & Executive Contact
      quoteTag: 'EXECUTIVE RFQ & EXPORT DESK',
      quoteTitle: 'Request Tiered Wholesale Price Sheet & Formal Quotation',
      quoteSubtitle: 'Configure your procurement parameters below to transmit a structured B2B inquiry directly to our senior export manager.',
      quoteRoleLabel: 'Organization / Buyer Profile',
      quoteRole1: 'Regional Wholesaler / Distribution Partner',
      quoteRole2: 'Biotech Research Lab / Academic Institution',
      quoteRole3: 'Private-Label / OEM Brand Operator',
      quoteRole4: 'Independent Scientific Researcher',
      quoteProductLabel: 'Target Compound / Manufacturing Line',
      quoteQtyLabel: 'Estimated Volume (e.g., 20 Kits, 100 Kits, 500g Raw API)',
      quoteCountryLabel: 'Destination Country / Customs Zone',
      quoteNotesLabel: 'Technical & Packaging Requirements (Cap Color, OEM, Logistics)',
      quoteNotesPlaceholder: 'e.g., Neutral cobalt-cap 10-vial kits, DDP tax-paid express delivery to USA / Thailand, please attach latest batch COA...',
      quoteSubmitWa: 'Transmit RFQ via WhatsApp (+852 44379192)',
      quoteSubmitLine: 'Copy RFQ & Launch LINE Desk (+852 44379192)',

      contactSectionTitle: 'Global Factory Export Desk — Direct Executive Access',
      contactSectionSubtitle: 'Connect one-on-one with our Hong Kong international trade and synthesis specialists for real-time inventory sheets and COA documentation.',
      cardWaTitle: 'WhatsApp Business Official Desk',
      cardWaDesc: 'Primary international B2B desk serving North America, Europe, UK, Australia & global accounts. Instant PDF price catalog.',
      cardLineTitle: 'LINE Official Factory Account',
      cardLineDesc: 'Dedicated executive channel for Thailand, Taiwan, Japan, and Asia-Pacific wholesale & research partners.',
      copyBtn: 'Copy +852 44379192',
      copiedText: 'Copied +852 44379192 to clipboard',
      openChatBtn: 'Open Direct Channel',
      scanQrTitle: 'Official QR Code',
      dockLabel: 'B2B Desk',

      // Mobile Sticky Bottom Bar
      mobileWaBar: 'WhatsApp Desk',
      mobileLineBar: 'LINE Official',
      mobileQrBar: 'QR / Copy',

      // Footer
      footerLinesTitle: 'Core Manufacturing Lines',
      footerNavTitle: 'Corporate & Quality Assurance',
      footerDisclaimer: 'REGULATORY & RESEARCH USE COMPLIANCE: All polypeptide compounds and API raw materials manufactured by Apex Peptides are supplied strictly for in-vitro laboratory research, analytical reference calibration, and qualified R&D manufacturing. Not intended for human clinical administration, diagnostic use, or food/cosmetic consumption.',
      footerCopyright: '© 2026 Apex Peptides Synthesis Co., Ltd. All Rights Reserved. WHO-GMP & ISO 9001:2015 Certified Source Manufacturer.'
    },

    // ==================== 简体中文 ====================
    zh: {
      announcement: 'WHO-GMP 与 ISO 9001:2015 国际认证多肽固相合成源头集团',
      topOverseas: '双清包税航空专线：美国 · 欧洲 · 英国 · 加拿大 · 泰国 · 澳洲',
      brandSub: 'GMP 多肽固相合成源头集团',
      navHome: '首页',
      navCategories: '四大业务线',
      navProducts: '现货规格目录',
      navFactory: '洁净车间实景',
      navQuality: '液质中心与 COA',
      navOem: '冷链仓储与 OEM',
      navQuote: 'B2B 询价台',
      navContact: '官方直联',
      navWaBtn: 'WhatsApp 商务线',
      navLineBtn: 'LINE 官方号',

      // Hero
      heroBadge: '多肽固相合成 (SPPS) 与无菌冻干规模化源头生产基地',
      heroTitle: '跨国医药级高纯多肽源头合成基地 · 全球大宗原粉与成品批发伙伴',
      heroSubtitle: '从公斤级 API 多肽原料纯粉到无菌 10 支装冻干西林瓶成品，全链条自主固相合成、制备色谱纯化与真空冷冻干燥。每批次均经 Waters Acquity UPLC-MS 放行检测，全面支持 Janoshik 独立第三方盲测核验。',
      heroDeskLabel: '源头工厂全球外贸与技术直联专线',
      heroCtaWa: 'WhatsApp 商务直线: +852 44379192',
      heroCtaLine: 'LINE 官方直联: +852 44379192',
      heroCtaCatalog: '查阅现货规格总目录',
      heroPhotoCaption: 'ISO Class 7 万级洁净固相合成反应釜与制备级 RP-HPLC 纯化阵列',
      heroSub1Title: '100% 全自动无菌光学灯检',
      heroSub1Desc: '严格执行 +3% 足量高精度蠕动灌装标准',
      heroSub2Title: '机器人进样 UPLC-MS 逐批检测',
      heroSub2Desc: '随货附原始色谱质谱图，支持 Janoshik 盲测',
      stat1Val: '10,000 m²',
      stat1Lbl: 'ISO Class 7 洁净固相合成与冻干产业基地',
      stat2Val: '500,000+ 支',
      stat2Lbl: '无菌冻干西林瓶月均稳定交付产能',
      stat3Val: '≥99.2%',
      stat3Lbl: '批次放行反相高效液相 (RP-HPLC) 实测纯度',
      stat4Val: '24–48 小时',
      stat4Lbl: '恒温冷库现货闪发与全球双清包税门到门',

      // About & 4 Core Pillars
      aboutTag: '源头工厂垂直一体化制造架构',
      aboutTitle: '省去一切中间贸易商溢价，直接建立源头工厂长期供应链',
      aboutDesc: 'Apex Peptides 运营完整的固相多肽合成釜阵列、C18 制备级反相色谱纯化中心及大型医药真空冷冻干燥产线。直接面向海外区域总代、科研机构、分装实验室及跨境自有品牌方提供可溯源的一手出厂阶梯价格与高度稳定的批间一致性。',
      aboutCap1: '10,000 m² 一体化 GMP 洁净合成车间与高架恒温冷链仓储总图',
      aboutCap2: '无菌西林瓶转盘精密灯检',
      aboutCap3: '药用级 API 原料密封桶储备',
      badgePurity: 'WHO-GMP 与 ISO 9001 质量体系',
      badgePurityDesc: '全自动多通道固相合成与 C18 制备纯化，主峰纯度 ≥99%，严控三氟乙酸（TFA）残留 <0.1%。',
      badgeCoa: 'Waters 液质联用与第三方 COA',
      badgeCoaDesc: '每批出厂均随附原始 HPLC 色谱图与 ESI-MS 质谱图，全力支持送检 Janoshik 等国际独立实验室。',
      badgeShipping: '全球双清包税与保密冷链专线',
      badgeShippingDesc: '成熟运营美国、欧洲、英国、加拿大、泰国及澳洲空运双清包税门到门专线，通关安全稳妥。',
      badgeFactoryPrice: '透明规范的一手源厂阶梯出厂价',
      badgeFactoryPriceDesc: '无论是 10 支中性白盒现货、公斤级铝箔原粉还是 OEM 私模品牌代工，均享源厂直供价格体系。',

      // Major Product Categories
      majCatTag: '源头工厂四大核心事业部',
      majCatTitle: '核心生产与供应业务矩阵',
      majCatSubtitle: '全方位覆盖中性 10 支装成品冻干盒、充氮药用铝箔袋原料纯粉、协同复合配方多肽及一站式 OEM 私模贴牌定制。',
      majCatLine1: '事业部 01 · 成品十支冻干盒',
      majCatLine2: '事业部 02 · 大宗 API 原料粉',
      majCatLine3: '事业部 03 · 联合冻干复合肽',
      majCatLine4: '事业部 04 · 私模贴牌与辅料',
      majCat1Title: '无菌成品冻干西林瓶 (10 支/盒中性装)',
      majCat1Desc: '3ml / 10ml 药用硼硅玻璃瓶真空冻干，标配纯白防震十支装卡盒与 12 色阳极氧化铝塑翻盖。',
      majCat2Title: '大宗多肽 API 原料纯粉 (10g – 50kg)',
      majCat2Desc: '双层充氮药用铝箔袋及密封原料桶封装，随附净肽含量（NPC）实测数据，专供分装厂与大型制剂商。',
      majCat3Title: '精准比例联合冻干复合肽 (Blends)',
      majCat3Desc: '多组分同瓶定量冻干明星配方：涵盖 GLOW 70mg 三合一、Wolverine 20mg 修复双肽、CagriSema 等。',
      majCat4Title: '一站式 OEM 品牌定制与 USP 抑菌水',
      majCat4Desc: '50 盒低门槛定制专属瓶盖色、耐低温防水防冻瓶贴、精装十支彩盒，常备 3ml/10ml 无菌抑菌水。',

      // Product Catalog & Dual View Switcher
      catalogTag: '源厂冷库常备现货规格矩阵',
      catalogTitle: '多肽产品规格中心与批次技术名录',
      catalogSubtitle: '支持在“画册卡片视图”与“B2B 商务规格总表”间自由切换；点选任意毫克规格即可一键生成带批号与 CAS 号的精准询价单。',
      viewCards: '画册卡片视图',
      viewTable: 'B2B 商务规格总表',
      tblColCode: '编号 / 多肽品名',
      tblColCas: 'CAS 号 / 分子量',
      tblColPurity: '实测纯度',
      tblColSpecs: '点选采购规格',
      tblColCoa: '批次质检单',
      tblColAction: '源厂直联询价',
      searchPlaceholder: '输入多肽品名、英文简称 (如 Reta, Tirze, BPC, Glow) 或 CAS 注册号检索...',
      filterAll: '全部目录',
      specLabel: '可选出货规格（点击切换）：',
      purityLabel: 'HPLC',
      statusLabel: '库存状态：',
      pkgLabel: '包装规格',
      mwLabel: '分子量',
      btnInquireWa: 'WhatsApp 询价',
      btnInquireLine: 'LINE 商务线',
      btnViewCoa: '批次 COA',
      noSearchMatch: '标准现货名录未检索到该条目。本厂承接任意定制氨基酸序列固相合成，请通过 WhatsApp (+852 44379192) 联系合成工程师核算报价。',
      customSeqTitle: '定制多肽序列合成 (CRO) 与公斤级原料委托生产 (CDMO)',
      customSeqDesc: '承接线性肽、二硫键环肽、内酰胺环肽、PEG 修饰及非天然氨基酸序列定制，支持 10g 研发小试至 50kg 商业化放大。',
      customSeqBtn: '对接固相合成技术总监',

      // Facilities Gallery
      factoryTag: 'GMP 核心生产与质控硬件',
      factorySectionTitle: '洁净合成车间、冻干产线与分析质检中心实景',
      factorySectionSubtitle: '实景呈现本厂不锈钢夹套固相合成釜、工业级医用真空冷冻干燥机组、RABS 无菌隔离灌装线及 Waters 液质联用实验室。',
      zoneATag: '车间 A · 固相多肽合成区',
      zoneBTag: '车间 B · -55°C 真空冻干区',
      zoneCTag: '车间 C · RABS 无菌隔离灌装',
      zoneDTag: '车间 D · WATERS 液质分析室',
      featCleanroomTitle: '不锈钢夹套固相多肽合成反应釜阵列',
      featCleanroomDesc: 'ISO Class 7 万级洁净区配置多套大型全自动固相合成反应釜，单月粗肽合成吞吐量逾 50 公斤。',
      featLyophilizationTitle: '大型医药级真空冷冻干燥机组',
      featLyophilizationDesc: '-55°C 板层精准控温升华干燥，冻干粉饼洁白致密、抗跨国运输颠簸，卡尔费休水分严格 ≤2.0%。',
      featSynthesizerTitle: 'RABS 无菌隔离过滤与全自动灌装轧盖线',
      featSynthesizerDesc: '双级 0.22μm 除菌滤芯过滤，高精度蠕动定量（+3% 足量灌装），全程充氮加塞与全自动铝塑轧盖。',
      featDiscreetTitle: 'Waters Acquity UPLC 与 Xevo QToF 质谱中心',
      featDiscreetDesc: '独立质量控制分析部，逐批执行反相色谱纯度、高分辨质谱分子量确证、TFA 残留与内毒素检测。',

      // Quality & Anti-Counterfeit Notice
      qualityTag: '权威分析质控与官方防伪溯源',
      qualitySectionTitle: '批次 COA 质检证书与官方唯一防伪核验声明',
      qualitySectionSubtitle: '每一放行批次均绑定唯一溯源批号（Lot No.），随附完整液相色谱积分表与高分辨质谱数据。',
      antiScamTitle: '官方防伪与第三方检测报告核验重要声明',
      antiScamDesc: '近期发现个别皮包贸易商盗用工厂实拍及第三方 Janoshik 检测报告误导采购商。所有批次 COA 原件与形式发票（PI）请务必通过本厂唯一香港官方商务直线 WhatsApp 或 LINE（+852 44379192）核验确认。本厂不设任何公开 Telegram 群组。',
      hplcTitle: 'RP-HPLC 反相高效液相色谱纯度分析',
      hplcDesc: 'Waters Symmetry C18 分析柱 214nm 梯度洗脱，确保主峰积分纯度 ≥99.0%，严控缺失肽杂质。',
      msTitle: '高分辨 ESI-MS / QToF 质谱分子量确证',
      msDesc: '多电荷离子簇解卷积精密校核，确保实测分子量与理论氨基酸序列分子量偏差严格在 ±0.2 Da 以内。',
      blindTestPromise: '独立第三方盲测品质保障：支持客户将任意批次送检 Janoshik Analytical 或 MZ Biolabs，若实测纯度或装量低于标称值，本厂无条件免费补发或全额退款。',

      // Warehouse, OEM & 4-Step Process
      warehouseTag: '全球冷链仓储与品牌私模代工',
      oemSectionTitle: '恒温冷库现货储备、国际保密打包与一站式 OEM 定制',
      oemSectionSubtitle: '分区 -20°C 与 2–8°C 恒温冷库常备大规模库存，配合防震珍珠棉与双层铝箔真空隔热外箱每日直发全球。',
      whPhoto1Title: '分区恒温冷库 50,000+ 盒现货阵列',
      whPhoto1Desc: '所有中性纯白 10 支装成品盒按批号条码化管理，常规批发订单确认后 24–48 小时内极速打包出库。',
      whPhoto2Title: '防碎珍珠棉卡槽与药用铝箔袋真空热封',
      whPhoto2Desc: '定制高密度防震泡沫托盘 + 避光铝箔袋抽真空封装 + 无敏感标识加固外箱，全球清关签收率达 99.8%。',
      whPhoto3Title: '吨级合成保护氨基酸与大宗原料桶储备',
      whPhoto3Desc: '充足的核心Fmoc保护氨基酸衍生物与中间体储备，保障大宗公斤级 CMO 订单快速排产交付。',
      oemCapTitle: '12 色阳极氧化铝塑翻盖定制',
      oemCapDesc: '常备深蓝、墨绿、酒红、香槟金、铂金银等 12 种盖色，支持塑盖顶面定制品牌钢印压纹。',
      oemLabelTitle: '耐 -80°C 低温防水防冻医用瓶贴',
      oemLabelDesc: '专为冷冻储存研发的高粘医用合成标签，支持烫金/烫银工艺、品牌视觉排版与防伪溯源码印刷。',
      oemBoxTitle: '定制品牌 10 支装精装硬盒（50 盒起订）',
      oemBoxDesc: '仅需 50 盒超低起订量即可定制专属十支装精品包装盒与精密内托，助力自有品牌高效拓展海外市场。',

      // 4-Step B2B Workflow
      procTag: '标准化跨国 B2B 采购合作流程',
      procTitle: '四步高效完成源厂直采与全球双清交付',
      proc1Title: '01 · 规格确认与阶梯报价',
      proc1Desc: '通过 WhatsApp 或 LINE (+852 44379192) 发送目标品类与数量，实时获取当日库存表与出厂阶梯价。',
      proc2Title: '02 · 当批 COA 谱图核验与立项',
      proc2Desc: '查阅拟发批次的 Waters HPLC/MS 原始检测谱图，确认收货国家双清包税专线与结算方式。',
      proc3Title: '03 · 24–48h 冷链真空保密出库',
      proc3Desc: '仓库按严苛防震抽真空标准完成封装出库，第一时间同步国际专线物流追踪单号与打包实拍。',
      proc4Title: '04 · 双清门到门签收与盲测质保',
      proc4Desc: '欧美、英国、泰国、澳洲等专线包清关安全送达，全周期享受第三方实验室盲测达标质保承诺。',

      // Request a Quote Form & Executive Contact
      quoteTag: '源头工厂大宗采购询价台 (RFQ)',
      quoteTitle: '获取出厂阶梯价目表与正式采购报价单',
      quoteSubtitle: '在下方勾选您的采购身份、目标产品与收货地区，一键生成规范 B2B 询盘单并直发香港外贸部高级经理。',
      quoteRoleLabel: '机构 / 采购方类型',
      quoteRole1: '海外区域批发商 / 渠道代理商',
      quoteRole2: '生物医药实验室 / 高校及科研院所',
      quoteRole3: '跨境自有品牌方 / OEM 贴牌客户',
      quoteRole4: '独立科研采购人士',
      quoteProductLabel: '意向多肽产品或业务产线',
      quoteQtyLabel: '预计采购规模（如：20 盒、100 盒、500g 原料纯粉）',
      quoteCountryLabel: '目的国家 / 清关区域',
      quoteNotesLabel: '包装与技术要求备注（瓶盖颜色、是否贴牌、物流要求）',
      quoteNotesPlaceholder: '例如：采购中性皇家蓝盖 10 支装白盒，走美国/泰国双清包税门到门专线，请同步最新阶梯报价册与当批 COA...',
      quoteSubmitWa: '通过 WhatsApp 发送正式询价单 (+852 44379192)',
      quoteSubmitLine: '复制询价单并唤起 LINE 商务号 (+852 44379192)',

      contactSectionTitle: '源头工厂国际外贸中心 — 一对一商务直联',
      contactSectionSubtitle: '直接对接工厂驻香港国际业务与合成技术团队，秒级获取当日现货库存清单、大宗阶梯价目册与批次 COA PDF 原件。',
      cardWaTitle: 'WhatsApp Business 官方国际直线',
      cardWaDesc: '北美、欧洲、英国、澳洲及全球批发商首选商务通道，即时发送完整 PDF 产品目录与质检谱图。',
      cardLineTitle: 'LINE 官方工厂直营商务号',
      cardLineDesc: '专为泰国、中国台湾、日本及亚太区批发合作伙伴设立的本土化快捷沟通专线。',
      copyBtn: '复制直线 +852 44379192',
      copiedText: '已复制官方号码 +852 44379192',
      openChatBtn: '立即开启商务对话',
      scanQrTitle: '官方二维码',
      dockLabel: '商务直联',

      // Mobile Sticky Bottom Bar
      mobileWaBar: 'WhatsApp 商务线',
      mobileLineBar: 'LINE 官方直联',
      mobileQrBar: '扫码 / 复制',

      // Footer
      footerLinesTitle: '核心生产供应线',
      footerNavTitle: '企业实力与质量体系',
      footerDisclaimer: '合规与科研用途声明：Apex Peptides 合成供应的所有多肽化合物及 API 原料均严格限定于专业机构体外实验室研究（In-Vitro Research）、分析对照品标定及合规研发生产用途，未获相关药品监管许可前严禁用于人体临床注射、医疗诊断或食品化妆品直接添加。',
      footerCopyright: '© 2026 Apex Peptides Synthesis Co., Ltd. 版权所有 · WHO-GMP 与 ISO 9001:2015 认证多肽固相合成源头集团。'
    },

    // ==================== ภาษาไทย (THAI) ====================
    th: {
      announcement: 'กลุ่มโรงงานสังเคราะห์เปปไทด์มาตรฐาน WHO-GMP & ISO 9001:2015',
      topOverseas: 'สายส่งด่วนเคลียร์ภาษี: ไทย · สหรัฐฯ · ยุโรป · อังกฤษ · ออสเตรเลีย',
      brandSub: 'กลุ่มโรงงานสังเคราะห์เปปไทด์มาตรฐาน GMP',
      navHome: 'หน้าแรก',
      navCategories: 'สายการผลิตหลัก',
      navProducts: 'แคตตาล็อกสเปก',
      navFactory: 'โรงงานคลีนรูม',
      navQuality: 'ห้องแล็บ & COA',
      navOem: 'คลังห้องเย็น & OEM',
      navQuote: 'ขอใบเสนอราคา',
      navContact: 'ติดต่อฝ่ายขาย',
      navWaBtn: 'WhatsApp ทางการ',
      navLineBtn: 'LINE Official',

      // Hero
      heroBadge: 'ฐานการสังเคราะห์เปปไทด์ (SPPS) และทำแห้งเยือกแข็งมาตรฐานระดับโลก',
      heroTitle: 'ฐานการผลิตเปปไทด์ความบริสุทธิ์สูงมาตรฐาน GMP และพันธมิตรขายส่งระดับสากล',
      heroSubtitle: 'จัดส่งตรงจากถังสังเคราะห์สู่ผู้ซื้อ ตั้งแต่ผงวัตถุดิบเปปไทด์ API ระดับกิโลกรัม ไปจนถึงชุดขวดฟรีซดรายปลอดเชื้อ 10 ขวด/กล่อง ตรวจสอบคุณภาพทุกล็อตด้วย Waters Acquity UPLC-MS และรับประกันผลตรวจซ้ำจากแล็บ Janoshik',
      heroDeskLabel: 'ฝ่ายส่งออกและเทคนิคต่างประเทศ (B2B EXPORT DESK)',
      heroCtaWa: 'ติดต่อ WhatsApp โรงงาน: +852 44379192',
      heroCtaLine: 'แชท LINE Official: +852 44379192',
      heroCtaCatalog: 'เปิดดูแคตตาล็อกและตารางสเปก',
      heroPhotoCaption: 'ห้องคลีนรูมสังเคราะห์เปปไทด์ SPPS และระบบทำให้บริสุทธิ์ RP-HPLC มาตรฐาน ISO Class 7',
      heroSub1Title: 'ตรวจสอบขวดด้วยแสงอัตโนมัติ 100%',
      heroSub1Desc: 'มาตรฐานบรรจุปริมาณเต็มเกิน +3% ทุกขวด',
      heroSub2Title: 'วิเคราะห์ด้วย UPLC-MS อัตโนมัติทุกล็อต',
      heroSub2Desc: 'แนบกราฟต้นฉบับพร้อมรับประกันผลแล็บ Janoshik',
      stat1Val: '10,000 ตร.ม.',
      stat1Lbl: 'พื้นที่ฐานการผลิตคลีนรูม ISO Class 7 และฟรีซดราย',
      stat2Val: '500,000+ ขวด',
      stat2Lbl: 'กำลังการผลิตขวดเปปไทด์ฟรีซดรายปลอดเชื้อต่อเดือน',
      stat3Val: '≥99.2%',
      stat3Lbl: 'ความบริสุทธิ์เฉลี่ยจากการรับรอง RP-HPLC ทุกชุด',
      stat4Val: '24–48 ชม.',
      stat4Lbl: 'จัดส่งด่วนจากคลังห้องเย็นพร้อมเคลียร์ศุลกากร',

      // About & 4 Core Pillars
      aboutTag: 'โครงสร้างการผลิตครบวงจรจากโรงงานต้นทาง',
      aboutTitle: 'สั่งซื้อตรงจากโรงงานผู้ผลิตเปปไทด์ต้นทาง ตัดปัญหาพ่อค้าคนกลาง',
      aboutDesc: 'Apex Peptides บริหารสายการผลิตแบบครบวงจร ตั้งแต่การสังเคราะห์โซลิดเฟส (SPPS) โครมาโทกราฟีแบบเตรียมการ C18 ไปจนถึงการฟรีซดรายปลอดเชื้อ มอบเรทราคาส่งหน้าโรงงานแท้จริงและความสม่ำเสมอของสินค้าทุกล็อตแก่ผู้ค้าส่งในไทย ห้องแล็บวิจัย และเจ้าของแบรนด์ OEM',
      aboutCap1: 'ผังศูนย์การผลิตคลีนรูม GMP และคลังห้องเย็นครบวงจรพื้นที่ 10,000 ตร.ม.',
      aboutCap2: 'การตรวจสอบขวดปลอดเชื้อบนจานหมุน',
      aboutCap3: 'คลังถังไฟเบอร์สำรองผงวัตถุดิบ API',
      badgePurity: 'ระบบบริหารคุณภาพ WHO-GMP & ISO 9001',
      badgePurityDesc: 'เครื่องสังเคราะห์ SPPS อัตโนมัติและคอลัมน์ C18 ให้ความบริสุทธิ์ ≥99% พร้อมควบคุมกรด TFA ตกค้างต่ำกว่า 0.1%',
      badgeCoa: 'ผลวิเคราะห์ Waters UPLC-MS & ใบรับรอง COA',
      badgeCoaDesc: 'สินค้าทุกล็อตแนบกราฟ HPLC และมวลโมเลกุล ESI-MS ต้นฉบับ พร้อมรับประกันผลตรวจตาบอดจาก Janoshik',
      badgeShipping: 'โลจิสติกส์ส่งด่วนถึงไทยและทั่วโลก เคลียร์ภาษี 100%',
      badgeShippingDesc: 'เส้นทางขนส่งด่วนพิเศษถึงประเทศไทย เอเชียตะวันออกเฉียงใต้ สหรัฐฯ ยุโรป และออสเตรเลีย ปลอดภัยไร้กังวลเรื่องศุลกากร',
      badgeFactoryPrice: 'โครงสร้างราคาขายส่งหน้าโรงงานแบบขั้นบันได',
      badgeFactoryPriceDesc: 'ราคาผู้ผลิตต้นทางโดยตรง ทั้งชุดกล่องขาว 10 ขวด ผงวัตถุดิบระดับกิโลกรัม และงานสั่งผลิตสร้างแบรนด์ OEM',

      // Major Product Categories
      majCatTag: '4 สายธุรกิจการผลิตหลักของโรงงาน',
      majCatTitle: 'กลุ่มผลิตภัณฑ์และบริการหลัก (Core Supply Lines)',
      majCatSubtitle: 'ครอบคลุมความต้องการระดับ B2B ทั้งชุดขวดฟรีซดรายสำเร็จรูป ผงวัตถุดิบบริสุทธิ์อัดไนโตรเจน สูตรผสมยอดนิยม และบริการรับผลิตแบรนด์ OEM',
      majCatLine1: 'สายผลิต 01 · ชุดขวดสำเร็จรูป 10 ขวด',
      majCatLine2: 'สายผลิต 02 · ผงวัตถุดิบเกรด API',
      majCatLine3: 'สายผลิต 03 · เปปไทด์สูตรผสมพิเศษ',
      majCatLine4: 'สายผลิต 04 · รับผลิตแบรนด์ OEM',
      majCat1Title: 'ขวดเปปไทด์ฟรีซดรายสำเร็จรูป (10 ขวด/กล่อง)',
      majCat1Desc: 'ขวดแก้วบอโรซิลิเกต 3ml และ 10ml ในกล่องขาวกันกระแทก 10 ขวด พร้อมตัวเลือกฝาอะลูมิเนียมฟลิปออฟ 12 สี',
      majCat2Title: 'ผงเปปไทด์วัตถุดิบบริสุทธิ์ (10 กรัม – 50 กก.)',
      majCat2Desc: 'บรรจุถุงอะลูมิเนียมฟอยล์เกรดยาอัดก๊าซไนโตรเจนสองชั้นและถังไฟเบอร์ พร้อมผลตรวจปริมาณเนื้อเปปไทด์สุทธิ (NPC)',
      majCat3Title: 'เปปไทด์สูตรผสมสัดส่วนแม่นยำ (Complex Blends)',
      majCat3Desc: 'สูตรผสมฟรีซดรายรวมในขวดเดียว เช่น GLOW 70mg, Wolverine 20mg, CagriSema และ CJC-1295/Ipamorelin',
      majCat4Title: 'บริการรับผลิตตีแบรนด์ OEM & น้ำ BAC Water',
      majCat4Desc: 'ขั้นต่ำเพียง 50 กล่อง เลือกสีฝาขวด พิมพ์สติกเกอร์ทนความเย็นสูง กล่องแบรนด์หรู และน้ำปราศจากเชื้อ USP BAC 0.9%',

      // Product Catalog & Dual View Switcher
      catalogTag: 'รายการสต็อกพร้อมส่งและข้อมูลจำเพาะทางเทคนิค',
      catalogTitle: 'แคตตาล็อกเปปไทด์ระดับผู้บริหาร & ข้อมูลสเปกแต่ละล็อต',
      catalogSubtitle: 'สลับดูได้ทั้งแบบการ์ดภาพสินค้าจริงและตารางสเปก B2B คลิกเลือกขนาดมิลลิกรัมเพื่อส่งข้อความขอเรทราคาส่งหน้าโรงงานทันที',
      viewCards: 'มุมมองการ์ดภาพ',
      viewTable: 'ตารางสเปก B2B',
      tblColCode: 'รหัส / ชื่อเปปไทด์',
      tblColCas: 'เลข CAS / มวลโมเลกุล',
      tblColPurity: 'ความบริสุทธิ์',
      tblColSpecs: 'เลือกขนาดบรรจุ',
      tblColCoa: 'ผลตรวจ COA',
      tblColAction: 'สอบถามราคาส่ง',
      searchPlaceholder: 'ค้นหาตามชื่อเปปไทด์ รหัสย่อ (เช่น Reta, Tirze, Glow) หรือหมายเลขทะเบียน CAS...',
      filterAll: 'สินค้าทั้งหมด',
      specLabel: 'ขนาดบรรจุพร้อมส่ง (คลิกเพื่อเลือก):',
      purityLabel: 'HPLC',
      statusLabel: 'สถานะ:',
      pkgLabel: 'รูปแบบบรรจุ',
      mwLabel: 'มวลโมเลกุล',
      btnInquireWa: 'ขอราคา WhatsApp',
      btnInquireLine: 'แชท LINE โรงงาน',
      btnViewCoa: 'ดูใบ COA',
      noSearchMatch: 'ไม่พบรายการนี้ในสต็อกมาตรฐาน โรงงานรับสังเคราะห์ลำดับกรดอะมิโนตามสั่งทุกชนิด กรุณาติดต่อวิศวกรทาง WhatsApp (+852 44379192)',
      customSeqTitle: 'บริการรับสังเคราะห์ลำดับเปปไทด์ตามสั่ง (CRO) และผลิตระดับกิโลกรัม (CDMO)',
      customSeqDesc: 'รองรับเปปไทด์สายตรง เปปไทด์วงแหวน การดัดแปลง PEG และกรดอะมิโนพิเศษ ตั้งแต่ล็อตทดลอง 10 กรัม ถึงระดับอุตสาหกรรม 50 กก.',
      customSeqBtn: 'ปรึกษาทีมวิศวกรฝ่ายสังเคราะห์',

      // Facilities Gallery
      factoryTag: 'โครงสร้างพื้นฐานการผลิตมาตรฐาน GMP',
      factorySectionTitle: 'ห้องคลีนรูมสังเคราะห์เปปไทด์ เครื่องฟรีซดราย และศูนย์วิเคราะห์คุณภาพ',
      factorySectionSubtitle: 'ภาพถ่ายจริงจากสายการผลิตถังสังเคราะห์สแตนเลส เครื่องฟรีซดรายระดับยา ไลน์บรรจุขวดปลอดเชื้อ RABS และห้องปฏิบัติการ UPLC-MS',
      zoneATag: 'โซน A · ห้องสังเคราะห์ SPPS',
      zoneBTag: 'โซน B · เครื่องฟรีซดราย -55°C',
      zoneCTag: 'โซน C · ไลน์บรรจุปลอดเชื้อ RABS',
      zoneDTag: 'โซน D · ห้องแล็บ WATERS UPLC-MS',
      featCleanroomTitle: 'โถงถังปฏิกรณ์สังเคราะห์เปปไทด์สแตนเลส (SPPS)',
      featCleanroomDesc: 'ห้องคลีนรูม ISO Class 7 ติดตั้งชุดถังสังเคราะห์อัตโนมัติ กำลังการผลิตเปปไทด์ดิบมากกว่า 50 กิโลกรัมต่อเดือน',
      featLyophilizationTitle: 'ระบบเครื่องทำแห้งเยือกแข็งสุญญากาศเกรดอุตสาหกรรมยา',
      featLyophilizationDesc: 'ควบคุมอุณหภูมิชั้นวางที่ -55°C ให้เนื้อเค้กเปปไทด์สีขาวแน่น ทนทานต่อการขนส่ง ความชื้นต่ำกว่า ≤2.0%',
      featSynthesizerTitle: 'ไลน์กรองปลอดเชื้อ RABS และปิดฝาอะลูมิเนียมอัตโนมัติ',
      featSynthesizerDesc: 'กรองปลอดเชื้อ 0.22μm สองชั้น บรรจุแม่นยำ (+3% Overfill) อัดก๊าซไนโตรเจนและซีลฝาฟลิปออฟด้วยระบบอัตโนมัติ',
      featDiscreetTitle: 'ศูนย์ควบคุมคุณภาพ Waters Acquity UPLC & Xevo QToF-MS',
      featDiscreetDesc: 'ตรวจสอบความบริสุทธิ์ทางโครมาโทกราฟี มวลโมเลกุลแม่นยำ สารตกค้าง TFA และเอนโดทอกซินก่อนปล่อยสินค้าทุกล็อต',

      // Quality & Anti-Counterfeit Notice
      qualityTag: 'การประกันคุณภาพและการตรวจสอบความถูกต้อง',
      qualitySectionTitle: 'เอกสารรับรองผลการวิเคราะห์ (COA) และประกาศเตือนภัยทางการ',
      qualitySectionSubtitle: 'สินค้าทุกชุดการผลิตระบุหมายเลขล็อต (Lot No.) ที่ตรวจสอบย้อนกลับได้ พร้อมข้อมูลกราฟต้นฉบับจากห้องแล็บ',
      antiScamTitle: 'ประกาศสำคัญเพื่อป้องกันการแอบอ้างภาพโรงงานและใบตรวจแล็บ',
      antiScamDesc: 'เนื่องจากมีผู้ค้าคนกลางบางรายนำภาพโรงงานและผลแล็บ Janoshik ไปแอบอ้าง กรุณาตรวจสอบความถูกต้องของใบ COA และใบเสนอราคาผ่านช่องทางทางการเพียงหมายเลขเดียวของฝ่ายส่งออกฮ่องกงคือ WhatsApp หรือ LINE: +852 44379192 เท่านั้น (โรงงานไม่มีกลุ่ม Telegram สาธารณะ)',
      hplcTitle: 'การทดสอบความบริสุทธิ์ด้วย RP-HPLC',
      hplcDesc: 'วิเคราะห์ด้วยคอลัมน์ Waters Symmetry C18 ที่ 214nm ยืนยันพื้นที่พีคหลัก ≥99.0% ปราศจากเปปไทด์สายขาด',
      msTitle: 'การยืนยันมวลโมเลกุลด้วย ESI-MS ความละเอียดสูง',
      msDesc: 'ตรวจสอบน้ำหนักโมเลกุลของสารประกอบเปปไทด์ตรงตามทฤษฎีด้วยความแม่นยำสูงในระดับ ±0.2 Da',
      blindTestPromise: 'การรับประกันผลตรวจแล็บอิสระ: หากลูกค้านำสินค้าส่งตรวจแบบไม่ระบุชื่อที่ Janoshik Analytical หรือ MZ Biolabs แล้วผลต่ำกว่าเกณฑ์ โรงงานจัดส่งทดแทนหรือคืนเงินเต็มจำนวน',

      // Warehouse, OEM & 4-Step Process
      warehouseTag: 'คลังสินค้าห้องเย็นและบริการสร้างแบรนด์ OEM',
      oemSectionTitle: 'คลังห้องเย็นควบคุมอุณหภูมิ การแพ็คสุญญากาศส่งออก & บริการ OEM ครบวงจร',
      oemSectionSubtitle: 'จัดเก็บแยกโซนอุณหภูมิ -20°C และ 2–8°C พร้อมบรรจุภัณฑ์สุญญากาศกันกระแทกเพื่อการจัดส่งระหว่างประเทศอย่างราบรื่น',
      whPhoto1Title: 'คลังห้องเย็นสต็อกพร้อมส่งกว่า 50,000+ กล่อง',
      whPhoto1Desc: 'ชุดกล่องขาว 10 ขวดจัดเก็บตามรหัสบาร์โค้ดล็อตการผลิต พร้อมแพ็คจัดส่งออกภายใน 24–48 ชั่วโมง',
      whPhoto2Title: 'ถาดโฟมกันกระแทกและซีลถุงฟอยล์สุญญากาศมิดชิด',
      whPhoto2Desc: 'ถาดโฟมเจาะช่องพอดีขวด ซีลถุงฟอยล์ป้องกันความชื้น และกล่องพัสดุปลอดโลโก้ อัตราผ่านศุลกากรสำเร็จ 99.8%',
      whPhoto3Title: 'คลังสำรองกรดอะมิโนตั้งต้นและถังวัตถุดิบขนาดใหญ่',
      whPhoto3Desc: 'สำรองวัตถุดิบอนุพันธ์กรดอะมิโนเกรดยาระดับหลายตัน รองรับคำสั่งผลิต CMO ปริมาณมากได้อย่างรวดเร็ว',
      oemCapTitle: 'ฝาขวดฟลิปออฟอะโนไดซ์และสีด้าน 12 เฉดสี',
      oemCapDesc: 'มีฝาขวด 12 สีพร้อมสต็อก รองรับการปั๊มนูนโลโก้แบรนด์ลูกค้าบนฝาพลาสติกด้านบน',
      oemLabelTitle: 'ฉลากสติกเกอร์กันน้ำทนอุณหภูมิเยือกแข็ง -80°C',
      oemLabelDesc: 'กาวเกรดการแพทย์ติดแน่นในตู้แช่แข็ง รองรับงานพิมพ์ฟอยล์ทอง/เงิน รหัสล็อต และสติกเกอร์กันปลอม',
      oemBoxTitle: 'สั่งผลิตกล่องแบรนด์ลูกค้าขนาด 10 ขวด (ขั้นต่ำ 50 กล่อง)',
      oemBoxDesc: 'เริ่มต้นสร้างแบรนด์ของคุณด้วยขั้นต่ำเพียง 50 กล่อง (MOQ 50 Kits) พร้อมถาดล็อคขวดดีไซน์พรีเมียม',

      // 4-Step B2B Workflow
      procTag: 'ขั้นตอนการสั่งซื้อระดับองค์กร (B2B PROTOCOL)',
      procTitle: '4 ขั้นตอนมาตรฐานในการสั่งซื้อตรงจากโรงงานและจัดส่งถึงมือคุณ',
      proc1Title: '01 · แจ้งรายการและรับเรทราคาขั้นบันได',
      proc1Desc: 'ส่งรายการเปปไทด์และจำนวนผ่าน LINE หรือ WhatsApp (+852 44379192) เพื่อเช็คสต็อกและรับตารางราคาหน้าโรงงาน',
      proc2Title: '02 · ตรวจสอบใบ COA ล็อตปัจจุบันและยืนยันออเดอร์',
      proc2Desc: 'ตรวจทานกราฟ Waters HPLC/MS ของล็อตที่จะจัดส่ง พร้อมยืนยันเงื่อนไขสายส่งด่วนเคลียร์ภาษีถึงปลายทาง',
      proc3Title: '03 · แพ็คสุญญากาศและจัดส่งออกภายใน 24–48 ชม.',
      proc3Desc: 'บรรจุลงถาดโฟมกันกระแทกซีลถุงฟอยล์สุญญากาศ พร้อมแจ้งเลขพัสดุติดตามสถานะแบบ Door-to-Door',
      proc4Title: '04 · รับสินค้าปลอดภาษีพร้อมการรับประกันคุณภาพ',
      proc4Desc: 'จัดส่งถึงไทย สหรัฐฯ ยุโรป และออสเตรเลียอย่างปลอดภัย พร้อมการรับประกันผลตรวจแล็บอิสระทุกล็อต',

      // Request a Quote Form & Executive Contact
      quoteTag: 'ระบบขอใบเสนอราคาขายส่งหน้าโรงงาน (RFQ DESK)',
      quoteTitle: 'ขอตารางราคาขายส่งขั้นบันไดและใบเสนอราคาทางการ',
      quoteSubtitle: 'ระบุรายละเอียดการสั่งซื้อด้านล่างเพื่อสร้างใบสอบถามราคา B2B และส่งตรงถึงผู้จัดการฝ่ายส่งออกฮ่องกงทันที',
      quoteRoleLabel: 'ประเภทองค์กร / ผู้สั่งซื้อ',
      quoteRole1: 'ผู้ค้าส่งระดับภูมิภาค / ตัวแทนจำหน่าย',
      quoteRole2: 'ห้องปฏิบัติการวิจัย / สถาบันการศึกษา',
      quoteRole3: 'เจ้าของแบรนด์สั่งผลิต OEM / Private Label',
      quoteRole4: 'นักวิจัยอิสระ',
      quoteProductLabel: 'รายการเปปไทด์หรือสายการผลิตที่ต้องการ',
      quoteQtyLabel: 'ปริมาณการสั่งซื้อโดยประมาณ (เช่น 20 กล่อง, 100 กล่อง, ผงดิบ 500 กรัม)',
      quoteCountryLabel: 'ประเทศปลายทางที่จัดส่ง',
      quoteNotesLabel: 'ข้อกำหนดทางเทคนิคและการบรรจุ (สีฝาขวด, งานฉลาก OEM, รูปแบบขนส่ง)',
      quoteNotesPlaceholder: 'เช่น ต้องการชุดกล่องขาวฝาสีน้ำเงิน 10 ขวด ส่งด่วนเคลียร์ภาษีถึงประเทศไทย ขอตารางราคาส่งและใบ COA ล็อตล่าสุด...',
      quoteSubmitWa: 'ส่งใบขอราคาทาง WhatsApp (+852 44379192)',
      quoteSubmitLine: 'คัดลอกและเปิดแชท LINE Official (+852 44379192)',

      contactSectionTitle: 'ศูนย์ส่งออกต่างประเทศของโรงงาน — ติดต่อผู้บริหารฝ่ายขายโดยตรง',
      contactSectionSubtitle: 'พูดคุยโดยตรงกับทีมผู้เชี่ยวชาญฝ่ายการค้าระหว่างประเทศฮ่องกง เพื่อรับเช็คสต็อกรายวัน แคตตาล็อก PDF และไฟล์ใบตรวจ COA',
      cardWaTitle: 'ช่องทาง WhatsApp Business ทางการ',
      cardWaDesc: 'ช่องทางหลักสำหรับลูกค้าระดับสากล (อเมริกา ยุโรป อังกฤษ ออสเตรเลีย) ส่งไฟล์ราคาส่ง PDF และใบ COA ทันที',
      cardLineTitle: 'บัญชี LINE Official โรงงานโดยตรง',
      cardLineDesc: 'ช่องทางด่วนพิเศษสำหรับพาร์ทเนอร์ผู้ค้าส่งและห้องแล็บในประเทศไทย ไต้หวัน ญี่ปุ่น และเอเชียแปซิฟิก',
      copyBtn: 'คัดลอกเบอร์ +852 44379192',
      copiedText: 'คัดลอกหมายเลข +852 44379192 แล้ว',
      openChatBtn: 'เปิดช่องทางแชททันที',
      scanQrTitle: 'สแกน QR ทางการ',
      dockLabel: 'ติดต่อด่วน',

      // Mobile Sticky Bottom Bar
      mobileWaBar: 'WhatsApp ด่วน',
      mobileLineBar: 'แชท LINE โรงงาน',
      mobileQrBar: 'QR / คัดลอก',

      // Footer
      footerLinesTitle: 'สายการผลิตหลัก',
      footerNavTitle: 'ข้อมูลองค์กรและการประกันคุณภาพ',
      footerDisclaimer: 'ข้อกำหนดด้านกฎระเบียบและการใช้เพื่อการวิจัย: สารประกอบเปปไทด์และผงวัตถุดิบ API ทั้งหมดของ Apex Peptides จัดจำหน่ายเพื่อการวิจัยในห้องปฏิบัติการ (In-Vitro Research) และการพัฒนาทางวิทยาศาสตร์โดยผู้เชี่ยวชาญเท่านั้น ห้ามนำไปใช้ทางคลินิกในมนุษย์หรือบริโภคโดยตรง',
      footerCopyright: '© 2026 Apex Peptides Synthesis Co., Ltd. สงวนลิขสิทธิ์ · กลุ่มโรงงานผู้ผลิตเปปไทด์ต้นทางมาตรฐาน WHO-GMP & ISO 9001:2015'
    }
  };

  /**
   * 切换当前语言并持久化到 localStorage，同时无刷新重绘 DOM
   * @param {string} lang - 目标语种代码 ('en' | 'zh' | 'th')
   */
  function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
      currentLang = lang;
      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem('apex_lang', lang);
        } catch (e) {}
      }
      if (typeof document !== 'undefined') {
        applyLanguageToDOM();
      }
    }
  }

  /**
   * 获取当前激活语种代码
   * @returns {string}
   */
  function getCurrentLanguage() {
    return currentLang;
  }

  /**
   * 按键读取当前语种翻译文本（缺失时回退至英文）
   * @param {string} key - 词条键名
   * @returns {string}
   */
  function t(key) {
    if (TRANSLATIONS[currentLang] && TRANSLATIONS[currentLang][key]) {
      return TRANSLATIONS[currentLang][key];
    }
    if (TRANSLATIONS.en && TRANSLATIONS.en[key]) {
      return TRANSLATIONS.en[key];
    }
    return key;
  }

  /**
   * 将当前语种词条批量同步到页面所有 [data-i18n] 节点
   */
  function applyLanguageToDOM() {
    if (typeof document === 'undefined') return;

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      if (translation) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = translation;
        } else {
          el.textContent = translation;
        }
      }
    });

    if (document.title && currentLang === 'zh') {
      document.title = 'Apex Peptides | WHO-GMP 多肽固相合成源头集团 · 成品冻干与 API 原料直供';
    } else if (document.title && currentLang === 'th') {
      document.title = 'Apex Peptides | กลุ่มโรงงานสังเคราะห์เปปไทด์มาตรฐาน WHO-GMP ขายส่งตรงจากโรงงาน';
    } else if (document.title) {
      document.title = 'Apex Peptides | WHO-GMP Peptide Synthesis Group & Global Bulk Supply';
    }

    document.documentElement.lang = currentLang;

    const langBtns = document.querySelectorAll('[data-lang-btn]');
    langBtns.forEach(function (btn) {
      const btnLang = btn.getAttribute('data-lang-btn');
      if (btnLang === currentLang) {
        btn.classList.add('active-lang');
      } else {
        btn.classList.remove('active-lang');
      }
    });
  }

  /**
   * 初始化语言检测（优先读取 URL ?lang= 参数，其次用户记忆语种，再次浏览器语言，默认英文）
   */
  function initI18n() {
    let detected = 'en';
    let fromQuery = '';
    if (typeof window !== 'undefined' && window.location && window.location.search && typeof URLSearchParams !== 'undefined') {
      try {
        const qLang = new URLSearchParams(window.location.search).get('lang');
        if (qLang && TRANSLATIONS[qLang]) {
          fromQuery = qLang;
        }
      } catch (e) {}
    }
    if (fromQuery) {
      detected = fromQuery;
    } else if (typeof localStorage !== 'undefined') {
      try {
        const saved = localStorage.getItem('apex_lang');
        if (saved && TRANSLATIONS[saved]) {
          detected = saved;
        } else if (typeof navigator !== 'undefined' && navigator.language) {
          const navLang = navigator.language.toLowerCase();
          if (navLang.startsWith('zh')) detected = 'zh';
          else if (navLang.startsWith('th')) detected = 'th';
          else detected = 'en';
        }
      } catch (e) {
        detected = 'en';
      }
    }
    setLanguage(detected);
  }

  return {
    TRANSLATIONS,
    setLanguage,
    getCurrentLanguage,
    t,
    initI18n,
    applyLanguageToDOM
  };
});
