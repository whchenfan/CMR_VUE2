<template>
    <div>
        <header class="comm-header">
        <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>月工作计划<router-link v-if="flg" :to="'/monthlyPlan/edit/'+data.id" class="comm-edit"></router-link></h1></div>
          </header> 
    <section>
        
        <ul class="deatails  pdlr1 bg_FFF">
            <li>
                <label>月报主人</label>
                <span>{{data.user_name}}</span>
            </li>
            <li>
                <router-link :to="'/monthlyPlan/line/'+data.branch_id+'/'+data.id+'/'+data.create_time">
                    <label>所需部门</label>
                    <span>{{data.branch_name}}</span>
                    <span class="yan"></span>
                </router-link>
            </li>
        </ul>
        <div class="pdtb_5">
        <ul class="clearfix number_ul bg_FFF">
            <li class=" w_50 border-right"><label>计划洽谈量</label><em  class="f_c ">{{data.planned_volume}}</em></li>
            <li class="w_50"><label>实际洽谈量</label><em class="f_c ">{{data.actual_volume}}</em></li>
            <li><label>本月完成</label>
                <div class="bar"><div class="bar_progress" :style="'width:'+parseInt(data.actual_volume/data.planned_volume*100)>100?100:parseInt(data.actual_volume/data.planned_volume*100)+'%;'"></div></div>
                <i class="bar_number">{{parseInt(data.actual_volume/data.planned_volume*100)}}%</i>
            </li>
        </ul>
        </div>
        
        <div class="pdtb_5">
        <ul class="clearfix number_ul bg_FFF blue_color">
            <li class=" w_50 "><label>计划签约量</label><em  class="f_c ">{{data.planned_quantity}}</em></li>
            <li class="w_50 "></li>
            <li class=" w_50 border-right">
                <label>计划洽谈量</label><em  class="f_c ">{{data.actual_quantity}}</em>
            </li>
            <li class="w_50 pdl_1">
                <i class="fl w_25 ">直营</i>
                <em class="fl w_25 f_c">{{data.not_channel}}</em>
                <i class="fl w_25 f_c">渠道</i>
                <em class="fl w_25 f_r">{{data.channel}}</em>
            </li>
            <li><label>本月完成</label>
                <div class="bar"><div class="bar_progress" :style="'width:'+parseInt(data.actual_quantity/data.planned_quantity*100)>100?100:parseInt(data.actual_quantity/data.planned_quantity*100)+'%;'"></div></div>
                <i class="bar_number">{{parseInt(data.actual_quantity/data.planned_quantity*100)}}%</i>
            </li>
        </ul>
        </div>
        
        <ul class="deatails  pdlr1 border_top bg_FFF">
            <li>
                <label>月报编号</label>
                <span>{{data.monthly_id}}</span>
            </li>
            
            
            <li>
                <label>添加时间</label>
                <span>{{formTime(data.create_time)}}</span>
            </li>
            <li>
                <label>备注</label>
                <p class="bj">{{data.remark}}</p>
            </li>
        </ul>
        
    </section>
    </div>
</template>
<script>

	import MPDetails from  '../../js/monthlyPlan/details';

	export default{
		data:MPDetails.data,
		beforeCreate:MPDetails.beforeCreate,
		mounted:MPDetails.mounted
	}
</script>