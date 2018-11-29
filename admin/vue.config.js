const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    lintOnSave: true,
    configureWebpack: config => {
        Object.assign(config, { // 开发生产共同配置
            resolve: {
                modules: [
                    resolve('src'),
                    resolve('node_modules')
                ],
                alias: {
                    'src': path.resolve(__dirname, './src'),
                    'components': path.resolve(__dirname, './src/components'),
                    'vue$': 'vue/dist/vue.esm.js'
                }
            }
        })
    }
}