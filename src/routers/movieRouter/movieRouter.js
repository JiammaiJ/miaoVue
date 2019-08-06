export default {
    path: '/movie',
    component: () =>
        import ('@/views/movie/movie.vue'),
    redirect: '/movie/nowFire',
    children: [{
            path: 'cityList',
            component: () =>
                import ('@/components/CityList.vue')
        },
        {
            path: 'nowFire',
            component: () =>
                import ('@/components/NowFire.vue')
        },
        {
            path: 'comingSoon',
            component: () =>
                import ('@/components/ComingSoon.vue')
        },
        {
            path: 'search',
            component: () =>
                import ('@/components/Search.vue')
        },
        {
            path: 'detail',
            component: () =>
                import ('@/components/Detail.vue')
        }
    ],
}