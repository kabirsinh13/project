import { createRouter, createWebHistory } from "vue-router";
import MyHome from './components/Myhome.vue';
import CreatePost from './components/CreatePost.vue';
import AboutPage from './components/AboutPage.vue';
import Post from './components/Post.vue';
import Login from './components/login.vue';
import Signup from './components/signup.vue';

const router = createRouter({
    history:createWebHistory(),
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
            path:"/post/:id",
            name:"post",
            component:Post,
        },
        {
            path: "/about",
            name: "About",
            component: AboutPage,
        },
        {
            path:"/login",
            name:"Login",
            component:Login,
        },
        {
            path:"/signup",
            name:"Signup",
            component:Signup,
        }
    ]
})

export default router
