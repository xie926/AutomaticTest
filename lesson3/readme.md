- 生成配置内容 npx jest --init 
- 生成测试覆盖率的东西，放在coverage目录下 npx jest --coverage
- 代码测试覆盖率：编写的测试代码对我们原有的功能代码做了百分之多少的测试，这个百分比就是代码覆盖率
- 配置文件中，coverageDirectory指的是代码测试率的报告放在哪个目录下
- node不支持import/export语法，所以需要用到babel做一个转化， npm i @babel/core@7.4.5 @babel/preset-env@7.4.5 -D
- babel配置，当前目录下创建.babelrc文件
```js
{
    "presets": [
        "@babel/preset-env", {
            "targets": {
                "node": "current"
            }
        }
    ]
}

// npm run jest
// jest 内部集成插件(babel-jest), 插件会检测当前环境下是否有babel 或者 babel/core
// 有 -> 取.babelrc配置
// 在运行测试之前，结合babel，先把代码做一次转化
// 运行转化后的测试用例代码
```