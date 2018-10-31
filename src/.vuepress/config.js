require('dotenv').config()
const path = require('path')
const head = require('./head')
const themeConfig = require('./themeConfig')
const resolve = pathName => path.join(__dirname, pathName)

module.exports = {
  // theme: 'thgroch',
  head,
  themeConfig,
  base: process.env.VUEPRESS_BASE_URL,
  title: process.env.VUEPRESS_TITLE,
  ga: process.env.VUEPRESS_GOOGLE_ANALYTICS,
  evergreen: true, // Faster on modern browsers. (Disable ES5 transpilation and polyfills for IE)
  serviceWorker: true,
  configureWebpack () {
    return {
      resolve: {
        alias: {
          '@public': resolve('./public')
        }
      }
    }
  }
}
