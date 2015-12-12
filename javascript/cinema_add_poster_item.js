function deleteMe(th) {
  function deleteItem() {
    $(th).parent().remove();
  }
  $(th).parent().animate({"opacity":0},deleteItem);
}

function AddItem() {
  var item = '<div style="opacity:0;" id="z_div_new_add"><input type="file" name="upload-file"  placeholder="点击上传文件"><button type="button" name="button" class="btn btn-success btn-sm btn-circle" onclick=deleteMe(this) ><span class="glyphicon glyphicon-minus z_span_delete"></span></button></div>';
  $(item).appendTo($('#z_div_form_items'));
  $('#z_div_new_add').animate({"opacity":"1"});
  $('#z_div_new_add').attr("id","");
}

$('input[type="image"]').click(function () {
  $('input[name="z_form_img_file_upload"]').click();
})
