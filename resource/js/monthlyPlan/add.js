export default{
	beforeCreate(){
        this.commFn._body.style.background="#fff";
		if(!this.$store.userInfo.id){
			this.$router.path({"path":"/login"})
		}
	},
	methods:{
		submintFn(){
            let params={},_this=this;
            let inp=document.querySelectorAll("input"),
                textarea=document.querySelector("textarea"),
                btn=false;
            for(let i=0,maxl=inp.length;i<maxl;i++){
                let _value=inp[i].value,
                    _name=inp[i].getAttribute("name");
                if(!_value){
                    if(_name=="planned_volume"){
                        _this.commFn.AlertFn({"cont":"计划洽谈量不能为空。"});
                    }
                    if(_name=="planned_quantity"){
                        _this.commFn.AlertFn({"cont":"实际洽谈量不能为空。"});
                    }
                    btn=true;
                    break;
                } 
                params[_name]=_value;   
            }
            if(btn)return false;
            if(!textarea.value){
                 _this.commFn.AlertFn({"cont":"备注不能为空。"});
                 return false;
            }else{
                params[textarea.getAttribute("name")]=textarea.value;
            }
            params["type"]="submit";
            params["user_id"]=user.id;
            _this.commFn.loading();
            _this.ajaxFn({
                url:"monthlyPlan.php",
                params:params,
                success(data){
                    if(data.flg){
                        _this.commFn.AlertFn({"cont":"添加数据成功。",
                        	fn:function(){_this.$router.push({path:"/monthlyPlan/index"})}});
                    }else{
                        _this.commFn.AlertFn({"cont":"添加数据失败。"});
                    }
                }
            });
        }
	}
}