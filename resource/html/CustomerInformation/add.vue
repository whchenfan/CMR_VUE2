<template>
<aside>
    <header class="comm-header">
    	<div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>客户信息</h1></div>
    </header> 
    <form action="" method="poxt" enctype="multipart/form-data">
        <section class="pdlr_5 deatails bg_FFF pdb3 deatails-add">
            <ul>
                <li>
                	<label><span>*</span>联系人姓名</label>
                	<input class="inp" type="text" name="contact_name" value="" placeholder="请输入姓名" />
                </li>
                <li>
                	<label><span>*</span>公司名称</label><input class="inp" type="text" name="company_name" value="" placeholder="请输入公司名称" /></li>
                <li>
                	<label><span>*</span>联系人电话</label>
                	<input class="inp" type="number" name="contact_mobile" value="" placeholder="请输入联系电话" /></li>
                <li>
                 	<label><span>*</span>联系人职务</label>
                 	<input class="inp" type="text" value="" name="contact_business" placeholder="请输入联系人的职务" /></li>
                <li><label>邮箱</label><input class="inp" name="contact_email" type="text" value="" placeholder="请输入联系人的邮箱" /></li>
                <li>
                	<label>QQ</label>
                	<input class="inp" type="number" value="" name="contact_qq" placeholder="请输入联系人的QQ" /></li>
                <li>
                	<label>微信</label>
                	<input class="inp" type="text" value="" name="contact_wx" placeholder="请输入联系人的微信" /></li>
                <li>
                	<label><span>*</span>客户来源</label>
               		<div class="sel" id="source">
                    		<p><span>请选择客户来源</span><i class="down"></i></p>
                            <select name="source" @change="proCityDis($event)">
                            	<option value>请选择客户来源</option>
                            	<option value="1">网路推广</option>
                                <option value="2">独立开发</option>
                            </select>
                    </div>
                
                </li>
                <li>
                	<label>公司法人</label>
                	<input class="inp" type="text" value="" name="company_person" placeholder="请输入公司法人" />
                </li>
                <li>
                	<label>公司职员人数</label>
                	<input class="inp" type="number" name="company_number" value="" placeholder="请输入公司人数" />
                </li>
                <li>
                	<label>注册资金(万)</label>
                	<input class="inp" type="text" name="company_value" value="" placeholder="请输入公司注册资金" />
                </li>
                <li>
                	<label><span>*</span>省份</label>
                	<div class="sel" id="province" @change="proCityDis($event)">
                    		<p><span>请选择省份</span><i class="down"></i></p>
                            <select name="province">
                            	<option value="">请选择省份</option>
                                <option v-for="val in province" :value="val.code">{{val.address}}</option>
                            </select>
                    </div>
                </li>
                <li>
                	<label><span>*</span>城市</label>
                	<div class="sel" id="city" @change="proCityDis($event)">
                            <p><span>请选择城市</span><i class="down"></i></p>
                            <select name="city">
                               <option v-for="val in city" :value="val.code">{{val.address}}</option>
                            </select>
                    </div>
                </li>
                <li>
                	<label><span>*</span>区县</label>
                	<div class="sel" id="district" @change="proCityDis($event)">
                            <p><span>请选择区县</span><i class="down"></i></p>
                            <select name="district">
                                <option v-for="val in district" :value="val.code">{{val.address}}</option>
                            </select>
                    </div>
                </li>
                <li>
                	<label><span>*</span>详情地址</label><input class="inp" type="text" value="" placeholder="" name="address" /></li>
                <li>
                	<label>参与人</label>
                	<input class="inp" name="affiliated_person" type="text" value="" placeholder="格式如:张三，李四，王五" /></li>
                <li>
                	<label>备注</label>
                	<input class="inp" name="remark" type="text" value="" placeholder="请输入备注" /></li>
            </ul>
            <button class="btn-blur" type="button" @click="submitFn()">添加</button>
        </section>
    </form>
</aside>	
</template>
<script>
import CIFAdd from '../../js/CustomerInformation/add';
export default{
    data:CIFAdd.data,
    beforeCreate:CIFAdd.beforeCreate,
    methods:CIFAdd.methods
}
</script>