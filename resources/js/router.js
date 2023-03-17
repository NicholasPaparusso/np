import { createRouter, createWebHistory } from "vue-router";

import home from './pages/home.vue';
import about from './pages/about.vue';
import contact from './pages/contact.vue';
import projects from './pages/projects.vue';
// import EndCheckout from './pages/EndCheckout.vue';
import error from './pages/error.vue';

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass : 'active' ,
    linkExactActiveClass : 'exactive' ,
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: home
        },
        {
            path: '/about',
            name: 'about',
            component: about
        },
        {
            path: '/contatti',
            name: 'contact',
            component: contact
        },
        {
            path: '/progetti',
            name: 'projects',
            component: projects
        },
        //  {
        //     path: '/:slug',
        //     name: 'restaurant-details',
        //     component: RestaurantDetails
        // },
        // {
        //     path: '/checkout',
        //     name: 'Checkout',
        //     component: Checkout
        // },
        // {
        //      path: '/endcheckout',
        //      name: 'endcheckout',
        //      component: EndCheckout
        // },

        {
        path: '/:pathMatch(.*)*',
        component: error
        }
    ]

});

export { router };
