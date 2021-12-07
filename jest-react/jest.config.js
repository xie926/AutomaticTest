module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "collectCoverageFrom": [ // 代码测试覆盖率是通过分析哪些文件生成的
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts" // 不要分析这样的文件（ts类型声明文件）
  ],
  "setupFiles": [ // 当我们运行测试之前，作准备的时候，我们要额外准备些什么
    "react-app-polyfill/jsdom" // 我们在测试的时候，准备一些polyfill垫片，对jsdom做一些补充，解决一些js的兼容性问题
  ],
  "setupFilesAfterEnv": [ // 当测试环境建立好之后，你想做一些其他的事情，你可以在这里面去做
    "<rootDir>/src/setupTests.js",
    "./node_modules/jest-enzyme/lib/index.js"
  ],
  "testMatch": [ // 当我们运行npm run test的时候，要执行一些测试文件，那我们通过什么方式来辨别哪些文件要做测试呢？这样通过一些正则做了一些声明
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  "testEnvironment": "jsdom", // 测试运行环境，模拟浏览器
  "testRunner": "/Users/xieyan7/Study/AutomaticTest/jest-react/node_modules/jest-circus/runner.js",
  "transform": { // 转化
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  "transformIgnorePatterns": [ // 不转化
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  "modulePaths": [], // 比如说index.js引入的react模块，我们希望一开始在node_modules查找react模块，如果没找到的话去'xxx'模块找，往数组中添加'xxx'项
  "moduleNameMapper": {
    // "^react-native$": "react-native-web",
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy" // 第三方模块，当我们去引用cssModule这样的样式模块的时候，他会把原始的样式转换成一个js对象，这个js对象就是一个简单的key-value对
  },
  "moduleFileExtensions": [ // 引入模块不写后缀的时候，自动按一下后缀顺序查找相关文件
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  "watchPlugins": [ // 当我们在npm run test时，会有一些模式选择，这个选项就是可以往这些模式当中加一些插件
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ],
  "resetMocks": true
}