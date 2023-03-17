import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Главная',
        component: () => import('../views/Home.vue')
    },
    // catalog item page
    {
        path: '/catalog',
        name: 'Каталог товаров',
        component: () => import('../views/Catalog/Catalog.vue')
    },
    {
        path: '/catalog/:category',
        name: 'Каталог категории',
        component: () => import('../views//Catalog/CatalogCategory.vue')
    },
    {
        path: '/item/:id',
        name: 'Просмотр товара',
        component: () => import('../views/Catalog/CatalogItem.vue')
    },
    // 404 page
    {
        path: '/:pathMatch(.*)*',
        name: 'Страница не найдена',
        component: () => import('../views/NotFound.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact-active'
})

router.beforeEach((to, from, next) => {
    document.title = "Market.Place | " + to.name
    next()
})

export default router