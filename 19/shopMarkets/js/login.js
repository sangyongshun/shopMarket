$(function(){

	$(".login-IconList").find('.dis').hover(function() {
		$(".mod_cb_jr_pop").css("display","block");
	}, function() {
		$(".mod_cb_jr_pop").hover(function() {
		
		}, function() {
			$(".mod_cb_jr_pop").css("display","none");
		});
		
	});

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
	//验证码验证
	$(".div_test").html(testCode(4));
    $(".button").click(function() {
    	$(".div_test").html(testCode(4));
    });

	
   /**************登录按钮点击*******************/
	$(".actbtn").click(function(){
		var str1 = $(".first1 input").val();
		var str2 = $(".first2 input").val();
		var str3 = $(".last input").val();
		var istrue = true;
		if(str3 != $(".div_test").html()){
			$(".last .valierror").css("display", "block");
			istrue = false;
		}
		if(/^\s*$/.test(str1) && /^\s*$/.test(str2)){
			$(".first1 .valierror").css("display", "block");		
		}else if(str1.length != 11 && (str2.length < 4 || str2.length > 20)){
			$(".first1 .valierror").css("display", "block");		
		}else if(/^\d+$/.test(str1) && istrue){
			var str = $.cookie("account");
			var arr = eval(str); //eval(str); eval JQ的字符串转对象
			for(var i in arr){
				if(arr[i].username == str1 && arr[i].password == str2){
					setTimeout(function(){
						var url = "../index.html";
						open(url);
					},1000);
				}else{
					$(".first1 .valierror").css("display", "block");
					alert("该用户不存在");					
				}
			}
			
		}
	})

	 
});

	