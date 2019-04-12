const path = require('path')
const head = require('./head')
const {generateBlogSideBar} = require('./util')
const resolve = pathName => path.join(__dirname, pathName)
const info = require('../setup/info.json')
const Dotenv = require('dotenv-webpack')

// http://localhost:9000
// TODO: Extract Url from vuepress
const siteCanonicalBase = (process.env.NODE_ENV === 'production') ? info.siteCanonicalBase : 'http://localhost/'

module.exports = {
	base: '/',
	title: info.siteName,
	description: info.siteDescription,
	evergreen: true, // Faster on modern browsers. (Disable ES5 transpilation and polyfills for IE)
	serviceWorker: true,
	siteCanonicalBase,
	markdown: {
		config: md => {
			// md.use(require('markdown-it-katex'))
			md.use(require('markdown-it-footnote'))
		}
	},
	configureWebpack() {
		return {
			plugins: [
				new Dotenv()
			],
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
		author: 'Thomas Groch',
		activeHeaderLinks: false, // Default: true
		lastUpdated: false,
		// lastUpdated: {
		//   label: 'Última atualização',
		//   format: 'YYYY年MM月DD日'
		// },
		nav: [
			...info.menu.filter(link => !link.draft)
			// TODO: Add categories list section
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
		// ['@vuepress/google-analytics', {ga: info.googleAnalytics}],
		// 'pt-BR'
		['@vssue/vuepress-plugin-vssue', {
			owner: process.env.VSSUE_OWNER,
			repo: process.env.VSSUE_REPO,
			clientId: process.env.VSSUE_CLIENT_ID
		}],
		'vuepress-plugin-reading-time',
		'@vuepress/back-to-top',
		['demo-code', {
			showText: 'abrir código',
			hideText: 'fechar'
		}],
		['vuepress-plugin-feed', {
			canonical_base: siteCanonicalBase + 'blog/',
			posts_directories: ['portfolio/blog/']
		}]
	]
}
