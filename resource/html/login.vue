<template>
	<div>
		<header class="comm-header">
	    	<div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>登录</h1></div>
	    </header> 
    <section class="login pdt_5">
        	<ul>
            	<li class="pdl1_6">
                	<i class="user_icon"></i>
                    <div class="inp_div">
                    	<input class="inp" placeholder="会员名" type="text" name="user_name" :value="name" />
                    </div>
                </li>
                <li class="pdl1_6">
                	<i class="lock_icon"></i>
                    <div class="inp_div rel">
                    	<input class="inp" placeholder="登录密码" type="password" name="pass" :value="pass" />
                        <em class="yan_icon" @click="yanIcon($event)"></em>
                    </div>
                </li>
                
            </ul>
            <div class="pdlr1 pdt1">
                <button @click="loginFn()"  class="btn_login">登录</button>
            	
            	<router-link to="/forgetPas" class="forget_pas" tag="a">忘记密码?</router-link>
                
            </div>
       
    </section>
	</div>
</template>
<script>

  export default {
        data(){
            return {"name":"admin","pass":"admin123456"}
        },
        beforeCreate(){
            this.commFn._body.style.background="#fff";
        },
        methods: {
              yanIcon(event){
        		let inp=event.target.previousElementSibling||event.target.previousSibling;
        		inp.getAttribute("type")=='password'?inp.setAttribute("type","text"):inp.setAttribute("type","password");
               },
              loginFn(){
                let user_name=document.querySelector('input[name="user_name"]'),
                    pass=document.querySelector('input[name="pass"]'),
                    _this=this;
                if(!user_name.value){
                    _this.commFn.AlertFn({"cont":"用户名不能为空"});
                    return false;
                }
                if(!pass.value){
                    _this.commFn.AlertFn({"cont":"密码不能为空"});
                    return false;
                }
                this.commFn.loading()
                _this.ajaxFn({
                    "url":"login.php",
                    "params":{"user":user_name.value,"pass":pass.value},
                    "successFn":function(data){
                        _this.commFn.loadingRemove();
                       if(data.flg){
                        console.log(_this.$store);
                            _this.$store.userInfo=data.user;
                            
                            _this.$router.push({path:"/index"});
                       }else{
                           _this.commFn.AlertFn({"cont":"用户名或密码错误！"});
                       }
                    }
                  });
              }
        }
   }

</script>