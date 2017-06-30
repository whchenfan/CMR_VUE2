/*
	url 必填 表示请求地址
	successFn   成功后调用的函数 返回string 和xml数据
	loadFn 请求完成马上调用
    errorFn ajax调用失败  返回的数据只有请求状态 timeout 请求超时 Not Found 未找到文件
    type  请求的类型
    params 返回的带参的值
    async 同步还是异步请求 true 同步 false 异步
    timeout  请求超时的时间  默认时间我六秒
 */
//请求文件的地址
const ajaxHref="http://192.168.199.29/CMR_VUE/php/";
/*
colleague.php
CustomerInformation.php
dailyPaper.php
login.php
monthlyPlan.php
TomorrowPlan.php
 */
export default function (opt){
   
	(typeof opt).toLowerCase()=="string"&&(opt={url:opt});
	opt=opt||{};
	if(!opt.url){alert("请求路径不能为空");return false;}
	opt.type=opt.type||"GET";
	opt.type=opt.type.toUpperCase()=="GET"?"GET":"POST";
    opt.params=opt.params||{};
    opt.async=opt.async===false?false:true;
    opt.abortFlag=true;//用来阻止
    opt.href="?";
    opt.timeout=!!opt.timeout?(parseInt(opt.timeout)?parseInt(opt.timeout):6E3):6E3;
	let xmlhttp=null;
    for(let j in opt.params){
    	opt.href+=j+"="+encodeURI(opt.params[j])+"&";
    }
    opt.href=opt.href.substr(0,opt.href.length-1);
    //如果successFn函数不存在，我就定义一个空函数
    Object.prototype.toString.call(opt.successFn)!='[object Function]'
     &&(opt.successFn=function(){}); 
	(function loadXMLDoc(url){
	    if (window.XMLHttpRequest){// code for IE7, Firefox, Opera, etc.
	          xmlhttp=new XMLHttpRequest();
	    }else if (window.ActiveXObject){// code for IE6, IE5
	          xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	    }
	    //beforeFn 请求之间调用
	    Object.prototype.toString.call(opt.beforeFn)=='[object Function]'
            		&&opt.beforeFn();
       //多少秒钟后告诉用户请求超时
        let time=setTimeout(function(){
        		clearTimeout(time);time=null;
        		opt.abortFlag=false;
        		xmlhttp.abort();
        		Object.prototype.toString.call(opt.errorFn)=='[object Function]'&&opt.errorFn('timeout');		
        	},opt.timeout); 
        //这里我就不去处理兼容了
        xmlhttp.onreadystatechange=function(){
        	/*
	        	0: 请求未初始化
				1: 服务器连接已建立
				2: 请求已接收
				3: 请求处理中
				4: 请求已完成，且响应已就绪
        	 */
            if(xmlhttp.readyState==4){
	           opt.abortFlag&&Object.prototype.toString.call(opt.loadFn)=='[object Function]'
            		&&opt.loadFn();
            	if(xmlhttp.status==200){
            		if(opt.abortFlag){
                        clearTimeout(time);time=null;
                       
                        opt.successFn(
            			opt.returnType&&opt.returnType.toUpperCase()=="XML"
            			?xmlhttp.responseXML:JSON.parse(xmlhttp.responseText)
            			);
                    }
            	}else if(xmlhttp.status==0||xmlhttp.status==404){
            		  clearTimeout(time);time=null;
                     opt.abortFlag&&Object.prototype.toString.call(opt.errorFn)=='[object Function]'&&opt.errorFn('Not Found');
            	}else{
                      clearTimeout(time);time=null;
            		 opt.abortFlag&&Object.prototype.toString.call(opt.errorFn)=='[object Function]';
            	}
            }
        };
        //判断是post请求还是get请求
        if(opt.type=="PSOT"){
        	xmlhttp.open("GET",ajaxHref+url,opt.async);
		    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		    xmlhttp.send(opt.href||null);
        }else{
        	xmlhttp.open("GET",ajaxHref+url+opt.href,opt.async);
		    xmlhttp.send(null);
        }
    })(opt.url);

  }

