
// 第一个参数是按钮的名字
// 第二个参数是增加的块的名字
// 第三个参数是在哪个大框架下加入第二个参数的名字
// 第四个是增加块的上限数
function addNewBlock(blockname,toBlock,num) {
  // 对应块数小于传入变量
  if ($(blockname).length < (num-1)) {
    var item = $(document.createElement("div"));
    var classname = $(blockname).attr("class");

    item.attr("class",classname);
    item.append($(blockname).html());
    // var item = $(blockname).parent().html();
    // alert(item);
    $(item).appendTo($(toBlock));
    // $(item).animate({"opacity":"1"});
  }
  initDatePicker();
}

//传入的是按钮的对象，按钮是在最外面的DIV内的第一层，同时为了防止最大的一个被删除，
function DeleteBlock(th) {
  // 增加防止误删最后一个block
  var className = $(th).parent().attr('class');

  if ($("."+className).length >1) {
    function deleteItem() {
      $(th).parent().remove();
    }
    $(th).parent().animate({"opacity":0},deleteItem);
  }
}
