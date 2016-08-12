(function($){
	$.fn.count=function(options){	
		this.each(function(idx,ele){	
			$(ele).on('click',function(){
				if($(this).html()=='+'){
					var n=$(this).prev().val();
					var num=parseInt(n)+1;	
					$(this).prev().val(num);
				}
				if($(this).html()=='-'){
					var n=$(this).next().val();
					var num=parseInt(n)-1;
					if(num==0){return}
					$(this).next().val(num);
				}	
			});
		});
		return this;
	}
})(jQuery);