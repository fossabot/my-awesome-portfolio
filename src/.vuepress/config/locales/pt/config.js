const ads = require('./ads')

module.exports = {
  languages: {
    label: 'Portuguese',
    shortname: 'pt'
  },
  ads,
  logo: {
    name: 'thgroch-play-logo',
    ext: 'png',
    alt: 'Logo em 3 cores no formato de play'
  },
  share: {
    facebookCaption: 'thgroch Play',
    twitterVia: 'thgroch',
  },
  newsletter: {
    provider: 'mailchimp',
    action: ''
  },
  copy: `2018 © thgroch play - 
        <a href="https://vuepress.vuejs.org/" rel="noopener" target="_blank">
          FEITO COM VUEPRESS
        </a>`,
  footer: {
    nav1: {
      title: 'thgroch Play',
      items: [
        {
          label: 'SOBRE',
          path: '/pt/sobre/'
        },
        {
          label: 'CATEGORIAS',
          path: '/pt/categorias/'
        },
        {
          label: 'CONTATO',
          path: '/pt/contato/'
        }
      ]
    },
    nav2: {
      title: 'Comunidade',
      items: []
    }
  },
  social: [
    {
      name: 'facebook',
      link: 'https://www.facebook.com/thgrochplay'
    },
    {
      name: 'twitter',
      link: 'https://www.twitter.com/thgroch'
    },
    {
      name: 'youtube',
      link: 'https://www.youtube.com/thgroch'
    },
    {
      name: 'github',
      link: 'https://www.github.com/thgroch'
    }
  ]
}
