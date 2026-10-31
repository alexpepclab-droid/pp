/**
 * Apex Peptides V3 跨国药企级产品与批次分析数据库 (Executive Pharmaceutical Products & Batch COA Database)
 * 对标瑞士 Bachem / Lonza / PeptideGurus / MedChemExpress 医药研发目录规范：
 * - 14 款源厂核心产品各自配备独立专属高清实拍图（零相邻重图）
 * - 完整覆盖 CAS 注册号、分子式、分子量、RP-HPLC 实测纯度、多规格点选数组及批次 COA 参数
 * - 全量支持英 / 中 / 泰三语角标与库存状态本地化渲染
 *
 * @date 2026-10-30
 * @author Apex Peptides Synthesis & Analytical QC Division
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    const result = factory();
    root.CATEGORIES = result.CATEGORIES;
    root.PRODUCTS = result.PRODUCTS;
  }
})(typeof self !== 'undefined' ? self : this, function () {

  /**
   * 源头工厂六大产品分类体系
   */
  const CATEGORIES = [
    { id: 'all', nameEn: 'All Catalog (14)', nameZh: '全部目录 (14)', nameTh: 'สินค้าทั้งหมด (14)' },
    { id: 'glp1', nameEn: 'GLP-1 & Metabolic', nameZh: 'GLP-1 代谢系列', nameTh: 'กลุ่ม GLP-1 & เมแทบอลิซึม' },
    { id: 'blends', nameEn: 'Complex Blends', nameZh: '协同复合配方肽', nameTh: 'เปปไทด์สูตรผสม (Blends)' },
    { id: 'healing', nameEn: 'Repair & GHK-Cu', nameZh: '组织修复与蓝铜肽', nameTh: 'ซ่อมแซมเนื้อเยื่อ & GHK-Cu' },
    { id: 'longevity', nameEn: 'Longevity & Cellular', nameZh: '线粒体与抗衰研究', nameTh: 'ไมโทคอนเดรีย & ชะลอวัย' },
    { id: 'raw', nameEn: 'Bulk API & OEM', nameZh: '大宗原粉与辅料定制', nameTh: 'ผงวัตถุดิบ API & บริการ OEM' }
  ];

  /**
   * 14 款源厂核心现货与大宗批发产品清单（每款绑定专属差异化实拍图）
   */
  const PRODUCTS = [
    {
      id: 'retatrutide',
      sku: 'APX-RET-KIT',
      shortCode: 'RETA',
      name: 'Retatrutide',
      cas: '2381089-83-2',
      formula: 'C221H342N46O68',
      mw: '4731.33 g/mol',
      category: 'glp1',
      purity: '≥99.5%',
      badge: 'GMP Batch Verified',
      badgeI18n: { en: 'GMP Batch Verified', zh: 'GMP 批次核验', th: 'รับรองชุดผลิต GMP' },
      packaging: '10 Vials / Kit (3ml)',
      image: 'assets/images/photos/prod-01-retatrutide.jpg',
      specs: ['5mg × 10v', '10mg × 10v', '15mg × 10v', '20mg × 10v', '30mg × 10v'],
      coa: {
        batchNo: 'AP2610-RET08',
        hplcPurity: '99.54%',
        rt: '13.42 min',
        msExpected: '4731.3 Da',
        msFound: '4731.5 Da',
        appearance: 'White Compact Lyophilized Cake',
        waterContent: '≤2.1% (Karl Fischer)'
      },
      description: {
        en: 'Triple GIP / GLP-1 / Glucagon receptor agonist synthesized via automated solid-phase SPPS and purified by preparative C18 RP-HPLC. Supplied in neutral 10-vial cold-chain boxes or private-label OEM.',
        zh: 'GIP / GLP-1 / 胰高血糖素三靶点受体激动剂，采用全自动固相合成与制备级反相液相纯化。现货供应中性 10 支装白盒（无标/可贴牌）及克级原料纯粉。',
        th: 'เปปไทด์วิจัยกลุ่ม Triple Agonist (GIP/GLP-1/Glucagon) สังเคราะห์ด้วยระบบ SPPS อัตโนมัติและทำให้บริสุทธิ์ด้วย RP-HPLC บรรจุกล่องละ 10 ขวดพร้อมใบรับรอง COA'
      },
      stockStatus: 'In Stock · HK & Overseas Dispatch',
      stockI18n: { en: 'In Stock · HK & Overseas Dispatch', zh: '冷库现货 · 香港及海外仓直发', th: 'มีสต็อกพร้อมส่ง · ฮ่องกงและคลังต่างประเทศ' }
    },
    {
      id: 'tirzepatide',
      sku: 'APX-TRZ-KIT',
      shortCode: 'TIRZE',
      name: 'Tirzepatide',
      cas: '2023788-19-2',
      formula: 'C225H348N48O68',
      mw: '4813.45 g/mol',
      category: 'glp1',
      purity: '≥99.4%',
      badge: 'High-Volume Stock',
      badgeI18n: { en: 'High-Volume Stock', zh: '万盒级常备现货', th: 'สต็อกโรงงานจำนวนมาก' },
      packaging: '10 Vials / Kit (3ml)',
      image: 'assets/images/photos/prod-02-tirzepatide.jpg',
      specs: ['10mg × 10v', '15mg × 10v', '30mg × 10v', '60mg × 10v'],
      coa: {
        batchNo: 'AP2610-TRZ19',
        hplcPurity: '99.46%',
        rt: '12.85 min',
        msExpected: '4813.5 Da',
        msFound: '4813.6 Da',
        appearance: 'White Compact Lyophilized Cake',
        waterContent: '≤1.9% (Karl Fischer)'
      },
      description: {
        en: 'Dual GIP and GLP-1 receptor agonist polypeptide (39 amino acids). Acetate/sodium salt form with low residual TFA (<0.1%), vacuum-sealed lyophilized vials with ≥99.4% batch consistency.',
        zh: '39 氨基酸双靶点 GIP/GLP-1 多肽，经深度脱盐纯化工艺控制 TFA 残留低于 0.1%，冻干粉饼紧实洁白、复溶性极佳，源头工厂常备大规模现货。',
        th: 'เปปไทด์คู่ GIP/GLP-1 ความยาว 39 กรดอะมิโน ผ่านกระบวนการลดกรด TFA ตกค้าง (<0.1%) ผงฟรีซดรายเนื้อแน่นละลายง่าย สต็อกโรงงานพร้อมส่งทันที'
      },
      stockStatus: 'In Stock · 5,000+ Kits Ready',
      stockI18n: { en: 'In Stock · 5,000+ Kits Ready', zh: '现货充足 · 5,000+ 盒随时出库', th: 'พร้อมส่งทันที · สต็อกมากกว่า 5,000 กล่อง' }
    },
    {
      id: 'semaglutide',
      sku: 'APX-SEM-KIT',
      shortCode: 'SEMA',
      name: 'Semaglutide',
      cas: '910463-68-2',
      formula: 'C187H291N45O59',
      mw: '4113.58 g/mol',
      category: 'glp1',
      purity: '≥99.2%',
      badge: 'Core Production',
      badgeI18n: { en: 'Core Production', zh: '主力合成产线', th: 'สายการผลิตหลัก' },
      packaging: '10 Vials / Kit (3ml)',
      image: 'assets/images/photos/prod-03-semaglutide.jpg',
      specs: ['5mg × 10v', '10mg × 10v', '15mg × 10v', '20mg × 10v'],
      coa: {
        batchNo: 'AP2610-SEM14',
        hplcPurity: '99.38%',
        rt: '11.94 min',
        msExpected: '4113.6 Da',
        msFound: '4113.7 Da',
        appearance: 'White Lyophilized Powder',
        waterContent: '≤2.0% (Karl Fischer)'
      },
      description: {
        en: 'Long-acting acylated GLP-1(7-37) analogue manufactured in ISO Class 7 cleanrooms. Full LC-MS molecular mass verification and quantitative fill-weight check (+3% overfill standard).',
        zh: '长效酰化 GLP-1(7-37) 类似物，ISO 7 级洁净车间无菌灌装冻干，严格执行 +3% 足量灌装标准（确保实测含量达标），支持任何第三方实验室盲测。',
        th: 'แอนะล็อก GLP-1 สายยาว ผลิตในห้องคลีนรูม ISO Class 7 บรรจุปริมาณเต็มมาตรฐาน (+3% Overfill) ตรวจสอบน้ำหนักโมเลกุลด้วย LC-MS ทุกชุดการผลิต'
      },
      stockStatus: 'In Stock · 24h Dispatch',
      stockI18n: { en: 'In Stock · 24h Dispatch', zh: '冷库现货 · 24h 极速发运', th: 'มีสินค้าพร้อมส่งภายใน 24 ชม.' }
    },
    {
      id: 'cagrilintide',
      sku: 'APX-CAG-KIT',
      shortCode: 'CAGRI',
      name: 'Cagrilintide',
      cas: '1415456-99-3',
      formula: 'C194H312N54O59S2',
      mw: '4409.01 g/mol',
      category: 'glp1',
      purity: '≥99.1%',
      badge: 'Amylin Analogue',
      badgeI18n: { en: 'Amylin Analogue', zh: '长效胰淀素类似物', th: 'แอนะล็อกอะไมลิน' },
      packaging: '10 Vials / Kit (3ml)',
      image: 'assets/images/photos/prod-04-cagrilintide.jpg',
      specs: ['5mg × 10v', '10mg × 10v', 'CagriSema 5/5mg × 10v'],
      coa: {
        batchNo: 'AP2610-CAG04',
        hplcPurity: '99.21%',
        rt: '14.08 min',
        msExpected: '4409.0 Da',
        msFound: '4409.2 Da',
        appearance: 'White Lyophilized Cake',
        waterContent: '≤2.3% (Karl Fischer)'
      },
      description: {
        en: 'Disulfide-bridged lipidated amylin analogue available both as single-compound lyophilized vials and pre-formulated 1:1 CagriSema research blends.',
        zh: '二硫键环化脂化胰淀素类似物，除提供 5mg/10mg 单方成品西林瓶外，亦可供应 1:1 CagriSema 协同复配冻干规格。',
        th: 'แอนะล็อกอะไมลินแบบออกฤทธิ์ยาว มีทั้งแบบเดี่ยว 5mg/10mg และสูตรผสม CagriSema 1:1 สำหรับงานวิจัยขั้นสูง'
      },
      stockStatus: 'In Stock · Ready to Ship',
      stockI18n: { en: 'In Stock · Ready to Ship', zh: '常备现货 · 随时出库', th: 'มีสต็อกพร้อมจัดส่งทันที' }
    },
    {
      id: 'glow-blend',
      sku: 'APX-BLD-GLOW',
      shortCode: 'GLOW 70MG',
      name: 'GLOW Blend (GHK-Cu 50mg + BPC-157 10mg + TB-500 10mg)',
      cas: 'Multi-Peptide Complex',
      formula: 'Tri-Peptide Co-Lyophilized',
      mw: '401.9 / 1419.5 / 4963.4 g/mol',
      category: 'blends',
      purity: '≥99.2%',
      badge: 'Flagship Blend',
      badgeI18n: { en: 'Flagship Blend', zh: '明星三合一配方', th: 'สูตรผสมยอดนิยม' },
      packaging: '10 Vials / Kit (70mg/v)',
      image: 'assets/images/photos/prod-05-glow.jpg',
      specs: ['70mg Total (50/10/10mg) × 10v'],
      coa: {
        batchNo: 'AP2610-GLW03',
        hplcPurity: '99.29% (Multi-Peak Assay)',
        rt: '4.12 / 8.75 / 10.64 min',
        msExpected: '3-Component Verified',
        msFound: 'Ratio 50.4 : 10.2 : 10.1 mg',
        appearance: 'Sapphire Blue Lyophilized Cake',
        waterContent: '≤2.0% (Karl Fischer)'
      },
      description: {
        en: 'Precision co-lyophilized 70mg regenerative research stack combining 50mg GHK-Cu copper tripeptide, 10mg BPC-157, and 10mg TB-500 with multi-channel HPLC ratio verification.',
        zh: '欧美及东南亚热销的 70mg 黄金三合一冻干复合配方（50mg 蓝铜胜肽 + 10mg BPC-157 + 10mg TB-500），三组分定量 HPLC 精准校核。',
        th: 'เปปไทด์สูตรผสมยอดนิยม GLOW 70mg (GHK-Cu 50mg + BPC-157 10mg + TB-500 10mg) ตรวจสอบสัดส่วนด้วย HPLC แม่นยำทุกขวด'
      },
      stockStatus: 'In Stock · Ready to Ship',
      stockI18n: { en: 'In Stock · Ready to Ship', zh: '常备现货 · 随时出库', th: 'มีสต็อกพร้อมจัดส่งทันที' }
    },
    {
      id: 'wolverine-blend',
      sku: 'APX-BLD-WLV',
      shortCode: 'WOLVERINE 20MG',
      name: 'Wolverine Blend (BPC-157 10mg + TB-500 10mg)',
      cas: '137525-51-0 / 77591-33-4',
      formula: 'Dual Repair Complex',
      mw: '1419.53 / 4963.44 g/mol',
      category: 'blends',
      purity: '≥99.3%',
      badge: '1:1 Ratio Verified',
      badgeI18n: { en: '1:1 Ratio Verified', zh: '1:1 比例定量校核', th: 'สัดส่วน 1:1 แม่นยำ' },
      packaging: '10 Vials / Kit (20mg/v)',
      image: 'assets/images/photos/prod-06-wolverine.jpg',
      specs: ['10mg (5/5mg) × 10v', '20mg (10/10mg) × 10v'],
      coa: {
        batchNo: 'AP2610-WLV11',
        hplcPurity: '99.35%',
        rt: '8.74 / 10.62 min',
        msExpected: '1419.5 / 4963.4 Da',
        msFound: '1419.6 / 4963.5 Da',
        appearance: 'White Lyophilized Cake',
        waterContent: '≤1.8% (Karl Fischer)'
      },
      description: {
        en: 'Co-lyophilized 1:1 combination of BPC-157 Pentadecapeptide and Thymosin Beta-4 (TB-500) engineered for synergistic cellular migration and musculoskeletal repair research.',
        zh: 'BPC-157 与 TB-500 黄金 1:1 比例联合冻干制剂，单瓶总含量 10mg 或 20mg 可选，批次混合均匀度 RSD < 1.5%。',
        th: 'สูตรผสม 1:1 ระหว่าง BPC-157 และ TB-500 ในขวดเดียว สำหรับงานวิจัยการฟื้นฟูเนื้อเยื่อและเส้นเอ็น ความสม่ำเสมอสูง'
      },
      stockStatus: 'In Stock · Ready to Ship',
      stockI18n: { en: 'In Stock · Ready to Ship', zh: '常备现货 · 随时出库', th: 'มีสต็อกพร้อมจัดส่งทันที' }
    },
    {
      id: 'bpc-157',
      sku: 'APX-BPC-KIT',
      shortCode: 'BPC-157',
      name: 'BPC-157 (Pentadecapeptide)',
      cas: '137525-51-0',
      formula: 'C62H98N16O22',
      mw: '1419.53 g/mol',
      category: 'healing',
      purity: '≥99.3%',
      badge: 'Acetate / Arginate',
      badgeI18n: { en: 'Acetate / Arginate', zh: '乙酸盐 / 精氨酸盐', th: 'เกลืออะซิเตต / อาร์จิเนต' },
      packaging: '10 Vials / Kit (3ml)',
      image: 'assets/images/photos/prod-07-bpc157.jpg',
      specs: ['5mg × 10v', '10mg × 10v', '20mg × 10v'],
      coa: {
        batchNo: 'AP2610-BPC22',
        hplcPurity: '99.41%',
        rt: '8.75 min',
        msExpected: '1419.5 Da',
        msFound: '1419.5 Da',
        appearance: 'White Lyophilized Cake',
        waterContent: '≤1.7% (Karl Fischer)'
      },
      description: {
        en: '15-amino-acid synthetic gastric pentadecapeptide. Available in sterile lyophilized acetate vials (5mg/10mg/20mg) and high-stability Arginate salt raw powder.',
        zh: '高纯合成 15 肽（BPC-157），同时供应无菌冻干乙酸盐西林瓶（5mg/10mg/20mg）与高稳定性精氨酸盐（Arginate）原料纯粉。',
        th: 'เพนทาเดคาเปปไทด์สังเคราะห์ 15 กรดอะมิโน ความบริสุทธิ์ ≥99.3% มีทั้งแบบขวดผงฟรีซดรายและผงเกลืออาร์จิเนตความคงตัวสูง'
      },
      stockStatus: 'In Stock · Ready to Ship',
      stockI18n: { en: 'In Stock · Ready to Ship', zh: '常备现货 · 随时出库', th: 'มีสต็อกพร้อมจัดส่งทันที' }
    },
    {
      id: 'tb-500',
      sku: 'APX-TB5-KIT',
      shortCode: 'TB-500',
      name: 'TB-500 (Thymosin Beta-4)',
      cas: '77591-33-4',
      formula: 'C212H350N56O78S',
      mw: '4963.44 g/mol',
      category: 'healing',
      purity: '≥99.1%',
      badge: 'Full 43-AA Sequence',
      badgeI18n: { en: 'Full 43-AA Sequence', zh: '全长 43 氨基酸序列', th: 'สายเต็ม 43 กรดอะมิโน' },
      packaging: '10 Vials / Kit (3ml)',
      image: 'assets/images/photos/prod-08-tb500.jpg',
      specs: ['5mg × 10v', '10mg × 10v'],
      coa: {
        batchNo: 'AP2610-TB507',
        hplcPurity: '99.18%',
        rt: '10.63 min',
        msExpected: '4963.4 Da',
        msFound: '4963.6 Da',
        appearance: 'White Lyophilized Powder',
        waterContent: '≤2.1% (Karl Fischer)'
      },
      description: {
        en: 'Authentic full-length N-acetylated 43-amino-acid Thymosin Beta-4 sequence (not truncated Ac-SDKP fragment), verified by high-resolution ESI-MS.',
        zh: '正宗全长 43 氨基酸胸腺素 Beta-4 完整序列（绝非廉价截短片段），经高分辨电喷雾质谱（ESI-MS）严格确证分子量 4963.4 Da。',
        th: 'ไทโมซิน เบต้า-4 สายเต็ม 43 กรดอะมิโนแท้ ยืนยันน้ำหนักโมเลกุล 4963.4 Da ด้วยเครื่อง ESI-MS ความละเอียดสูง'
      },
      stockStatus: 'In Stock · Ready to Ship',
      stockI18n: { en: 'In Stock · Ready to Ship', zh: '常备现货 · 随时出库', th: 'มีสต็อกพร้อมจัดส่งทันที' }
    },
    {
      id: 'ghk-cu',
      sku: 'APX-GHK-CU',
      shortCode: 'GHK-Cu',
      name: 'GHK-Cu (Copper Tripeptide-1)',
      cas: '49557-75-7',
      formula: 'C14H22CuN6O4',
      mw: '401.91 g/mol',
      category: 'healing',
      purity: '≥99.2%',
      badge: '2:1 Copper Complex',
      badgeI18n: { en: '2:1 Copper Complex', zh: '2:1 精准铜配位', th: 'คอปเปอร์คอมเพล็กซ์แท้' },
      packaging: '10 Vials / Kit or 1kg Jar',
      image: 'assets/images/photos/prod-09-ghkcu.jpg',
      specs: ['50mg × 10v', '100mg × 10v', '10g / 100g / 1kg Crystal'],
      coa: {
        batchNo: 'AP2610-GHK16',
        hplcPurity: '99.32%',
        rt: '4.15 min',
        msExpected: '401.9 Da',
        msFound: '402.0 Da',
        appearance: 'Deep Royal-Blue Crystalline Cake',
        waterContent: '≤1.5% (Karl Fischer)'
      },
      description: {
        en: 'Stoichiometric Gly-His-Lys copper(II) complex featuring vibrant royal-blue crystal morphology. Available as aseptic lyophilized 50mg/100mg vials and bulk crystal powder.',
        zh: '精准配位化学计量的三肽-1 铜（蓝铜胜肽），色泽纯正深邃，无游离铜沉淀；同时供应 50mg/100mg 无菌冻干瓶与公斤级晶体原粉。',
        th: 'คอปเปอร์ไตรเปปไทด์-1 บริสุทธิ์สีน้ำเงินเข้ม มีจำหน่ายทั้งแบบขวดฟรีซดรายปลอดเชื้อ 50mg/100mg และผงคริสตัลระดับกิโลกรัม'
      },
      stockStatus: 'In Stock · Vials & KG Bulk',
      stockI18n: { en: 'In Stock · Vials & KG Bulk', zh: '冻干瓶与公斤级晶体常备', th: 'พร้อมส่งทั้งแบบขวดและผงกิโลกรัม' }
    },
    {
      id: 'nad-plus',
      sku: 'APX-NAD-KIT',
      shortCode: 'NAD+ 500MG',
      name: 'NAD+ (Buffered Lyophilized Vials)',
      cas: '53-84-9',
      formula: 'C21H27N7O14P2',
      mw: '663.43 g/mol',
      category: 'longevity',
      purity: '≥99.7%',
      badge: 'pH-Buffered 10ml',
      badgeI18n: { en: 'pH-Buffered 10ml', zh: '生理 pH 缓冲大容量', th: 'ปรับสมดุล pH ขวด 10ml' },
      packaging: '10 Vials / Kit (10ml)',
      image: 'assets/images/photos/prod-10-nad.jpg',
      specs: ['500mg × 10v (10ml)', '1000mg × 10v (10ml)'],
      coa: {
        batchNo: 'AP2610-NAD09',
        hplcPurity: '99.78%',
        rt: '5.32 min',
        msExpected: '663.4 Da',
        msFound: '663.4 Da',
        appearance: 'White Dense Lyophilized Cake',
        waterContent: '≤1.4% (Karl Fischer)'
      },
      description: {
        en: 'Enzymatically synthesized ultra-pure β-Nicotinamide Adenine Dinucleotide lyophilized in oversized 10ml borosilicate vials with optional physiological pH buffering.',
        zh: '生物酶法催化合成超高纯度 β-烟酰胺腺嘌呤二核苷酸，采用 10ml 大容量硼硅玻璃西林瓶冻干（500mg/1000mg），可选生理 pH 缓冲型配方。',
        th: 'โคเอ็นไซม์ β-NAD+ ความบริสุทธิ์สูงพิเศษ ≥99.7% บรรจุในขวดแก้วขนาด 10ml (500mg และ 1000mg) พร้อมตัวเลือกปรับสมดุลค่า pH'
      },
      stockStatus: 'In Stock · Ready to Ship',
      stockI18n: { en: 'In Stock · Ready to Ship', zh: '常备现货 · 随时出库', th: 'มีสต็อกพร้อมจัดส่งทันที' }
    },
    {
      id: 'ss-31',
      sku: 'APX-SS31-KIT',
      shortCode: 'SS-31 / MOTS-c',
      name: 'SS-31 (Elamipretide) & Mitochondrial Series',
      cas: '736992-21-5',
      formula: 'C32H49N9O5',
      mw: '639.79 g/mol',
      category: 'longevity',
      purity: '≥99.4%',
      badge: 'Mitochondrial Target',
      badgeI18n: { en: 'Mitochondrial Target', zh: '线粒体内膜靶向肽', th: 'มุ่งเป้าไมโทคอนเดรีย' },
      packaging: '10 Vials / Kit (3ml)',
      image: 'assets/images/photos/prod-11-ss31.jpg',
      specs: ['SS-31 10mg × 10v', 'SS-31 30mg × 10v', 'MOTS-c 10mg × 10v', 'Epithalon 10mg × 10v'],
      coa: {
        batchNo: 'AP2610-SS315',
        hplcPurity: '99.44%',
        rt: '7.61 min',
        msExpected: '639.8 Da',
        msFound: '639.9 Da',
        appearance: 'White Lyophilized Cake',
        waterContent: '≤1.9% (Karl Fischer)'
      },
      description: {
        en: 'D-Arg-2\',6\'-dimethyltyrosine-Lys-Phe-NH2 mitochondria-targeted tetrapeptide alongside MOTS-c and Epithalon for cellular bioenergetics research.',
        zh: '含非天然氨基酸（D-Arg 与 2\',6\'-二甲基酪氨酸）修饰的线粒体靶向四肽 SS-31（10mg/30mg），同产线常备 MOTS-c 与 Epithalon 现货。',
        th: 'เปปไทด์มุ่งเป้าไมโทคอนเดรีย SS-31 (10mg/30mg) รวมถึง MOTS-c และ Epithalon สังเคราะห์ด้วยความแม่นยำสูง'
      },
      stockStatus: 'In Stock · Ready to Ship',
      stockI18n: { en: 'In Stock · Ready to Ship', zh: '常备现货 · 随时出库', th: 'มีสต็อกพร้อมจัดส่งทันที' }
    },
    {
      id: 'melanotan-2',
      sku: 'APX-MT2-KIT',
      shortCode: 'MT-2 / CJC-IPAM',
      name: 'Melanotan II (MT-2) & Secretagogue Series',
      cas: '121062-08-6',
      formula: 'C50H69N15O9',
      mw: '1024.18 g/mol',
      category: 'blends',
      purity: '≥99.2%',
      badge: 'Cyclic Lactam',
      badgeI18n: { en: 'Cyclic Lactam', zh: '内酰胺环状多肽', th: 'เปปไทด์วงแหวนแลคแตม' },
      packaging: '10 Vials / Kit (3ml)',
      image: 'assets/images/photos/prod-12-mt2.jpg',
      specs: ['MT-2 10mg × 10v', 'CJC-1295 + Ipam 5/5mg × 10v', 'Ipamorelin 10mg × 10v'],
      coa: {
        batchNo: 'AP2610-MT206',
        hplcPurity: '99.27%',
        rt: '9.40 min',
        msExpected: '1024.2 Da',
        msFound: '1024.3 Da',
        appearance: 'White Lyophilized Cake',
        waterContent: '≤1.8% (Karl Fischer)'
      },
      description: {
        en: 'Cyclic heptapeptide lactam Melanotan II (10mg) and GHRH/GHRP secretagogue research vials (CJC-1295 No DAC + Ipamorelin 5mg/5mg blend).',
        zh: '内酰胺环状七肽 MT-2（10mg）及生长素释放肽系列（CJC-1295 无 DAC + Ipamorelin 5/5mg 复配），现货充足，批间纯度高度稳定。',
        th: 'เปปไทด์วงแหวน MT-2 (10mg) และกลุ่ม CJC-1295 + Ipamorelin 5/5mg พร้อมส่งจากคลังสินค้าโรงงาน'
      },
      stockStatus: 'In Stock · Ready to Ship',
      stockI18n: { en: 'In Stock · Ready to Ship', zh: '常备现货 · 随时出库', th: 'มีสต็อกพร้อมจัดส่งทันที' }
    },
    {
      id: 'raw-powder-bulk',
      sku: 'APX-RAW-BULK',
      shortCode: 'RAW API POWDER',
      name: 'Peptide Raw Powder (Bulk API Grade)',
      cas: 'All Sequences Available',
      formula: 'Acetate / HCl / Sodium Salt',
      mw: 'Sequence Specific',
      category: 'raw',
      purity: '≥98.5%–99.6%',
      badge: 'Factory KG Supply',
      badgeI18n: { en: 'Factory KG Supply', zh: '源厂公斤级直供', th: 'ผงวัตถุดิบระดับกิโลกรัม' },
      packaging: 'Nitrogen Foil Pouch / Drum',
      image: 'assets/images/photos/prod-13-raw-powder.jpg',
      specs: ['10g Sample', '50g / 100g Foil Pouch', '500g / 1kg Bulk', 'Custom Sequence SPPS'],
      coa: {
        batchNo: 'AP2610-RAW-API',
        hplcPurity: '99.30% Avg.',
        rt: 'Method Specific',
        msExpected: 'Exact Match',
        msFound: 'COA + Raw Chromatogram',
        appearance: 'Fluffy White Lyophilized Powder',
        waterContent: '≤3.0% · Net Peptide ≥85%'
      },
      description: {
        en: 'Direct synthesis reactor output for compounding labs, lyophilization fillers, and B2B distributors. Double nitrogen-flushed aluminum-foil packaging with full net peptide content (NPC) assay.',
        zh: '直接面向海外分装冻干厂与试剂品牌商供应一手多肽原料纯粉（Tirze / Sema / Reta / BPC / GHK-Cu 等克级至公斤级），充氮双层药用铝箔密封，附净肽含量（NPC）实测报告。',
        th: 'ผงเปปไทด์บริสุทธิ์เกรดวัตถุดิบจากโรงงานสังเคราะห์โดยตรง (ตั้งแต่ 10 กรัม ถึงระดับหลายกิโลกรัม) บรรจุถุงฟอยล์อัดไนโตรเจนป้องกันความชื้น'
      },
      stockStatus: 'Direct Synthesis · 3–7 Days Bulk',
      stockI18n: { en: 'Direct Synthesis · 3–7 Days Bulk', zh: '源厂直产 · 现货/大货 3–7 天交付', th: 'ผลิตจากโรงงานโดยตรง · จัดส่งใน 3–7 วัน' }
    },
    {
      id: 'bac-water-oem',
      sku: 'APX-BAC-OEM',
      shortCode: 'BAC & OEM',
      name: 'Bacteriostatic Water (0.9% BA) & Turnkey OEM',
      cas: '7732-18-5 / 100-51-6',
      formula: 'USP 0.22μm Sterile Filtered',
      mw: 'pH 5.7 Sterile Diluent',
      category: 'raw',
      purity: 'USP Sterile Grade',
      badge: 'MOQ 50 Kits OEM',
      badgeI18n: { en: 'MOQ 50 Kits OEM', zh: '50 盒起订私模贴牌', th: 'รับผลิต OEM ขั้นต่ำ 50 กล่อง' },
      packaging: '3ml / 10ml × 10 Vials/Kit',
      image: 'assets/images/photos/prod-14-bac-oem.jpg',
      specs: ['BAC Water 3ml × 10v', 'BAC Water 10ml × 10v', 'Custom Cap & Label OEM (MOQ 50 Kits)'],
      coa: {
        batchNo: 'AP2610-BAC30',
        hplcPurity: '0.90% Benzyl Alcohol Verified',
        rt: 'USP Endotoxin <0.05 EU/ml',
        msExpected: 'Sterility Pass (14-Day)',
        msFound: 'Particulate Free',
        appearance: 'Clear Colorless Sterile Liquid',
        waterContent: 'WFI Pharmaceutical Grade'
      },
      description: {
        en: '0.22μm sterile-filtered reconstitution water with 0.9% benzyl alcohol in 3ml/10ml borosilicate vials, plus full OEM turnkey customization (12 flip-off cap colors, cryo labels & bespoke 10-vial boxes).',
        zh: '符合 USP 标准的 0.9% 苯甲醇无菌抑菌水（3ml / 10ml 十支盒装），同时提供一站式 OEM 私模定制：12 种铝塑盖颜色自选、钢印压纹、防冻防水标签与定制品牌包装盒。',
        th: 'น้ำปราศจากเชื้อผสมเบนซิลแอลกอฮอล์ 0.9% (BAC Water ขนาด 3ml และ 10ml) พร้อมบริการรับผลิต OEM เลือกสีฝาขวด พิมพ์ฉลาก และกล่องแบรนด์ลูกค้าครบวงจร'
      },
      stockStatus: 'In Stock · Low MOQ OEM',
      stockI18n: { en: 'In Stock · Low MOQ OEM', zh: '抑菌水现货 · 低起订量快速打样', th: 'พร้อมส่งทันที · รับทำแบรนด์ขั้นต่ำน้อย' }
    }
  ];

  return {
    CATEGORIES,
    PRODUCTS
  };
});
