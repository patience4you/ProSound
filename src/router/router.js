import {createRouter, createWebHistory} from "vue-router";

import MainPage from "@/pages/MainPage.vue";
import PremiumPage from "@/pages/PremiumPage.vue";
import RegistrationPage from "@/pages/RegistrationPage.vue";


const routes = [
    {
        path: '/',
        component: MainPage
    },

    {
        path: '/premium',
        component: PremiumPage
    },

    {
        path: '/sign-up',
        component: RegistrationPage
    },
]

const router = createRouter ({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;