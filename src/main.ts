import { createApp } from 'vue'
import App from '@/App.vue'
// 引入全局样式
import '@/styles/index.scss'
// 引入element-plus插件与样式
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
// 配置element-plus国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg插件需要的配置代码
import 'virtual:svg-icons-register'
// 注册全局组件
import gloablComponent from './components/index';
import router from './router'

const app = createApp(App)

app.use(ElementPlus, {
    locale: zhCn
})
app.use(router)
app.use(gloablComponent)

app.mount('#app')
