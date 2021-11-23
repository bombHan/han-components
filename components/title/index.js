// 导入的组件必须在vue文件中声明 name, 否则组件无法注册使用
import title from './title.vue'

// 为组件提供 install 安装方法，供按需引入
title.install = Vue => {
    Vue.component(title.name, title)
}

// 默认导出组件
export default title