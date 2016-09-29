$(function(){
    ajax("get","foot.json","", function(data){
        var newAr = JSON.parse(data)._data; 
        //alert(newAr);       
        //2.创建所有需要的节点 
        var aDl = $("<dl>");  
        var aDt = $('<dt><a href = "#"><b>' + newAr[0].title1 + '</b><img src = "'+ newAr[0].url +'"/></a></dt>');   
        aDt.appendTo(aDl);
        var aDd = $("<dd>");  
        for(var i = 1; i < newAr.length; i++){                   	
        	var aA = $('<a href = "#">'+ newAr[i].title + '</a>'); 
            aA.appendTo(aDd);                   
            aDd.appendTo(aDl);            
            aDl.appendTo('.btmfenlei_body');

        }
    });
    ajax("get","foot.json","", function(data){            
        var newAr1 = JSON.parse(data)._data1; 
       //alert(newAr1);       
        //2.创建所有需要的节点 
        var aDl1 = $("<dl>");  
        var aDt1 = $('<dt><a href = "#"><b>' + newAr1[0].title1 + '</b><img src = "'+ newAr1[0].url +'"/></a></dt>');   
        aDt1.appendTo(aDl1);
        var aDd1 = $("<dd>");  
        for(var i = 1; i < newAr1.length; i++){                   	
        	var aA1 = $('<a href = "#">'+ newAr1[i].title + '</a>'); 
            aA1.appendTo(aDd1);                   
            aDd1.appendTo(aDl1);            
            aDl1.appendTo('.btmfenlei_body');  
        }
    });
	ajax("get","foot.json","", function(data){            
        var newAr2 = JSON.parse(data)._data2; 
       //alert(newAr1);       
        //2.创建所有需要的节点 
        var aDl2 = $("<dl>");  
        var aDt2 = $('<dt><a href = "#"><b>' + newAr2[0].title1 + '</b><img src = "'+ newAr2[0].url +'"/></a></dt>');   
        aDt2.appendTo(aDl2);
        var aDd2 = $("<dd>");  
        for(var i = 1; i < newAr2.length; i++){                   	
        	var aA2 = $('<a href = "#">'+ newAr2[i].title + '</a>'); 
            aA2.appendTo(aDd2);                   
            aDd2.appendTo(aDl2);            
            aDl2.appendTo('.btmfenlei_body');  
        }
    });
    ajax("get","foot.json","", function(data){            
        var newAr3 = JSON.parse(data)._data3; 
       //alert(newAr1);       
        //2.创建所有需要的节点 
        var aDl3 = $("<dl>");  
        var aDt3 = $('<dt><a href = "#"><b>' + newAr3[0].title1 + '</b><img src = "'+ newAr3[0].url +'"/></a></dt>');   
        aDt3.appendTo(aDl3);
        var aDd3 = $("<dd>");  
        for(var i = 1; i < newAr3.length; i++){                   	
        	var aA3 = $('<a href = "#">'+ newAr3[i].title + '</a>'); 
            aA3.appendTo(aDd3);                   
            aDd3.appendTo(aDl3);            
            aDl3.appendTo('.btmfenlei_body');  
        }
    });
    ajax("get","foot.json","", function(data){            
        var newAr4 = JSON.parse(data)._data4; 
       //alert(newAr1);       
        //2.创建所有需要的节点 
        var aDl4 = $("<dl>");  
        var aDt4 = $('<dt><a href = "#"><b>' + newAr4[0].title1 + '</b><img src = "'+ newAr4[0].url +'"/></a></dt>');   
        aDt4.appendTo(aDl4);
        var aDd4 = $("<dd>");  
        for(var i = 1; i < newAr4.length; i++){                   	
        	var aA4 = $('<a href = "#">'+ newAr4[i].title + '</a>'); 
            aA4.appendTo(aDd4);                   
            aDd4.appendTo(aDl4);            
            aDl4.appendTo('.btmfenlei_body');  
        }
    });
    ajax("get","foot.json","", function(data){            
        var newAr5 = JSON.parse(data)._data5; 
       //alert(newAr1);       
        //2.创建所有需要的节点 
        var aDl5 = $("<dl>");  
        var aDt5 = $('<dt><a href = "#"><b>' + newAr5[0].title1 + '</b><img src = "'+ newAr5[0].url +'"/></a></dt>');   
        aDt5.appendTo(aDl5);
        var aDd5 = $("<dd>");  
        for(var i = 1; i < newAr5.length; i++){                   	
        	var aA5 = $('<a href = "#">'+ newAr5[i].title + '</a>'); 
            aA5.appendTo(aDd5);                   
            aDd5.appendTo(aDl5);            
            aDl5.appendTo('.btmfenlei_body');  
        }
    });
    ajax("get","foot.json","", function(data){            
        var newAr6 = JSON.parse(data)._data6; 
       //alert(newAr1);       
        //2.创建所有需要的节点 
        var aDl6 = $("<dl>");  
        var aDt6 = $('<dt><a href = "#"><b>' + newAr6[0].title1 + '</b><img src = "'+ newAr6[0].url +'"/></a></dt>');   
        aDt6.appendTo(aDl6);
        var aDd6 = $("<dd>");  
        for(var i = 1; i < newAr6.length; i++){                   	
        	var aA6 = $('<a href = "#">'+ newAr6[i].title + '</a>'); 
            aA6.appendTo(aDd6);                   
            aDd6.appendTo(aDl6);            
            aDl6.appendTo('.btmfenlei_body');  
        }
    });
    ajax("get","foot.json","", function(data){            
        var newAr7 = JSON.parse(data)._data7; 
       //alert(newAr1);       
        //2.创建所有需要的节点 
        var aDl7 = $("<dl>");  
        var aDt7 = $('<dt><a href = "#"><b>' + newAr7[0].title1 + '</b><img src = "'+ newAr7[0].url +'"/></a></dt>');   
        aDt7.appendTo(aDl7);
        var aDd7 = $("<dd>");  
        for(var i = 1; i < newAr7.length; i++){                   	
        	var aA7 = $('<a href = "#">'+ newAr7[i].title + '</a>'); 
            aA7.appendTo(aDd7);                   
            aDd7.appendTo(aDl7);            
            aDl7.appendTo('.btmfenlei_body');  
        }
    });

    ajax("get","foot.json","", function(data){            
        var newA = JSON.parse(data)._li1;               
        //2.创建所有需要的节点 
        var aLi= $("<li>");  
        var aH6 = $('<h6><a href = "#"><img src = "'+ newA[0].url +'"/></a></h6>'); 
        var aH5 = $("<h5>"+ newA[0].titlel + "</h5>");
        aH6.appendTo(aLi);
        aH5.appendTo(aLi); 
        var aSpan = $("<span class = 'c999'>");  
        for(var i = 1; i < newA.length; i++){                   	
        	var aa = $('<a href = "#">'+ newA[i].title + '</a>'); 
            aa.appendTo(aSpan); 
            aSpan.appendTo(aLi);                             
            aLi.appendTo('.ftli');  
        }
    });

     ajax("get","foot.json","", function(data){            
        var newA1 = JSON.parse(data)._li2;               
        //2.创建所有需要的节点 
        var aLi1= $("<li>");  
        var aH61 = $('<h6><a href = "#"><img src = "'+ newA1[0].url +'"/></a></h6>'); 
        var aH51 = $("<h5>"+ newA1[0].titlel + "</h5>");
        aH61.appendTo(aLi1);
        aH51.appendTo(aLi1); 
        var aSpan1 = $("<span class = 'c999'>");  
        for(var i = 1; i < newA1.length; i++){                   	
        	var aa1 = $('<a href = "#">'+ newA1[i].title + '</a>'); 
            aa1.appendTo(aSpan1); 
            aSpan1.appendTo(aLi1);                             
            aLi1.appendTo('.ftli');  
        }
    });

    ajax("get","foot.json","", function(data){            
        var newA2 = JSON.parse(data)._li3;               
        //2.创建所有需要的节点 
        var aLi2= $("<li>");  
        var aH62 = $('<h6><a href = "#"><img src = "'+ newA2[0].url +'"/></a></h6>'); 
        var aH52 = $("<h5>"+ newA2[0].titlel + "</h5>");
        aH62.appendTo(aLi2);
        aH52.appendTo(aLi2); 
        var aSpan2 = $("<span class = 'c999'>");  
        for(var i = 1; i < newA2.length; i++){                   	
        	var aa2 = $('<a href = "#">'+ newA2[i].title + '</a>'); 
            aa2.appendTo(aSpan2); 
            aSpan2.appendTo(aLi2);                             
            aLi2.appendTo('.ftli');  
        }
    });
    ajax("get","foot.json","", function(data){            
        var newA3 = JSON.parse(data)._li4;               
        //2.创建所有需要的节点 
        var aLi3= $('<li class= "last">');  
        var aH63 = $('<h6><a href = "#"><img src = "'+ newA3[0].url +'"/></a></h6>'); 
        var aH53 = $("<h5>"+ newA3[0].titlel + "</h5>");
        aH63.appendTo(aLi3);
        aH53.appendTo(aLi3); 
        var aSpan3 = $("<span class = 'c999'>");  
        for(var i = 1; i < newA3.length; i++){                   	
        	var aa3 = $('<a href = "#">'+ newA3[i].title + '</a>'); 
            aa3.appendTo(aSpan3); 
            aSpan3.appendTo(aLi3);                             
            aLi3.appendTo('.ftli');  
        }
    });

    ajax("get","foot.json","", function(data){            
        var newA4 = JSON.parse(data)._li5; 
         //2.创建所有需要的节点   
        var ai = $("<li>")    
    	for(var i = 0; i < newA4.length; i++){  
    	 	var a = $('<a href = "#">'+ newA4[i].title + '</a>'); 
    	 	a.appendTo(ai);
    	 	ai.appendTo(".ros");
    	}
	});

	ajax("get","foot.json","", function(data){            
        var newA5 = JSON.parse(data)._li6; 
         //2.创建所有需要的节点   
        var ai1 = $("<li>")    
    	for(var i = 0; i < newA5.length; i++){  
    	 	var a1 = $('<a href = "#">'+ newA5[i].title + '</a>'); 
    	 	a1.appendTo(ai1);
    	 	ai1.appendTo(".ros");
    	}
	});
    
    ajax("get","foot.json","", function(data){            
        var newA6 = JSON.parse(data)._li7; 
         //2.创建所有需要的节点   
        var ai2 = $("<li>")    
    	for(var i = 0; i < newA6.length; i++){  
    	 	var a2 = $('<a href = "#">'+ newA6[i].title + '</a>'); 
    	 	a2.appendTo(ai2);
    	 	ai2.appendTo(".ros");
    	}
	});

	ajax("get","foot.json","", function(data){            
        var newA7 = JSON.parse(data)._li8; 
         //2.创建所有需要的节点   
        var ai3 = $("<li>")    
    	for(var i = 0; i < newA7.length; i++){  
    	 	var a3 = $('<a href = "#">'+ newA7[i].title + '</a>'); 
    	 	a3.appendTo(ai3);
    	 	ai3.appendTo(".ros");
    	}
	});
	ajax("get","foot.json","", function(data){            
        var newA8 = JSON.parse(data)._li9; 
         //2.创建所有需要的节点   
        var ai4 = $("<li>")    
    	for(var i = 0; i < newA8.length; i++){  
    	 	var a4 = $('<a href = "#">'+ newA8[i].title + '</a>'); 
    	 	a4.appendTo(ai4);
    	 	ai4.appendTo(".ros");
    	}

	var oUl = $(".rolling").find($(".roll")).find($(".ros"));	
	var aLi1 = oUl.find("li");
	//记录当前被选中的按钮
	var iNow = 0;
	var timer = null;
	timer = setInterval(timerInner, 2000);
	$(".roll").hover(function(){
		clearInterval(timer);
	}, function(){
		timer = setInterval(timerInner, 2000);
	});

	function tab(){
		oUl.animate({top: -20 * iNow}, function(){
			if(iNow == aLi1.length - 1){
				iNow = 0;
				oUl.css("top","0")
			}
		});
	}

	function timerInner(){
		iNow++;
		tab();
	}		

    });
});    