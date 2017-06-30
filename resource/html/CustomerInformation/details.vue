<template>
	<div>
		<header class="comm-header">
    	<div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>客户信息<router-link v-if='flg' :to="'/CustomerInformation/edit/'+this.$route.params.id" class="comm-edit"><i></i></router-link></h1></div>
    </header> 
    <section class="pdlr_5 deatails bg_FFF">
        <div v-if="data&&data.id">
        <ul>
            <li><label>联系人姓名</label><span>{{data.contact_name}}</span></li>
            <li><label>公司名称</label><span>{{data.company_name}}</span></li>
            <li><label>联系人电话</label><span>{{data.contact_mobile||''}}</span></li>
            <li><label>联系人职务</label><span>{{data.contact_business||''}}</span></li>
            <li><label>邮箱</label><span>{{data.contact_email||''}}</span></li>
            <li><label>QQ</label><span>{{data.contact_qq||''}}</span></li>
            <li><label>微信</label><span>{{data.contact_wx||''}}</span></li>
            <li><label>客户来源</label><span>独立开发</span></li>
            <li><label>公司法人</label><span>{{data.company_person||''}}</span></li>
            <li><label>公司职员人数</label><span>{{data.company_number||''}}</span></li>
            <li><label>注册资金(万)</label><span>{{data.company_value||''}}</span></li>
            <li><label>城市</label><span>{{addressFn(data.province,data.city,data.district)}}</span></li>
            <li><label>详情地址</label><span>{{data.address}}</span></li>
            
            <li><label>参与人</label><span>{{data.affiliated_person||''}}</span></li>
            <li><label>备注</label><span>{{data.remark||''}}</span></li>
        </ul>
        </div>
        <div v-else class="null-data">
            没有查询到数据
        </div>
    </section>
    
	</div>
</template>

<script>
	export default{
        data(){
        	return {
        		data:[],
        		flg:false,
        		province:this.cityDate.Province,
	       		city:[{code:"",address:"请选择城市"}],
	       		district:[{code:"",address:"请选择区县"}]
        	}
        },
        beforeCreate(){
        	this.commFn._body.style.background="#f5f5f9";
        	!this.$store.userInfo.id&&this.$router.push({ path: '/login'});
        },mounted(){
            let _this=this;
            console.log(_this.$route);
            _this.commFn.loading();
            _this.ajaxFn({
                url:"CustomerInformation.php",
                params:{id:_this.$route.params.id,type:"details"},
                successFn:function(data){
                     _this.commFn.loadingRemove();
                   _this.$data.flg=(_this.$store.userInfo.id==data.user_id);
                    _this.$data.data=data;
                }
            })
        	
        },
        methods:{
            addressFn(a,b,c){
                let num,numB,numC;
               
               this.cityDate.Province.forEach(function(val){
                    if(val.code==a){
                        num=val.address;
                    }
                })
                this.cityDate[a].forEach(function(val){
                    if(val.code==b){
                        numB=val.address;
                    }
                });
                if(this.cityDate[b]){
                this.cityDate[b].forEach(function(val){
                    if(val.code==c){
                        numC=val.address;
                       
                    }
                })
                }
                return num+'-'+numB+'-'+numC;
            }

        }
	}

</script>
