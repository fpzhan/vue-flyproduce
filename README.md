# vue-flyproduce

## （项目安装）Project setup
```
npm install
```

### （启动程序）Compiles and hot-reloads for development
```
npm run serve
```

### （代码编译）Compiles and minifies for production
```
npm run build
```



### 插件介绍
   vue-flyproduce插件，是flyproduce代码生成器的一部分。登录[flyproduce网站](http://www.flyproduce.com)，生成后端java代码(可以选择性的使用swagger2,mybatis-plus技术)，以及前端vue代码，各种自定义文档。然后使用vue-flyproduce插件，利用vue的双向数据绑定，可以简单明了的实现对服务器的请求。使html与javascript具有极低的耦合度。对于大中小型公司，页面样式频繁切换和快速开发程序提供了极大帮助。
 
### 插件使用建议
   利用[flyproduce网站](http://www.flyproduce.com)和vue-flyprodce插件，已经可以快速生成javajava代码和javascript中请求服务器代码。如果html代码也能快速生成，那你开发程序的速度将会非常非常快速。最后只需将html和javascript进行vue中v-model绑定即可。<br/>html页面的生成，有许多工具可以使用，比如：拖拽生成html页面的网站，人工智能扫描ui原型生成html页面。
   
### 博客（代码样例）
[csdn博客](https://blog.csdn.net/qq_35056796/article/details/96712125)

### 教程
[flyproduce网站](http://www.flyproduce.com)中有详细的视频教程以及图文教程。
或者直接下载[百度网盘](https://pan.baidu.com/s/1hm7GoZyG9e30oZ5Smptm_w) 提取码：fd0u
### github地址
```
https://github.com/fpzhan/vue-flyproduce.git
```
examples目录--flyproduce.js 如何在vue中添加vue-flyproduce插件的示例

examples目录--main.js  创建vue初始化的示例

examples目录--views目录--all目录中的代码是[flyproduce网站](http://www.flyproduce.com)生成的。

examples目录--views目录--About.vue是vue-flyproduce插件在表单中如何使用的示例。

examples目录--views目录--table5.vue是vue-flyproduce插件在table中如何使用的示例。(table插件使用vue-table2)

<br/>

### vue-flyproduce使用api
url: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;接口请求路径

input: Object &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查询参数

output: Object &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回结果

success: Function &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查询成功回调行数

error: Function &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查询失败回调行数

contentType: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ajax请求contentType头信息

submitId: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;触发查询节点的id

inputClear: Boolean &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;查询完参数是否清空query

init: Boolean &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是否页面加载完成之后就进行初始化

paginationRef: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;vuetable分页插件ref名称

pageValue: Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;当前第几页的值

size: Number &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每页多少条数据

currentName: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请求第几页传入参数名

sizeName: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每页多少条数据参数名

dataPath: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回数据路径(用.分割)

pagesPath: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回总页数路径(用.分割)

currentPath: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;返回当前第几页路径(用.分割)

submitEvent: String &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;绑定submitId节点的事件名称，例如：click

支持jquery ajax 所有参数，可参考[w3school ajax教程](http://www.w3school.com.cn/jquery/ajax_ajax.asp)

