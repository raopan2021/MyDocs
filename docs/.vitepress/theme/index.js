import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 主题
import theme from 'vitepress/dist/client/theme-default/index'
// 自定义主题
import './style/var.css'

import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...theme,
  enhanceApp ({ app }) {
    app.use(ElementPlus)
    app.component('demo-preview',AntDesignContainer)
  }
}