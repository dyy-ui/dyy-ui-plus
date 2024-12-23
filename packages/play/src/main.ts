import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import DyyUI from '../../core/index'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'dyy-ui-plus/dist/index.css'
import 'virtual:uno.css'

createApp(App).use(ElementPlus).use(DyyUI).mount('#app')
