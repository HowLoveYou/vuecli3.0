//import api from '@/views/login/service'

import {
	removeToken,
	getToken,
	setToken,
	isNull
} from '@/utils/common'

const user = {
	state: {
		token: '', //getToken()
		userInfo: '',
		zhcq: '',
		roles: [],
	},
	mutations: {
		SET_TOKEN: (state, token) => {
			state.token = token
		},
		SET_USERINFO: (state, userInfo) => {
			state.userInfo = userInfo
		},
		SET_ZHCQ: (state, zhcq) => {
			state.zhcq = zhcq;
			sessionStorage.setItem('zhcq', zhcq)
		},
		SET_ROLES: (state, roles) => {
	      state.roles = roles
	   },
	},
	actions: {
		//登出
		FedLogOut({
			commit
		}) {
			return new Promise(resolve => {
				commit('SET_TOKEN', '');
				sessionStorage.clear();
				removeToken();
				resolve();
			})
		},
		// 获取用户信息
		GetUserInfo({
			dispatch,
			commit,
			state
		}) {
			return new Promise((resolve, reject) => {
				api.getUserInfo(getToken()).then(data => {
					commit('SET_USERINFO', data)
					sessionStorage.setItem('userInfo', JSON.stringify(data));
					if(isNull(state.zhcq)){
						dispatch('GetZhcq').then(zhcqs => {
							if(zhcqs.length) {
								commit('SET_ZHCQ', zhcqs[0].zhcq);
							} else {
								commit('SET_ZHCQ', '110109');
							}
							resolve(data)
						})
					}else{
						resolve(data)
					}
				}).catch(error => {
					reject(error)
				})
			})
		},
		//获取zhcq  多个地方用到
		GetZhcq({
			commit,
			state
		}) {
			return new Promise((resolve, reject) => {
				let xzqh = JSON.parse(sessionStorage.getItem('userInfo')).xzqh;
				let datazhcq = {
					xzqh:xzqh,
					cqlx:'1'
				}
				api.getZhcq(datazhcq).then(data => {
					let dataArr = JSON.parse(data);
					resolve(dataArr);
				}).catch(error => {
					reject(error)
				})
			})
		},
	}
}

export default user