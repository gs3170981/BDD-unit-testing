// 引入所有测试文件 (以 .test.js 结尾)
const testsContext = require.context('./module', true, /\.test.js$/)
testsContext.keys().forEach(testsContext)

// 引入除了main.js的所有源文件以做覆盖率测试
// 你也可以修改配置只测试一部分js文件
// const srcContext = require.context('../src', true, /^\.\/(?!main(\.test.js)?$)/)
// srcContext.keys().forEach(srcContext)

// import '../src/main.js'

// var expect = require('chai').expect // 引入Chai

// describe('Top Bottom function unit test', function () {
//     it('Top.innerHTML = Hello Top!', function () {
//         var dom = document.getElementById('top')
//         expect(dom.innerHTML).to.equal('Hello Top!')
//     })
//     it('Bottom.innerHTML = Hello Bottom!', function () {
//         var dom = document.getElementById('bottom')
//         expect(dom.innerHTML).to.equal('Hello Bottom!')
//     })
// })


// import Test from '../src/components/index.js'

// describe(`
//     const DOM = new Test({
//         el: document.body
//     })
//     DOM.init()
// `,
// function () {
//     const DOM = new Test({
//         el: document.body
//     })
//     DOM.init()
//     it('#top node is',function () {
//         expect(typeof document.getElementById('top')).to.equal('object')
//     })
//     it('#bottom node is',function () {
//         expect(typeof document.getElementById('bottom')).to.equal('object')
//     })
// })