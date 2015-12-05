// win8-block的模糊动画开始
	$('.z_div_win8block_content_item').mouseenter(function() {
		var focus = $(this).find("img");
		var focusword = $(this).find(".z_div_win8block_content_item_word");

		$({blurRadius: 0}).animate({blurRadius: 5}, {
		    duration: 250,
		    easing: 'swing', // or "linear"
		                     // use jQuery UI or Easing plugin for more options
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

	$('.z_div_win8block_content_item').mouseleave(function() {
		var focus = $(this).find("img");
		var focusword = $(this).find(".z_div_win8block_content_item_word");
		$({blurRadius: 5}).animate({blurRadius: 0}, {
		    duration: 250,
		    easing: 'swing', // or "linear"
		                     // use jQuery UI or Easing plugin for more options
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
