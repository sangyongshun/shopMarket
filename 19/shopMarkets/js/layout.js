$(function(){
    var down = $(".down");     
    ul1 = down.find(".List");      
    oDiv1 = down.find(".butn div");
    oneWidth1 = down.find(".List li").eq(0).width();  //获取每个图片的宽度
    var tags = null;   
    var iPage1 = 0;     
    //为每个按钮绑定一个点击事件 
    oDiv1.on("mouseover",function(){          
        //按钮点击时为这个按钮添加高亮状态，并且将其他按钮高亮状态去掉       
        $(this).addClass("on2").siblings().removeClass("on2"); 
        //获取哪个按钮被点击，也就是找到被点击按钮的索引值 
        var index = $(this).index();  
        iPage1 = index;
        ul1.animate({
            "left":-oneWidth1 * iPage1 / 2,   //注意此处用到left属性，让ul左移n个图片大小的宽度
        });
    });   
    //定时自动轮播图片代码开始
    function autoPlay1(){
        tags = setInterval(function(){ 
            //让图片的索引值次序加1，这样就可以实现顺序轮播图片       
            iPage1++;    
            //当到达最后一张图的时候，让iPage赋值为第一张图的索引值，轮播效果跳转到第一张图重新开始                      
            if(iPage1 > oDiv1.length - 1){   
                iPage1 = 0;
            }         
            oDiv1.eq(iPage1).trigger("mouseover"); //模拟触发数字按钮的click
        },4000); 
    }
    autoPlay1();   
});
