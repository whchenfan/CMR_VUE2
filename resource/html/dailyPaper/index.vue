<template>
	<div>
		<header class="comm-header">
    	<div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>工作日报<a @click.prevent="addFn()" href="#" class="add"><i></i></a></h1></div>
    </header> 
    <section class="daily_paper">
    	
    	<nav class="bg_FFF">
        	<div class="pdlr1 pdtb_5">
            	<div class="comm_search">
                    <input class="inp" type="text" name="search" value="" placeholder="输入添加人/公司名称/业务线等">
                    <button class="icon comm_icon_search" type="button" @click="searchFn()"></button>
           		 </div>
			</div>
            <ul	class="clearfix">
                <li>
                	<label>开始日期</label>
                    <div class="name place_time">
                    	<p><span></span><em class="time_inp"></em></p>
                        <input name="startTime" @change="inpTime($event)" class="inp" type="date" value="" />
                    </div>
                </li>
                <li>
                	<label>结束日期</label>
                    <div class="name place_time">
                    	<p><span></span><em class="time_inp"></em></p>
                        <input name="endTime" @change="inpTime($event)" class="inp" type="date" value=""  />
                    </div>
                </li>
            </ul>
        </nav>
       
        <div class="cont" v-if="data&&data.length">
        	<dl  v-for="(v,key) in data">
            	<dt v-if='!key||formTime(v.create_time)!=formTime(data[key-1].create_time)'><i class="icon_t"></i>{{formTime(v.create_time)}}</dt>
                <dd>
                	<ul>
                		<router-link :to="'/dailyPaper/details/'+v.id" >
                    	
                    	<li>
                        	<div class="name">
                            	<div class="t">
                                	<p class="clearfix">
                                    	<span class="fl"><label>联系人：</label><i>{{v.customers_person}}</i></span>
                                        <span class="fr"><label>业务线：</label><i>{{v.service_line}}</i></span>
                                    </p>
                                    <p><label>意向客户：</label><i>{{v.company_name}}</i></p>
                                </div>
                                <div class="end clearfix">
                                	<span class="fl"><label>进展情况：</label><em>{{v.progress_situation}}</em></span>
                                    <span class="fr"><label>批注状态：</label><em>{{v.postil_type==0?"未批":"已批"}}</em></span>
                                </div>
                            </div>  
                        </li>
                        </router-link>
                    </ul>
                </dd>
            </dl>
        </div>
         <div class="tp_add" v-else>
            <a href="dailyPaperAdd.html">
              <i class="icon_shu"></i>
                <p>添加工作日报</p>
            </a>
         </div>
    </section>
	</div>
</template>
<script type="text/javascript">
    import DPList from '../../js/dailyPaper/index';
    export default{
        data:DPList.data,
        beforeCreate:DPList.beforeCreate,
        mounted:DPList.mounted,
        methods:DPList.methods,
        beforeDestroy:DPList.beforeDestroy
    }
</script>