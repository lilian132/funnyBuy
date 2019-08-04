import http from './interface'

/**
 * 将业务所有接口统一起来便于维护
 * 如果项目很大可以将 url 独立成文件，接口分成不同的模块
 * 
 */
var isEnterPage = false;
// 单独导出(测试接口) import {test} from '@/common/vmeitime-http/'
export const test = (data) => {
	/* http.config.baseUrl = "http://localhost:8080/api/"
	//设置请求前拦截器
	http.interceptor.request = (config) => {
		config.header = {
			"token": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
		}
	} */
	//设置请求结束后拦截器
	http.interceptor.response = (response) => {
		console.log('个性化response....')
		//判断返回状态 执行相应操作
		return response;
	}
    return http.request({
		baseUrl: 'https://unidemo.dcloud.net.cn/',
        url: 'ajax/echo/text?name=uni-app',
		dataType: 'text',
        data,
    })
}

export const postAPI = (url,data) => {
	try {
		const token = uni.getStorageSync('token');
		http.interceptor.request = (config) => {
			if (token) {
				config.header = {
					"token": token
				}
			}
			return config;
		}
		http.interceptor.response = (response) => {
			console.log('个性化response....')
			//判断返回状态 执行相应操作
			if(response.data && response.data.code == 10009){
				uni.removeStorageSync('token');
				uni.removeStorageSync('userInfo_token');
				uni.removeStorageSync('userInfo');
				var pages = getCurrentPages();
				var page = pages[pages.length - 1];
				if(page.route == 'pages/login/login') return;
				if(isEnterPage) return;
				isEnterPage = true;
				setTimeout(function(){
					
					uni.navigateTo({url: '/pages/login/login',complete:()=>{
						isEnterPage = false;
					}});
				},1500);
			}
			return response;
		}
		
	} catch (e) {
		// error
	}

    return http.post(url,data);
}

// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	test,
	postAPI
}