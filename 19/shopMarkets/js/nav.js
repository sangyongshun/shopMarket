$(function(){
	ajax("get","nav.json","", function(data){
		//获取运动休闲鞋数据
        var arr = JSON.parse(data)._boyShoes;        
        //2.创建所有节点    
        for(var i = 0; i < arr.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr[i].title);
            aA.appendTo($('.p1')); 
            if(i == 1 || i == 2) {
            	aA.attr("class", "on");
            }

        }   
        var arr1 = JSON.parse(data)._grilShoes;        
        //2.创建所有节点    
        for(var i = 0; i < arr1.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr1[i].title);
            aA.appendTo($('.p2'));
            if(i == 2) {
            	aA.attr("class", "on");
            }          
        }

        var arr2 = JSON.parse(data)._search;        
        //2.创建所有节点    
        for(var i = 0; i < arr2.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr2[i].title);
            aA.appendTo($('.p3'));
            if(i == 1 || i == 4) {
            	aA.attr("class", "on");
            }  
            
        } 
        var arr4= JSON.parse(data)._hot;        
        //2.创建所有节点    
        for(var i = 0; i < arr4.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr4[i].title);
            aA.appendTo($('.p4')); 
            if(i == 1 || i == 5 || i == 8) {
            	aA.attr("class", "on");
            }         
        }
        //获取运动休闲服数据
       	var arr5= JSON.parse(data)._boyWear;        
        //2.创建所有节点    
        for(var i = 0; i < arr5.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr5[i].title);
            aA.appendTo($('.p5')); 
            if(i == 3|| i == 4) {
            	aA.attr("class", "on");
            }         
        }

        var arr6= JSON.parse(data)._girlWear;        
        //2.创建所有节点    
        for(var i = 0; i < arr6.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr6[i].title);
            aA.appendTo($('.p6')); 
            if(i == 1|| i == 2) {
            	aA.attr("class", "on");
            }         
        }

        var arr7= JSON.parse(data)._searchHot;        
        //2.创建所有节点    
        for(var i = 0; i < arr7.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr7[i].title);
            aA.appendTo($('.p7')); 
            if(i == 0|| i == 1) {
            	aA.attr("class", "on");
            }         
        }
        //获取跑步的数据
        var arr8= JSON.parse(data)._boyRun;        
        //2.创建所有节点    
        for(var i = 0; i < arr8.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr8[i].title);
            aA.appendTo($('.p8')); 
                    
        }
        var arr9= JSON.parse(data)._grilRun;        
        //2.创建所有节点    
        for(var i = 0; i < arr9.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr9[i].title);
            aA.appendTo($('.p9')); 
                    
        }
        var arr10= JSON.parse(data)._searchhot;        
        //2.创建所有节点    
        for(var i = 0; i < arr10.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr10[i].title);
            aA.appendTo($('.p10')); 
            if(i == 0 || i == 1 || i == 5) {
            	aA.attr("class", "on");
            }         
        }
        var arr11= JSON.parse(data)._hotHot;        
        //2.创建所有节点    
        for(var i = 0; i < arr11.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr11[i].title);
            aA.appendTo($('.p11')); 
            if(i == 0|| i == 1) {
            	aA.attr("class", "on");
            }         
        }
        //获取篮球的数据
        var arr12= JSON.parse(data)._basket;        
        //2.创建所有节点    
        for(var i = 0; i < arr12.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr12[i].title);
            aA.appendTo($('.z')); 
            if(i == 0|| i == 1 || i == 3) {
            	aA.attr("class", "on");
            }         
        }
        var arr13= JSON.parse(data)._star;        
        //2.创建所有节点    
        for(var i = 0; i < arr13.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr13[i].title);
            aA.appendTo($('.z1')); 
            if(i == 2|| i == 3 || i == 6) {
            	aA.attr("class", "on");
            }         
        }
        var arr14= JSON.parse(data)._starHot;        
        //2.创建所有节点    
        for(var i = 0; i < arr14.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr14[i].title);
            aA.appendTo($('.z2')); 
            if (i == 1) {
            	aA.attr("class", "on");
            }         
        }
        //获取足球的数据
        var arr15= JSON.parse(data)._foot;        
        //2.创建所有节点    
        for(var i = 0; i < arr15.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr15[i].title);
            aA.appendTo($('.z3')); 
            if (i == 0 || i == 1) {
            	aA.attr("class", "on");
            }         
        }
        var arr16= JSON.parse(data)._set;        
        //2.创建所有节点    
        for(var i = 0; i < arr16.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr16[i].title);
            aA.appendTo($('.z4')); 
            if (i == 0) {
            	aA.attr("class", "on");
            }         
        }
        var arr17= JSON.parse(data)._studs;        
        //2.创建所有节点    
        for(var i = 0; i < arr17.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr17[i].title);
            aA.appendTo($('.z5')); 
            if (i == 2) {
            	aA.attr("class", "on");
            }         
        }
        var arr18= JSON.parse(data)._hotSearch;        
        //2.创建所有节点    
        for(var i = 0; i < arr18.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr18[i].title);
            aA.appendTo($('.z6')); 
        }
        //获取包包的数据
        var arr19= JSON.parse(data)._bag;        
        //2.创建所有节点    
        for(var i = 0; i < arr19.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr19[i].title);
            aA.appendTo($('.z7')); 
            if (i == 1 || i == 0) {
            	aA.attr("class", "on");
            }  
        }
        var arr20= JSON.parse(data)._parts;        
        //2.创建所有节点    
        for(var i = 0; i < arr20.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr20[i].title);
            aA.appendTo($('.z8')); 
            
        }
        var arr21= JSON.parse(data)._nake;        
        //2.创建所有节点    
        for(var i = 0; i < arr21.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr21[i].title);
            aA.appendTo($('.z9'));
            if (i == 0 || i == 1) {
            	aA.attr("class", "on");
            }   
        }
        var arr22= JSON.parse(data)._nakeSearch;        
        //2.创建所有节点    
        for(var i = 0; i < arr22.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr22[i].title);
            aA.appendTo($('.z10')); 
            if (i == 0) {
            	aA.attr("class", "on");
            }  
        }
        //获取户外数据
        var arr23= JSON.parse(data)._outShoes;        
        //2.创建所有节点    
        for(var i = 0; i < arr23.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr23[i].title);
            aA.appendTo($('.z11')); 
            if (i == 0 || i == 1 || i == 2) {
            	aA.attr("class", "on");
            }  
        }

        var arr24= JSON.parse(data)._outWear;        
        //2.创建所有节点    
        for(var i = 0; i < arr24.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr24[i].title);
            aA.appendTo($('.z12')); 
            if (i == 2 || i == 3 ) {
            	aA.attr("class", "on");
            }  
        }

        var arr25= JSON.parse(data)._outstuds;        
        //2.创建所有节点    
        for(var i = 0; i < arr25.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr25[i].title);
            aA.appendTo($('.z13')); 
            if (i == 0) {
            	aA.attr("class", "on");
            }  
        }

        var arr26= JSON.parse(data)._outSearch;        
        //2.创建所有节点    
        for(var i = 0; i < arr26.length; i++){
            var aA = $("<a></a>");
            aA.attr("href","#");
            aA.html(arr26[i].title);
            aA.appendTo($('.z14')); 
            if (i == 0) {
            	aA.attr("class", "on");
            }  
        }
    });
});