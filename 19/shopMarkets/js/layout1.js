$(function(){
    var wrap = $("#wrap1");     
    ul = wrap.find("#imgList");      
    oDiv = wrap.find("#buttons div");
    oneWidth = wrap.find("#imgList li").eq(0).width();  //获取每个图片的宽度
    var tag = null;   
    var iPage = 0;     
    //为每个按钮绑定一个点击事件 
    oDiv.on("mouseover",function(){          
        //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉       
        $(this).addClass("on").siblings().removeClass("on"); 
        //获取哪个按钮被点击，也就是找到被点击按钮的索引值 
        var index = $(this).index();  
        iPage = index;
        ul.animate({
            "left":-oneWidth * iPage / 3,   //注意此处用到left属性，让ul左移n个图片大小的宽度
        });
    });   
    //定时自动轮播图片代码开始
    function autoPlay(){
        tag = setInterval(function(){ 
            //让图片的索引值次序加1，这样就可以实现顺序轮播图片       
            iPage++;    
            //当到达最后一张图的时候，让iPage赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始                      
            if(iPage > oDiv.length - 1){   
                iPage = 0;
            }         
            oDiv.eq(iPage).trigger("mouseover"); //模拟触发数字按钮的click
        },5000); 
    }
    autoPlay(); 
});

      
