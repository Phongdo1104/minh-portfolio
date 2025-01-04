import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import HomePage from '../views/HomePage.vue'
import ContactMe from '../views/ContactMe.vue'
import MyWorks from '../views/MyWorksPage.vue'
import NotFoundPage from '../components/NotFoundPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
        },
        {
            path: '/about-me',
            name: 'about-me',
            component: AboutMe,
        },
        {
            path: '/my-works',
            name: 'my-works',
            component: MyWorks,
        },
        {
            path: '/contact-me',
            name: 'contact-me',
            component: ContactMe,
        },
        {
            path: '/:pathMatch(.*)*',
            name: "not-found",
            component: NotFoundPage,
        }
    ]
})

router.beforeEach((to: any, from, next) => {
    let title = to.name;
    title = title.replace("-", " ");
    title = title.toLowerCase()
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    document.title = title;
    next();
});

export default router
