# 将typescript用于jQuery-less的传统项目中
## 这么做的原因:
- 借助typescript的 强类型 断言 和 提示等功能,避免js的运行时错误
## 好处:
- 经过编译 处理后生成的js文件一般不会出现什么恼人的低级错误
## 使用环境
- node(合适的版本 当前机器 8.11.1) vscode
- vscode 配合 live-server 插件
- 全局安装 typescript
- 建议使用 npm-scripts 插件 , 看过这个插件就明白了
## 配置文件
- .vscode
  - setting.json
  - vscode 工作区的配置文件
  - 默认 不压缩 没有sourceMap 指定生成文件的目录
```
{
  "npm-scripts.showStartNotification": false,
  "less.compile": {
    "compress": false, 
    "sourceMap": false, 
    "out": "${workspaceRoot}\\src\\css\\"
  }
}
```
- tsconfig.json
- 指定一些编译ts的参数,看文档吧

```
{
  "compilerOptions": {
    "outDir": "./src/js/",
    "sourceMap": false,
    "noImplicitAny": false,
    "module": "amd",
    "target": "es5",
    "allowJs": true
  },
  "include": ["./resouce/ts/*"],
  "exclude": ["node_modules"]
}
```
- main.js 
- ts 最终编译时删除 sourceMap 文件

```
var fs = require("fs");
var glob = require("glob");
var cowsay = require('cowsay');

glob("./src/js/*.map", function(er, files) {
  if (er) {
    if (err) throw err;
  } else {
    console.log(files);
    for (const item of files) {
      fs.unlink(item, function(err) {
        if (err) throw err;
        // console.log(`删除 ${item} 成功`);
        console.log(cowsay.say({
          text : `删除 ${item} 成功`,
          e : "oo",
          T : "U "
        }));
      });
    }
  }
})
```