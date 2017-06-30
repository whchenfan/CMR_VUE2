<template>
    <div>
         <header class="comm-header">
            <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>明日计划</h1></div>
         </header> 
        <section class="add_cont">
            <textarea class="add_area" :placeholder="data.remark" name="remark"></textarea>
            <button v-if="flg" @click="submitFn()" type="button" class="btn-blur">修改</button>
        </section>
    </div>
</template>
<script>
	import TPDetails from  '../../js/TomorrowPlan/edit';

	export default{
		data:TPDetails.data,
		beforeCreate:TPDetails.beforeCreate,
		mounted:TPDetails.mounted,
		methods:TPDetails.methods
	}

</script>