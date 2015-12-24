function changeHeight() {

  $('#z_div_sidebar').css({"height":0});
  var height = document.body.scrollHeight - 50 + "px";
  if(height < document.body.offsetHeight){
    height = document.body.offsetHeight;
  }
  $('#z_div_sidebar').css({"height":height});
}

$(document).ready(function(){
  $(window).resize(changeHeight);
})

//页面加载完成后即修改一次高度
window.onload = function(){
  changeHeight();
}
