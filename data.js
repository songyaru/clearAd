var adData = {
	"all": {
		"hide": ["iframe[id*='ad']", "iframe[class*='ad']", "iframe[src*='ad']",
			"ins[id*='ad']", "ins[class*='ad']", "ins[src*='ad']"
		]
	},

	"segmentfault.com": {
		"hide": [".widget-welcome"]
	},
	"dygod.net": {
		"hide": [".bd4l"],
		"prev": ["#header"]
	},
	"qq.com": {
		"hide": [".ad1", ".kjad2", ".article_ad"]
	},
	"iteye.com": {
		"hide": ["#layerd_google", ".J_adv", "ins"],
		"next": ["#local", "#copyright"],
		"prev": ["#logoArea"]
	},
	"77kp.com": {
		"next": [".footer"]
	},
	"csdn.net": {
		"hide": ["#layerd_google", ".J_adv", "ins", ".csdn-tracking-statistics", ".J_close", ".tracking-ad[data-con*='ad']"]
	},
	"weather.com.cn": {
		"hide": [".ad1", ".ad2", ".ad3", ".ad4"]
	},
	"toutiao.com": {
		"hide": [".right-iframe-ad", "#adindexhover", ".J_add"]
	}
};
var exclude = {
	"aliyun.com": {}
};
