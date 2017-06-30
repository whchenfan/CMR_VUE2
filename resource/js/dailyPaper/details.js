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
		showPostil(){
			let mask=document.querySelector(".mask");
			mask.style.display="block";
		},
		hidePostil(){
			let mask=document.querySelector(".mask");
			mask.style.display="none";
		},
		submitPostil(){
			let _this=this;
			let textarea=document.querySelector("textarea.exte");
			if(!textarea.value){
				textarea.focus();
				return false;
			}
 			_this.commFn.loading();
 				
 			_this.ajaxFn({
				url:'dailyPaper.php',
				params:{"type":"updatePostil","postil":textarea.value,"id":_this.$route.params.id},
				successFn:function(data){
					_this.commFn.loadingRemove();
					if(data.flg){
						_this.commFn.AlertFn({"cont":"批注成功。",
							fn:function(){_this.$router.push({path:"/dailyPaper/index"})}
						});
					}else{
						_this.commFn.AlertFn({"cont":"批注失败。"});
					}
				}
 			})
 		}
 	}
} 
