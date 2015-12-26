// 滚动页面的时候更改界面
$(document).ready(function () {
  $(document).scroll(changeLeftOfContent);
  $(window).resize(changeLeftOfContent);
});

// 页面加载完的时候第一次加载
window.onload = function () {
  changeLeftOfContent();
  initDatePicker();
}


function initDatePicker() {
$('.form_time').datetimepicker({
  language:  'zh-CN',
  weekStart: 1,
  todayBtn:  0,
  autoclose: 1,
  todayHighlight: 0,
  startView: 1,
  minView: 0,
  maxView: 1,
  forceParse: 0
});
}

// 使得页面可以显示，placement是用来确定方向，html为true是用来确定变量中的内容是通过HTML标签显示，而不是纯文本。
$('.z_label_poper').popover({placement:"top",html:true});
