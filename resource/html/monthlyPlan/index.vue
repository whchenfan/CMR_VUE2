<template>
    <div>
        <header class="comm-header">
        <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>月工作计划<a @click.prevent="addFn()" href="monthlyPlanAdd.html" class="add"><i></i></a></h1></div>
    </header> 
    <section class="monthly_plan">
        <nav class="bg_FFF">
            <div class="pdlr1 pdtb_5">
                <div class="comm_search">
                    <input class="inp" type="text" name="search" value="" placeholder="日志主人/部门名称等">
                    <button class="icon comm_icon_search" type="button" @click="searchFn()"></button>
                 </div>
            </div>
            <ul class="clearfix">
                <li>
                    <label>开始日期</label>
                    <div class="name place_time">
                        <p><span>请选择</span><em class="time_inp"></em></p>
                        <input @change="inpTime($event)" class="inp" type="date" name="startTime" value="">
                    </div>
                </li>
                <li>
                    <label>结束日期</label>
                    <div class="name place_time">
                        <p><span>请选择</span><em class="time_inp"></em></p>
                        <input class="inp" @change="inpTime($event)" name="endTime" type="date" value="">
                    </div>
                </li>
            </ul>
        </nav>
        <div class="ul_list">
            <ul>
                <li class="tp_add" v-if="!data||!data.length">
                   <router-link to="add">
                    <i class="icon_shu"></i>
                      <p>添加月计划</p>
                    </router-link>
                </li>
                <li v-else v-for="value in data">
                    <router-link :to="'details/'+value.id">         
                        <h2 class="clearfix">
                            <span class="fr">{{formTime(value.create_time)}}</span>
                            <span><i class="icon_t"></i>创建日期</span>
                       </h2>
                       <div class="cont">
                            <p class="clearfix">
                                <span class="fr"><label>姓名：</label><i>{{value.user_name}}</i></span>
                                <span ><label>日志编码：</label><i>{{value.monthly_id}}</i></span>
                            </p>
                            <p class="clearfix">
                                <span class="fr"><label>计划签约量：</label><em class="f_1173ee">{{value.planned_quantity}}</em></span>
                                <span ><label>计划洽谈量：</label><em class="f_ffa776">{{value.planned_volume}}</em></span>
                            </p>
                            <p class="clearfix">
                                <span class="fr"><label>实际签约量：</label><em class="f_1173ee">{{value.actual_quantity}}</em></span>
                                <span ><label>实际洽谈量：</label><em class="f_ffa776">{{value.actual_volume}}</em></span>
                            </p>
                       </div>
                   </router-link>
                   <button class="del" date-id="1">删除</button>
                </li>
               
               
            </ul>
        </div>
    </section>
    </div>
</template>
<script type="text/javascript">
    import MPList from '../../js/monthlyPlan/index';
    export default{
        data:MPList.data,
        beforeCreate:MPList.beforeCreate,
        mounted:MPList.mounted,
        methods:MPList.methods,
        beforeDestroy:MPList.beforeDestroy
    }
</script>