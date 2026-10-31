# Apex Peptides — WHO-GMP 多肽源头合成集团纯静态官网 (V3 瑞士跨国生物制药集团商务版)

欢迎使用 **Apex Peptides (`Apex Peptides Synthesis Co., Ltd.`)** 多肽固相合成源头集团官方网站工程！本项目专为跨国 B2B 大宗采购、10 支装成品冻干盒与公斤级 API 原料直供、以及全球买家极速商务直联（WhatsApp & LINE 官方直线：`+852 44379192`）打造。

本项目为 **100% 纯静态自包含架构**，零构建依赖、零外部图床热链，可直接拖拽上传部署至 **Cloudflare Pages**。

---

## 一、V3 跨国药企商务风核心特性

1. **瑞士跨国生物制药集团级视觉美学（对标 Bachem / Lonza / WuXi AppTec）**
   - 纯净雪花白（`#FFFFFF`）+ 极地冷灰蓝（`#F6F8FB`）+ 行政午夜深蓝（`#0B1D33`）+ 瑞士皇家蓝（`#16437E`）+ 低调香槟金（`#B5945B`）认证点缀。
   - **克制按钮层级**：剔除目录卡片内刺眼的电商绿块噪音，全部 14 款产品卡片采用深海军蓝主按钮与瓷白细线副按钮，界面舒展沉稳、久看不累。
2. **双目录视图无缝切换（`[画册卡片视图 | B2B 商务规格总表]`）**
   - 同时支持视觉直观的 3 列宽幅实拍卡片视图与专业医药采购商偏好的横向规格矩阵表（SKU、CAS 号、分子量、RP-HPLC 纯度、多规格点选、批次 COA 报告弹窗、一键直联询价）。
   - 支持外贸业务员通过专属链接直达指定语种与视图：
     - 英文默认画册：`/?lang=en`
     - 简体中文 + B2B 规格总表：`/?lang=zh&view=table`
     - 泰语专区：`/?lang=th`
3. **30 张本地高清真实摄影照片（全站零重图、零卡通插画、零 Emoji）**
   - 14 款核心多肽及原粉/OEM 产品各自配备独立专属实拍图（差异化铝塑盖色与微距构图），所有车间、冻干机、RABS 灌装线、液质进样器与恒温冷库照片 100% 本地闭环存储。
4. **全终端极速直联体系（WhatsApp `+852 44379192` & LINE 官方直达 `https://line.me/ti/p/F6s-63sxJf`）**
   - 桌面端右侧非遮挡式折叠商务侧翼（默认仅 `42px` 窄边贴合屏幕右缘，绝不遮挡正文，悬停平滑展开）。
   - 手机端（`<= 768px`）底部常驻旗舰三键直联栏（`WhatsApp` / `LINE` / `扫码复制`），内置经 OpenCV `QRCodeDetector` 100% 实测解码校验的 `ISO/IEC 18004` 标准矢量二维码。
5. **海外社媒名片预览与极速首屏加载优化**
   - 内置 `1200×630` 瑞士药企级社交分享卡片（`assets/images/og-cover.jpg`）、完整 OpenGraph / Twitter Card、`Schema.org`（`Organization` + `ItemList`）结构化数据及 `robots.txt`，在 WhatsApp / LINE / LinkedIn 转发网址时自动呈现高端企业名片。
   - 首屏洁净车间主图 `rel="preload"` 预加载 + 渐进式高清大图无损瘦身，全站 30 张高清摄影图总包体积仅 ~4.07MB，全球节点秒开。

---

## 二、Cloudflare Pages 1 分钟拖拽上线指南

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com/)；
2. 左侧菜单进入 **Workers & Pages** -> 点击 **Create application** -> 选择 **Pages** 选项卡 -> 点击 **Upload assets (直接上传资产)**；
3. 输入项目名称（例如 `apex-peptides`）；
4. 将本目录 `apex-peptides` 文件夹整体拖入上传框；
5. 点击 **Deploy site (部署站点)**，即可立即获得全球 CDN 加速的免费 HTTPS 域名（并可在 **Custom domains** 中一键绑定自有企业域名）。

---

## 三、日常业务配置维护说明

- **修改官方电话 / WhatsApp / LINE**：编辑 `assets/js/config.js` 中的 `SITE_CONFIG` 常量即可全站同步生效。
- **增删多肽产品 / 调整规格或批次 COA 数据**：编辑 `assets/js/products.js` 中的 `PRODUCTS` 数组。
- **调整英 / 中 / 泰三语文案**：编辑 `assets/js/i18n.js` 中的 `TRANSLATIONS` 字典。
