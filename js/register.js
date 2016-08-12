jQuery(function($){
	//注册切换
	var regnav=$('.regnav li');
	var lc=$('.lang_con')
	regnav.first().on('click',function(){
		$('.lang2').hide();
		$('.lang1').show();
		regnav.first().css({backgroundPositionY:'-58px'});
		regnav.last().css({backgroundPositionY:'-102px'});
		regnav.first().find('span').css({color:'#fff',backgroundPositionY:'-232px'});
		regnav.last().find('span').css({color:'#777',backgroundPositionY:'-302px'})
	});
	regnav.last().on('click',function(){
		$('.lang1').hide();
		$('.lang2').show();
		regnav.last().css({backgroundPositionY:'-58px'});
		regnav.first().css({backgroundPositionY:'-102px'});
		regnav.last().find('span').css({color:'#fff',backgroundPositionY:'-285px'});
		regnav.first().find('span').css({color:'#777',backgroundPositionY:'-212px'})
	});
	//注册验证
	$('input').keyup(function(){
		var number=$('#number').val();
		// 手机验证
		if(!/^1[34578]\d{9}$/.test(number)){
			$('#hint').val('手机格式不正确，请核对后再输入');
			return false;
		}else{
			$('#hint').val('√');
		};
		// 验证码
		var random=$("#random").val();
		var ve=$('#ve').val()
		if(ve==random){
			$('#reminder').val('验证成功');
		}else{
			$('#reminder').val('请输入验证码');
			return false;
		}
		// 密码验证
		var password=$('#password').val();
		if(!/^([a-z]|[A-Z]|\d){6,20}$/.test(password)){
			$('#pass').val('请输入由6-20英文字母或数字组成的密码');
			return false;
		}else{
			$('#pass').val('√');
		};
		//确认密码
		var affirm=$('#affirm').val();
		if(affirm!=password){
			$('#ap').val('密码不一致');
			return false;
		}else{
			$('#ap').val('√');
		}
		
	});
	//点击随便产生验证码
	$('#random').on('click',function(){
		show();
	})
	show();
	function show(){
		var arr=["1","2","3","4","5","6","7","8","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		var aa="";	
		for(var i=0;i<4;i++){
			var str=parseInt(Math.random()*arr.length);
				aa=aa+arr[str];
		}
		$("#random").val(aa);	
	};
	//注册保存cookie
	$('.item_su').on('click',function(){
		if($('#ap').val()=='√'){
			var number=$('#number').val();
			var password=$('#password').val();
			var obj=new Object();
			obj.number=number;
			obj.pass=password;
			var json=JSON.stringify(obj);
			document.cookie=number+'='+json+';path=/';
			location.href = "login.html";
		};	
	});
	//获取cookie
	$('#submit').on('click',function(){
		var cookie=document.cookie.split('; ');
		console.log(cookie)
		$.each(cookie,function(idx,val){
			var  info= JSON.parse(val.split('=')[1]);
			console.log(info)
			if($('#land_us').val()==info.number&&$('#rpass').val()==info.pass){
					location.href = "../index.html";
			}
		})
		
	});
	
	// 登录保存cookie
	var checkbox=$('#checkbox');
	var land_us=$('#land_us').val();
	if(checkbox.is(':checked')){
		var now = new Date();
			now.setDate(now.getDate()+5);
			document.cookie = 'username='+land_us+';expires=' + now;
	};
	function getCookie(key){
		var cookieStr=document.cookie;
		var cookieArr=cookieStr.split("; ");
		for(var i=0;i<cookieArr.length;i++){
			if(cookieArr[i].indexOf(key+"=")==0){
				return cookieArr[i].substring(key.length+1);
			}
		}
			return null;
	}
	//$('#land_us').val(getCookie('username'));
});