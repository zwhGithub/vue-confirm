## vue-confirm 
* 基于 vue 2.0 开发的confirm对话框插件
* 占用内存小，性能好，样式好看





## Install
```shell
npm i vue-confirm  --save
```

## Quick Start  Usage
```javascript
//main.js中引入
import Confirm from 'vue-confirm'
Vue.use(Confirm)

在某个vue文件中使用
this.$confirm(content);

//举例  点击确定和取消之后有回调函数的
this.$confirm("是否确定").then(
	function(){
	console.log("点击确定")
}
).catch(	function(){
	console.log("点击取消")
})

