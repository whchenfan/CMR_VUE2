import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//去掉Vue的警告
Vue.config.productionTip = false; 
import Vuex from 'vuex';
Vue.use(Vuex);
import ajax from './resource/js/ajax';
import * as commFn  from './resource/js/comm';
import {cityDate}  from './resource/js/city';
Vue.prototype.ajaxFn= ajax;
Vue.prototype.commFn= commFn;
Vue.prototype.cityDate= cityDate;
global.scrollFlg=true;//控制下拉
//时间转换
Vue.prototype.formTime=function (a){
	let d=new Date();
	    d.setTime(a+"000");
	    return d.getFullYear()+'-'+(d.getMonth()+1>9?(d.getMonth()+1):('0'+(d.getMonth()+1)))+'-'+(d.getDate()>9?d.getDate():('0'+d.getDate()));
}
import configRouter from "./router";

const router=configRouter(VueRouter);

new Vue({
	//render:h=>h(login),
	store:{scrollFlg:true,userInfo:{}},
    router
}).$mount('#app')
