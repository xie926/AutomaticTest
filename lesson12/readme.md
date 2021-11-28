- 将配置文件中的autoMock改成true，那么他就会根据你引入模块的当前目录去找有没有__mocks__目录，看这个文件夹有没有同名文件，另外如果配置了autoMock：true，jest.mock('./Demo')可省略

- api -> mock(jest官方文档)
- api -> jest Object（jest官方文档）