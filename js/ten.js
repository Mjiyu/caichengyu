 SPA_RESOLVE_INIT = function(transition) { 
	document.getElementById("change").innerHTML = '<div class="problem hint-bj">\
      <div class="pro-tit">\
        <img src="images/pro-tit.png">\
        <span>第<i class="now-num">10</i>/20题</span>\
      </div>\
      <div class="pro-img hint-img">\
        <img src="images/pro-img.jpg">\
      </div>\
      <div class="time hint-time">\
        <span id="time">60</span>\
        <p>点击方块，得到提示，机会只有一次</p>\
      </div>\
      <div class="hint">\
        <ul>\
          <li>\
            <span></span>\
          </li>\
          <li>\
            <span></span>\
          </li>\
          <li>\
            <span></span>\
          </li>\
          <li>\
            <span></span>\
          </li>\
        </ul>\
        <input type="text" placeholder="输入答案" id="txt">\
      </div>\
      <div class="next" id="btn">\
        <a>下一题</a>\
      </div>\
    </div>';
  var len=item.list.length-20;
  var num=Math.round(Math.random()*len+10);
  if(item.list[num].qtype==2){
    $(".pro-img").html("<img src='"+item.list[num].img+"'>");
    $(".hint").one("click","li",function(){
      $(this).children("span").animate({
          opacity:"1" 
      });
    });
    $("#btn").on("click",function(){
        if($("#txt").val()==""||$("#txt").val()!=$(".hint span").text()){
            $(this).children("a").attr("href","#/error");
        }
        if($("#txt").val()!="" && $("#txt").val()==$(".hint span").text()){
            $(this).children("a").attr("href","#/eleven");
        }
    });
    for(var i=0;i<$(".hint span").length;i++){
      $(".hint span")[i].innerHTML=item.list[num].option[i];
    }
  }
  
}