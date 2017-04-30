function showdiv(div){
	//document.getElementById(div).style.display="block";
	var procbg = document.createElement("div"); //首先创建一个div
procbg.setAttribute("id","mybg"); //定义该div的id
procbg.style.background = "#ffffff";
procbg.style.width = "100%";
procbg.style.height = "100%";
procbg.style.position = "fixed";
procbg.style.top = "0";
procbg.style.left = "0";
procbg.style.zIndex = "500";
procbg.style.opacity = "0.9";
procbg.style.filter = "Alpha(opacity=70)";
//背景层加入页面
document.body.appendChild(procbg);
// document.body.style.overflow = "hidden"; //取消滚动条  
}
function hidediv(div){
	//document.getElementById(div).style.display="none";
	document.body.style.overflow = "auto"; //恢复页面滚动条
var body = document.getElementsByTagName("body");
var mybg = document.getElementById("mybg");
body[0].removeChild(mybg);
}
// $(document).ready(function(){
// 	$('.button').click(function(){
// 		$('body').animate({scrollTop:0},100);
// 		$('.zfq').fadeIn(1000);
// 	})
// 	$('#back').click(function(){
// 		$('.zfq').fadeOut();
// 	})
// })