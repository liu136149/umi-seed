# umi project

## Getting Started


mock                    // mock 文件所在目录，基于 express
src                     // 源码目录
    .umi-production     // build 临时目录，会自动删除    
    .umi                // dev 临时目录，需添加到 .gitignore
    layouts             // 布局
    pages               // 页面目录
    components          // 全局组件
    services            // 存放接口
    wrappers            // 权限管理
    models              // 状态管理
    app.ts              // 运行时配置文件
    global.less         // 全局样式
    global.ts           // 可以在这里加入 polyfill
    utils               // 公共方法函数
    document.ejs        // HTML 模板
.umirc.ts               // umi 配置，同 config.config.ts  二选一 
dist                    // 默认 build 输出目录
public                  // 变通的数据资源和一切无需打包的资源目录
.evn                    // 环境变量
