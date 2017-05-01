//登陆
function signup() {
  var username = $('#inputUsername').val(); 
  var password = $('#inputPassword').val();
  // LeanCloud - 注册
  // https://leancloud.cn/docs/leanstorage_guide-js.html#注册
  var user = new AV.User();
  user.setUsername(username);
  user.setPassword(password);
  user.signUp().then(function (loginedUser) {
    // window.location.href = ""; 
    tog();
    
  }, (function (error) {
  	alert(JSON.stringify(error),'今日已投票',togn());
  }));
};
function tog(argument) {
  // body...
  // document.getElementsById('form').style.display = 'none';
  // document.getElementsById('hide1').style.display = 'block';
  $('#form').css('display','none');
  $('#hide1').css('display','block');
}
function togn(argument) {
  // body...
  $('#form').css('display','block');
  $('#hide1').css('display','none');
}
$(function() {
  $("#btn").click( function(e) {
    var x = String($('#inputUsername').val()).length;
    var y = String($('#inputPassword').val()).length;
    if (x==12&&y==4) {
    e.preventDefault();
    signup();
    tog();
  }
    else{
      alert('输入有误');
    }
    // alert('抢票系统暂时关闭');
  });
});