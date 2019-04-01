module.exports = {
  extend: '@vuepress/theme-default',
  plugins: [
    // "@silvanite/markdown-classes",
    ["@silvanite/tailwind", {
      config: './tailwind.js',
      purgecss: {
        enabled: true,
      },
    }]
  ]
}
