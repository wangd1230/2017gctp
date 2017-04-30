$(document).ready(function(){
    //
  var player1 = AV.Object.createWithoutData('Player', '59047de161ff4b0066aa0746');
    player1.fetch().then(function () {
      var name = player1.get('name');// 读取 name
      $('.name').text(name);
      var number1 = player1.get('number');// 读取 number
      $('.number1').text(number1);

      
      function vote() {
        // body...
        number1 += 1;
        player1.set('number',number1);
        player1.save();
        $('.number').text(number1);
        $('.number1').text(number1);
      }; 
      $("#xs1").click(function(){
      $(".circle").attr("src","./images/h1-2.png");
      $(".detail").text("他们是火焰与海水的结合，是热情与安静的连系。在舞台上，他们可以肆意挥洒震荡你的脉搏，也可以抱起吉他为你演唱一首民谣曲。他们可以热情洋溢，也可以温暖如溪。他们会整装待发，一身荣光，勇敢无惧，用他们独特的嗓音带观众走进那遥远的青葱年代。 ")
      $(".l2").html("曹牧之 叶梓靖");
      $(".l1").html("14表演");
      $("#gxy").attr("src","./images/h1-1.png");
      $('.number').text(number1);
      $('#vote').click(vote);
    });
    }, function (error) {
    // 异常处理
  });
    //
  var player2 = AV.Object.createWithoutData('Player', '59047e28a22b9d0065d9aae2');
    player2.fetch().then(function () {
      var number2 = player2.get('number');// 读取 number
      console.log(number2)
      $('.number3').text(number2);
     
      $('#vote').click(vote);
      function vote() {
        // body...
        number2 += 1;
        player2.set('number',number2);
        player2.save();
        $('.number').text(number2);
        $('.number3').text(number2);
      }; 
      $("#xs2").click(function(){
    $(".circle").attr("src","./images/h1-3.png");
    $(".detail").html("她是来自15音导的宋舒蕾，复赛时的mercy让我们记住了这个拥有独特嗓音的女孩，由于身为音乐专业，平时在听歌的时候就会选择比较欧美范儿的音乐，久而久之，也就自然被那些大咖的唱法潜移默化。蓝调的风情、爵士的节奏、r&b的唱腔在她身上体现得淋漓尽致，三者相互融合却一点也不矛盾，让我们期待今夜，她又将为这个舞台带来何种不一样的异域风情呢？")  
    $(".l2").html( "宋舒蕾");
    $(".l1").html("15音导");
    $('#gxy').attr("src","./images/h2-1.png")
      $('.number').text(number2);
       console.log(number2);
    });
    }, function (error) {
    // 异常处理
  });
    

     
//   
//     
 var player3 = AV.Object.createWithoutData('Player', '59047dbcb123db3ee4779d28');
    player3.fetch().then(function () {
      var number3 = player3.get('number');// 读取 number
      $('.number5').text(number3);
     
      $('#vote').click(vote);
      function vote() {
        // body...
        number3 += 1;
        player3.set('number',number3);
        player3.save();
        $('.number').text(number3);
        $('.number5').text(number3);
      }; 
      $("#xs3").click(function(){
    $('.ms').css("left","34%")
      $('.ms').css("top","17%")
    $(".circle").attr("src","./images/h1-2.png");
    $(".detail").html("在复赛时以一曲赵雷的《理想》惊艳全场，他是肆意的游走在深情与热烈之间的王汉臣，既可以唱出民谣的忧郁气质，也可以唱出摇滚音乐桀骜不驯与洒脱，可塑性极强的磁性嗓音所散发的魅力，足以摄人心魄，期待他在广春决赛的舞台上为我们带来更加惊艳的演唱。")
    $(".l2").html("王汉臣");
    $(".l1").html("15法语");
    $("#gxy").attr("src","./images/h3-1.png");
      $('.number').text(number3);
    });
    }, function (error) {
    // 异常处理
  });
 
  
var player4 = AV.Object.createWithoutData('Player', '59047db044d90400691fc7e2');
    player4.fetch().then(function () {
      var name = player4.get('name');// 读取 name
      $('.name').text(name);
      var number4 = player4.get('number');// 读取 number
      $('.number7').text(number4);

      
      function vote() {
        // body...
        number4 += 1;
        player4.set('number',number4);
        player4.save();
        $('.number').text(number4);
        $('.number7').text(number4);
      }; 
      $("#xs4").click(function(){
      $(".circle").attr("src","./images/h1-2.png");
    $(".detail").html("嗓音清澈温柔是她的代名词，她热爱音乐，享受音乐，徜徉在音乐的海洋中，她无比幸福。从小学习音乐的经历，让她对歌曲的理解更深一层，不同于一般的抒情，她会用更细腻的处理，更走心的演唱来征服大家的耳朵！她是叶青雯，更具张力的抒情演唱，不一样的气质女声！")
    $(".l2").html("叶青雯");
    $(".l1").html("16声表");
    $("#gxy").attr("src","./images/h4-1.png");
    $('.number').text(number4);
      $('#vote').click(vote);
    });
    }, function (error) {
    // 异常处理
  });
  
//     
    var player5 = AV.Object.createWithoutData('Player', '59047e015c497d0058356436');
    player5.fetch().then(function () {
      var number5 = player5.get('number');// 读取 number
      $('.number9').text(number5);
     
      $('#vote').click(vote);
      function vote() {
        // body...
        number5 += 1;
        player5.set('number',number5);
        player5.save();
        $('.number').text(number5);
        $('.number9').text(number5);
      }; 
      $("#xs5").click(function(){
      $(".circle").attr("src","./images/h1-2.png");
    $(".detail").html("张沁园是16级广播电视编导的研究生，参加过众多比赛的她在舞台上表现的时分沉稳大气，浑厚低沉的嗓音时常爆发出惊人的能量。于歌唱，她砥砺前行，凭执着，诉尽一腔热忱。在决赛，她希望突破自我，给观众耳目一新的感觉。希望她与歌声的不期而遇，是广春于你的年少锦时。")
    $(".l2").html("张沁园");
    $(".l1").html("16广电研");
    $("#gxy").attr("src","./images/h5-1.png");
      $('.number').text(number5);
    });
    }, function (error) {
    // 异常处理
  });
  
  var player6 = AV.Object.createWithoutData('Player', '59047d94a22b9d0065d9a73c');
    player6.fetch().then(function () {
      var number6 = player6.get('number');// 读取 number
      $('.number2').text(number6);
     
      $('#vote').click(vote);
      function vote() {
        // body...
        number6 += 1;
        player6.set('number',number6);
        player6.save();
        $('.number').text(number6);
        $('.number2').text(number6);
      }; 
      $("#xs6").click(function(){
      $(".circle").attr("src","./images/h1-2.png");
    $(".detail").html("他是暖如人间四月天的邻家男孩，他是聚光灯下舞台之上的情歌王子，他的心中有着万千柔情，都被他用细腻温情的嗓音融入到每一个音符之中，而在广春决赛的舞台上，他又即将带来怎样别致的反转舞台，让我们一同期待他的再次发声。")
    $(".l2").html("程博强");
    $(".l1").html("15影视动画");
    $("#gxy").attr("src","./images/h6-1.png");
      $('.number').text(number6);
    });
    }, function (error) {
    // 异常处理
  });


   var player7 = AV.Object.createWithoutData('Player', '59047e0e5c497d0058356489');
    player7.fetch().then(function () {
      var number7 = player7.get('number');// 读取 number
      $('.number4').text(number7);
     
      $('#vote').click(vote);
      function vote() {
        // body...
        number7 += 1;
        player7.set('number',number7);
        player7.save();
        $('.number').text(number7);
        $('.number4').text(number7);
      }; 
      $("#xs7").click(function(){
      $(".circle").attr("src","./images/h1-2.png");
    $(".detail").html("老上海的风韵蕴在他的眉眼之间，陈年不朽的腔调在他的抑扬之中。活泼而不失风度，乏陈而不失韵味，他用自己特有的嗓音和感情让我们置身于经典乐曲的海洋中，简单的质朴中传递着一种巨大的穿透力。每一次真情实感的表达，每一曲淋漓尽致的展现，每一段精彩绝伦的演绎，都是他对音乐至真的热爱和追求")
    $(".l2").html("涂陈昊");
    $(".l1").html("16通信");
    $("#gxy").attr("src","./images/h7-1.png");
      $('.number').text(number7);
    });
    }, function (error) {
    // 异常处理
  }); 
  
//     
    var player8 = AV.Object.createWithoutData('Player', '59047dc6570c35005817dbbd');
    player8.fetch().then(function () {
      var number8 = player8.get('number');// 读取 number
      $('.number6').text(number8);
     
      $('#vote').click(vote);
      function vote() {
        // body...
        number8 += 1;
        player8.set('number',number8);
        player8.save();
        $('.number').text(number8);
        $('.number6').text(number8);
      }; 
      $("#xs8").click(function(){
      $(".circle").attr("src","./images/h1-2.png");
    $(".detail").html("他的音乐典雅华丽，如典藏美酒一般让人回味无穷。他的声音温暖厚实，让歌舞升平的复古风貌重现眼前。舞台上的他用醇厚悠扬的嗓音带你领略古典的奥妙，每字每句中都透露着对音乐的深沉热爱。他是来自15声表的杨鹏宇，用最赤诚的心享受舞台。")
    $(".l2").html("杨鹏宇");
    $(".l1").html("15声表");
    $("#gxy").attr("src","./images/h8-1.png");
      $('.number').text(number8);
    });
    }, function (error) {
    // 异常处理
  }); 
  
//     
    var player9 = AV.Object.createWithoutData('Player', '59047da3b123db3ee4779c95');
    player9.fetch().then(function () {
      var number9 = player9.get('number');// 读取 number
      $('.number8').text(number9);
     
      $('#vote').click(vote);
      function vote() {
        // body...
        number9 += 1;
        player9.set('number',number9);
        player9.save();
        $('.number').text(number9);
        $('.number8').text(number9);
      }; 
      $("#xs9").click(function(){
      $(".circle").attr("src","./images/h1-2.png");
    $(".detail").html("她可以温柔细致的唱遍小女生的心思，也可以铿锵有力的呐喊出自己的坚持。沉静稳妥的表达是她的武器，专注笃定的歌唱是她的态度，小小的身板却蕴含着无穷的能量。听她浅浅地吟唱，听她深情地呢喃，听她澎湃地释放，听那声音在字里行间穿梭，诉尽所有温婉而动人的故事。")
    $(".l2").html("郑馨怡");
    $(".l1").html("14广告");
    $("#gxy").attr("src","./images/h9-1.png");
      $('.number').text(number9);
    });
    }, function (error) {
    // 异常处理
  }); 
  
  var player10 = AV.Object.createWithoutData('Player', '59047da3b123db3ee4779c95');
    player10.fetch().then(function () {
      var number10 = player10.get('number');// 读取 number
      $('.number10').text(number10);
     
      $('#vote').click(vote);
      function vote() {
        // body...
        number10 += 1;
        player10.set('number',number10);
        player10.save();
        $('.number').text(number10);
        $('.number10').text(number10);
      }; 
      $("#xs10").click(function(){
    $(".circle").attr("src","./images/h1-2.png");
    $(".detail").html("他似乎散发着一种与生俱来的艺术家的气质。比起迷人的声线、扎实的唱功，满腔的热爱、款款的深情才是他的音乐里最动人的力量。音乐是他生活的大部分，而除了音乐，旅行、阅读、运动也都是他生活中的重要组成部分。用心经历，有感而发，也正因如此他的音乐才更显厚重，多了几分积淀的醇香。 ")
    $(".l2").html("宗一介");
    $(".l1").html("14音传");
    $("#gxy").attr("src","./images/h10-1.png");
      $('.number').text(number10);
    });
    }, function (error) {
    // 异常处理
  }); 
});

