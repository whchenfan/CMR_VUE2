<template>
   <div>
		 <header class="comm-header">
    	<div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>修改-客户信息</h1></div>
    </header> 
    <section v-if="data&&data.id&&flg" class="pdlr_5 deatails bg_FFF pdb3">
            <ul>
                <li><label>联系人姓名</label><input class="inp" name="contact_name" type="text" value="" :placeholder="data.contact_name||''" /></li>
                <li><label>公司名称</label><input class="inp" name="company_name" type="text" value="" :placeholder="data.company_name||''" /></li>
                <li><label>联系人电话</label><input class="inp" name="contact_mobile" type="number" value="" :placeholder="data.contact_mobile||''" /></li>
                <li><label>联系人职务</label><input class="inp" name="contact_business" type="text" value="" :placeholder="data.contact_business||''" /></li>
                <li><label>邮箱</label><input class="inp" name="contact_email" type="text" value="" :placeholder="data.contact_email||''" /></li>
                <li><label>QQ</label><input class="inp" type="text" name="contact_qq" value="" :placeholder="data.contact_qq||''" /></li>
                <li><label>微信</label><input class="inp" name="contact_wx" type="text" value="" :placeholder="data.contact_wx||''" /></li>
                <li><label>客户来源</label>
                <div class="sel" id="source">
                <p><span>{{parseInt(data.source)==1?'网络推广':'独立开发'}}</span>
                <i class="down"></i></p>
                <select name="source" @change="proCityDis($event)">
                    <option v-for="(val,index) in roueceData" :selected="parseInt(data.source)==index?'selected':''" :value="index">{{val}}</option>
                    
                </select>
                </div>
                </li>
                <li><label>公司法人</label><input class="inp" name="company_person" type="text" value="" :placeholder="data.company_person||''" /></li>
                <li><label>公司职员人数</label><input class="inp" type="number" value="" name="company_number" :placeholder="data.company_number||''" /></li>
                <li><label>注册资金(万)</label><input name="company_value" class="inp" type="text" value="" :placeholder="data.company_value||''" /></li>
                <li><label>省份</label><div class="sel" id="province">
                <p><span>{{getProCityDis(data.province)}}</span><i class="down"></i></p>
                <select name="province" @change="proCityDis($event)">
                    <option v-for="v in province" :value="v.code" :selected="data.province==v.code?'selected':''" >{{v.address}}</option>
                </select> 
               
            </div></li>
                <li><label>城市</label><div class="sel" id="city">
                <p><span>{{getProCityDis(data.province,data.city)}}</span><i class="down"></i></p>
                <select name="city" @change="proCityDis($event)">
                    <option  v-for="v in city" :value="v.code" :selected="data.city==v.code?'selected':''" >{{v.address}}</option>
                </select> 
              
            </div>
            </li>
                <li><label>区县</label><div class="sel" id="district">
                <p><span>{{getProCityDis(data.province,data.city,data.district)}}</span><i class="down"></i></p>
                <select name="district" @change="proCityDis($event)">
                    <option v-for="v in district" :value="v.code" :selected="data.district==v.code?'selected':''" >{{v.address}}</option>
                </select>
               
            </div>
            </li>
                <li><label>详情地址</label><input class="inp" type="text" value="" name="address" :placeholder="data.address||''" /></li>
                <li><label>参与人</label><input class="inp" name="affiliated_person" type="text" value="" :placeholder="data.affiliated_person||''" /></li>
                <li><label>备注</label><input class="inp" name="remark" type="text" value="" :placeholder="data.remark||''" /></li>
            </ul>
            
            <button class="btn-blur" @click="updateFn" type="button">修改</button>    
    </section>
    <div v-else class="null-data">
            没有查到相关数据
    </div>

   </div>
</template>
<script>
   //import CIEdit from '../../CustomerInformation/edit';
   import CIEdit from '../../js/CustomerInformation/edit.js';
    export default{
        data:CIEdit.data,
        beforeCreate:CIEdit.beforeCreate,
        mounted:CIEdit.mounted,
        methods:CIEdit.methods
    } 

</script>

