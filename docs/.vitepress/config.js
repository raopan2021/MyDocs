import { defineConfig } from 'vitepress'
import { componentPreview,containerPreview } from '@vitepress-demo-preview/plugin'
import { getSidebar } from './theme/autoSideBar'
const path = require("path");

export default defineConfig({
  // 页面标签页的title标题
  title: 'panpan',
  // 配置后会显示页面中 `<meta name="description" content="xxxx">` 显示
  description: 'panpan的前端知识',
  head: [
    // 浏览器标签页的ico
    ['link',{ rel: 'icon',href: '/logo.svg' }], // 推荐使用ico图标，丢到 docs/public文件夹
    // 配置后会显示在页面中的 `head` 中。可以配置多个。应该也能扩展 `VitePress` 的功能，有兴趣的可以研究下。
    ['meta',{ name: 'keywords',content: 'HTML, CSS, JavaScript, VitePress' }]
  ],
  lang: 'cn-ZH',
  base: '/MyDocs/',
  // outDir: '../dist', // 打包后输出目录的配置(默认即可)
  // 最后更新时间。需要注意的是配置之后不会立即生效。（是根据git commit的时间实现的）
  lastUpdated: true,
  // 定制更新时间的提示文字。
  lastUpdatedText: "最近更新时间",
  themeConfig: {
    logo: '/logo.svg', // nav栏最左侧标题的logo
    siteTitle: 'panpan的前端知识',
    outline: [2,6],
    socialLinks: [
      { icon: 'github',link: 'https://github.com/vuejs/vitepress' }
    ],
    // 顶部导航数据
    nav: [
      // 下拉菜单按如下方式：
      {
        text: '前端',
        items: [
          { text: 'js深入',link: '/guide/js/js深入/' },
          { text: 'js算法',link: '/guide/js/js算法/' },
        ]
      },
      { text: 'VitePress',link: '/guide/VitePress/' },
    ],
    // 侧边栏目录
    sidebar: {
      "/guide/VitePress": getSidebar(path.resolve(__dirname,"../guide/VitePress")),
      "/guide/js/js深入/": getSidebar(path.resolve(__dirname,"../guide/js/js深入")),
      "/guide/js/js算法/": getSidebar(path.resolve(__dirname,"../guide/js/js算法"))
    },
    // 上下翻页(默认提供),通过配置来定制默认的文字。
    docFooter: { prev: '上一篇',next: '下一篇' },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 by pan'
    },
    // 在 `Github` 编辑此页
    editLink: {
      // `pattern`：可以分为两部分，`:path` 为变量内容指当前的文件名称。`:path` 之前的部分则是项目的 `/docs` 的 `github` 的文档地址。
      pattern: 'https://github.com/vuejs/vitepress',
      // pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    }
  },

  // markdown 配置
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    },
    lineNumbers: true,
    config (md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})