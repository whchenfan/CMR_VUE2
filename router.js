
export default function(VueRouter){
	return new VueRouter({
		base: __dirname,
		routes:[
			{ path:"/",component:require('./resource/html/index.vue')},
			{path:"/index",component:require('./resource/html/index.vue')},
			{path:"/login",component:require('./resource/html/login.vue')},
			{
				path:"/CustomerInformation",component:require('./resource/html/CustomerInformation/view.vue'),
				children: [
			        {
			          path: 'index',
			          component: require('./resource/html/CustomerInformation/index.vue')
			        },
			        {
			          path: 'details/:id',
			          component: require('./resource/html/CustomerInformation/details.vue')
			        },
			        {
			          path: 'add',
			          component: require('./resource/html/CustomerInformation/add.vue')
			        },
			        {
			          path: 'edit/:id',
			          component: require('./resource/html/CustomerInformation/edit.vue')
			        },
			        {
			          path: '*',
			          component: require('./resource/html/CustomerInformation/index.vue')
			        }
			      ]
			},
			{
				path:"/dailyPaper",component:require('./resource/html/dailyPaper/view.vue'),
				children:[
					{
			          path: 'index',
			          component: require('./resource/html/dailyPaper/index.vue')
			        },
			        {
			          path: 'details/:id',
			          component: require('./resource/html/dailyPaper/details.vue')
			        },
			        {
			          path: 'add',
			          component: require('./resource/html/dailyPaper/add.vue')
			        },
			        {
			          path: 'edit/:id',
			          component: require('./resource/html/dailyPaper/edit.vue')
			        },
			        {
			          path: '*',
			          component: require('./resource/html/dailyPaper/index.vue')
			        }
				]
			},
			{
				path:"/TomorrowPlan",component:require('./resource/html/TomorrowPlan/view.vue'),
				children:[
					{
			          path: 'index',
			          component: require('./resource/html/TomorrowPlan/index.vue')
			        },
			        {
			          path: 'details/:id',
			          component: require('./resource/html/TomorrowPlan/details.vue')
			        },
			        {
			          path: 'add',
			          component: require('./resource/html/TomorrowPlan/add.vue')
			        },
			        {
			          path: 'edit/:id',
			          component: require('./resource/html/TomorrowPlan/edit.vue')
			        },
			        {
			          path: '*',
			          component: require('./resource/html/TomorrowPlan/index.vue')
			        }
				]

			},
			{
				path:"/monthlyPlan",component:require('./resource/html/monthlyPlan/view.vue'),
				children:[
					{
			          path: 'index',
			          component: require('./resource/html/monthlyPlan/index.vue')
			        },
			        {
			          path: 'details/:id',
			          component: require('./resource/html/monthlyPlan/details.vue')
			        },
			        {
			          path: 'add',
			          component: require('./resource/html/monthlyPlan/add.vue')
			        },
			        {
			          path: 'edit/:id',
			          component: require('./resource/html/monthlyPlan/edit.vue')
			        },
			        {
			          path: 'line/:brnch/:id/:time',
			          component: require('./resource/html/monthlyPlan/line.vue')
			        },
			        {
			          path: '*',
			          component: require('./resource/html/monthlyPlan/index.vue')
			        }
				]

			},
			{path:"/forgetPas",component:require('./resource/html/forgetPas.vue')},
			{path:"*",component:require('./resource/html/table.vue')}
		]
	})


}


