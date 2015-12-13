function changSeat(th) {
  if ($(th).hasClass('z_a_seat_normal')) {
    $(th).attr("class","z_a_seat z_a_seat_selected");
  }else {
    $(th).attr("class","z_a_seat z_a_seat_normal");
  }
}

function setSeat(num) {
  for (var i = 0; i < num; i++) {
    // 测试增加一行
    var tempP = document.createElement("p");
    // $(temp).attr("for",num+"seat");
    var tempSpan = '<span class="text-left">'+(i+1)+'</span>';
    $(tempSpan).appendTo($(tempP));
    for (var j = 0; j < num; j++) {
      var tempSeat = '<a href="javascript:;"class="z_a_seat z_a_seat_normal" onclick=changSeat(this)></a>';
      $(tempSeat).appendTo($(tempP));
    }
    $(tempP).appendTo($('#z_div_select_seats_all'));
  }
}

function changeSets(num,th) {
  if (!$(th).hasClass('active')) {
    $('#z_div_select_seats_all > p').remove();
    setSeat(num);
    $('.z_btn_basic_btn').each(function () {
      $(this).attr("class","btn btn-primary btn-sm z_btn_basic_btn");
    });
    $(th).attr("class","btn btn-primary btn-sm active z_btn_basic_btn");
  }
}

setSeat(10);
