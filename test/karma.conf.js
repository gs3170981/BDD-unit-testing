var webpackConfig = require('../webpack.config')

module.exports = function (config) {
  config.set({
    // 指定要运行测试的浏览器，可以指定多个。必须要安装对应的加载器(launcher)，karma 会在调起本地的浏览器。
    browsers: ['PhantomJS'],
    // 指定要使用的测试框架
    frameworks: ['mocha', 'chai'],
    client: {
      useIframe: false
    },
    // 这个插件会将每个测试用例的测试结果打印到命令行 console 中。
    reporters: ['spec', 'coverage'],
    // 希望执行的测试文件, 这里的文件会经过 preprocessor 处理后，通过 script 便签添加到测试页面中。
    // 更多设置可以查看 https://karma-runner.github.io/2.0/config/files.html
    files: [
      './index.js'
      // './module/**/*.test.js',
      // '../src/components/**/*.test.js'
    ],
    // 使用 webapck 对文件进行编译打包，同时配置 sourcemap 方便调试代码
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    // wepack 配置项
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        // 生成 lcov.info 以及 html 文件，lcov.info 该文件中包含了详细的每个文件，每行，每个函数的执行信息。
        { type: 'lcov', subdir: '.' },
        // 在命令行输出简要覆盖率数据
        { type: 'text-summary' }
      ]
    },
    // 监听文件变动
    autoWatch: true,
    // 持续集成模式 如果是true，Karma只会运行一次并退出
    singleRun: true
  })
}

// module.exports = (config) => {
//   config.set({
//     // 将被用于所有配置的基础路径 (eg. files, exclude)
//     basePath: '',
//     // 指定要运行测试的浏览器，可以指定多个。必须要安装对应的加载器(launcher)，karma 会在调起本地的浏览器。
//     browsers: [
//       'Chrome', 'PhantomJS'
//     ],
//     // 指定要使用的测试框架
//     frameworks: ['mocha', 'chai'],
//     client: {
//       useIframe: false
//     },
//     // 这个插件会将每个测试用例的测试结果打印到命令行 console 中。
//     reporters: ['spec'],
//     // 希望执行的测试文件, 这里的文件会经过 preprocessor 处理后，通过 script 便签添加到测试页面中。
//     // 更多设置可以查看 https://karma-runner.github.io/2.0/config/files.html
//     files: ['./index.js'],
//     // 需排除的文件
//     exclude: [],
//     // 使用 webapck 对文件进行编译打包，同时配置 sourcemap 方便调试代码
//     preprocessors: {
//       ['./index.js']: ['webpack', 'sourcemap']
//     },
//     // 测试结果报告，覆盖率报告如有需要在这里配置 可用的报告插件:
//     // https://npmjs.org/browse/keyword/karma-reporter
//     reporters: [
//       'progress', 'coverage'
//     ],
//     // 覆盖率报告插件配置
//     coverageReporter: {
//       dir: 'coverage',
//       reporters: [
//         {
//           type: 'json',
//           subdir: '.',
//           file: 'coverage.json'
//         }, {
//           type: 'lcov',
//           subdir: '.'
//         }, {
//           type: 'text-summary'
//         }
//       ]
//     },
//     // 服务器端口
//     port: 9876,
//     // 是否要有颜色
//     colors: true,
//     // logging的级别 可用值: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN ||
//     // config.LOG_INFO || config.LOG_DEBUG
//     logLevel: config.LOG_INFO,
//     // 是否监听文件变动
//     autoWatch: true,
//     // wepack 配置项
//     // webpack: webpackConfig,
//     webpackMiddleware: {
//       noInfo: true
//     },
//     // 持续集成模式 如果是true，Karma只会运行一次并退出
//     singleRun: false
//   })
// }
