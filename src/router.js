import { createRouter, createWebHashHistory,  } from "vue-router";


const routes = [
    {
        path: "/",
        component: () => import("@/views/BookList"),
    },
    {
        path: "/newBook",
        component: () => import("@/views/NewBook"),
    }
]

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

export default router;