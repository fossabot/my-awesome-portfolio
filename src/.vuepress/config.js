require('dotenv').config()
const path = require('path')
const head = require('./head')
const { generateBlogSideBar } = require('./util')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  // theme: 'thgroch',
  base: process.env.VUEPRESS_BASE_URL,
  title: process.env.VUEPRESS_TITLE,
  ga: process.env.VUEPRESS_GOOGLE_ANALYTICS,
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
    lastUpdated: true,
    // lastUpdated: {
    //   label: 'Última atualização', // string
    //   format: 'YYYY年MM月DD日' // pattern can refer to moment.js
    // },
    nav: [
      {
          text: 'home',
          link: '/',
      },
      {
          text: 'projects',
          link: '/projects/',
      },
      {
          text: 'blog',
          link: '/blog/',
      },
      {
          text: 'admin',
          link: '/admin',
      },
      {
          text: 'netlifyCMS help',
          link: '/docs/netlifycms-configuration.html',
      }
    ],
    sidebar: [
      'posts/',
      ...generateBlogSideBar('/posts')
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
