import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 1. 导入组件
import login from '../views/login/index'

// 2. 创建规则
const routes = [
    { path:"/login", component:login }
]

// 3. 创建路由对象
const router = new VueRouter({
    routes
})

// 4. 挂载路由
export default router