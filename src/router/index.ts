import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'
import HomePage from '../views/HomePage.vue'
import MyWorks from '../views/MyWorksPage.vue'
import NotFoundPage from '../components/NotFoundPage.vue'
import HighLightsReel from '../views/MyProjects/HighLightsReel.vue'
import ShowReel from '../views/MyProjects/ShowReel.vue'

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
            path: '/my-projects',
            children: [
                { path: '', name: 'my-projects', component: MyWorks },
                { path: 'highlight-reel', name: 'highlight-reel', component: HighLightsReel },
                { path: 'showreel', name: '2024-showreel', component: ShowReel },
            ]
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
    if (to.children) {
        title = to.children.name;
    }
    title = title.replace("-", " ");
    title = title.toLowerCase()
        .split(' ')
        .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    document.title = title;
    next();
});

export default router
