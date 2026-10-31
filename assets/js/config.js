/**
 * Apex Peptides 全局配置文件 (Site Configuration)
 * 集中管理品牌名、真实官方联系方式 (WhatsApp / LINE) 与动态跳转链接生成器
 * 支持浏览器全局变量与 CommonJS (Node.js 测试环境)
 *
 * [2026-10-30 变更说明]：
 * - WhatsApp 官方直线确认：+852 44379192 (https://wa.me/85244379192)
 * - LINE 官方真实加好友链接校准：https://line.me/ti/p/F6s-63sxJf
 * - 移除未开通的占位邮箱配置，确保 100% 海外询盘收口至真实在线渠道
 *
 * @date 2026-10-30
 * @author Apex Peptides Engineering
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    // Node.js CommonJS 环境
    module.exports = factory();
  } else {
    // 浏览器环境
    const exported = factory();
    root.SITE_CONFIG = exported.SITE_CONFIG;
    root.getWhatsAppUrl = exported.getWhatsAppUrl;
    root.getLineUrl = exported.getLineUrl;
  }
})(typeof self !== 'undefined' ? self : this, function () {

  /**
   * 站点全局核心配置常量
   */
  const SITE_CONFIG = {
    // 品牌英文全称
    brandName: 'Apex Peptides',
    // 品牌中文名
    brandNameZh: 'Apex 顶峰多肽',
    // 源头厂商核心标语
    tagline: 'WHO-GMP Peptide Synthesis Group & Global Bulk Supply',
    // 官方统一展示电话 (香港号码)
    phone: '+852 44379192',
    // 纯数字格式 (用于 WhatsApp API 路径)
    whatsappNumber: '85244379192',
    // 官方 LINE 商务展示号码
    linePhone: '+852 44379192',
    // LINE 官方真实加好友直达链接 (2026-10-30 用户实测提供)
    lineUrl: 'https://line.me/ti/p/F6s-63sxJf',
    // 工厂地理与发货口岸
    factoryLocation: 'Hong Kong & Mainland China GMP Synthesis Base',
    // 全球双清包税配送范围
    shippingCoverage: 'Worldwide Discreet Express (USA, EU, UK, Canada, Thailand, SE Asia, Australia)',
  };

  /**
   * 生成 WhatsApp 快捷直达链接
   * [2026-10-30 对接系统: WhatsApp Business API +852 44379192]
   * @param {string} [productName] - 可选的多肽产品名称或定制需求描述
   * @returns {string} 完整的 WhatsApp 跳转 URL
   */
  function getWhatsAppUrl(productName) {
    const baseUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}`;
    if (!productName) {
      const defaultMsg = encodeURIComponent('Hello Apex Peptides! I am interested in your peptide factory direct wholesale and custom synthesis.');
      return `${baseUrl}?text=${defaultMsg}`;
    }
    const productMsg = encodeURIComponent(`Hello Apex Peptides! I would like to inquire about ${productName} (pricing, bulk MOQ, and COA report).`);
    return `${baseUrl}?text=${productMsg}`;
  }

  /**
   * 生成 LINE 官方真实加好友与对话链接
   * [2026-10-30 对接系统: LINE Official Invite URL https://line.me/ti/p/F6s-63sxJf]
   * @returns {string} LINE 加好友 URL
   */
  function getLineUrl() {
    return SITE_CONFIG.lineUrl;
  }

  return {
    SITE_CONFIG,
    getWhatsAppUrl,
    getLineUrl,
  };
});
