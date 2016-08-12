jQuery(function($){
	//公告
	var notice=$('.show_notice');
	var noli=$('.show_notice li').length;
	var timer;
	var temp=28;
	timer=setInterval(function(){
		notice.animate({marginTop:'-'+18+'px'},function(){
			notice.children('li:first').insertAfter(notice.children('li:last'));
			notice.css('marginTop',0)
		})
	},2000);
	//
	$('.nav_pull').on('mouseenter',function(){
		$('.change').html('&Lambda;');
		$('.nav_hide').show();
	}).on('mouseleave',function(){
		$('.nav_hide').hide();
		$('.change').html('V');
	});

	$('.mycart').on('mouseenter',function(){
		$('.carlist').show();
	}).on('mouseleave',function(){
		$('.carlist').hide();
	});

	$('.outpa').on('mouseenter',function(){
		$('.outpa_d').show();
	}).on('mouseleave',function(){
		$('.outpa_d').hide();
	});
	// 左侧广告
	var sid=$('.left_sid');
	$(window).on('scroll',function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>615){
			sid.css('top',scrollTop+20);
		}else{
			sid.css('top',615);
		};
	});
	// 输入框判断
	var se=$('.search_l input');
	se.on('focus',function(){
		if(se.val()=='请输入商品名称或货号'){
			se.val('');
		}
	}).on('blur',function(){
		if(se.val()==''){
			se.val('请输入商品名称或货号');
		};
	});
	//
	$('.search_r').on('click',function(){
		location.href = "list.html";
		
	})
});