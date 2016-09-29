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
    });
    $(".shoot").mouseover(function(){
        $(".nav_center").find("div").css("display","none");
    });
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
            aA.attr("href","#");
            aA.html(newArr[i].title);
            var top = -48-47*i;
            aB.css("background-position","10px "+ top + "px");                      
            aLi.append(aI); 
            aLi.append(aA);
            aLi.append(aB);
            aLi.appendTo($("#n1")); 
            var _this = null;
            $(".nav_left").hover(function() {
              $("#n1").css("display","block"); 
            }, function(){
                $("#n1").hover(function(){
                    $("#n1").find('li').css("display","block");
                    $("#nan").find("#wrap").children("div").hover(function() {
                       $("#n1").css("display","block");
                    }, function() {
                       $("#n1").css("display","none");
                    });
                },function(){
                    $("#n1").find('li').hover(function(){
                    clearInterval(tag);
                    $("#n1").find('li').css("background","#1e1908");
                    $("#nan").find("#wrap").children("div").css("display","none");  
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
                    $("#nan").find("#wrap").children().eq($(this).index() + 1).css("display","block");
                },function(){
                    $(this).find("b").css("left","");
                    $(this).find("a").css("margin-left","");
                    $(this).css("background","#1e1908");
                    var _this1 = null;
                    $("#nan").find("#wrap").children().eq($(this).index() + 1).hover(function(){
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
                        }, function() {
                           $(this).css("left","0");
                        });
                    },function(){
                        $(this).css("display","none");                   
                    })                                 
                });
                   $("#n1").css("display","none");  
                });
            });           
        } 

         //给每一个li标签包装一个a标签
        $(".brand1 ul li").wrapInner('<a href ="#"></a>');
        //$(".brand ul li").wrapInner('<a href ="#"></a>'); 
        $(".clothing ul li").wrapInner('<a href ="#"></a>'); 
        $(".sport ul li").wrapInner('<a href ="#"></a>'); 

        }); 

        //移动下边的小图显示上边的大图
        ajax("get","adidas.json","", function(data){
        var newArr1 = JSON.parse(data)._adidas;        
        //2.创建所有节点 
        var aUl = $('<ul class = "u1"></ul>');
        for(var i = 0; i < newArr1.length; i++){
            var aLi = $('<li><a href = "#"><img src = "'+ newArr1[i].url +'"/></a></li>');
            aLi.appendTo(aUl);
            aUl.appendTo('.goods-detail-pic');
            if( i == 0){
              
                aLi.find('img').css("display","block");

            }
        }
        //下边移动的小图
        var newArr2 = JSON.parse(data)._adidas1;        
        //2.创建所有节点 
        var aUl = $('<ul class = "uq"></ul>');
        for(var i = 0; i < newArr2.length; i++){
            var aLi = $('<li><a href = "#"><b></b><img src = "'+ newArr2[i].url +'"/></a></li>');
            aLi.appendTo(aUl);
            aUl.appendTo('.pics');
            if( i == 0){
                aLi.find("b").attr("class","on");
                aLi.find('img').attr("class","active");

            }

        }
        //鼠标滑动下边小图的效果
        $(".uq").find("li").hover(function() {
            //先隐藏所有的图片
            $(".u1").find("li").css("display","none");
            //显示当前的大图
            $(".u1").find("li").eq($(this).index()).css("display","block");
        }, function() {
            
        });
        //下边小图的滑动时边框的样式
        $(".uq").find('li').click(function() {
            //清除以前的样式
            $(".uq").find("b").attr("class","");
            $(".uq").find("img").attr("class","");
            //重新设置当前点击样式
            //alert($(this).index())
            $(this).find("b").attr("class","on");
            $(this).find("img").attr("class","active");
        });
        
        //点击鞋子的尺码
        $(".si1").find("li").find("span").click(function() {
            //先清除所有样式
             $(".si1").find("li").find("span").attr("class","");
            //重新设置样式
            $(this).attr("class","on");
            //鞋子的尺码
            $(".buyCm").html($(this).find("b").html());
            //$(this).eq($(this).index()).css("border","2px solid #f90");
        });
        //点击颜色
        $(".co1").find("li").find('a').click(function() {
              //先清除所有样式
             $(".co1").find("li").find("a").attr("class","");
            //重新设置样式
            $(this).attr("class","selected");

        });
        //商品数量的加减
        //获得文本框对象
        var input = $(".ino");
        //
        $(".cot1").find('.decrease').click(function() {
            if (parseInt(input.val()) >1){
                input.val(parseInt(input.val())-1); 
                 //显示当前的数量
                 $(".buynums").html(input.val());           
            } 
        });

         $(".cot1").find('.increase').click(function() { 
             input.val(parseInt(input.val())+1); 
              //显示当前的数量
              $(".buynums").html(input.val());
        });
        //右边购物车的点击 效果
         $(".tabs-top-wide").click(function(){
            move();
         });

         $(".tab").click(function(){
            move();

         });
         
        function move(){
            if($(".outer").css("right") == "0px"){
                $(".outer").stop().animate({right:"230px"},800);
                //$(_this).css("background","#c40000");                  
            }else if($(".outer").css("right") == "230px"){
                $(".outer").stop().animate({right:"0px"},800);
                //$(_this).css("background","#000");  
            }
        }
        //右边菜单栏划过的时候显示各自的样式
        $(".tab").hover(function() {
            $(this).find(".tab-tip").css("display","block").animate({right:"37px"}, 400);
            sc_msg();

            $(".mcDel").click(function() {
            $(".mcBundleList").remove();
            $.cookie("goods",null);
           //$(this).parent().parent().parent().parent().remove();
        });
        }, function() {
             $(this).find(".tab-tip").stop().animate({right:"47px"}, 400).css("display","none");
        });
         
        $("FavList").hover(function() {
            $(this).find(".tab-tip1").css("display","block").animate({right:"37px"}, 400);
        }, function() {
              $(this).find(".tab-tip1").stop().animate({right:"47px"}, 400).css("display","none");
        });

        //页面刷新的是时候,获取购物车内,商品的数量
        sc_car();
        //点击购物车按钮
        var newshop = $(".co1").find(".selected").find("img").attr("src");
        
        var title = $(".goodnamewarp").find(".goodsname").html();
        //alert(title)
        $(".btn-buy").click(function() {
            var first = $.cookie("goods") == null ? true : false;
                var same = false; //判断是否有相同的商品
                if(first){                   
                    //第一次添加的时候,建立json结构
                    $.cookie('goods', '[{id:"'+newshop+'",title:"'+title+'",num:1}]');
                   
                    $.cookie('first', "false");
                }else{
                    var str = $.cookie("goods");
                    alert(str);
                    var arr = eval(str); //eval(str); eval JQ的字符串转对象
                    //alert(arr);
                    //遍历所有的对象,如果id相同,让该商品的数量递增。
                    for(var i in arr){
                        if(arr[i].id == newshop){
                            arr[i].num = arr[i].num + 1; //添加数量
                            var cookieStr = JSON.stringify(arr);
                            $.cookie('goods', cookieStr);
                            same = true;
                        }
                    }
                    //如果id不同,添加该商品
                    if(!same){
                        var obj = {id:newshop,title:title,num:1};
                        arr.push(obj);
                        var cookieStr = JSON.stringify(arr);
                        $.cookie("goods", cookieStr);
                    }
                }
            sc_car();    
        });

        function sc_car(){
            var sc_str = $.cookie('goods');
            if(sc_str){ //如果购物车不为空
                var sc_obj = eval(sc_str); //和JS中的JSON.parse()
                var sc_num = 0; //记录所有商品的数量
                for(var i in sc_obj){
                    sc_num += Number(sc_obj[i].num);
                }

                //$(".num").html(sc_num);
                $(".mcCheckedNum").html(sc_num);
                $(".car").find('em').html(sc_num);
                $(".mcTotalFee").html(sc_num * 349);
            }
            /*var _sc_um = sc_num;
            $(".mcMinus").click(function() {              
                if (parseInt(_sc_um) >1){
                    .html(parseInt(_sc_um)-1); 
                 //显示当前的数量
                // $(".buynums").html(input.val());           
                } 
            });

             $(".mcPlus").click(function() { 
                _sc_um.html(parseInt(_sc_um)+1); 
                  //显示当前的数量
                  //$(".buynums").html(input.val());
            });*/

        }


        function sc_msg(){   
            var sc_str = $.cookie("goods");
            //alert(sc_str);
            if(sc_str){
                var sc_obj = eval(sc_str);
                var html = "";
                for(var i in sc_obj){
                    html += '<div class="mcBundleList"><div class="mcOrder mcOrderSelected "><div class="mcItem"><a class="mcPic" href="#" ><img src = "'+[sc_obj[i].id]+'"</a></div><div class="mcRt"><div class="mcSku"><p>'+[sc_obj[i].title]+'</p></div><div class="mcCost"><strong class="mcPrice ">￥349.00</strong></div><div class="mcAmount"><a class="mcMinus " href="#" ><s></s></a><input class="num" value="1" type="hidden"><span class="mcQuantity">x '+[sc_obj[i].num]+'</span><a class="mcPlus" ><s></s><b></b></a><a class="mcDel" href="#">删除</a></div></div></div></div>';
                }
                $('.mcBundle').html(html);
            }
               
        }      
        
    });    
    
});