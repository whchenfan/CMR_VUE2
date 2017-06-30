<template>
    <div>
        <header class="comm-header">
        <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>添加明日计划</h1></div>
         </header> 
        <section class="add_cont">
            <textarea class="add_area" placeholder="请输入您明日计划的内容" name="remark"></textarea>
            <button @click="submitFn()" type="button" class="btn-blur">添加数据</button>
        </section>
    </div>
</template>
<script>
	import TPAdd from  '../../js/TomorrowPlan/add';
	export default{
		beforeCreate:TPAdd.beforeCreate,
        mounted:TPAdd.mounted,
		methods:TPAdd.methods
	} 

</script>