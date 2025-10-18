export const translations = {
	zh: {
		greeting: '你好，我是',
		subtitle: '一个网络运维工程师，什么都会点，什么都不精通',
		welcome: '谢谢你长的这么好看能来看我~',
		links: {
			github: {
				name: 'GitHub',
				description: '开源项目'
			},
			blog: {
				name: '博客',
				description: '技术文章'
			},
			running: {
				name: '跑步',
				description: '运动记录'
			},
			contact: {
				name: '联系',
				description: '发送邮件'
			}
		}
	},
	en: {
		greeting: "Hi, I'm",
		subtitle: 'A developer who loves coding, running and sharing',
		welcome:
			'Welcome to my personal homepage! Click the buttons below to explore my tech blog and running records.',
		links: {
			github: {
				name: 'GitHub',
				description: 'Open Source'
			},
			blog: {
				name: 'Blog',
				description: 'Tech Articles'
			},
			running: {
				name: 'Running',
				description: 'Activity Records'
			},
			contact: {
				name: 'Contact',
				description: 'Send Email'
			}
		}
	}
};

export type Language = 'zh' | 'en';
