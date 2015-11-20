$(function() {
    var slider = $('.z_class_banner').unslider({
    	autoplay:true,			//自动播放
    	delay:5000,				//播放延迟，毫秒
    	arrows: {				//箭头设置
			prev: '<img src="./img/ad_button.png" class="z_div_ad_banner z_div_pre"/>',	
			next: '<img src="./img/ad_button.png" class="z_div_ad_banner z_div_next"/>',
		},
		nav:true,		//点选按钮设置为无。

    });
   
});
