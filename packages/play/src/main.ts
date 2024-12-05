import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import DyyUI from '../../core/index'
import 'element-plus/dist/index.css'
import 'dyy-ui/dist/index.css'

createApp(App).use(ElementPlus).use(DyyUI).mount('#app')
