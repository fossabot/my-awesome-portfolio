module.exports = {
  displayAllHeaders: true, // Default: false
  activeHeaderLinks: false, // Default: true
  lastUpdated: {
    label: 'Última atualização', // string
    format: 'YYYY年MM月DD日' // pattern can refer to moment.js
  },
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
        text: 'posts',
        link: '/posts/',
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
  serviceWorker: {
    updatePopup: { 
      message: "Novos conteúdos 🎉🎉", 
      buttonText: "Atualizar" 
    }
  },
  disqus: 'thgroch',
  topNavigation: false,
  searchMaxSuggestions: 7,
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
