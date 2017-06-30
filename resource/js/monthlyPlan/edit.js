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
			url:"monthlyPlan.php",
			params:{id:_this.$route.params.id,type:"select"},
			successFn:function(data){
				_this.commFn.loadingRemove();
				_this.$data.data=data;
				_this.$data.flg=data.user_id==_this.$store.userInfo.id;
			}
		})
 	},
 	methods:{
 		 updateFn(){
            let _this=this,
                _actual=document.querySelector('input[name="actual_volume"]'),
                _channel=document.querySelector('input[name="channel"]'),
                _not_channel=document.querySelector('input[name="not_channel"]'),
                params={};

                if(_actual.value&&parseInt(_actual.value)){
                    params['actual_volume']=parseInt(_actual.value);
                }else{
                   params['actual_volume']=_this.$data.data.actual_volume; 
                }
                if(_channel.value&&parseInt(_channel.value)){
                    params['channel']=parseInt(_channel.value);
                }else{
                   params['channel']=_this.$data.data.channel; 
                }
                if(_not_channel.value&&parseInt(_not_channel.value)){
                    params['not_channel']=parseInt(_not_channel.value);
                }else{
                   params['not_channel']=_this.$data.data.not_channel; 
                }
                params["id"]=_this.$route.params.id;
                params["type"]="update";
                      
                _this.ajaxFn({
                    url:"monthlyPlan.php",
                    params:params,
                    successFn(data){
                       if(data.flg){
                            _this.commFn.AlertFn({"cont":"修改数据成功。",
                            	fn:function(){_this.$router.push({path:"/monthlyPlan/edit/"+_this.$route.params.id})}});
                       }else{
                            _this.commFn.AlertFn({"cont":"修改数据失败"});
                       }
                    }

                })

        }
               
 	}

} 
