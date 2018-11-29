export default [{
    path: 'page1',
    component: r => require.ensure([], () => r(require('./page1.vue')), 'page1')
}]
