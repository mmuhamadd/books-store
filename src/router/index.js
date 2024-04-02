import { createRouter , createWebHistory } from 'vue-router'

const routes = [{
	path: '/',
	name: 'Home',
	component: ()=> import('../views/Home.vue')
},{
	path: '/search/:query',
	name: 'Search',
	component: ()=> import('../views/Search.vue')
},
{
	path: '/book/:id',
	name: 'Book',
	component: ()=> import('../views/Book.vue')
},]

const router = createRouter({history: createWebHistory(),routes})
export default router