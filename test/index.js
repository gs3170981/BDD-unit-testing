// 引入所有测试文件 (以 .spec.js 结尾)
// const testsContext = require.context('./module', true, /\.test$/)
// testsContext.keys().forEach(testsContext)

// 引入除了main.js的所有源文件以做覆盖率测试
// 你也可以修改配置只测试一部分js文件
// const srcContext = require.context('.././src', true, /^\.\/(?!main(\.js)?$)/)
// srcContext.keys().forEach(srcContext)

import Main from '../src/index'

describe('Main function unit test', function () {
    it('Main.innerHTML = Hello World!', function () {
        var dom = Main()
        expect(dom.innerHTML).to.equal('Hello World!')
    })
})
