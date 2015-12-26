function deleteMe(th) {
  function deleteItem() {
    $(th).parent().remove();
  }
  $(th).parent().animate({"opacity":0},deleteItem);
}

function AddItem() {
  // 用来固定上传图片小于等于5张
  if ($('.z_div_just_for_num').length < 4) {
    var item = '<div style="opacity:0;" class="z_div_just_for_num" ><input type="file" name="upload-file"  placeholder="点击上传文件"><button type="button" name="button" class="btn btn-success btn-sm btn-circle" onclick=deleteMe(this) ><span class="glyphicon glyphicon-minus z_span_delete"></span></button></div>';
    $(item).appendTo($('#z_div_form_items'));
    $('.z_div_just_for_num').animate({"opacity":"1"});
    // $('.z_div_just_for_num').attr("id","");
  }
}


// 滚动页面的时候更改界面，基于cinema_sidebar.js
$(document).ready(function () {
  $(document).scroll(changeLeftOfContent);
  $(window).resize(changeLeftOfContent);
});

// 页面加载完的时候第一次加载
window.onload = function () {
  changeLeftOfContent();
}
