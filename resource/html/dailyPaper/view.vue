<template>
	<router-view></router-view>
</template>
<script>
	export default{
		beforeCreate(){
			if(this.$store.userInfo.id){
				this.$router.push({"path":"/dailyPaper/index"});
			}else{
				this.$router.push({"path":"/login"});
			}
		},
		beforeUpdate(){
			//防止点击后退时候回到视图页面
			if(this.$route.path=='/dailyPaper'){
				if(this.$store.userInfo.id){
					this.$router.push({"path":"/index"});
				}else{
					this.$router.push({"path":"/login"});
				}
			}
		}
	}
</script>