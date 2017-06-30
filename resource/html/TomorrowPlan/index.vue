<template>
    <div>
        <header class="comm-header">
        <div class="div"><h1><a href="javascript:history.back();" class="back"><i></i></a>明日计划<a @click.prevent="addFn()" href="javascript:;" class="add"><i></i></a></h1></div>
    </header> 
    <section :class="power!=1?'list_lead':'list'">
      <div class="tp_add" v-if="!data||!data.length"> 
        <a href="TomorrowPlanAdd.html">
          <i class="icon_shu"></i>
            <p>添加明日计划</p>
        </a>
      </div>
      <div v-else-if="power==1">
        <ul>
            <li v-for="value in data">
                <router-link :to="'/TomorrowPlan/details/'+value.id">
                <h2><i class="fr pj"></i><span><i class="icon_t"></i>{{formTime(value.create_time)}}</span></h2>
                <div class="cont">{{value.remark}}</div>
                </router-link>
            </li>
        </ul>
      </div>
      <div v-else>  
      <dl v-for="(value,key) in data">
            <dt v-if="!(key&&formTime(value.create_time)==formTime(data[key-1].create_time))"><i class="icon_t"></i>{{formTime(value.create_time)}}</dt>
            <dd>
                <ul>
                    <li>
                        <router-link :to="'/TomorrowPlan/details/'+value.id">
                            <h2><i class="fr pj"></i><span><i class="person"></i>{{value.user_name}}</span></h2>
                            <p>{{value.remark}}</p>
                        </router-link>
                    </li>
                </ul>
            </dd>
      </dl>
      </div>
      
    </section>
    </div>
</template>
<script type="text/javascript">
    import TPList from '../../js/TomorrowPlan/index';
    export default{
        data:TPList.data,
        beforeCreate:TPList.beforeCreate,
        mounted:TPList.mounted,
        methods:TPList.methods,
        beforeDestroy:TPList.beforeDestroy
    }
</script>