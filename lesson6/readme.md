- f: 只会测之前不通过的用例
- o: 只会测试当前被改变文件的测试用例，与git有绑定关系，通过git的检测改变
- a: 任何更改，都会测所有的测试用例
- t: 根据pattern的值来过滤（包含pattern的描述）要测试的测试用例代码
- p: 根据pattern的值来过滤（包含pattern的文件名）要测试的测试用例代码  在jest --watchAll下才有用

# 配置
- "test": jest --watchAll  对所有文件进行测试
- "test": jest --watch  对修改的文件进行测试，自动进入o模式
