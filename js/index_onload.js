function changeHeightOfComesoon() {
	// 自动调整comesoon的高度
	var img = $(".z_div_3Drevolve_front").find("img");
	var imgHeight = img.height()+"px";
	var halfImgHeight = img.height()/2 + "px";
	$('.z_div_comesoon_item').css("height",imgHeight);
	$('.z_div_3Drevolve_back').css("height",imgHeight);
	//设置反面文字的div高度
	$('.z_div_3Drevolve_back').find("h1").css("line-height",halfImgHeight);

}
	$(document).ready(function(){
		// 菜单栏吸住头部
		$(document).scroll(function() {
			//设置头部菜单栏
				var scrollTopOfwindow = $(document).scrollTop();
				var adHeight = $('#z_div_index_ad').height();
				if (scrollTopOfwindow > adHeight) {
					$("#z_div_menu").css("width","100%");
					$("#z_div_menu").css("position","fixed");
					$("#z_div_menu").css("top","0");
					$("#z_div_win8block").css("margin-top","50px");
				}else {
					$("#z_div_menu").css("position","static");
					$("#z_div_win8block").css("margin-top","0px");
				}

				//设置滑动效果
				$(".slideanim").each(function(){
			    var pos = $(this).offset().top;

			    var winTop = $(window).scrollTop();
			    if (pos < winTop + 600) {
			      $(this).addClass("slidein");
			    }
			  });

  	});

		$(window).resize(changeHeightOfComesoon);

	})

	//页面加载完成后即修改一次高度
	window.onload = function(){
		changeHeightOfComesoon();
	}
