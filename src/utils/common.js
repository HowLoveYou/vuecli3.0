//import Cookies from 'js-cookie'
import {
    setMaxDigits,
    RSAKeyPair,
    encryptedString
} from './lib/RSA'


const TokenKey = 'Demo-Admin-Token'

export function getToken() {
//  return Cookies.get(TokenKey)
}

export function setToken(token) {
//  return Cookies.set(TokenKey, token)
}

export function removeToken() {
//  return Cookies.remove(TokenKey)
}

/**
 * 引入 路由组件
 * @param file 文件在views下的地址 
 */
export function _import(file) {
//	let env = process.env.NODE_ENV;
//	if(env == 'development'){
//		 return require('@/views/' + file + '.vue').default
//	}else if(env == 'production'){
//		 return import('@/views/' + file + '.vue')
//	}
	return () => import('@/views/' + file + '.vue')
//	return require('@/views/' + file + '.vue').default
}

/**
 * 登陆 账号密码RSA加密
 * @param obj 账号密码
 * @returns obj 加密后的账号密码
 */
export function passwordEncode(userInfo) {
    setMaxDigits(100);
    var key = new RSAKeyPair("10001", "", "866cafa116451ce58386c8286a75e21a534e1ca0fdb79ea6991d660911592f062097b8ac559711b6718407712334c12d383e5d9b40d0abcdbd3dbc54d2ff52cb");
    let info = {}
    info.password = encryptedString(key, encodeURIComponent(userInfo.password));
    info.userId = userInfo.loginId.trim();
    return info
}


/**************************  公共方法  *************************** */
/**
 * 判断是否为数组
 * @param obj 要判断的数据
 * @returns
 */
const _isArray = function (obj) {
	return Object.prototype.toString.call(obj) === '[object Array]';
};

/**
 * 判断是否为空对象
 * @param obj 要判断的对象
 * @returns boolean
 */
const _isEmptyObject = function (obj) {
	if (obj instanceof Object) {
		for (var key in obj) {
			return false;
		}
		return true;
	}
};

/**
 * 判断是否为空
 * @param obj 要判断的数据
 * @returns boolean
 */
export function isNull(obj) {
	if (obj === undefined || obj === "undefined" || obj === null || obj === "null" || obj === "" || obj === "{null}" || _isEmptyObject(obj)) {
		return true;
	}
	if (_isArray(obj)) {
		return obj.length == 0;
	}
	return false;
};

/**
 * 判断字符串是否在数组里
 * @param obj 要判断的数据  arr 数组
 * @returns boolean
 */
export function isExist(obj,arr) {
	if(arr.indexOf(obj) > -1){
		return true
	}else{
		return false
	}
};

/**
 * 日期转换
 */
export function dateFormat(dateTime,formatStr) {
    formatStr = formatStr?formatStr:'{Y}-{MM}-{DD}'
    let parseNumber = function(num) {
        return num < 10 ? "0" + num : num;
    };
    let dateObj = {};
    let rStr = /\{([^}]+)\}/;
    let mons = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    dateObj["Y"] = dateTime.getFullYear();
    dateObj["M"] = dateTime.getMonth() + 1;
    dateObj["MM"] = parseNumber(dateObj["M"]);
    dateObj["Mon"] = mons[dateObj['M'] - 1];
    dateObj["D"] = dateTime.getDate();
    dateObj["DD"] = parseNumber(dateObj["D"]);
    dateObj["h"] = dateTime.getHours();
    dateObj["hh"] = parseNumber(dateObj["h"]);
    dateObj["t"] = dateObj["h"] > 12 ? dateObj["h"] - 12 : dateObj["h"];
    dateObj["tt"] = parseNumber(dateObj["t"]);
    dateObj["A"] = dateObj["h"] > 12 ? '下午' : '上午';
    dateObj["i"] = dateTime.getMinutes();
    dateObj["ii"] = parseNumber(dateObj["i"]);
    dateObj["s"] = dateTime.getSeconds();
    dateObj["ss"] = parseNumber(dateObj["s"]);
    while(rStr.test(formatStr)){
        formatStr = formatStr.replace(rStr, dateObj[RegExp.$1]);
    }
    return formatStr;
};


/**
 * 生成随机数
 * @param number 随机数范围/数量
 * @returns array
 * @example randomNum(10,20,5)     // 11151
 */
export function randomNum(minNum,maxNum,count,fixed,repeat) {
	minNum = minNum ? minNum : 0;	//范围最小值
	maxNum = maxNum ? maxNum : 10;  //范围最大值
    count = count ? count : 1;   //获取随机数的位数
    fixed = fixed ? fixed : 0;   //保留几位小数
	repeat = repeat ? repeat : true;    //获取到的随机数是否可以重复   默认 可以重复
	let numArr = [];
	for(let i=0;numArr.length < count;i++){
		let num = parseFloat((Math.random()*(maxNum-minNum)+minNum).toFixed(fixed));
		switch (repeat) {
			case true:
				numArr.push(num);
				break;
			case false:
				if(numArr.indexOf(num) == -1){
					numArr.push(num);
				}
				break
			default:
				break;
		}
	}
	return numArr;
}

/**
 * 深度克隆字符串和数组
 */

export function clone(obj){
	let newObj = Array.isArray(obj)?[]:{};
	if(obj && typeof obj ==="object"){
		for(let key in obj){
            if(obj.hasOwnProperty(key)){
                newObj[key]=(obj && typeof obj[key]==='object') ? clone(obj[key]):obj[key];
            }
        }
	}
	return newObj;
}
