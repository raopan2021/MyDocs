import { defineConfig } from 'vitepress'
import { componentPreview,containerPreview } from '@vitepress-demo-preview/plugin'
import { autoGetSidebarOptionBySrcDir } from './autoSideBar'
const path = require("path");

// 顶部导航数据
const nav = [
  { text: 'js深入',link: '/04-js深入/index' },
  { text: 'VitePress',link: '/09-VitePress/index' },
  // { text: '组件',link: '/components/basic-component1' },
  // 顶部导航下拉菜单按如下方式：
  // {
  //   text: 'Dropdown Menu',
  //   items: [
  //     { text: 'Item A', link: '/item-1' },
  //     { text: 'Item B', link: '/item-2' },
  //     { text: 'Item C', link: '/item-3' }
  //   ]
  // }
]

export default defineConfig({
  // 页面标签页的title标题
  title: 'panpan',
  description: 'panpan的前端知识',
  lang: 'cn-ZH',
  base: '/',
  lastUpdated: true,

  themeConfig: {
    // logo: '/logo.png',
    siteTitle: 'panpan的前端知识',
    outline: 2,
    socialLinks: [
      { icon: 'github',link: 'https://github.com/vuejs/vitepress' }
    ],
    // 上下翻页,定制默认的文字。
    docFooter: { prev: '上一篇',next: '下一篇' },
    nav,
    sidebar: {
      "/": autoGetSidebarOptionBySrcDir(path.resolve(__dirname,"../04-js深入"))
        .concat(autoGetSidebarOptionBySrcDir(path.resolve(__dirname,"../09-VitePress"))),
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