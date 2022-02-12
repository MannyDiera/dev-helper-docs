const { description } = require('../../package')

module.exports = {
  title: 'Dev Helper Docs',
  description: description,
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  base: '/docs/',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Development T & W',
        link: '/software/'
      },
      {
        text: 'Git Notes',
        link: '/git/'
      },
      {
        text: 'Nginx Notes',
        link: '/nginx/'
      },
      {
        text: 'Tutorials',
        link: '/tutorials/'
      }
    ],
    // You can either set the left nav like this or with auto, which uses the headings, see nginx/README.md
    // sidebar: {
    //   '/guide/': [
    //     {
    //       title: 'Guide',
    //       collapsable: false,
    //       children: [
    //         '',
    //         'using-vue',
    //       ]
    //     }
    //   ],
    // }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    ['vuepress-plugin-code-copy', {
        color: '#6cb4e1',
        backgroundTransition: true,
        backgroundColor: '#ababab',
        successText: 'Copied!',
        staticIcon: true
      }
    ]
  ]
}
