export const roueceData={1:"网络推广",2:"独立开发"};
export const iphoneExp=/^1(3|4|5|7|8)\d{9}$/;//手机号码的验证
export const emailExp = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;//邮箱验证的正则
export const nullDistrict='441900,442000,460300,460400';//这些城市下面的没有区县
export const _body=document.body;

//loading加载效果
export  function loading(opt){
	opt=opt||{};
	opt.mask=!opt.mask||false;//是否要遮罩层
	let div=document.createElement("div");
	let _load=div.cloneNode(true);
	_load.className="spinner-cont";
	_load.innerHTML='<div class="spinner">'+
						'<div class="spinner-container container1">'+
							'<div class="circle1"></div>'+
							'<div class="circle2"></div>'+
							'<div class="circle3"></div>'+
							'<div class="circle4"></div>'+
						'</div>'+
						'<div class="spinner-container container2">'+
							'<div class="circle1"></div>'+
							'<div class="circle2"></div>'+
							'<div class="circle3"></div>'+
							'<div class="circle4"></div>'+
						'</div>'+
						'<div class="spinner-container container3">'+
							'<div class="circle1"></div>'+
							'<div class="circle2"></div>'+
							'<div class="circle3"></div>'+
							'<div class="circle4"></div>'+
						'</div>'+
						'<div class="spinner-container container4">'+
							'<div class="circle1"></div>'+
							'<div class="circle2"></div>'+
							'<div class="circle3"></div>'+
							'<div class="circle4"></div>'+
						'</div>'+
					'</div>';
	if(opt.mask){
		let _mask=div.cloneNode(true);
		_mask.className="mask";
		_mask.style.display="block";
		_body.appendChild(_mask)
		_mask.appendChild(_load);
		_body.appendChild(_mask);
	}else{
		_body.appendChild(_load);
	}
}
export function loadingRemove(){
	let obj=document.getElementsByClassName("spinner-cont")[0];
	if(obj){
       let parentObj=obj.parentNode;
	   
	   if(parentObj.tagName.toLowerCase()!=="BODY"){
		   parentObj.parentNode.removeChild(parentObj);
	   }else{
		  parentObj.removeChild(obj);
	   }
	}
}

