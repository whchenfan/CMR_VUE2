export default{
	formTime:function (a){
	  var d=new Date();
	      d.setTime(a);
	      return d.getFullYear()+'-'+(d.getMonth()+1>9?(d.getMonth()+1):('0'+(d.getMonth()+1)))+'-'+(d.getDate()>9?d.getDate():('0'+d.getDate()));
   }

}
