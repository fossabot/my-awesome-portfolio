const path = require('path')
const head = require('./head')
const {generateBlogSideBar} = require('./util')
const resolve = pathName => path.join(__dirname, pathName)
const info = require('../setup/info.json')
const connect = require('../setup/connect.json')

module.exports = {
	base: '/',
	title: info.siteName,
	description: info.siteDescription,
	evergreen: true, // Faster on modern browsers. (Disable ES5 transpilation and polyfills for IE)
	serviceWorker: true,
	markdown: {
		config: md => {
			md.use(require('markdown-it-katex'))
			md.use(require('markdown-it-footnote'))
		}
	},
	configureWebpack() {
		return {
			resolve: {
				alias: {
					'@public': resolve('./portfolio/.vuepress/public')
				}
			}
		}
	},
	head,
	themeConfig: {
		logo: info.logo,
		activeHeaderLinks: false, // Default: true
		lastUpdated: false,
		// lastUpdated: {
		//   label: 'Última atualização',
		//   format: 'YYYY年MM月DD日'
		// },
		nav: [
			...info.menu.filter(link => !link.draft)
		],
		sidebar: [
			...generateBlogSideBar('/blog')
		],
		sidebarDepth: 0,
		serviceWorker: {
			updatePopup: {
				message: 'Novos conteúdos 🎉🎉',
				buttonText: 'Atualizar'
			}
		},
		topNavigation: false,
		searchMaxSuggestions: 7,
		disqus: info.disqus,
		disqusApiKey: info.disqusApiKey
	},
	plugins: [
		['@vuepress/google-analytics', {ga: info.googleAnalytics}],
		'disqus',
		'vuepress-plugin-reading-time',
		'@vuepress/back-to-top',
		['vuepress-plugin-feed', {
			canonical_base: info.siteCanonicalBase+'blog/',
			posts_directories: ['portfolio/blog/']
		}]
	]
}