export function GetQueryString(name)
{
     let reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     let r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

export function AlertFn(opt){
	opt=opt||{};
	opt.maskFlg=(opt.maskFlg==='undefined'&&opt.maskFlg)?true:false;//是否存在遮罩层
	opt.objClass=opt.objClass||"comm_alt_info";//对象的class
	opt.cont=opt.cont||"未知错误";//内容提示
	opt.titleCont=opt.titleCont||"提示";//内容提示
	opt.url=opt.url||"javascript:;";//内容提示
	opt._this=document.querySelector("."+opt.objClass);
	if(!opt.mask){//如果遮罩层对象不存在，就创建遮罩层对象
		if(document.getElementsByClassName("mask").length>0){
			opt.mask=document.getElementsByClassName("mask")[0];
			opt.mask.style.display="block";
		}else{
			opt.mask=document.createElement("div");
			opt.mask.className="mask";
			_body.appendChild(opt.mask);	
		}	
	}
	
	if(!opt._this){//如果对象不存在，就创建对象
		opt._this=document.createElement("div");
		opt._this.className=opt.objClass+" box-size";
		opt._this.innerHTML='<h2>'+opt.titleCont+'</h2>'+
						'<div class="cont">'+opt.cont+'</div>'+
						'<a href="javascript:;" class="btn_alt">确定</a>';
		_body.appendChild(opt._this);
	}else{
		opt._this.style.display="block";
		opt._this.querySelector(".cont").innerHTML=opt.cont;
		opt._this.querySelector("h2").innerHTML=opt.titleCont;

	}
	opt._this.style.marginTop=-Math.round(opt._this.clientHeight/2)+"px";
	opt.urlObj=opt._this.querySelector(".btn_alt");
	if(opt.fn&&Object.prototype.toString.call(opt.fn)=== '[object Function]'){
		opt.urlObj.onclick=function(){
			if(opt._this){opt._this.removeAttribute("style");opt._this.style.display="none";}
			if(opt.mask){opt.mask.removeAttribute("style");opt.mask.style.display="none";}
			opt.fn();
		}
	}else{
	   if(opt.url!='javascript:;'){
		   opt.urlObj.setAttribute("href",opt.url);
	   }else{	
			opt.urlObj.onclick=function(){
				if(opt._this){opt._this.removeAttribute("style");opt._this.style.display="none";}
				if(opt.mask){opt.mask.removeAttribute("style");opt.mask.style.display="none";}
			}				
		}
	}
}

export function ComfirmFn(opt){
	opt=opt||{};
	opt.maskFlg=(opt.maskFlg==='undefined'&&opt.maskFlg)?true:false;//是否存在遮罩层
	opt.objClass=opt.objClass||"comfirm_alt";//对象的class
	opt.cont=opt.cont||"未知错误";//内容提示
	opt.titleCont=opt.titleCont||"提示";//内容提示
	opt.url=opt.url||"javascript:;";//内容提示
	opt._this=document.querySelector("."+opt.objClass);
	if(!opt.mask){//如果遮罩层对象不存在，就创建遮罩层对象
			if(document.getElementsByClassName("mask").length>0){
				opt.mask=document.getElementsByClassName("mask")[0];
				opt.mask.style.display="block";
			}else{
				opt.mask=document.createElement("div");
				opt.mask.className="mask";
				_body.appendChild(opt.mask);	
			}	
	}
	
	if(!opt._this){//如果对象不存在，就创建对象
		opt._this=document.createElement("div");
		opt._this.className=opt.objClass+" box-size";
		opt._this.innerHTML='<h2>'+opt.titleCont+'</h2>'+
						'<div class="cont">'+opt.cont+'</div>'+
						'<div class="clearfix"><a href="javascript:;" class="ensure_btn">确定</a><a href="javascript:;" class="del_btn">取消</a></div>';
		_body.appendChild(opt._this);
	}else{
		opt._this.style.display="block";
		opt._this.querySelector(".cont").innerHTML=opt.cont;
		opt._this.querySelector("h2").innerHTML=opt.titleCont;
	}
	opt._this.style.marginTop=-Math.round(opt._this.clientHeight/2)+'px';
	
	opt.urlObj=opt._this.querySelector(".ensure_btn");
	if(opt.fn&&Object.prototype.toString.call(opt.fn)=== '[object Function]'){
		opt.urlObj.click(function(){
			if(opt._this){opt._this.removeAttribute("style");opt._this.style.display="none";}
			if(opt.mask){opt.mask.removeAttribute("style");opt.mask.style.display="none";}
			opt.fn();
		})
	}else{
	   if(opt.url!='javascript:;'){
		   opt.urlObj.setAttribute("href",opt.url);
	   }else{	
			opt.urlObj.onclic=function(){
				if(opt._this){opt._this.removeAttribute("style");opt._this.style.display="none";}
				if(opt.mask){opt.mask.removeAttribute("style");opt.mask.style.display="none";}
			};					
		}
	}
	opt.delObj=opt._this.querySelector(".del_btn");
	opt.delObj.onclick=function(){
		if(opt._this){opt._this.removeAttribute("style");opt._this.style.display="none";}
		if(opt.mask){opt.mask.removeAttribute("style");opt.mask.style.display="none";}
	};
}
//下拉刷新
export function scrollPage(params,fn){
	
	if(global.scrollFlg&&_body.scrollTop>=(_body.offsetHeight-window.innerHeight)){
		
		global.scrollFlg=false;
		//发现当前页大于会等于最大页是不在向后台请求
		if(params["index"]>=params["maxPage"])return false;
		params["index"]++;
		loading();
		fn(params);
	}
	
}

