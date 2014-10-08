(function($){
            $.fn.ds = function(options){
                this.each(function(){
                    $(this).css({"overflow":"scroll"});
					
					  $(this).before("<div class='tscroll'><div class='tscroll-inner'></div></div>").parent().find("div.tscroll").width($(this).width()).css({"height":"20px","overflow":"scroll"}).find("div.tscroll-inner").css({"width":$(this).find('>:first-child').width(),"height":"20px"});
					  $(this).prev().scrollLeft($(this).scrollLeft());
					  $(this).on("scroll",function(){
						  $(this).prev().scrollLeft($(this).scrollLeft());
						  });
						  
						  $(this).prev().on("scroll",function(){
						  $(this).next().scrollLeft($(this).scrollLeft());
						  });
					
             });
            }
            
        })(jQuery)
