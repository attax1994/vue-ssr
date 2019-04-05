import {createApp} from './app'

const {app, router, store} = createApp()
// 客户端预取store的state
if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__)
}

router.onReady(() => {

  /**
   * 添加路由钩子函数，用于处理 asyncData
   * 在初始路由 resolve 后执行
   */
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to)
    const prevMatched = router.getMatchedComponents(from)

    // 我们只关心非预渲染的组件
    // 所以我们对比它们，找出两个匹配列表的差异组件
    let diffed = false
    const activated = matched.filter((component, index) => {
      return diffed || (diffed = (prevMatched[index] === component))
    })

    if (!activated.length) {
      return next()
    }

    Promise
      .all(activated.map((component) => {
        if (component.asyncData) {
          return component.asyncData({store, route: to})
        }
      }))
      .then(next)
      .catch(next)
  })

  app.$mount('#app', true)

})