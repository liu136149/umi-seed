import { defineConfig } from 'umi';
import proxy from './proxy';
import routes from './routes';

export default defineConfig({
	// 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存。
	hash: true,
	// 配置 history 类型和配置项 可选 browser、hash 和 memory
	history: {
		type: 'hash'
	},
	// 设置路由前缀，通常用于部署到非根目录。
	base: '/',
	// 配置 webpack 的 publicPath。当打包的时候，webpack 会在静态文件路径前面添加 publicPath 的值
	publicPath: './',
	title: "设备导调管理系统",
	// 修改浏览器上的icon 使用本地图片时，图片放到public文件夹种
	favicon: "/favicon.ico",
	// 指定react app渲染到 HTML 元素 id 对应 document.ejs 里面的 id，默认 root
	mountElementId: "root",
	// node_modules 目录下依赖文件的编译方式
	nodeModulesTransform: {
		// none 速度快 跳过 node_modules 编辑过程 有些包编译的时候兼容性就不好了
		// all  速度慢 兼容性更好
		type: 'none',
	},
	// 使用ant pro-layout
	// https://umijs.org/zh-CN/plugins/plugin-layout
	layout: {
		locale: true,
		siderWidth: 208,
		navTheme: 'light',
		// 拂晓蓝
		primaryColor: '#1890ff',
		layout: 'mix',
		contentWidth: 'Fluid',
		fixedHeader: false,
		fixSiderbar: true,
		colorWeak: false,
		title: '仿真与数字化验证应用系统',
		pwa: false,
		// logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
		iconfontUrl: '',
	},
	// 代理
	// proxy,
	routes,
	// 快速刷新 可以保存组件状态，同事编辑提供及时反馈 
	fastRefresh: {},
	// 服务器设置
	devServer: {
		// 端口 .env 里面权限更高
		port: 8082,
		// 启用 https 安全访问，于对应协议服务器通讯
		// https: true,
	},
	// 按需加载，打包之后分包
	dynamicImport: {
		loading: '@ant-design/pro-layout/es/PageLoading',
	},
	// mfsu: {},
});
