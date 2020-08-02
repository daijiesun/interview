# vue-router相关知识点

[参考连接](https://router.vuejs.org/zh/)

## 路由守卫
### 1、全局前置守卫
```
router.beforeEach((to, from, next) => {
  // 每个路由都会执行该回调函数，

})
```

### 2、全局后置守卫

```
router.afterEach((to, from) => {

})
```

### 3、路由独享守卫

```
const router = new VueRouter({
  routes: [{
    path: '/foo',
    component: Foo,
    beforeEnter: (to, from, next) => {
      // 匹配到该路由，执行回调函数
    }
  }]
})
```

### 4、组件内的守卫

```
beforeRouterEnter(to, form, next) {
  // 在渲染该组件的对应路由被 confirm 前调用,进入组件前调用
  // 不！能！获取组件实例 `this`
  // 因为当守卫执行前，组件实例还没被创建
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
beforeRouterUpdate(to,from,next){
      // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
}
beforeRouterLeave(to,from,next){
  //导航离开该路由时调用
  //可以访问this实例
  next()//离开
  next(false) //阻止路由离开
}
```
#### 完整的路由流程
 1. 导航被触发。
 2. 在失活的组件里调用 beforeRouteLeave 守卫。
 3. 调用全局的 beforeEach 守卫。
 4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
 5. 在路由配置里调用 beforeEnter。
 6. 解析异步路由组件。
 7. 在被激活的组件里调用 beforeRouteEnter。
 8. 调用全局的 beforeResolve 守卫 (2.5+)。
 9. 导航被确认。
 10. 调用全局的 afterEach 钩子。
 11. 触发 DOM 更新。
 12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。