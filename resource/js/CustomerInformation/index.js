export  default {
 	//初始化默认数据
 	data(){
	    return {
	        data:[],
	        index:1,
	        maxPage:1,
	        power:1,
	        province:this.cityDate.Province,
	        city:[{code:"",address:"请选择城市"}],
	        district:[{code:"",address:"请选择区县"}]
	    }
	},
	beforeCreate(){
	      this.commFn._body.style.background="#f5f5f9";
	      !this.$store.userInfo.id&&this.$router.push({ path: '/login'});	  
	},
	mounted(){
        let _this=this,
        id=this.$store.userInfo.id;
        _this.commFn.loading();
        _this.ajaxFn({
            'url':'CustomerInformation.php',
            'params':{"user_id":id},
            successFn:function(listDate){
                
               _this.commFn.loadingRemove();
               _this.$data.data=listDate.data||[];
               _this.$data.index=listDate.index||1; 
               _this.$data.maxPage=listDate.maxPage||0; 
               params["index"]=_this.$data.index;
               params["user_id"]=id;
               params["maxPage"]=listDate.maxPage||0;
             
               //_this.commFn.scrollPage(params,_this.dataFn);
            	 window.addEventListener("scroll",_this.scrollPage,false);
            }
        });
    },
    methods:{
        //获取ajax得到的数据
        dataFn(params,flg=true){
        	let _this=this;
        	 _this.ajaxFn({
	            'url':'CustomerInformation.php',
	            'params':params,
	            successFn:function(listDate){
	            	
	               _this.$data.data=flg?_this.$data.data.concat(listDate.data):listDate.data;
	               _this.$data.index=listDate.index||1; 
	               _this.$data.maxPage=listDate.maxPage||0; 
	               params["index"]=_this.$data.index;
	               params["maxPage"]=listDate.maxPage||0;
	               setTimeout(function(){
      		    		  global.scrollFlg=true;
      		    		 this.commFn.loadingRemove();
      		    	   }.bind(_this),5E2);
      	              
	              }
        	})
        },
        //省份城市区县
        proCityDis(event){
                let _this=this,
                	district=document.getElementById("district"),
                    city=document.getElementById("city"),
                    _thisObj=event.target,
                    _span=(_thisObj.previousElementSibling||_this.previousSibling).querySelector("span"),
                    _index=_thisObj.selectedIndex,
                    _value=_thisObj.value,
                    option=_thisObj.options[_index],
                    _id=_thisObj.parentNode.id;
                _span.innerHTML=option.innerHTML;
                switch(_id){
                    case 'province':
                        if(!_value){
                           city.querySelector("p>span").innerHTML="请选择城市"; 
                           _this.$data.city=[{code:"",address:"请选择城市"}],
                           district.querySelector("p>span").innerHTML="请选择区县"; 
                           _this.$data.district=[{code:"",address:"请选择区县"}]
                           params["city"]="";
                        }else{
                           let cityDate=_this.cityDate[_value];
                           if(cityDate.length==1){
                               city.querySelector("p>span").innerHTML=cityDate[0].address; 
                               _this.$data.city=cityDate;
                               let districtDate=[{code:"",address:"请选择区县"}].concat(_this.cityDate[cityDate[0].code]);
                               district.querySelector("p>span").innerHTML="请选择区县";
                               _this.$data.district=districtDate;
                           	  params["city"]=cityDate[0].code;
                           }else{
                                city.querySelector("p>span").innerHTML="请选择城市"; 
                                _this.$data.city=[{code:"",address:"请选择城市"}].concat(cityDate);  
                           	   params["city"]="";
                           } 
                            
                        }
                        params["index"]=1;
                        params["province"]=_value;
                       
                        params["district"]="";
                        break;
                    case 'city':
                         _this.$data.district=[{code:"",address:"请选择区县"}].concat(_this.cityDate[_value]);
                         district.querySelector("p>span").innerHTML="请选择区县";   
                         params["city"]=_value;
                        break;
                    case 'district':
                        params["district"]=_value;
                        break;
                    default:
                        break;
                   
                } 
                params["search"]=document.querySelector("#search").value; 
                params["index"]=1;
                params["maxPage"]='';
                this.commFn._body.scrollTop=0;
                this.commFn.loading();
                this.dataFn(params,false);
            },
            searchFn(){
      		    	params["search"]=document.querySelector("#search").value; 
      		    	if(!params["search"].trim()){
      		    		this.commFn.AlertFn({"cont":"请输入要搜索的内容！"});
      		    		return false;
      		    	}
      		    	
      		    	params["index"]=1;
      		      params["maxPage"]='';
      		      params["province"]=document.querySelector('select[name="province"]').value;
                params["city"]=document.querySelector('select[name="city"]').value;
                params["district"]=document.querySelector('select[name="district"]').value;
      		    	this.commFn._body.scrollTop=0;
      		      this.commFn.loading();
      		      this.dataFn(params,false);
		      },
          scrollPage(){
              this.commFn.scrollPage(params,this.dataFn)
          }
    },
    beforeDestroy:function(){
       window.removeEventListener("scroll",this.scrollPage);
       this.commFn._body.scrollTop=0;
       global.scrollFlg=true;
    }

}
const params={};
