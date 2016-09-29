$(function(){
    //鼠标划过我的名鞋库标签
    $(".a1").hover(function() {
    	$(this).css("background","#fff");
    	$(this).find("div").css("display","block");      
    },function(){
    	$(this).css("background","#eee");
    	$(this).find("div").css("display","none");
    });
    //鼠标划过手机名鞋库标签
    $(".a2").hover(function() {
    	$(this).css("background","#fff");
    	$(this).find("div").css("display","block");
    },function(){
    	$(this).css("background","#eee");
    	$(this).find("div").css("display","none");
    });
    //鼠标划过男子运动这个标签时
    $(".boy").hover(function() {
        $(".nav_center").find("div").css("display","none");
        $(".sport").css("display","block"); 
    },function(){
        $(".sport").hover(function(){
           $(".boy").css("background","#444");
        },function(){
            $(".sport").css("display","none");
            $(".boy").css("background","#a21f25");
        });      
    });
    $(".first").mouseover(function(){
        $(".nav_center").find("div").css("display","none");
    })
    $(".shoot").mouseover(function(){
        $(".nav_center").find("div").css("display","none");
    })
    //鼠标划过女子运动这个标签
    $(".girl").hover(function() {
        $(".nav_center").find("div").css("display","none");
        $(".clothing").css("display","block"); 
    },function(){
        $(".clothing").hover(function(){
           $(".girl").css("background","#444");
        },function(){
            $(".clothing").css("display","none");
            $(".girl").css("background","#a21f25");
        });      
    });
    //鼠标划过女子运动这个标签
    $(".child").hover(function() {
        $(".nav_center").find("div").css("display","none");
        $(".brand1").css("display","block");   
    },function(){
        $(".brand1").hover(function(){
           $(".child").css("background","#444");
        },function(){
            $(".brand1").css("display","none");
            $(".child").css("background","#a21f25");
        });      
    });
    //图片划过的效果
    $("#n2").find(".s1").hover(function(){
        $("#n2").find(".s2").css("background","rgba(0, 0, 0, 0.3)");
    },function(){
        $("#n2").find(".s2").css("background","rgba(0, 0, 0, 0)");
    });

    $("#n2").find(".s2").hover(function(){
        $("#n2").find(".s1").css("background","rgba(0, 0, 0, 0.3)");
    },function(){
        $("#n2").find(".s1").css("background","rgba(0, 0, 0, 0)");
    });
    //1.获取男子运动中运动装数据
    ajax("get","nav.json","", function(data){
        var arr = JSON.parse(data)._sport;        
        //2.创建所有节点    
        for(var i = 0; i < arr.length; i++){
            var aLi = $("<li></li>");
            aLi.html(arr[i].title);
            aLi.appendTo($(".sport").find('#q1'));          
            if(i == 0){
                aLi.attr("class", "first");
            }
        }          
        //1.获取男子运动中服装数据  
        var arr2 = JSON.parse(data)._clothing;        
        //2.创建所有节点    
        for(var i = 0; i < arr2.length; i++){
            var aLi = $("<li></li>");
            aLi.html(arr2[i].title);
            aLi.appendTo($(".sport").find('#q2'));           
            if(i == 0){
                aLi.attr("class", "first");
            }
        }
        //获取男子运动中品牌数据
        var arr3 = JSON.parse(data)._brand;        
        //创建h4标签 h4 标签的内容是数组中第一个数据
        var ah4 = $("<h4></h4>");
        ah4.html(arr3[0].title);
        ah4.appendTo($(".sport").find('#q3')); 
        //2.创建所有img节点   
        for(var i = 1; i < arr3.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",arr3[i].url);
            aLi.appendTo($(".sport").find('#q3'));           
        }
        //获取女子运动中运动鞋的数据
        var arr4 = JSON.parse(data)._boy;        
        //2.创建所有节点    
        for(var i = 0; i < arr4.length; i++){
            var aLi = $("<li></li>");
            aLi.html(arr4[i].title);
            aLi.appendTo($(".clothing").find("#q4"));          
            if(i == 0){
                aLi.attr("class", "first");
            }
        }          
        //1.获取女子运动中服装的数据  
        var arr5 = JSON.parse(data)._girl;        
        //2.创建所有节点    
        for(var i = 0; i < arr5.length; i++){
            var aLi = $("<li></li>");
            aLi.html(arr5[i].title);
            aLi.appendTo($(".clothing").find("#q5"));         
            if(i == 0){
                aLi.attr("class", "first");
            }
        }
        //获取女子运动中品牌数据
        var arr6 = JSON.parse(data)._child;        
        //创建h4标签 h4 标签的内容是数组中第一个数据
        var ah4 = $("<h4></h4>");
        ah4.html(arr6[0].title);
        ah4.appendTo($(".clothing").find("#q6"));
        //2.创建所有img节点   
        for(var i = 1; i < arr6.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",arr6[i].url);
            aLi.appendTo($(".clothing").find("#q6"));           
        }
        //获取儿童中男童鞋的数据
        var arr7 = JSON.parse(data)._childBoy;        
        //2.创建所有节点    
        for(var i = 0; i < arr7.length; i++){
            var aLi = $("<li></li>");
            aLi.html(arr7[i].title);
            aLi.appendTo($(".brand1").find("#q7"));          
            if(i == 0){
                aLi.attr("class", "first");
            }
        } 
        
        //获取儿童中服装的数据
        var arr9 = JSON.parse(data)._cloth;        
        //2.创建所有节点    
        for(var i = 0; i < arr9.length; i++){
            var aLi = $("<li></li>");
            aLi.html(arr9[i].title);
            aLi.appendTo($(".brand1").find("#q9"));         
            if(i == 0){
                aLi.attr("class", "first");
            }
        }
        //获取儿童中品牌数据
        var arr10 = JSON.parse(data)._brandChild;        
        //创建h4标签 h4 标签的内容是数组中第一个数据
        var ah4 = $("<h4></h4>");
        ah4.html(arr10[0].title);
        ah4.appendTo($(".brand1").find("#q10"));
        //2.创建所有img节点   
        for(var i = 1; i < arr10.length; i++){            
            var aLi = $("<img>");
            aLi.attr("src",arr10[i].url);
            aLi.appendTo($(".brand1").find("#q10"));           
        }

        //获取儿童中女童鞋的数据
        var arr8 = JSON.parse(data)._childGirl;        
        //2.创建所有节点    
        for(var i = 0; i < arr8.length; i++){
            var aLi = $("<li></li>");
            aLi.html(arr8[i].title);
            aLi.appendTo($(".brand1").find("#q8"));          
            if(i == 0){
                aLi.attr("class", "first");
            }
        }

        //获取nav中的数据 
        var newArr = JSON.parse(data)._nav;        
        //2.创建所有节点 
        for(var i = 0; i < newArr.length; i++){
            var aLi = $("<li></li>");
            var aB = $("<b></b>");
            var aI = $("<i></i>");
            var aA = $("<a></a>") 
            aA.attr("href","manshoe.html");
            aA.html(newArr[i].title);
            var top = -48-47*i;
            aB.css("background-position","10px "+ top + "px");                      
            aLi.append(aI); 
            aLi.append(aA);
            aLi.append(aB);
            aLi.appendTo($("#n1")); 
            var _this = null;          
            $("#n1").find('li').hover(function(){
                clearInterval(tag);
                $("#n1").find('li').css("background","#1e1908");
                $("#banner").find("#wrap").children("div").css("display","none");  
                $(this).css("background","#a90000");
                _this = this;
                var speed = 0;
                var tag = setInterval(function(){
                    speed++;
                    $(_this).find("a").css("margin-left",speed + "px");
                    $(_this).find("b").css("left",speed + "px");
                    if(speed == 8){
                        clearInterval(tag);
                    };
                },20);
                $("#banner").find("#wrap").children().eq($(this).index() + 2).css("display","block");
            },function(){
                //_this = this;
                /*clearInterval(times);
                var speeds = 8;
                var times = setInterval(function(){
                    speeds--;
                    $(_this).find("a").css("margin-left",speeds + "px");
                    $(_this).find("b").css("left",speeds + "px");
                    if(speeds == 0){
                        clearInterval(times);
                    };
                },20);*/
                $(this).find("b").css("left","");
                $(this).find("a").css("margin-left","");
                $(this).css("background","#1e1908");
                var _this1 = null;
                $("#banner").find("#wrap").children().eq($(this).index() + 2).hover(function(){
                    $(this).find("h3").hover(function() {
                        _this1 = this;
                        var speed = 0;
                        var tags = setInterval(function(){
                            speed++;
                            $(_this1).css("left",speed + "px");
                            if(speed == 5){
                                clearInterval(tags);
                            };
                        },20);
                        //$(this).css("left","5px");
                    }, function() {
                       $(this).css("left","0");
                    });
                },function(){
                    $(this).css("display","none");                   
                })                                 
            });
        }          
        //给每一个li标签包装一个a标签
        $(".brand1 ul li").wrapInner('<a href ="manshoe.html"></a>');
        //$(".brand ul li").wrapInner('<a href ="#"></a>'); 
        $(".clothing ul li").wrapInner('<a href ="manshoe.html"></a>'); 
        $(".sport ul li").wrapInner('<a href ="manshoe.html"></a>'); 
    });      
});