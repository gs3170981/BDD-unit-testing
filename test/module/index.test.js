describe('component function unit test', function () {
    it('element.innerHTML = Hello World!', function () {
        // 示例化 Vue, 此时示例对应的 DOM 元素没有在页面中。
        // const instance = new Vue({
        //   render: h => h(App),
        //   components: { App }
        // }).$mount()
        var dom = component()
        expect(dom.innerHTML).to.equal('Hello World!')

        // // 手动将 DOM 添加到页面中。
        // document.body.appendChild(instance.$el)
        // let h1 = instance.$el.querySelector('.hello h1')
    })
})
// describe('add function unit test.', function(){
//     it('2 + 3 = 5', function(){
//         var result  = add( 2, 3 );
//         expect(result).to.equal(5)
//     });
  
//     it('2 + 3 = 6, this should faild.', function(){
//         var result = add( 2, 3 );
//         expect(result).to.equal(6)
//     })
// });
