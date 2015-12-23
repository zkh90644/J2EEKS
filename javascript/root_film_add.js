function initDatePicker() {
  $('.form_date').datetimepicker({
    language:  'zh-CN',
    weekStart: 1,
    todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
}
initDatePicker();
// 纵向可以选择上传
$('input[type="image"]').click(function () {
  $('input[name="z_form_img_file_upload"]').click();
})

function deleteMe(th) {
  function deleteItem() {
    $(th).parent().remove();
  }
  $(th).parent().animate({"opacity":0},deleteItem);
}

function addInput() {

  var item = '<div class="z_div_add_by_button" ><input type="file" name="name" value=""><button type="button" name="button" onclick=deleteMe(this); class="btn btn-primary btn-sm btn-circle"><span class="glyphicon glyphicon-minus"></span></button></div>';
  $(item).appendTo($('#z_div_poster'));
  $('.z_div_add_by_button').animate({"opacity":"1"});

}
