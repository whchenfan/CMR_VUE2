<template>
  <div>
  <header class="comm-header">
      <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>CRM</h1></div>
  </header> 
	<section class="index">
      <ul class="clearfix">
        <li> 
              <!--CustomerInformationList.html-->
              <router-link to="/CustomerInformation" tag="a">
                <i class="icon icon_01"></i>
                  <p>客户信息</p>
               </router-link>
            </li>
            <li>
             <!--dailyPaper.html-->
              <router-link to="/dailyPaper" tag="a">
                <i class="icon icon_02"></i>
                  <p>日报</p>
              </router-link>
            </li>
            <li>
              <!--TomorrowPlan.html-->
              <router-link to="/TomorrowPlan" tag="a">
                <i class="icon icon_03"></i>
                  <p>明日计划</p>
              </router-link>
            </li>
            <li>
              <!--monthlyPlan.html-->
              <router-link to="/monthlyPlan" tag="a">
                <i class="icon icon_04"></i>
                  <p>月工作计划</p>
              </router-link>
            </li>
            <li @click="routerFn">
              <a href="javascript:;">
                <i class="icon icon_05"></i>
                  <p>审批</p>
                </a>
            </li>
            <li @click="routerFn">
              <a href="javascript:;">
                <i class="icon icon_06"></i>
                  <p>定位</p>
                </a>
            </li>
            <li @click="routerFn">
              <a href="javascript:;">
                <i class="icon icon_07"></i>
                  <p>数据展示</p>
                </a>
            </li>
            
      </ul>
    </section>
  </div>
</template>
<script>
  
  export default{
    beforeCreate(){
      this.commFn._body.style.background="#f5f5f9";
      !this.$store.userInfo.id&&this.$router.push({ path: '/login'});

    },
    methods:{
        routerFn(){
            this.commFn.AlertFn({cont:"该功能未开放，敬请期待！"});
        }
    },
    mounted(){
     
    }
  }
   
  
  
 
</script>