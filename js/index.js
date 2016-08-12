jQuery(function($){
	// 首页轮播图
	var pic=$('.pic ul');
	var leng=$('.pic li').length;
	var imgWidth=1920;
	var i=0;
	var pause;
	myShow();
	$('.pic').on('mouseenter','li,span',function(){
		i=$(this).index();
		myShow();
		clearInterval(pause);
		$('.prev,.next').show()
	}).on('mouseleave',function(){
		pause=setInterval(Go,4000);
		$('.prev,.next').hide();
	}).trigger('mouseleave');
	$('.prev').on('click',function(){
		i--;
		myShow();
	});
	$('.next').on('click',function(){
		i++;
		myShow();
	});
	function Go(){
		i++;
		myShow();
	}
	function myShow(){
		if(i<0){
			i=leng-1;
		}else if(i>=leng){
			i=0;
			pic.css('left',imgWidth*i)
		}
		pic.stop().animate({left:'-'+imgWidth*i+'px'},1000);
		$('.sl_nav span').eq(i).addClass('select').siblings().removeClass()	
	}
	// timer=setInterval(function(){	
	// 	pic.animate({left:'-'+imgWidth+'px'});
	// },4000);
	//透明轮播
	var index=0;
	var Stop;
	var ec=$('.e_choiceness span');
	var opac=$('.choiceness_l ul');
	var choiceness=$('.choiceness_l');
	var le=$('.choiceness_l ul li').length;
	show();
	choiceness.on('mouseenter','.e_choiceness span',function(){
		index=$(this).index();
		clearInterval(Stop);
		show();
	}).on('mouseenter','ul',function(){
		clearInterval(Stop);
	}).on('mouseleave',function(){
		Stop=setInterval(carousel,3000);
	}).trigger('mouseleave');
	// 轮播
	function carousel(){
		index++;
		show();
	}
	function show(){
		if(index<0){
			index=le-1;
		}else if(index>le-1){
			index=0;	
		};
		choiceness.find('ul li').eq(index).show().siblings().hide();
		opac.stop().animate({opacity:0},function(){
			opac.css('opacity',1)
		});
		 $('.e_choiceness span i').hide().eq(index).show();
		
	};
	// 左右切换
	var tv_prev=$('.tv_prev');
	var tv_next=$('.tv_next');
	var fore=$('.foreshow_list ul');
	var t=0;
	tv_next.on('click',function(){
		t=t-270;
		foreshow();
	});
	tv_prev.on('click',function(){
		t=t+270;
		foreshow();
	});
	function foreshow(){
		if(t>0){
			t=0;	
		}else if(t<-810){
			t=-810;
		};
		fore.stop().animate({left:t});
	} ;  
});