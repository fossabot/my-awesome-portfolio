// See more in https://github.com/thgroch/vuepress-theme-thgroch#themeconfig
const pt = require('./locales/pt/config')
const en = require('./locales/en/config')

module.exports = {
  locales: {
    '/': pt,
    '/en/': en
  },
  serviceWorker: {
    updatePopup: { 
      message: "New content 🎉🎉", 
      buttonText: "Update" 
    }
  },
  disqus: 'thgroch',
  url: `https://MY_DOMAIN.COM`,
  cdn: '',
  blackWhite: true,
  topNavigation: false,
  searchMaxSuggestions: 7,
  responsive: {
    active: false,
    ext: 'png',
    breakpoints: []
  },
  lazyLoad: {},
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
