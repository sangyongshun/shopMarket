var cont = "";
var psd0 = "";
var psd1 = "";
var code = "";
var a = false;
var b = false;
var c = false;
var d = false;
$(function(){
	//手机号码的验证
	//手机号码输入框失去焦点
	$(".first1 input").val("");
	$(".first1 input").blur(function(){
		cont = $(this).val();
		if(/\d+/.test(cont) && cont.length == 11){
			a = true;
			$(".first1 .valierror").css("display", "none");
			$(".first1 .error").css("display", "block");
		}else if(/^\s*$/.test(cont)){
		   $(".first1 .valierror").css("display", "block");	
		}else{
			$(".first1 .valierror").css("display", "block");	
		}
	});
		//手机号码输入框获得焦点
	$(".first1 input").focus(function(){
		$(".first1 .valierror").css("display", "none");
		$(".first1 .error").css("display", "none");
	})
	

	//输入密码的验证
	//密码输入框失去焦点
	$(".first2 input").blur(function(){
		psd0 = $(this).val();
		if(psd0.length < 4){
			$(".first2 .error1").css("display", "block");					
		}else if(psd0.length > 20){
			$(".first2 .valierror").css("display", "block");		
		}else{
			b = true;
			$(".first1 .error").css("display", "none");
		}
	})
	//密码输入框获得焦点
	$(".first2 input").focus(function(){
		$(".first2 .error1").css("display", "none");
		$(".first2 .valierror").css("display", "none");
	})
	

   
	//重复密码的验证
	//重复密码输入框失去焦点
	$(".last1 input").blur(function(){
		psd1 = $(this).val();
		if(/^\s*$/.test(psd1)){
			$(".last1 .valierror").css("display", "block");
		}else if(psd0 == psd1){
			c = true;

			$(".last1 .valierror").css("display", "none");
		}else{
			$(".last1 .valierror").css("display", "block");
		}
	})
	//重复密码输入框获得焦点
	$(".last1 input").focus(function(){
		$(".last1 .valierror").css("display", "none");
	})



	//验证码验证
	$(".div_test").html(testCode(4));

    $(".button").click(function() {
    	$(".div_test").html(testCode(4));
    });
    $(".last input").val("");
	//验证码验证失去焦点
   $(".last input").blur(function(){
		code= $(this).val();
		if(code != $(".div_test").html()){
			$(".last .valierror").css("display", "block");
		}else{
			d = true;
		}		
	})
    

    //验证码验证输入框获得焦点
	$(".last input").focus(function(){
		$(".last .valierror").css("display", "none");
	})


	function testCode(n){
		var arr = [];
		for(var i = 0; i < n; i++){
			var num = parseInt(Math.random() * 100);
			if(num >= 0 && num <= 9){
				arr.push(num);
			}else if(num >= 10 && num <= 25){
				arr.push(String.fromCharCode(num + 87));
			}else if(num >= 65 && num <= 90){
				arr.push(String.fromCharCode(num));
			}else{
				i--;
			}
		}
		return arr.join("");
	}	
		
	//cookie缓存
	$(".actbtn").click(function(){
		if( a && b && c && d ){
			//alert("注册成功");
			var username = $(".first1 input").val();
			var password = $(".first2 input").val();
			$.cookie('account', '[{username:"'+username+'",password:"'+password+'"}]',{expires:7});
			setTimeout(function(){
				var url = "login.html";
				open(url);
			},1000);
		}else{
			alert("再来一次 ")
		}
		

	})
})
