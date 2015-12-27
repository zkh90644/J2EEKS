// 此方法为用来创建一个前端显现，后端模糊的效果
// all是整个，也就是鼠标移入的区域，
// back是默认情况下显示，鼠标移上之后模糊
// front是默认情况下不显示，鼠标以上之后显示
// time为真个动画效果产生时间

function opacity_Enter(all,back,front,time) {
  $(all).mouseenter(function() {
    var focus = $(this).find(back);
    var focusword = $(this).find(front);

    $({blurRadius: 0}).animate({blurRadius: 5}, {
        duration: time,
        easing: 'swing',
        step: function() {
            focus.css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
        });
      }
    });
    focus.animate({opacity:0.3},{duration:time});
    focusword.animate({opacity:1},{duration:time});
  });
}

function opacity_Leave(all,back,front,time) {
  $(all).mouseleave(function(){
    var focus = $(this).find(back);
    var focusword = $(this).find(front);
    $({blurRadius: 5}).animate({blurRadius: 0}, {
        duration: time,
        easing: 'swing',
        step: function() {
            focus.css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
        });
      }
    });
    focus.animate({opacity:1},{duration:time});
    focusword.animate({opacity:0},{duration:time});
  });
}
