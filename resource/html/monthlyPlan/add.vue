<template>
    <div>
        
        <header class="comm-header">
            <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>添加月工作计划</h1></div>
        </header> 
        <section class="deatails deatails-add pdlr1 pdb3">
            <form action="" method="post">
            <ul>
                
                
                <li>
                    <label><span>*</span>计划洽谈量</label>
                    <input class="inp" name="planned_volume" type="number" value="" placeholder="请输入计划洽谈量">
                </li>
                <li>
                    <label><span>*</span>计划签约量</label>
                    <input class="inp" name="planned_quantity" type="number" value="" placeholder="请输入计划签约量">
                </li>
                <li>
                    <label><span>*</span>备注</label>
                    <textarea name="remark" class="area" placeholder="请输入您对这一个也工作计划的安排"></textarea>
                </li>
                
            </ul>
            <button type="button" @click="submintFn()" class="btn-blur">添加</button>
            </form>
        </section>
    </div>
</template>
<script>
	import MPAdd from  '../../js/monthlyPlan/add';
	export default{
		beforeCreate:MPAdd.beforeCreate,
		methods:MPAdd.methods
	} 

</script>