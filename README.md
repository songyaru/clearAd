# clearAd
chrome 自定义插件，屏蔽页面内制定的广告或其他节点

### 安装方法
[如何离线安装Chrome插件](#https://jingyan.baidu.com/article/e5c39bf5cc39cc39d76033cd.html)

### 配置 data.js 说明
``` javascript 
var adData = {
	"xxx.com": { // 仅对 xxx.com 生效
		"hide": ["#layerd_google", ".J_adv", "ins"], // 隐藏节点
		"next": ["#local", "#copyright"], // 隐藏该节点之后的所有兄弟节点
		"prev": ["#logoArea"] //隐藏该节点之前的所有兄弟节点
	},
  "all" : { // 所有网站都生效
    
  }
};

var exclude = { // 不执行屏蔽操作
	"aliyun.com": {} 
};
```

### todo
* 服务端下发待屏蔽的广告列表
* 类似 chrome 开发者工具选中节点添加到屏蔽列表
