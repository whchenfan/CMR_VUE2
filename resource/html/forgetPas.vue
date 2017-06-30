<template>
	<div>
		 <header class="comm-header">
    	<div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>忘记密码</h1></div>
    </header> 
    <section class="login pdt_5 pdl_37">
    	
        	<ul>
            	<li class="pdl1_6">
                	<i class="user_icon"></i>
                    <div class="inp_div">
                    	<input class="inp" name="name" placeholder="请输入会员名" type="text" />
                    </div>
                </li>
                <li class="pdl1_6">
                	<i class="lock_icon"></i>
                    <div class="inp_div rel">
                    	<input class="inp" name="pass"  placeholder="旧密码" type="password" />
                        <em class="yan_icon" @click="yanIcon($event)"></em>
                    </div> 
                </li>
                <li class="pdl1_6">
                    <i class="lock_icon"></i>
                    <div class="inp_div rel">
                        <input class="inp" name="newsPass"  placeholder="新密码" type="password" />
                        <em class="yan_icon" @click="yanIcon($event)"></em>
                    </div> 
                </li>
                <li class="pdl1_6">
                    <i class="lock_icon"></i>
                    <div class="inp_div rel">
                        <input class="inp" name="rnewsPass" placeholder="确认密码" type="password" />
                        <em class="yan_icon" @click="yanIcon($event)"></em>
                    </div> 
                </li>
            </ul>
            <div class="pdlr1 pdt1">
                <button v-on:click="btnFn()" class="btn_login">确定</button>
            </div>
        
    </section>
	</div>
</template>

<script>
  export default{
     beforeCreate(){
        this.commFn._body.style.background="#FFF";
     },
     methods:{
        yanIcon(){
            let inp=event.target.previousElementSibling||event.target.previousSibling;
                inp.getAttribute("type")=='password'?inp.setAttribute("type","text"):inp.setAttribute("type","password");
        },
        btnFn(){
            let _name=document.querySelector('input[name="name"]'),
                _pass=document.querySelector('input[name="pass"]'),
                _newsPass=document.querySelector('input[name="newsPass"]'),
                _rnewsPass=document.querySelector('input[name="rnewsPass"]');
            if(!_name.value){
                this.commFn.AlertFn({"cont":"用户名不能为空"});
                return false;
            }
           
            if(!_pass.value){
                this.commFn.AlertFn({"cont":"旧密码不能为空！"});
                return false;
            }
            if(!_newsPass.value){
                this.commFn.AlertFn({"cont":"新密码不能为空！"});
                return false;
            }
            if(!_rnewsPass.value){
                this.commFn.AlertFn({"cont":"确认密码不能为空"});
                return false;
            }
            if(_newsPass.value!=_rnewsPass.value){
                this.commFn.AlertFn({"cont":"两次密码不一样，请从新输入！"});
                return false;
            }
            let _this=this;
             this.commFn.AlertFn({"cont":"修改密码还没有对外开放，敬请期待！",fn:function(){_this.$router.push({path:"/index"})}});

        }
     }

  }
</script>