import Vue from 'vue'
import VueRouter from 'vue-router'
import Create from '../views/Create.vue'
import Preview from '../views/Preview.vue'

//Remove
import TableCheatSheet from '../views/tableCheatSheet.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Create',
        component: Create
    },
    {
        path: '/Preview',
        name: 'Preview',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/Preview.vue')
    },
    {
        path: '/TableCheatSheet',
        name: 'TableCheatSheet',
        component: TableCheatSheet
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router