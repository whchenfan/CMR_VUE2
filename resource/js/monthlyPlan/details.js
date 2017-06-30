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
			url:"monthlyPlan.php",
			params:{id:_this.$route.params.id,type:"select"},
			successFn:function(data){
				_this.commFn.loadingRemove();
				_this.$data.data=data;
				_this.$data.flg=data.user_id==_this.$data.user_id;
			}
		})
 	}
} 
