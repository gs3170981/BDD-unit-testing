describe('我的测试', function () {
    describe('#a', function () {
        it('a = 3', function () {
            // 示例化 Vue, 此时示例对应的 DOM 元素没有在页面中。
            // const instance = new Vue({
            //   render: h => h(App),
            //   components: { App }
            // }).$mount()

            // // 手动将 DOM 添加到页面中。
            // document.body.appendChild(instance.$el)
            let a = 3
            // let h1 = instance.$el.querySelector('.hello h1')
            expect(a).to.equal(3)
        })
    })
})