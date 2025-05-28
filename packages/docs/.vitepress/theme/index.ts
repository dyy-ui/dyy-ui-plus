import DefaultTheme from 'vitepress/theme'
import { type App } from 'vue'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
// import DyyUI from "../../../core/index";
import DyyUI from 'dyy-ui-plus'
import { ElementPlusContainer } from '@vitepress-demo-preview/component'
import Layout from './Layout.vue'

import '@vitepress-demo-preview/component/dist/style.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'dyy-ui-plus/dist/index.css'
import 'virtual:uno.css'

import './custom.css'

export default {
  ...DefaultTheme,
  Layout: Layout,
  enhanceApp({ app }: { app: App }) {
    app.component('demo-preview', ElementPlusContainer)
    app.use(ElementPlus, { locale: zhCn })
    app.use(DyyUI)
  },
}
