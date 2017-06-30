<template>
<section>
        <header class="comm-header">
        <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>客户信息<router-link to="/CustomerInformation/add" class="add"><i></i></router-link></h1></div>
    </header> 
    	<div class="cus_infor_search pdlr1 pdtb_5 bg_FFF">
        	<div class="comm_search ">
            	<input class="inp" type="text" name="search" id="search" value="" placeholder="输入添加人/公司名称/业务线等" />
                <button class="icon comm_icon_search" type="button" @click="searchFn()"></button>
            </div>
        </div>
        <nav class="select_list clearfix">
        	<div class="sel" id="province">
            	<p><span>请选择省份</span><i></i></p>
                <select name="province" @change="proCityDis($event)">
                	<option value="">请选择省份</option>
                    <option v-for="v in province" :value="v.code">{{v.address}}</option>
                    
                </select>
            </div>
            <div class="sel" id="city">
            	<p><span>请选择城市</span><i></i></p>
                <select name="city" @change="proCityDis($event)">
                	<option v-for="v in city" :value="v.code">{{v.address}}</option>
                </select>
            </div>
            <div class="sel" id="district">
            	<p><span>请选择区县</span><i></i></p>
                <select name="district" @change="proCityDis($event)">
                	<option v-for="v in district" :value="v.code">{{v.address}}</option>
                </select>
            </div>
        </nav>
    	<aside class="cus_inf_list">
             <div v-if="data&&data.length>0">
          
            <router-link v-for="item in data" :key="item" :to="'details/'+item.id">
           <dl class="pdlr1">
                <dt>
                    <h2 class="clearfix">
                        <span class="fr"><em>客户来源：</em><i>{{item.source==1?'网路推广':'独立开发'}}</i></span>
                        <span><em>客户：</em><i>{{item.contact_name}}</i></span>
                    </h2>
                    <div class="cont">
                            <i class="comp_icon"></i>{{item.company_name}}
                    </div>
                </dt>
                <dd>
                    <h2 class="clearfix">
                        <span class="fr"><em>上次修改时间：</em><i>{{formTime(item.update_time||item.create_time+'000')}}</i></span>
                        <span ><em>添加人：</em><i>{{item.user_name}}</i></span>
                    </h2>
                </dd>
            </dl>

            </router-link>
            
            </div>
            <div v-else  class="tp_add">
                <router-link to="/CustomerInformation/add"> 
                    <i class="icon_shu"></i>
                    <p>添加月计划</p>   
                </router-link>
           </div>
        </aside>
</section>
</template>
<script>

import CInfjS from '../../js/CustomerInformation/index';
export default{
   data:CInfjS.data,
   beforeCreate:CInfjS.beforeCreate,
   mounted:CInfjS.mounted,
   methods:CInfjS.methods,
   updated:CInfjS.updated,
   beforeDestroy:CInfjS.beforeDestroy
}

</script>