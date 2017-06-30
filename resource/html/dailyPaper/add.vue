<template>
	<div>
		<header class="comm-header">
    	<div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>工作日报</h1></div>
    </header> 
    <section class="deatails deatails-add pdlr1 pdb3">
    	<ul>
            <li>
                <label><span>*</span>合作机构</label>
                <input class="inp" name="company_name" type="text" value="" placeholder="请输入合作机构名称" />
            </li>
    		<li>
            	<label><span>*</span>业务线</label>
                <input name="service_line" class="inp" type="text" value="" placeholder="请输入业务线" />
            </li>
            <li>
            	<label><span>*</span>进展情况</label>
                <input name="progress_situation" class="inp" type="text" value="" placeholder="请输入进展情况" />
            </li>
            <li>
            	<label><span>*</span>沟通要点</label>
                <input class="inp" name="communication_points" type="text" value="" placeholder="请输入沟通要点" />
            </li>
            
            <li>
            	<label><span>*</span>沟通形式</label>
                <div class="sel">
                        <p><span>请选择</span><i class="down"></i></p>
                        <select @change="selFn($event)" name="contract_type">
                            <option value="">请选择沟通形式</option>
                            <option value="1">电话</option>
                            <option value="2">QQ</option>
                            <option value="3">微信</option>
                            <option value="4">邮箱</option>
                        </select>
                </div>
            </li>
            <li>
                <label><span>*</span>客户来源</label>
                <div class="sel">
                        <p><span>请选择客户来源</span><i class="down"></i></p>
                        <select @change="selFn($event)" name="customer_source">
                            <option value="">请选择客户来源</option>
                            <option value="1">网络推广</option>
                            <option value="2">独立开发</option>
                            <option value="3">合作结构</option>
                           
                        </select>
                </div>
            </li>
            <li>
                <label><span>*</span>联系方式</label>
                <input class="inp" name="cantract_type" type="text" value="" placeholder="请输入联系方式" />
            </li>
             
            
            <li>
            	<label><span>*</span>客户对接人</label>
                <input class="inp" type="text" value="" placeholder="请输入客户对接人" name="customers_person" />
            </li>
    	</ul>
        <button type="button" @click="submitFn()" class="btn-blur">添加</button>
    </section>
	</div>
</template>
<script>
	import DPAdd from  '../../js/dailyPaper/add';
	export default{
		beforeCreate:DPAdd.beforeCreate,
		methods:DPAdd.methods
	} 

</script>