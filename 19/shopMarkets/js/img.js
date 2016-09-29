$(function(){
    ajax("get","nav.json","", function(data){
        var newArr1 = JSON.parse(data)._imglis;        
        //2.创建所有img节点   
        for(var i = 0; i < newArr1.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr1[i].url);
            aLi.appendTo($("#Img").find("#wrap").find('div'));           
        }

        var newArr2 = JSON.parse(data)._img1;        
        //2.创建所有img节点   
        for(var i = 0; i < newArr2.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr2[i].url);
            aLi.appendTo($("#ImgMore").find('#I1'));           
        }
        var newArr3 = JSON.parse(data)._img2;        
        //2.创建所有img节点             
            var aLi = $("<img>");
            aLi.attr("src",newArr3[0].url);
            aLi.appendTo($("#ImgMore").find('#I2'));           
        
        var newArr4 = JSON.parse(data)._img3;        
        //2.创建所有img节点   
        for(var i = 0; i < newArr4.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr4[i].url);
            aLi.appendTo($("#ImgMore").find('#I3'));           
        }
        $("#Img").find('img').wrap('<a href = "#"></a>');
        //$("#Img").find('img').wrap('<a href = "#"></a>');
        $("#ImgMore").find('img').wrap('<a href = "#"></a>');
        $(".brand_yd").find('img').wrap('<a href = "#"></a>');
        $("#im").find("a").eq(4).css("margin", "0");
        $("#I3").find("a").eq(0).attr("class","b sp_b");
        $("#I3").find("a").eq(1).attr("class","b rb sp_b");
        $("#I3").find("a").eq(2).attr("class","sp_a");
        $("#I3").find("a").eq(3).attr("class","rb sp_a");

        
        $("#I2").find("img").hover(function(){
            $(this).css("transform","translateX(0%)");
        },function(){
            $(this).css("transform","translateX(2%)");
        });

        $("#I3").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });

        var newArr5 = JSON.parse(data)._content;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr5.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr5[i].title);
            aLi.appendTo($(".leftcat").find('.u1'));          
            
        }

       var newArr6= JSON.parse(data)._content1;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr6.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr6[i].title);
            aLi.appendTo($(".leftcat").find('.u2'));          
            
        }

        var newArr7 = JSON.parse(data)._img4;        
        //2.创建所有img节点             
            var aLi = $("<img>");
            aLi.attr("src",newArr7[0].url);
            aLi.appendTo($("#ImgMore1").find('#I5'));   
         $(".leftcat li").wrapInner('<a href ="#"></a>');

         var newArr8 = JSON.parse(data)._img5;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr8.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr8[i].url);
            aLi.appendTo($("#ImgMore1").find('#I6'));

        }   
       
         var newArr9 = JSON.parse(data)._img6;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr9.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr9[i].url);
            aLi.appendTo($("#ImgMore1").find('#I7'));
        }
        $("#I5").find("img").wrap('<a href = "#"></a>');
        $("#I6").find("img").wrap('<a href = "#"></a>');
        $("#I7").find("img").wrap('<a href = "#"></a>');
        $("#I6").find("a").eq(0).attr("class","b");
        $("#I6").find("a").eq(1).attr("class","b rb");
        $("#I6").find("a").eq(3).attr("class","rb"); 
        $("#I7").find("a").eq(0).attr("class","b"); 

        $("#I5").find("img").hover(function(){
            $(this).css("transform","translateX(0%)");
        },function(){
            $(this).css("transform","translateX(2%)");
        });

        $("#I6").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        $("#I7").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        
        //2F运动休闲服
        var newArr10 = JSON.parse(data)._content2;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr10.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr10[i].title);
            aLi.appendTo($(".leftcat").find('.u3'));          
            
        }

       var newArr11= JSON.parse(data)._content3;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr11.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr11[i].title);
            aLi.appendTo($(".leftcat").find('.u4'));                     
        }

        var newArr12 = JSON.parse(data)._img7;        
        //2.创建所有img节点             
            var aLi = $("<img>");
            aLi.attr("src",newArr12[0].url);
            aLi.appendTo($("#ImgMore2").find('#I9'));   
        $(".leftcat li").wrapInner('<a href ="#"></a>');

         var newArr13 = JSON.parse(data)._img8;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr13.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr13[i].url);
            aLi.appendTo($("#ImgMore2").find('#I10'));

        }   
       
         var newArr14 = JSON.parse(data)._img9;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr14.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr14[i].url);
            aLi.appendTo($("#ImgMore2").find('#I11'));
        }
        $("#I9").find("img").wrap('<a href = "#"></a>');
        $("#I10").find("img").wrap('<a href = "#"></a>');
        $("#I11").find("img").wrap('<a href = "#"></a>');
        $("#I10").find("a").eq(0).attr("class","b");
        $("#I10").find("a").eq(1).attr("class","b rb");
        $("#I10").find("a").eq(3).attr("class","rb"); 
        $("#I11").find("a").eq(0).attr("class","b"); 

        $("#I9").find("img").hover(function(){
            $(this).css("transform","translateX(0%)");
        },function(){
            $(this).css("transform","translateX(2%)");
        });
   
        $("#I10").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        $("#I11").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        //3F跑步
         var newArr15 = JSON.parse(data)._content4;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr15.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr15[i].title);
            aLi.appendTo($(".leftcat").find('.u5'));          
            
        }

       var newArr16 = JSON.parse(data)._content5;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr16.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr16[i].title);
            aLi.appendTo($(".leftcat").find('.u6'));                     
        }
        $(".leftcat li").wrapInner('<a href ="#"></a>');
        
         var newArr17 = JSON.parse(data)._img10;        
        //2.创建所有img节点             
            var aLi = $("<img>");
            aLi.attr("src",newArr17[0].url);
            aLi.appendTo($("#ImgMore3").find('#I13'));   
        $(".leftcat li").wrapInner('<a href ="#"></a>');

         var newArr18 = JSON.parse(data)._img11;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr18.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr18[i].url);
            aLi.appendTo($("#ImgMore3").find('#I14'));

        }   
       
         var newArr19 = JSON.parse(data)._img12;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr19.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr19[i].url);
            aLi.appendTo($("#ImgMore3").find('#I15'));
        }

        $("#I13").find("img").wrap('<a href = "#"></a>');
        $("#I14").find("img").wrap('<a href = "#"></a>');
        $("#I15").find("img").wrap('<a href = "#"></a>');
        $("#I14").find("a").eq(0).attr("class","b");
        $("#I14").find("a").eq(1).attr("class","b rb");
        $("#I14").find("a").eq(3).attr("class","rb"); 
        $("#I15").find("a").eq(0).attr("class","b"); 
        

        $("#I13").find("img").hover(function(){
            $(this).css("transform","translateX(0%)");
        },function(){
            $(this).css("transform","translateX(2%)");
        });

        $("#I14").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        $("#I15").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        
        //4F篮球
         var newArr20 = JSON.parse(data)._content6;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr20.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr20[i].title);
            aLi.appendTo($(".leftcat").find('.u7'));          
            
        }

       var newArr21 = JSON.parse(data)._content7;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr21.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr21[i].title);
            aLi.appendTo($(".leftcat").find('.u8'));                     
        }
        $(".leftcat li").wrapInner('<a href ="#"></a>');

        var newArr22 = JSON.parse(data)._img13;        
        //2.创建所有img节点             
            var aLi = $("<img>");
            aLi.attr("src",newArr22[0].url);
            aLi.appendTo($("#ImgMore4").find('#I17'));   
        $(".leftcat li").wrapInner('<a href ="#"></a>');

         var newArr23 = JSON.parse(data)._img14;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr23.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr23[i].url);
            aLi.appendTo($("#ImgMore4").find('#I18'));

        }   
       
         var newArr24 = JSON.parse(data)._img15;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr24.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr24[i].url);
            aLi.appendTo($("#ImgMore4").find('#I19'));
        }
        $("#I17").find("img").wrap('<a href = "#"></a>');
        $("#I18").find("img").wrap('<a href = "#"></a>');
        $("#I19").find("img").wrap('<a href = "#"></a>');
        $("#I18").find("a").eq(0).attr("class","b");
        $("#I18").find("a").eq(1).attr("class","b rb");
        $("#I18").find("a").eq(3).attr("class","rb"); 
        $("#I19").find("a").eq(0).attr("class","b");

        $("#I17").find("img").hover(function(){
            $(this).css("transform","translateX(0%)");
        },function(){
            $(this).css("transform","translateX(2%)");
        });

        $("#I18").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        $("#I19").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        }); 

        //5F足球
         var newArr25 = JSON.parse(data)._content8;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr25.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr25[i].title);
            aLi.appendTo($(".leftcat").find('.u9'));          
            
        }

       var newArr26 = JSON.parse(data)._content9;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr26.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr26[i].title);
            aLi.appendTo($(".leftcat").find('.u10'));                     
        }
        $(".leftcat li").wrapInner('<a href ="#"></a>');

        var newArr27 = JSON.parse(data)._img16;        
        //2.创建所有img节点             
            var aLi = $("<img>");
            aLi.attr("src",newArr27[0].url);
            aLi.appendTo($("#ImgMore5").find('#I21'));   
        $(".leftcat li").wrapInner('<a href ="#"></a>');

         var newArr28 = JSON.parse(data)._img17;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr28.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr28[i].url);
            aLi.appendTo($("#ImgMore5").find('#I22'));

        }   
       
         var newArr29 = JSON.parse(data)._img18;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr29.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr29[i].url);
            aLi.appendTo($("#ImgMore5").find('#I23'));
        }
        $("#I21").find("img").wrap('<a href = "#"></a>');
        $("#I22").find("img").wrap('<a href = "#"></a>');
        $("#I23").find("img").wrap('<a href = "#"></a>');
        $("#I22").find("a").eq(0).attr("class","b");
        $("#I22").find("a").eq(1).attr("class","b rb");
        $("#I22").find("a").eq(3).attr("class","rb"); 
        $("#I23").find("a").eq(0).attr("class","b");

        $("#I21").find("img").hover(function(){
            $(this).css("transform","translateX(0%)");
        },function(){
            $(this).css("transform","translateX(2%)");
        });

        $("#I22").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        $("#I23").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        }); 

        //6F户外鞋
         var newArr26 = JSON.parse(data)._content10;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr26.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr26[i].title);
            aLi.appendTo($(".leftcat").find('.u11'));          
            
        }

       var newArr27 = JSON.parse(data)._content11;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr27.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr27[i].title);
            aLi.appendTo($(".leftcat").find('.u12'));                     
        }
        $(".leftcat li").wrapInner('<a href ="#"></a>');

        var newArr28 = JSON.parse(data)._img19;        
        //2.创建所有img节点             
            var aLi = $("<img>");
            aLi.attr("src",newArr28[0].url);
            aLi.appendTo($("#ImgMore6").find('#I25'));   
        $(".leftcat li").wrapInner('<a href ="#"></a>');

         var newArr29 = JSON.parse(data)._img20;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr29.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr29[i].url);
            aLi.appendTo($("#ImgMore6").find('#I26'));

        }   
       
         var newArr30 = JSON.parse(data)._img21;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr30.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr30[i].url);
            aLi.appendTo($("#ImgMore6").find('#I27'));
        }
        $("#I25").find("img").wrap('<a href = "#"></a>');
        $("#I26").find("img").wrap('<a href = "#"></a>');
        $("#I27").find("img").wrap('<a href = "#"></a>');
        $("#I26").find("a").eq(0).attr("class","b");
        $("#I26").find("a").eq(1).attr("class","b rb");
        $("#I26").find("a").eq(3).attr("class","rb"); 
        $("#I27").find("a").eq(0).attr("class","b");

        $("#I25").find("img").hover(function(){
            $(this).css("transform","translateX(0%)");
        },function(){
            $(this).css("transform","translateX(2%)");
        });

        $("#I26").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        $("#I27").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        }); 

         //7F男鞋
         var newArr31 = JSON.parse(data)._content12;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr31.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr31[i].title);
            aLi.appendTo($(".leftcat").find('.u13'));          
            
        }

       var newArr32= JSON.parse(data)._content13;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr32.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr32[i].title);
            aLi.appendTo($(".leftcat").find('.u14'));                     
        }
        $(".leftcat li").wrapInner('<a href ="#"></a>');

        var newArr33 = JSON.parse(data)._img22;        
        //2.创建所有img节点             
            var aLi = $("<img>");
            aLi.attr("src",newArr33[0].url);
            aLi.appendTo($("#ImgMore7").find('#I29'));   
        $(".leftcat li").wrapInner('<a href ="#"></a>');

         var newArr34 = JSON.parse(data)._img23;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr34.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr34[i].url);
            aLi.appendTo($("#ImgMore7").find('#I30'));

        }   
       
         var newArr35 = JSON.parse(data)._img24;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr35.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr35[i].url);
            aLi.appendTo($("#ImgMore7").find('#I31'));
        }
        $("#I29").find("img").wrap('<a href = "#"></a>');
        $("#I30").find("img").wrap('<a href = "#"></a>');
        $("#I31").find("img").wrap('<a href = "#"></a>');
        $("#I30").find("a").eq(0).attr("class","b");
        $("#I30").find("a").eq(1).attr("class","b rb");
        $("#I30").find("a").eq(3).attr("class","rb"); 
        $("#I31").find("a").eq(0).attr("class","b");

        $("#I29").find("img").hover(function(){
            $(this).css("transform","translateX(0%)");
        },function(){
            $(this).css("transform","translateX(2%)");
        });

        $("#I30").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        $("#I31").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        }); 

        //8F童鞋
         var newArr36 = JSON.parse(data)._content14;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr36.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr36[i].title);
            aLi.appendTo($(".leftcat").find('.u15'));          
            
        }

       var newArr37= JSON.parse(data)._content15;        
        //2.创建所有img节点   
         for(var i = 0; i < newArr37.length; i++){
            var aLi = $("<li></li>");
            aLi.html(newArr37[i].title);
            aLi.appendTo($(".leftcat").find('.u16'));                     
        }
        //$(".leftcat li").wrapInner('<a href ="#"></a>');

        var newArr38 = JSON.parse(data)._img25;        
        //2.创建所有img节点             
            var aLi = $("<img>");
            aLi.attr("src",newArr38[0].url);
            aLi.appendTo($("#ImgMore8").find('#I33')); 

        $(".leftcat li").wrapInner('<a href ="#"></a>');

         var newArr39 = JSON.parse(data)._img26;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr39.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr39[i].url);
            aLi.appendTo($("#ImgMore8").find('#I34'));

        }   
       
         var newArr40= JSON.parse(data)._img27;        
        //2.创建所有img节点 
        for(var i = 0; i < newArr40.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",newArr40[i].url);
            aLi.appendTo($("#ImgMore8").find('#I35'));
        }
        $("#I33").find("img").wrap('<a href = "#"></a>');
        $("#I34").find("img").wrap('<a href = "#"></a>');
        $("#I35").find("img").wrap('<a href = "#"></a>');
        $("#I34").find("a").eq(0).attr("class","b");
        $("#I34").find("a").eq(1).attr("class","b rb");
        $("#I34").find("a").eq(3).attr("class","rb"); 
        $("#I35").find("a").eq(0).attr("class","b");

        $("#I33").find("img").hover(function(){
            $(this).css("transform","translateX(0%)");
        },function(){
            $(this).css("transform","translateX(2%)");
        });

        $("#I34").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        });
        $("#I35").find("a").hover(function() {
            $(this).find("img").css("transform","translateX(0%)");
        },function(){
            $(this).find("img").css("transform","translateX(2%)");
        }); 
    });
});          