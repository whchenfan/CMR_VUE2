export default{
	data(){
		return {
			data:[],
			index:1,
      maxPage:0
		}
	},
	beforeCreate(){
    this.commFn._body.style.background="#f5f5f9";
		!this.$store.userInfo.id&&this.$router.push({ path: '/login'});	  
	},
	mounted(){
		let _this=this; 
		this.commFn.loading();            
      _this.ajaxFn({
          url:"monthlyPlan.php",
          params:{user_id:_this.$store.userInfo.id,index:_this.$data.index},
          successFn:function(data){
              this.commFn.loadingRemove();
              this.$data.data=data.data;
              this.$data.index=data.index;
              this.$data.maxPage=data.maxPage;
              params["index"]=_this.$data.index;
              params["user_id"]=this.$store.userInfo.id;
         		//下拉分页
         		window.addEventListener("scroll",_this.scrollPage,false);
          }.bind(_this)
      })

	},
	methods:{
		addFn(){
			let _this=this;
      this.commFn.loading();
      this.ajaxFn({
          url:"monthlyPlan.php",
          params:{"type":"selectAdd","user_id":_this.$store.userInfo.id},
          successFn:function(data){
            _this.commFn.loadingRemove();
             if(data.flg){
             		_this.$router.push({"path":"/monthlyPlan/details/"+data.id});
             }else{
                	_this.$router.push({"path":"/monthlyPlan/add"});
             }

          }
      })
    },
		//获取ajax得到的数据
    dataFn(params,flg=true){
        	let _this=this;
        	 _this.ajaxFn({
	            'url':'monthlyPlan.php',
	            'params':params,
	            successFn:function(listDate){
	            	console.log(listDate);
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
    scrollPage(){
          this.commFn.scrollPage(params,this.dataFn)
    },
		searchFn(){
            let search=document.querySelector('input[name="search"]');
            let startValue=document.querySelector('input[name="startTime"]').value;
            let endValue=document.querySelector('input[name="endTime"]').value;
            if(!search.value&&!startValue&&!endValue){
                this.commFn.AlertFn({"cont":"搜索条件不能为空"});
                return false;
            }
            if(!!startValue&&!!endValue&&Date.parse(startValue)>=Date.parse(endValue)){
                this.commFn.AlertFn({"cont":"开始日期不能大于或等于结束日期"});
                return false;
            }
            params["index"]=1;
            params["search"]=search.value;
            params["startTime"]=startValue;
            params["endTime"]=endValue;
            let _this=this;
            this.ajaxFn({
                url:'dailyPaper.php',
                params:params,
                successFn:function(listDate){
                    _this.$data.data=listDate.data;
                    _this.$data.index=listDate.index;
                    _this.$data.maxPage=listDate.maxPage;
                }
            });

        },
        inpTime(_this){
            let _obj=_this.target,
            	_span=(_obj.previousElementSibling||_obj.previousSibling).querySelector("span");
            !_obj.value?_span.innerHTML="请选择":_span.innerHTML=_obj.value;
        }
	},
    beforeDestroy:function(){
       window.removeEventListener("scroll",this.scrollPage);
       this.commFn._body.scrollTop=0;
       global.scrollFlg=true;
    }
} 
const params={};