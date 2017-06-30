<template>
    <div>
        <header class="comm-header">
        <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>修改月工作计划</a></h1></div>
    </header> 
    <section class="pdb3">
        <form action="" method="post">
        <ul class="deatails  pdlr1 bg_FFF">
            <li>
                <label>所需部门</label>
                
            </li>
        </ul>
        <div class="pdtb_5">
        <ul class="clearfix number_ul bg_FFF">
            <li class=" w_50 border-right"><label>计划洽谈量</label><em  class="f_c">{{data.planned_volume}}</em></li>
            <li class="w_50"><label>实际洽谈量</label><em class="f_c"><input type="number" name="actual_volume" class="w_100" :placeholder="data.actual_volume" /></em></li>
            <li><label>本月完成</label>
                <div class="bar"><div class="bar_progress" :style="'width:'+parseInt(100*data.actual_volume/data.planned_volume)>100?100:parseInt(100*data.actual_volume/data.planned_volume)+'%;'"></div></div>
                <i class="bar_number">{{parseInt(100*data.actual_volume/data.planned_volume)}}%</i>
            </li>
        </ul>
        </div>
        
        <div class="pdtb_5">
        <ul class="clearfix number_ul bg_FFF blue_color">
            <li class=" w_50 "><label>计划签约量</label><em  class="f_c ">{{data.planned_quantity}}</em></li>
            <li class="w_50 "><!--这个是用来占位置的，没有撒了用--></li>
            <li class=" w_50 border-right">
                <label>实际签约量</label><em  class="f_c ">{{data.actual_quantity}}</em>
            </li>
            <li class="w_50 pdl_1">
                <i class="fl w_25 ">直营</i>
                <input type="number" name="not_channel" class="fl w_25 f_c" :placeholder="data.not_channel" />
                <i class="fl w_25 f_c">渠道</i>
                <input type="te" name="channel" class="fl w_25 f_c inp" :placeholder="data.channel" />
            </li>
            <li><label>本月完成</label>
                <div class="bar"><div class="bar_progress" :style="'width:'+parseInt(100*data.actual_quantity/data.planned_quantity)>100?100:parseInt(100*data.actual_quantity/data.planned_quantity)+'%;'"></div></div>
                <i class="bar_number">{{parseInt(100*data.actual_quantity/data.planned_quantity)}}%</i>
            </li>
        </ul>
        </div>
        
        <ul class="deatails  pdlr1 border_top bg_FFF">
            <li>
                <label>月报编号</label>
                <div>{{data.monthly_id}}</div>
            </li>
            
            <li>
                <label>创建时间</label>
                <div>{{formTime(data.create_time+"000")}}</div>
            </li>
            <li>
                <label>备注</label>
                <div>{{data.remark}}</div>
            </li>
        </ul>
        <button v-if="flg" type="button" @click="updateFn()" class="btn-blur">修改</button>
        </form>
    </section>
    </div>
</template>
<script>
	import MPDetails from  '../../js/monthlyPlan/edit.js';

	export default{
		data:MPDetails.data,
		beforeCreate:MPDetails.beforeCreate,
		mounted:MPDetails.mounted,
		methods:MPDetails.methods
	}

</script>