
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
// 需要引入opacity.js,否则无法生效
opacity_Enter('.z_div_single_page',".z_div_single_page_message",".z_div_single_page_focus",400);
opacity_Leave('.z_div_single_page',".z_div_single_page_message",".z_div_single_page_focus",400);
