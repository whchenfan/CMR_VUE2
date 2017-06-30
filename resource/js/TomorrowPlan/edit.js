export default{
	data(){
		return {
			data:[],
 			flg:false
		}
	},
	beforeCreate(){
		let _this=this;
		this.commFn._body.style.background="#f5f5f9";
		if(!this.$store.userInfo.id){
			this.$router.path({"path":"/login"})
		}
		if(!this.$route.params.id){
		  this.commFn.AlertFn({"cont":"数据出错,请从新再进入。","fn":function(){window.history.back();}})
		  return false;
		}
	},
 	mounted(){
		let _this=this;
		_this.commFn.loading();
		_this.ajaxFn({
			url:"TomorrowPlan.php",
			params:{id:_this.$route.params.id,type:"select"},
			successFn:function(data){
				_this.commFn.loadingRemove();
				_this.$data.data=data;
				_this.$data.flg=data.user_id==_this.$store.userInfo.id;
				_this.windowResize();
				window.addEventListener("resize",_this.windowResize,false);
			}
		})
 	},
 	methods:{
 		windowResize(){
			let _this=this;
			console.log(Math.max(window.innerHeight,_this.commFn._body.clientHeight));
			document.getElementsByClassName("add_cont")[0].style.height=
				Math.max(window.innerHeight,_this.commFn._body.clientHeight)-document.querySelector(".comm-header").clientHeight+"px";
		},
 		submitFn(){
            let _this=this,
            	_value=document.querySelector('textarea[name="remark"]').value;
            if(!_value){
                _this.commFn.AlertFn({"cont":"明日计划内容不能为空"});
                return false;
            }
            let params={
                "remark":_value,
                "id":_this.$route.params.id,
                "user_id":_this.$store.userInfo.id,
                "type":"update"
             }
             _this.commFn.loading();
             this.ajaxFn({
                url:"TomorrowPlan.php",
                params:params,
                successFn(data){
                    console.log(data);
                    _this.commFn.loadingRemove();
                    if(data.flg){
                        _this.commFn.AlertFn({"cont":"修改数据成功"});
                    }else{
                        _this.commFn.AlertFn({"cont":data.rspDesc||"修改数据失败"});
                    }
                }
             })
        }  
 	}

} 
