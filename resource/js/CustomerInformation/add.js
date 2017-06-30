
export default{
	data(){
	    return {
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


	},
	methods:{
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
                           	 
                           }else{
                                city.querySelector("p>span").innerHTML="请选择城市"; 
                                _this.$data.city=[{code:"",address:"请选择城市"}].concat(cityDate);  
                           	 
                           } 
                            
                        }
                       
                        break;
                    case 'city':
                         _this.$data.district=[{code:"",address:"请选择区县"}].concat(_this.cityDate[_value]);
                         district.querySelector("p>span").innerHTML="请选择区县"; 
                        break;
                    case 'district':
                      
                        break;
                    default:
                        break;
                   
                } 
              
        },
        submitFn(){
		   		let inp=document.getElementsByTagName("input"),
                   select=document.getElementsByTagName("select"),
                   params="",btn=true,_this=this;
               
               for(let i=0,maxL=inp.length;i<maxL;i++){
               		let _value=inp[i].value,
               	    _name=inp[i].getAttribute("name");
               	  if(!_value){
               	  	  if(_name=='contact_name'){
               	  	  	_this.commFn.AlertFn({cont:"联系人姓名不能为空。"});
               	  	  	btn=false;
               	  	  	break;
               	  	  }
               	  	  if(_name=='company_name'){
               	  	  	_this.commFn.AlertFn({cont:"公司名称不能为空。"});
               	  	  	btn=false;
               	  	  	break;
               	  	  }
               	  	  if(_name=='company_mobile'){
               	  	  	_this.commFn.AlertFn({cont:"联系人电话号码不能为空。"});
               	  	  	break;
               	  	  }
               	  	  if(_name=='contact_business'){
               	  	  	_this.commFn.AlertFn({cont:"联系人职务不能为空。"});
               	  	  	btn=false;
               	  	  	break;
               	  	  }
               	  	  if(_name=='contact_address'){
               	  	  	_this.commFn.AlertFn({cont:"公司详情地址不能为空。"});
               	  	  	btn=false;
               	  	  	break;
               	  	  }
               	  }
                  if(_value){
                      if(inp[i].getAttribute("name")=='contact_email'
                        &&!emailExp.test(inp[i].value)){
                         _this.commFn.AlertFn({cont:"邮箱格式不对"});
                         btn=false;
                         break; 
                      }   
                  }
                  params+='"'+inp[i].getAttribute("name")+'":"'+inp[i].value+'",';
               }
              if(!btn)return;
              for(let i=0,maxL=select.length;i<maxL;i++){
                
                   let _value=select[i].value;
                   let _name=select[i].getAttribute("name");

                  if(!_value&&_name=='source'){
                     _this.commFn.AlertFn({cont:"请选择客户来源渠道"});
                          btn=false;
                          break;  
                  }else if(!_value&&_name=='province'){
                     _this.commFn.AlertFn({cont:"请选择省份"});
                          btn=false;
                          break;

                  }else if(!_value&&_name=='city'){
                     _this.commFn.AlertFn({cont:"请选择城市"});
                          btn=false;
                          break;

                  }else if(!_value&&_name=='district'){
                    if(_this.commFn.nullDistrict.indexOf(document.querySelector('select[name="city"]').value)==-1){
                            _this.commFn.AlertFn({cont:"请选择区县"});
                              btn=false;
                              break;
                      }
                  }
                  params+='"'+select[i].getAttribute("name")+'":"'+select[i].value+'",';
               }
              if(!btn)return;
            
               params='{'+params+'"user_id":'+(global.userInfo.id)+',"type":"submit"}';
             
              _this.commFn.loading();
              _this.ajaxFn({
              	 url:"CustomerInformation.php",
                 params:JSON.parse(params),
                 successFn:function(data){
                 	_this.commFn.loadingRemove();
                 	if(data.flg){
                   		 _this.commFn.AlertFn({"cont":"添加数据成功。"});
	                }else{
	                    _this.commFn.AlertFn({"cont":"添加数据失败。"});
	                }
                 }
              })
        }

	}
}




