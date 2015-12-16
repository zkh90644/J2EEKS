// 本方法用来是的一个div中，底部div的页面模糊，上面一个DIV页面显示。
// 使用方法通过animate中的step来实现

// 整个的大的包含两个内容的DIV，或者说需要鼠标移入的内容，传入都是标签的class或者ID
function z_JS_Opacity(all,frontDiv,backDiv) {
  var focus = $(this).find(backDiv);
  var focusword = $(this).find(frontDiv);
  $(all).mouseenter(function() {
    $({blurRadius: 0}).animate({blurRadius: 5}, {
        duration: 400,
        easing: 'swing',
        step: function() {
            focus.css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
        });
      }
    });
    focus.animate({opacity:0.3});
    focusword.animate({opacity:1});
  });

  $(all).mouseleave(function() {
    $({blurRadius: 5}).animate({blurRadius: 0}, {
        duration: 400,
        easing: 'swing',
        step: function() {
            focus.css({
                "-webkit-filter": "blur("+this.blurRadius+"px)",
                "filter": "blur("+this.blurRadius+"px)"
        });
      }
    });
    focus.animate({opacity:1});
    focusword.animate({opacity:0});
  });
}
