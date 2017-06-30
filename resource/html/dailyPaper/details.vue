<template>
	<div>
		<header class="comm-header">
        <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>工作日报<router-link v-if='flg' :to="'/dailyPaper/edit/'+this.$route.params.id" class="comm-edit"></router-link></h1></div>
    </header> 
    <section class="deatails deatails-add pdlr1 pdb3">
       
            <ul>
                <li>
                    <label>合作机构</label>
                    {{data.company_name||''}}
                </li>
                <li>
                    <label>机构编号</label>
                    {{data.campany_code||''}}
                </li>
                <li>
                    <label>业务线</label>
                    {{data.service_line||''}}
                </li>
                <li>
                    <label>进展情况</label>
                    {{data.progress_situation||''}}
                </li>
                <li>
                    <label>沟通要点</label>
                    {{data.communication_points||''}}
                </li>
                <li>
                    <label>沟通要点</label>
                    {{data.create_time||''}}
                </li>
                <li>
                    <label>沟通形式</label>
                    <div v-if="data.contract_type==1">电话</div>
                    <div v-else-if="data.contract_type==2">QQ</div>
                    <div v-else-if="data.contract_type==3">邮箱</div>
                    
                </li>
                <li>
                    <label>客户来源</label>
                    <div v-if="data.contract_type==1">网络推广</div>
                    <div v-else-if="data.contract_type==2">独立开发</div>
                    <div v-else-if="data.contract_type==3">合作结构</div>
                </li>
                <li>
                    <label>联系方式</label>
                    {{data.cantract_type||''}}
                </li>
                <li>
                    <label>客户对接人</label>
                    {{data.customers_person||''}}
                </li>
                <li>
                    <label>批注</label>
                    <div v-if="data.postil_type==0">未批注</div>
                    <div v-if="data.postil_type==1">{{data.postil}}</div>
                    
                </li>
            </ul>
            
	     <button v-if="!flg" type="button" @click="showPostil()" class="btn-blur">{{data.postil_type==1?'修改':''}}批注</button>
	    </section>
	    <div class="mask" style="display: none">
	        <div class="mask-cont replay-cont">
	            <h2>
	                <span>写批注</span>
	                <button @click="hidePostil()" class="btn del" type="button">取消</button>
	                <button @click="submitPostil()" class="btn ensure" type="button">确定</button>
	            </h2>
	            <div class="pdlr_5 pdb_5">
	                <textarea class="exte" :placeholder="data.postil"></textarea>
	            </div>
	         </div>
	    </div>
		</div>
</template>
<script>

	import DPDetails from  '../../js/dailyPaper/details';

	export default{
		data:DPDetails.data,
		beforeCreate:DPDetails.beforeCreate,
		mounted:DPDetails.mounted,
		methods:DPDetails.methods
	}
</script>