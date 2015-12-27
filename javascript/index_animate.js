// win8-block的模糊动画开始

// 需要引入opacity.js,否则无法生效
opacity_Enter('.z_div_win8block_content_item',"img",".z_div_win8block_content_item_word",400);
opacity_Leave('.z_div_win8block_content_item',"img",".z_div_win8block_content_item_word",400);

// win8-block模糊动画结束

// 最后一栏变宽变窄的动画
		$(".z_div_cinema_content_item").click(function(){
			var diaplayBlock = $('.z_div_cinema_content_item_display');
			if($(this).css("width") != diaplayBlock.css("width")){


				diaplayBlock.animate({width:"10%"});
				$(this).animate({width:"40%"});
				diaplayBlock.attr("class","z_div_cinema_content_item z_div_cinema_content_all");
				$(this).attr("class","z_div_cinema_content_item_display z_div_cinema_content_all");
			}
		});
