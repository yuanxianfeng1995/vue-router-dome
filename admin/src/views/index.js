import admin from './admin'
export default [{
    path: '/',
    redirect: '/home'
}, {
    name: 'home',
    path: '/home',
    component: r => require.ensure([], () => r(require('./Home.vue')), 'home')
}, {
    name: 'about',
    path: '/about',
    component: r => require.ensure([], () => r(require('./About.vue')), 'about')
},  {
    path: '/admin',
    component: {
        template: '<router-view></router-view>'
    },
    children: admin
}]
