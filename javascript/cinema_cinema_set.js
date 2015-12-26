
// 滚动页面的时候更改界面
$(document).ready(function () {
  $(document).scroll(changeLeftOfContent);
  $(window).resize(changeLeftOfContent);
});

// 页面加载完的时候第一次加载
window.onload = function () {
  changeLeftOfContent();
    // changWidth();
}

// win8-block的模糊动画开始
  $('.z_div_single_page').mouseenter(function() {
    var focus = $(this).find(".z_div_single_page_message");
    var focusword = $(this).find(".z_div_single_page_focus");

    $({blurRadius: 0}).animate({blurRadius: 5}, {
        duration: 250,
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

  $('.z_div_single_page').mouseleave(function() {
    var focus = $(this).find(".z_div_single_page_message");
    var focusword = $(this).find(".z_div_single_page_focus");
    $({blurRadius: 5}).animate({blurRadius: 0}, {
        duration: 250,
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
// win8-block模糊动画结束
