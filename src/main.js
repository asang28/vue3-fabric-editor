import { createApp } from 'vue'

import ElementPlus from 'element-plus'

// 增加的引入
import 'element-plus/dist/index.css'

import locale from 'element-plus/lib/locale/lang/zh-cn' // 中文语言

import axios from 'axios'

import '@/assets/fonts/font.css';

import App from './App.vue';
import router from './router'

// svg图标
import SvgIcon from '@/components/SvgIcon'

import i18n from './lib/i18n/index'

const app = createApp(App)

// 全局方法挂载
app.config.globalProperties.$http = axios

app.use(router)
app.component('svg-icon', SvgIcon)

// 使用element-plus 并且设置全局的大小
app.use(ElementPlus, {
    locale: locale,
    size: 'small'
})

// i18n
app.use(i18n)

// 修改 el-dialog 默认点击遮照为不关闭
app._context.components.ElDialog.props.closeOnClickModal.default = true
app.mount('#app')
