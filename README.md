# vue-router-dome
vue router灵活运用 dome

实现router

import Vue from 'vue'

import Router from 'vue-router'

import views from 'views'

Vue.use(Router)

export default new Router({

  routes: views
  
})

views是目录 根据vue.config.js配置中的

configureWebpack: config => {

        Object.assign(config, { 
        
            resolve: {
                modules: [  // 优先读取src目录
                    resolve('src'),
                    resolve('node_modules')
                ]
            }
            
        })
    
    }
    
    读取目录结构下的每个index.js 生成router routes
