export default{
    data(){
        return {
             data:[],
             list:[],
             id:this.$route.params.id
        }
    },
	beforeCreate(){
        this.commFn._body.style.background="#f5f5f9";
		if(!this.$store.userInfo.id){
			this.$router.path({"path":"/login"})
		}
	},
    mounted(){
        let _this=this;
        
        _this.ajaxFn({
            url:"monthlyPlan.php",
            params:{"time":_this.$route.params.time,"branch":_this.$route.params.brnch,"id":_this.$route.params.id,"type":"selectLine"},
            successFn:function(data){
                console.log(data);
               
                _this.$data.data=data.data;
                _this.$data.list=data.list;
              
            }
         });
    },
    updated(){
            
          // 
           this.draw("amount","#ff6000",0.75);
           this.draw("contract","#4595f9",0.5);
           this.getCanvas();
    },
    methods:{
         draw(id,lineColor,number) {
                let canvas = document.getElementById(id);
              
                if (canvas == null) return false;

                let context = canvas.getContext('2d');
                let fontS=parseInt(window.getComputedStyle(canvas.parentNode, null).borderWidth),
                     parent=canvas.parentNode,
                     width=canvas.clientWidth;
                canvas.width=width;
                canvas.height=width;
                
         },
          drawArea(obj){
             
               let _obj=obj,
                    context = _obj.getContext('2d'),
                    fontS=parseInt(window.getComputedStyle(obj.parentNode, null).borderWidth),
                    number=_obj.getAttribute("data-percentum"),
                    color=_obj.getAttribute("data-color"),
                    parent=_obj.parentNode,
                    width=_obj.clientWidth;
                               
                number=parseFloat(number)>100?100:number;
                    _obj.height=width;
                     _obj.width=width;
                     context.clearRect(0,0,width,width);
                    fontS=Math.ceil(fontS)%2==0?Math.ceil(fontS):Math.round(fontS);
                    parent.style.cssText='border-width:'+fontS+'px;height:'+width+'px;width:'+width+'px';
                    context.strokeStyle =color;
                    context.lineWidth=fontS;
                    let r=Math.floor(width/2);
                    context.arc(r, r,Math.floor(r-fontS/2), 0, Math.PI*2*number);
                    context.stroke();
               
            },
           getCanvas(){
                let  _this=this,
                    canvas=document.querySelectorAll("canvas");
                for(let i=0,maxl=canvas.length;i<maxl;i++){
                    
                    _this.drawArea(canvas[i]);
                }
           }
      } 
}