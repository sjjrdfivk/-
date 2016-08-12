// 商品详情滚动
jQuery(function($){
	var fixed=$('.g_tab');
	var fixedtop=fixed.offset().top;
	var comment=$('.g_comment');
	var comtop=comment.offset().top;//评论位置
	var tabse=$('.g_tabse').children('a');
	var servicetop=$('.g_service').offset().top;
	//给第一个a加背景
	$(window).on('scroll',function(){
		var scrollTop=$(window).scrollTop();
		if(scrollTop>fixedtop){
			$('.g_tab').css({position:'fixed',top:'0'});
			tabse.eq(0).addClass('gl');
		}else{
			$('.g_tab').removeAttr('style');
		} ;
		if(scrollTop>comtop-46){
			tabse.eq(1).addClass('gl').siblings().removeClass('gl');
		}else{
			tabse.eq(1).removeClass('gl');
			tabse.first().addClass('gl');
		};
		if(scrollTop>servicetop){
			tabse.eq(2).addClass('gl').siblings().removeClass('gl');
		}else{
			tabse.eq(2).removeClass('gl');	
		};
	});
	// 3）点击跳转到相应位置
	tabse.on('click',function(){
		if($(this).html()=="商品详情"){
			$('html,body').animate({scrollTop:fixedtop});
		}else if($(this).html()=="服务说明"){
			$('html,body').animate({scrollTop:servicetop+10});
		}else{
			$('html,body').animate({scrollTop:comtop-40});
		}
	});	
	//获取尺码
	var d_span='';
	$('#d_span span').on('click',function(){
		$(this).css('border','1px solid #f00').siblings().removeAttr('style');
		d_span=$(this).html()
	})
	//点击加减商品数量
	$('.d_num_box a').count();
	//点击添加商品
	var i=0;
	$('#subadd').on('click',function(){
		
		$('#cart_num').html(i)
		var comname=$('#comname').html();//商品名
		var comprice=$('#comprice').html();//价格
		var counts=$('#counts').val();//数量
		var obj=new Object();
		obj.comname=comname;
		obj.comprice=comprice;
		obj.counts=counts;
		obj.size=d_span;
		var json=JSON.stringify(obj);
		document.cookie='number='+json+';path=/';
		i++;
	})
});
