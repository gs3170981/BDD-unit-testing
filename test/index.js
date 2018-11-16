// 引入所有测试文件 (以 .spec.js 结尾)
// const testsContext = require.context('./module', true, /\.test$/)
// testsContext.keys().forEach(testsContext)

// 引入除了main.js的所有源文件以做覆盖率测试
// 你也可以修改配置只测试一部分js文件
// const srcContext = require.context('.././src', true, /^\.\/(?!main(\.js)?$)/)
// srcContext.keys().forEach(srcContext)

import '../src/index.js'

// import Test from '../src/components/'

var expect = require('chai').expect // 引入Chai

describe('Top Bottom function unit test', function () {
    it('Top.innerHTML = Hello Top!', function () {
        var dom = document.getElementById('top')
        expect(dom.innerHTML).to.equal('Hello Top!')
    })
    it('Bottom.innerHTML = Hello Bottom!', function () {
        var dom = document.getElementById('bottom')
        expect(dom.innerHTML).to.equal('Hello Bottom!')
    })
})