# learnAwosomeNodeJS
learn awosome NodeJS
## 绝对路径``__dirname``
- 执行文件时该文件在``文件系统``中所在的目录
## 绝对路径``process.cwd()``
- 程序运行时的当前工作路径
## 更改工作目录
```javascript
process.chdir(path)
```
# process.argv
```javascript
console.log(process.argv);
// [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\learnAwosomeNodeJS\\learn01\\exa1.js' ]

```
- 包含 Node程序所有运行时的参数：第一个始终是Node安装位置，第二个始终是执行的文件路径，紧接着是命令行后的参数
```
node exa1.js --payload=1 --yeah
// [ 'C:\\Program Files\\nodejs\\node.exe', 'E:\\learnAwosomeNodeJS\\learn01\\exa1.js' ,'--payload=1','--yeah']

```
- 所以获取参数一般用`process.argv.slice(2)`
## 环境变量``process.env`` 
- 访问shell环境下的变量： ``process.env.NODE_ENV``
## 程序退出`process.exit`
- ``process.exit(1)``
## 进程信号
- 进程与操作系统通过`进程信号`进行通信
- 进程终止，可以发送`SIGKILL`信号：
```javascript
process.on('SIGKILL', function() {
  // 信号已收到
})
```

## ANSI转义码
- 要在文本终端下控制格式，颜色以及其他输出选项，可以使用ANSI转义码。
- 在文本周围添加的明显不用于输出的字符，成为非打印字符，如下：
```javascript
console.log('\033[90m' + data.replace(/(.*)/g, '   $1') + '\033[39m');
```
1. ``\033``表示转义序列的开始
2. ``[``表示开始颜色设置
3. ``90``表示前景色为灰色
4. ``m``表示颜色设置结束
5. ``39``表示讲颜色设置回去，只对部分文本着色
- [完整的ANSI转义码](https://en.wikipedia.org/wiki/ansi_escape_code)

# fs模块
- fs模块允许你通过Stream API来对数据进行读写操作。
- ``fs.createReadStream``方法允许为一个文件创建一个可读的Stream对象
- 若一个文件巨大，有上百万数据：
```javascript
// readFile
fs,readFile('my-file.txt', function(err, content) {
  // 对文件进行处理
});

```
- 上述例子中，回调函数必须要等到整个文件读取完毕，载入到RAM，可用的情况下才会触发。
```javascript
var stream = fs.createReadStream('my-file.txt');
var str = '';
stream.on('data', function(chunk) {
  // 处理部分内容
  str += chunk;
})
stream.on('end', function(chunk) {
  // 文件读取完毕
})
```
- ``fs.writeStream``
## 另一个很好的符合Node非阻塞设计的例子就是监视``Watch``
- Node允许监视文件或目录是否发生变化
```javascript
var stream = fs.vreateReadStream('my-file.txt');
var fs = require('fs');
// 获取工作目录下所有的文件
var files = fs.readdirSync(process.cwd());-
files.forEach(function(file) {
  // 监听'.css'后缀的文件
  if(/\.css$/.test(file)){
    fs.watchFile(process.cwd() + '/' + file, function() {
      console.log(' - ' + file + ' changed');
      
    })
  }
})
```
- 可以用``fs.watch(process.cwd())``监视整个目录

## IRC协议
``irc.free.node.net``
