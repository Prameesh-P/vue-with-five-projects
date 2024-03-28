import { createRouter,createWebHistory } from "vue-router";
import HomeView from '../view/HomeView.vue'
import AboutView from '../view/AboutView.vue'
import ServiceView from '../view/ServiceView.vue'
import ServiceDetailsView from '../view/ServiceDetailsView.vue'
import ServData from "@/components/serviceData";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: () => AboutView
        },
        {
            path: '/service',
            name: 'service',
            component: () => ServiceView
        }
    ]
})

const createRoutes = ()=>{
    for (let i = 0; i < ServData.length; i++) {
        router.addRoute({path: '/'+ServData[i].title, name: ServData[i].title, component: () => ServiceDetailsView});
    }
}
createRoutes()
export  default router