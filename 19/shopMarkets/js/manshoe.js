$(function(){
	$("#brand_dl .open").click(function(){
	   $('#brand_dl').css("height","117px")
	   $("#brand_dl .close").css('display',"block");
	   $("#brand_dl .open").css('display',"none");
	   $("#brand_dl .hidden").css("display","block");
	   //$(".close").css("color" ,"#c00")
	});
	$("#brand_dl .close").click(function(){
	   $('#brand_dl').css("height","85px")
	   $("#brand_dl .open").css('display',"block");
	   $("#brand_dl .close").css('display',"none");
	   $("#brand_dl .hidden").css("display","none");
	});

	$("#price_id_dl .open").click(function(){
	   $('#price_id_dl').css("height","46px")
	   $("#price_id_dl .close").css('display',"block");
	   $("#price_id_dl .open").css('display',"none");
	   $("#price_id_dl .hidden").css("display","block");
	   //$(".close").css("color" ,"#c00")
	});
	$("#price_id_dl .close").click(function(){
	   $('#price_id_dl').css("height","23px")
	   $("#price_id_dl .open").css('display',"block");
	   $("#price_id_dl .close").css('display',"none");
	   $("#price_id_dl .hidden").css("display","none");
	});

	ajax("get","manshoe.json","", function(data){
        var arr = JSON.parse(data)._main;  
        //alert(arr.length);
        for(var i = 0; i <arr.length;i++ ){
        	var aDl = $('<dl><dt><a href ="adidas.html" title="adidas阿迪达斯男鞋休闲鞋2016新款板鞋运动鞋AW5079 QJ"><img src = "'+ arr[i].title +'"></a></dt><dd><ul><li class="r1"><i class="price"> ￥'+ arr[i].num1 +'</i><i class="del_price">￥ '+ arr[i].num2 +'</i></li><li class="r2">'+ arr[i]._value + '</li><li class="r3">已售出<i>'+ arr[i].num3 +'</i>件</li><li class="r4">尺码：'+ arr[i]._size +'</li></ul></dd></dl>');
        	aDl.appendTo('.product_list');
        }
   
        //划过列表详单
        $(".product_list dl").hover(function() {
        	
        	$(this).find("dt").find("img").css('border','3px solid #f2f2f2');       	
        	$(this).find("dd").find(".r4").css({display:"block",background:"#f0f0f0",width:"220px",marginLeft:"-10px",textIndent:10});
        	$(this).find('dd').find("ul").css("background","#f0f0f0");
        	var h = $(this).find('dd').find("ul").css("height");
        	
        	$(this).find('dd').find("ul").stop().animate({height:h}, 80);
        }, function() {
        	$(this).find("dt").find("img").css('border','3px solid #fff');
        	
        	$(this).find("dd").find(".r4").css({display:"none",background:"#f0f0f0",width:"220px",marginLeft:"-10px",});
        	$(this).find('dd').find("ul").css("background","#fff")
        	
        });
    });


        //商品分类
       	ajax("get","foot.json","", function(data){
       	 	var arr1 = JSON.parse(data)._manshoe;
       	 	var aDl = $("<dl>");  
        	var aDt = $('<dt><a href = "#"><s>' + arr1[0].title1 + '</s><img src = "'+ arr1[0].url +'"/></a></dt>');   
	        aDt.appendTo(aDl);
	        var aDd = $("<dd>");  
	        for(var i = 1; i < arr1.length; i++){                   	
	        	var aA = $('<a href = "#">'+ arr1[i].title + '</a>'); 
	            aA.appendTo(aDd);                   
	            aDd.appendTo(aDl);            
	            aDl.appendTo('.btmfenlei_body1');

	        }
   		});
   		ajax("get","foot.json","", function(data){
       	 	var arr2 = JSON.parse(data)._manshoe1;
       	 	var aDl = $("<dl>");  
        	var aDt = $('<dt><a href = "#"><s>' + arr2[0].title1 + '</s><img src = "'+ arr2[0].url +'"/></a></dt>');   
	        aDt.appendTo(aDl);
	        var aDd = $("<dd>");  
	        for(var i = 1; i < arr2.length; i++){                   	
	        	var aA = $('<a href = "#">'+ arr2[i].title + '</a>'); 
	            aA.appendTo(aDd);                   
	            aDd.appendTo(aDl);            
	            aDl.appendTo('.btmfenlei_body1');

	        }
   		});

   		ajax("get","foot.json","", function(data){
       	 	var arr3 = JSON.parse(data)._manshoe2;
       	 	var aDl = $("<dl>");  
        	var aDt = $('<dt><a href = "#"><s>' + arr3[0].title1 + '</s><img src = "'+ arr3[0].url +'"/></a></dt>');   
	        aDt.appendTo(aDl);
	        var aDd = $("<dd>");  
	        for(var i = 1; i < arr3.length; i++){                   	
	        	var aA = $('<a href = "#">'+ arr3[i].title + '</a>'); 
	            aA.appendTo(aDd);                   
	            aDd.appendTo(aDl);            
	            aDl.appendTo('.btmfenlei_body1');

	        }
   		});
   		ajax("get","foot.json","", function(data){
       	 	var arr4 = JSON.parse(data)._manshoe3;
       	 	var aDl = $("<dl>");  
        	var aDt = $('<dt><a href = "#"><s>' + arr4[0].title1 + '</s><img src = "'+ arr4[0].url +'"/></a></dt>');   
	        aDt.appendTo(aDl);
	        var aDd = $("<dd>");  
	        for(var i = 1; i < arr4.length; i++){                   	
	        	var aA = $('<a href = "#">'+ arr4[i].title + '</a>'); 
	            aA.appendTo(aDd);                   
	            aDd.appendTo(aDl);            
	            aDl.appendTo('.btmfenlei_body1');

	        }
   		});

});
			