<template>
    <div>
    <header class="comm-header">
        <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>明天计划<router-link v-if="flg" :to="'/TomorrowPlan/edit/'+this.$route.params.id" class="comm-edit"></router-link></h1></div>
    </header> 
    <section class="details">
        <h2><i class="fr pj"></i><span><i class="icon_t"></i>{{formTime(data.create_time)}}</span></h2>
        <div class="cont">{{data.remark}}</div>
        <article class="pd1">
            <div class="reply" v-if="data.postil_type==0">
                批注：未批注
            </div>
            <div class="reply" v-else>
                批注：{{data.postil}}
            </div>
        </article>

        <button v-if="!flg" @click="showPostil()" type="button" class="btn-blur">{{data.postil_type==1?"修改":""}}批注</button>
        <div class="mask" style="display: none">
            <div class="mask-cont replay-cont">
            
                <h2>
                    <span>写批注</span>
                    <button @click="hidePostil()" class="btn del" type="button">取消</button>
                    <button  @click="submitPostil()" class="btn ensure" type="button">确定</button>
                </h2>
                <div class="pdlr_5 pdb_5">
                    <textarea class="exte"></textarea>
                </div>
          
            </div>
        </div>
    </section>
  </div>
</template>
<script>

	import TPDetails from  '../../js/TomorrowPlan/details';

	export default{
		data:TPDetails.data,
		beforeCreate:TPDetails.beforeCreate,
		mounted:TPDetails.mounted,
		methods:TPDetails.methods
	}
</script>