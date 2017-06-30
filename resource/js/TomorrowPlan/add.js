export default{
	beforeCreate(){
        this.commFn._body.style.background="#f5f5f9";
		if(!this.$store.userInfo.id){
			this.$router.path({"path":"/login"})
		}
       
	},
	mounted(){
		this.windowResize();
        
        this.$nextTick(function(){
          window.addEventListener("resize",this.windowResize,false); 
        });
		
	},
	beforeDestroy(){
		window.removeEventListener("resize",this.windowResize,false);
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
                this.commFn.AlertFn({"cont":"明日计划内容不能为空"});
                return false;
            }
            let params={
                "remark":_value,
                "user_id":_this.$store.userInfo.id,
                "type":"submit"
             }
             this.ajaxFn({
                url:"TomorrowPlan.php",
                params:params,
                successFn:function(data){
                    if(data.flg){
                    	_this.commFn.AlertFn({"cont":"添加数据成功",
                    		fn:function(){_this.$router.push({path:"TomorrowPlan/index"})}
                    	});
                    }else{
                        _this.commFn.AlertFn({"cont":"添加数据失败"});
                    }
                }
             })
        }  
	}
}