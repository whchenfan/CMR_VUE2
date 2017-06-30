export default{
	data(){
		return {
			data:[],
 			user_id:0,
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
		_this.$data.user_id=this.$store.userInfo.id;
		_this.commFn.loading();
		_this.ajaxFn({
			url:"dailyPaper.php",
			params:{id:_this.$route.params.id,type:"select"},
			successFn:function(data){
				_this.commFn.loadingRemove();
				_this.$data.data=data;
				_this.$data.flg=data.user_id==_this.$data.user_id;
			}
		})
 	},
 	methods:{
 		selFn(event){
			let _this=event.target,
				_index=_this.selectedIndex,
				options=_this.options;
			_this.parentNode.querySelector("span").innerHTML=options[_index].innerHTML;
 		},
 		updateFn(){
			let _this=this;
			let inp=document.querySelectorAll("input"),
			    btn=true,
			    params={};
			for(let i=0,maxl=inp.length;i<maxl;i++){
				let _value=inp[i].value,
					_name=inp[i].getAttribute("name");
				if(_value){
					params[_name]=_value;
				}
			}
 				
			let select=document.querySelectorAll("select");
			for(let i=0,maxl=select.length;i<maxl;i++){
				let _name=select[i].getAttribute("name"),
					_value=select[i].value;
				if(_value){
					params[_name]=_value;
				}
				
			}
			params['user_id']=_this.$store.userInfo.id;
			params['id']=_this.$route.params.id;
			params['type']='update';
			_this.commFn.loading();
			_this.ajaxFn({
				url:'dailyPaper.php',
				params:params,
				successFn:function(data){
					_this.commFn.loadingRemove();
					if(data.flg){
						_this.commFn.AlertFn({"cont":"修改数据成功。"});
					}else{
						_this.commFn.AlertFn({"cont":data.rspDesc||"修改数据失败。"});
					}
				}
			})
 		}
 	}

} 
