# 参数说明，以及约定
关于解析后的config参数设计说明，以及相关约定说明

```
{
  pages: [],  // 所有的page界面相关的配置
  parsered: true,  // 如果解析过了需要打个标记，以便防止重复解析
  mode: "configuration" // 应用生成引擎的模式， configuration 为配置模式，适用于线上配置， development为开发模式，适用于开发人员做一些较为复杂的自定义性质较强的项目
}
```

#### pages项的具体参数
```
{
  name: "home"  // 页面的名称，
  indexRedirect: 1  // 路由是否默认跳转到该页面，
  router: {
    "path": "/home",   该页面的路由地址
    "permission": -1   该页面是否需要鉴权
  }，
  components: [] // 该界面所需要到的所有组件，
  events: [] // 该界面需要的一些事件配置，如 onload（加载完事件），init（初始化事件），
  "methods": [] // 该界面需要用的到一些方法，
  "variable": [] // 该界面需要用的一些变量，其中包括可共享的变量，以及不可共享的（即这个界面单独使用的）
}
```

#### components想的具体参数说明
```
{
  "name": "Button", // 组件的名称
  "on": {}  // 组件所监听的一些事件，例如click（点击），onchange（变化），具体取决于组件对外所暴露的事件
  props: {} // 组件所需要从外部传入的props
}
```

