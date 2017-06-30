export  default {
  //初始化默认数据
  data(){
      return {
          data:[],
          flg:false,
          province:[{code:"",address:"请选择省份"}].concat(this.cityDate.Province),
          city:[{code:"",address:"请选择城市"}],
          district:[{code:"",address:"请选择区县"}],
          roueceData:this.commFn.roueceData
      }
  },
  beforeCreate(){
        this.commFn._body.style.background="#f5f5f9";
        !this.$store.userInfo.id&&this.$router.push({ path: '/login'});   
  },
  mounted(){
     let _this=this;
     console.log(_this.$route);
     _this.ajaxFn({
        url:"CustomerInformation.php",
        params:{type:"details",id:_this.$route.params.id},
        successFn:function(data){
            _this.$data.data=data;
            if(data){
              _this.$data.flg=(_this.$store.userInfo.id==data.user_id);

              if(_this.cityDate[data.province].length==1){
                _this.$data.city=_this.cityDate[data.province];
              }else{
                _this.$data.city=_this.$data.city.concat(_this.cityDate[data.province]);
              }
              if(data.district){
                  _this.$data.district=_this.$data.district.concat(_this.cityDate[data.city]);
              }

            }
        }
     })
  },
  methods:{
    updateFn(){
        let inp=document.getElementsByTagName("input"),
            select=document.getElementsByTagName("select"),
            params="",btn=true,_this=this;
            for(let i=0,maxL=inp.length;i<maxL;i++){
                  if(inp[i].value){
                      if(inp[i].getAttribute("name")=='contact_mobile'
                        &&!iphoneExp.test(inp[i].value)){
                        _this.commFn.AlertFn({cont:"手机号码的格式不对"});
                         btn=false;
                        break;
                        
                      }
                      if(inp[i].getAttribute("name")=='contact_email'
                        &&!emailExp.test(inp[i].value)){
                        _this.commFn.AlertFn({cont:"邮箱格式不对"});
                          btn=false;
                          break; 
                      }
                       
                  }
                  params+='"'+inp[i].getAttribute("name")+'":"'+inp[i].value+'",';
               }
              if(!btn)return false;
            for(let i=0,maxL=select.length;i<maxL;i++){
                  let _value=select[i].value,
                      _name=select[i].getAttribute("name");
                  if(!_value){
                    if(_name=='source'){
                          _this.commFn.AlertFn({cont:"请选择客户来源渠道"});
                          btn=false;
                          break;  
                    }else if(_name=='province'){
                     
                          _this.commFn.AlertFn({cont:"请选择省份"});
                          btn=false;
                          break;
                    }else if(_name=='city'){
                          _this.commFn.AlertFn({cont:"请选择城市"});
                          btn=false;
                          break;
                    }else if(_name=='district'){
                        if(_this.commFn.nullDistrict.indexOf(document.querySelector('select[name="city"]').value)==-1){
                            _this.commFn.AlertFn({cont:"请选择区县"});
                              btn=false;
                              break;
                        }
                    }
                  }
                  params+='"'+select[i].getAttribute("name")+'":"'+select[i].value+'",';
               }
               if(!btn)return false; 
               
               params='{'+params+'"id":'+this.$data.data.id+',"user_id":'+_this.$store.userInfo.id+',"type":"update"}';
               console.log(params);
               this.commFn.loading();
               _this.ajaxFn({
                  url:"CustomerInformation.php",
                  params:JSON.parse(params),
                  successFn:function(data){
                    this.commFn.loadingRemove();
                    if(data.flg){
                      this.commFn.AlertFn({"cont":"修改数据成功"});
                    }else{
                      this.commFn.AlertFn({"cont":data.rspDesc||"修改数据失败"});
                    }
                  }.bind(_this)
               })
    },
    getProCityDis(a,b=null,c=null){
        let num=null;
        if(a!==null&&b!==null&c!==null){
        
           if(Array.isArray(this.cityDate[b])){
              this.cityDate[b].forEach(function(val){
                if(c==val.code){
                  num=val.address;
                }
              });
           }else{
              num="请选择区县";
           }
          
           if(!num)num="请选择区县";
        }else if(a!==null&&b!==null){
            if(Array.isArray(this.cityDate[a])){
            this.cityDate[a].forEach(function(val){
                if(b==val.code){
                  num=val.address;
                }
            });}
            if(!num)num="请选择城市";
          
        }else{
           
            this.cityDate.Province.forEach(function(val){
                if(a==val.code){
                  num=val.address;
                }
            });
          
            if(!num)num="请选择省份";
        }
        
        return num;
    },
    proCityDis(evnt){
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
                      _this.$data.data.province=_value; 
                      if(!_value){
                         city.querySelector("p>span").innerHTML="请选择城市"; 
                         _this.$data.city=[{code:"",address:"请选择城市"}],
                         district.querySelector("p>span").innerHTML="请选择区县"; 
                         _this.$data.district=[{code:"",address:"请选择区县"}];
                         
                      }else{
                         let cityDate=_this.cityDate[_value];
                        
                         if(cityDate.length==1){
                             _this.$data.data.city=cityDate[0].code;
                             city.querySelector("p>span").innerHTML=cityDate[0].code.address; 
                             _this.$data.city=cityDate;
                             _this.$data.district=[{code:"",address:"请选择区县"}].concat(_this.cityDate[cityDate[0].code]);
                             district.querySelector("p>span").innerHTML="请选择区县";
                         }else{
                              city.querySelector("p>span").innerHTML="请选择城市"; 
                              _this.$data.city=[{code:"",address:"请选择城市"}].concat(cityDate);  
                              _this.$data.district=[{code:"",address:"请选择区县"}];
                               district.querySelector("p>span").innerHTML="请选择区县";
                         }    
                      }
                      break;
                    case 'city':
                         _this.$data.data.city=_value; 
                         _this.$data.district=[{code:"",address:"请选择区县"}];
                       if(_this.cityDate[_value]){
                         _this.$data.district=_this.$data.district.concat(_this.cityDate[_value]);
                        }
                         district.querySelector("p>span").innerHTML="请选择区县"; 
                        break;
                    case 'district':
                         _this.$data.data.district=_value; 
                        break;
                    default:
                        break;
                   
                } 
    }

  }

    
}

