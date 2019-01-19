const path = require('path')
const head = require('./head')
const { generateBlogSideBar } = require('./util')
const resolve = pathName => path.join(__dirname, pathName)
const info = require('../setup/info.json');
const connect = require('../setup/connect.json');

module.exports = {
  base: '/',
	title: info.siteName,
	description: info.siteDescription,
  ga: info.googleAnalytics,
  evergreen: true, // Faster on modern browsers. (Disable ES5 transpilation and polyfills for IE)
  serviceWorker: true,
  markdown: {
    config: md => {
      md.use(require("markdown-it-katex"))
    }
  },
  configureWebpack () {
    return {
      resolve: {
        alias: {
          '@public': resolve('./public')
        }
      }
    }
  },
  head,
  themeConfig: {
    activeHeaderLinks: false, // Default: true
    lastUpdated: false,
    // lastUpdated: {
    //   label: 'Última atualização', // string
    //   format: 'YYYY年MM月DD日' // pattern can refer to moment.js
    // },
    nav: [
      ...info.menu.filter(link => link.isActive)
    ],
    sidebar: [
      'blog/',
      ...generateBlogSideBar('/blog')
    ],
    sidebarDepth: 0,
    serviceWorker: {
      updatePopup: {
        message: "Novos conteúdos 🎉🎉",
        buttonText: "Atualizar"
      }
    },
    disqus: 'thgroch',
    topNavigation: false,
    searchMaxSuggestions: 7,
    // lazyLoad: {},
    share: {
      facebook: {
        appId: `MY FACEBOOK APP ID`,
        version: 'v3.1'
      }
    },
    elevator: {
      duration: 4000,
      mainAudio: '/music/elevator.mp3',
      endAudio: '/music/ding.mp3'
    }
  }
}
