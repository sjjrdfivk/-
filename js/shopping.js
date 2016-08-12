jQuery(function($){
	//购物车加减
	$('.l_amount a').on('click',function(){
		if($(this).html()=='+'){
			var n=$(this).prev().val();
			var num=parseInt(n)+1;	
			$(this).prev().val(num);
			$(this).parents('.l_quan').next().find('i').html(num*398);
		}
		if($(this).html()=='-'){
			var n=$(this).next().val();
			var num=parseInt(n)-1;
			if(num==0){return}
			$(this).next().val(num);
			$(this).parents('.l_quan').next().find('i').html(num*398);
		}
		sums();
	}).trigger('click');
	//结算值
	function sums(){
		var sum=$('.l_cart').find('.l_csum').find('i');
		var c_rt=$('.c_rt').find('i');
		var str=0;
		for(var i=0;i<sum.length;i++){
			str=str+parseInt(sum.eq(i).html());
		}
		c_rt.html(str)
	}
	//购物车删除
	$('.l_ccheck i').on('click',function(){
		var checks=$(this).parents('.l_ccheck').next().find('input');
		if(checks.is(':checked')){
			$(this).parents('.l_cart').remove();
			sums();
		};
		
	});
	$('#b_ch,#titcheck').on('click',function(){
		if(!$(this).is(':checked')){
			$('.l_cartcon input').removeAttr('checked');
		}else{
			$('.l_cartcon input').attr('checked','checked');
		}
	});

	//获取cookie商品显示
		var cookie=document.cookie.split('; ');
		$.each(cookie,function(idx,val){
			
				var te = JSON.parse(val.split('=')[1]);
				
				$('#clone').prev().clone(true).appendTo('#clone')
				$('#clothing').html(te.comname);
				$('#clone .l_ml').html(te.size);
				$('.costs').html(te.comprice);
				$('#val').val(te.counts);
				//console.log(te);
				sums();	
		});
	
	
	
});