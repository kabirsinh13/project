import { createRouter, createWebHashHistory } from "vue-router";
import MyHome from './components/Myhome.vue';
import CreatePost from './components/CreatePost.vue';
import AboutPage from './components/AboutPage.vue'

const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        {
            path: "/",
            name: "home",
            component: MyHome,
        },
        {
            path: "/createPost",
            name: "create-Post",
            component: CreatePost,
        },
        {
            path: "/about",
            name: "About",
            component: AboutPage,
        }
    ]
})

export default router
