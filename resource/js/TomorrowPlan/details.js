export default{
	data(){
		return {
			data:[],
 			flg:false
		}
	},
	beforeCreate(){
		let _this=this;
		this.commFn._body.style.background="#FFF";
		if(!this.$store.userInfo.id){
			this.$router.path({"path":"/login"})
		}

		if(!this.$route.params.id){
		  this.commFn.AlertFn({"cont":"数据出错,请从新再进入。",
		  	fn:function(){_this.$router.push({path:"/TomorrowPlan/index"})}
		  })
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
				_this.$data.flg=_this.$store.userInfo.id==data.user_id;
				console.log(_this.$data.flg);
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
				url:'TomorrowPlan.php',
				params:{"type":"updatePostil","postil":textarea.value,"id":_this.$route.params.id,"user_id":_this.$store.userInfo.id},
				successFn:function(data){
					_this.commFn.loadingRemove();
					if(data.flg){
						_this.commFn.AlertFn({"cont":"批注成功。",
							fn:function(){_this.$router.push({path:"/TomorrowPlan/details/"+_this.$route.params.id})}
						});
					}else{
						_this.commFn.AlertFn({"cont":"批注失败。"});
					}
				}
 			})
 		}
 	}
} 
