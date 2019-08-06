import Vue from 'vue'
import Router from 'vue-router'

import cinemaRouter from './cinemaRouter/cinemaRouter'
import mineRouter from './mineRouter/mineRouter'
import movieRouter from './movieRouter/movieRouter'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        cinemaRouter,
        mineRouter,
        movieRouter,
        { path: '', redirect: '/movie/nowFire' }
    ]
})