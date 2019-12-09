import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../views/Home/Home.vue'
import Category from '../views/Category/Category.vue'
import Book from '../views/Book/Book.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/category',
            name: 'category',
            component: Category
        },
        {
            path: '/book',
            name: 'book',
            component: Book
        }
    ]
})