import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import theme from 'vitepress/dist/client/theme-default/index'
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...theme,
  enhanceApp ({ app }) {
    app.use(ElementPlus)
    app.component('demo-preview',AntDesignContainer)
  }
}