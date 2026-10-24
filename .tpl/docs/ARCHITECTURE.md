# 架构

src/app 负责语言与路由。业务入口 src/features/site-templates/catalog/rescale。config/brand.ts 管理品牌；content.ts 与 content/articles.ts 管理双语内容；theme.css 管理主题；components 管理公共动效和交互；pages 组合各页面。host.tsx 提供可选宿主展示注入。

无后端、数据库或业务持久化。联系与订阅仅本地校验；运行时图片字体视频均在 public/templates/rescale。
