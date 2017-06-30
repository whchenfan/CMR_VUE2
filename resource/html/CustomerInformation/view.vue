<template>
    <router-view></router-view>
</template>
<script>
 export   default{
    beforeCreate(){
    	console.log(this.$route.params.id);
          !this.$store.userInfo.id?this.$router.push({ path: '/login'}):this.$router.push({ path: '/CustomerInformation/index'});
    },
	beforeUpdate(){
		//防止点击后退时候回到视图页面
		if(this.$route.path=='/CustomerInformation'){
			if(this.$store.userInfo.id){
				this.$router.push({"path":"/index"});
			}else{
				this.$router.push({"path":"/login"});
			}
		}
	}
 }
</script>

