<template>
    <div>
	    <header class="comm-header">
        <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>月工作计划<a href="monthlyPlanEdit.html" class="comm-edit"></a></h1></div>
    </header> 
    <section>
        <div v-if="data&&data.id">
        <ul class="deatails  pdlr1 bg_FFF">
            <li>
                <label>业务线</label>
                <span>{{data.branch_name}}</span>
            </li>
            <li>
                <label>月报主人</label>
                <span>{{data.user_name}}</span>
            </li>
        </ul> 
        <div class="par pdt_5">
            <ul>
                <li class="clearfix">
                    <div class="circle">
                        <canvas id="amount" data-color="#ff6000" :data-percentum="(parseInt(data.actual_volume/data.planned_volume*10000))/10000"></canvas>
                        <div class="cont">
                            <p>本月完成</p>
                            <em>{{(parseInt(data.actual_volume/data.planned_volume*10000))/100}}%</em>
                        </div>
                    </div>
                    <div class="name pdt1">
                        <p>计划洽谈量<em>{{data.planned_volume}}</em></p>
                        <P>实际洽谈量<em>{{data.actual_volume}}</em></P>
                    </div>
                </li>
                <li class="contract clearfix">
                    <div class="circle ">
                        <canvas data-color="#4595f9" id="contract" :data-percentum="parseInt(data.actual_quantity/data.planned_quantity*10000)/10000"></canvas>
                        <div class="cont contract">
                            <p>本月完成</p>
                            <em>{{parseInt(data.actual_quantity/data.planned_quantity*10000)/100}}%</em>
                        </div>
                    </div>
                    <div class="name">
                        <p>计划签约量<em>{{data.planned_quantity}}</em></p>
                        <P>实际签约量<em>{{data.actual_quantity}}</em></P>
                        <P>(<span>直营{{data.not_channel}}</span><span class="pdl1">渠道{{data.channel}}</span>) </P>
                    </div>
                </li>
            </ul>
        </div> 
        </div> 
        <div class="line-date">
            
            <ul>
                <li v-for="value in list">
                    <label>{{value.user_name}}</label>
                    <div class="cont">
                        <div class="line_bar">
                            <span class="line_bar_bg">
                                <i class="line_bar_date" :style="'width:'+(parseInt(value.actual_volume/value.planned_volume*10000)/100>100?100:parseInt(value.actual_volume/value.planned_volume*10000)/100)+'%'"></i>
                            </span>
                            <em>{{parseInt(value.actual_volume/value.planned_volume*100)}}%</em>
                        </div>
                        
                        <p><span>计划洽谈量 {{value.planned_volume}}</span><span class="pdl1">实际洽谈量 {{value.actual_volume}}</span></p>
                       
                        <div class="line_bar blue_bar">
                            <span class="line_bar_bg">
                                <i class="line_bar_date" :style="'width:'+(parseInt(value.actual_quantity/value.planned_quantity*10000)/100>100?100:parseInt(value.actual_quantity/value.planned_quantity*10000)/100)+'%'"></i>
                            </span>
                            <em>{{parseInt(value.actual_quantity/value.planned_quantity*100)}}%</em>
                        </div>
                        <p><span>计划签约量 {{value.planned_quantity}}</span><span class="pdl1">实际签约量 {{value.actual_quantity}}</span><span> (直营{{value.not_channel}}   渠道{{value.channel}})</span></p>
                       
                    </div>
                </li>  
            </ul>
            
        </div>
    </section>
    </div>
</template>

<script>
	import MPline from '../../js/monthlyPlan/line';

	export default{
		data:MPline.data,
		beforeCreate:MPline.beforeCreate,
		mounted:MPline.mounted,
		methods:MPline.methods,
		updated:MPline.updated
	}

</script>