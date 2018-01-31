jQuery(
	function()
	{
		jQuery(".cssHeaderPanel .cssFrame .cssNav .cssFoot li.cssWeixin").click(
			function()
			{
				if (jQuery(window).width() < 960 )
				{
					r = jQuery(".cssHeaderPanel .cssFrame .cssNav .cssFoot li.cssWeixin img").attr("src");
					
					jQuery("#olmask").remove();
					jQuery("#olcontent").remove();
					
					omask = jQuery("<div id='olmask'></div>");
					omask.css("z-index" , 10000);
					omask.css("position" , "fixed");
					omask.css("left" , "0");
					omask.css("top" , "0");
					omask.css("width" , "100%");
					omask.css("height" , "100%");
					omask.css("background" , "#000000");
					omask.css("opacity" , "0.7");
					jQuery("body").append(omask);
					omask.click(
						function()
						{
							jQuery("#olmask").remove();
							jQuery("#olcontent").remove();
							jQuery(".olctl").remove();
							jQuery("body,html").css("overflow-y" , "auto");
							jQuery(document).off('touchmove');
						}
					);
					
					omask = jQuery("<div id='olcontent'></div>");
					omask.css("z-index" , 10000);
					omask.css("position" , "fixed");
					jQuery("body").append(omask);
					
					var obj = new Image();
					jQuery(obj).load(
						function()
						{
							jQuery("#olcontent").append(jQuery(this));
							objImg = jQuery(this);
							
							imgw = objImg.width();
							imgh = objImg.height();
							
							framew = jQuery(window).width() ;
							frameh = jQuery(window).height() ;
							
							r = 1;
							if (framew / frameh < imgw / imgh )
								r = framew / imgw;
							else
								r = frameh / imgh;
							r = Math.min(1 , r) * 0.9;
							
							objImg.css("width" , imgw * r);
							objImg.css("height" , imgh * r);
							objImg.data("width" , imgw * r);
							objImg.data("height" , imgh * r);
							jQuery("#olcontent").css("top" , (  frameh - imgh * r ) / 2 );
							jQuery("#olcontent").css("left" , (  framew - imgw * r ) / 2 );
							jQuery("#olcontent").hide();
							jQuery("#olcontent").fadeIn("normal");
							
							jQuery("body,html").css("overflow-y" , "hidden");
							jQuery(document).on('touchmove', false);
							
							
							objPage.starttouch();
							
						}
					).attr("src" , r);
					
					
					omask = jQuery("<div id='ccw'  class='olctl cssClose' ><a href='javascript:;'><i class=\"fa fa-times\" aria-hidden=\"true\"></i></a></div>");
					omask.css("z-index" , 10010);
					omask.css("position" , "fixed");
					omask.click(
							function()
							{
								jQuery("#olmask").remove();
								jQuery("#olcontent").remove();
								jQuery(".olctl").remove();
								jQuery("body,html").css("overflow-y" , "auto");
								jQuery(document).off('touchmove');
							}
						);
					jQuery("body").append(omask);
					
					omask = jQuery("<div class='olctl cssCtlL' ><a href='javascript:;'><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></a></div>");
					omask.css("z-index" , 10010);
					omask.css("position" , "fixed");
					//jQuery("body").append(omask);
					omask.click(
							function()
							{
								objPage.move(-1);
							}
						);
					
					omask = jQuery("<div  class='olctl cssCtlr' ><a href='javascript:;'><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></a></div>");
					omask.css("z-index" , 10010);
					omask.css("position" , "fixed");
					//jQuery("body").append(omask);
					omask.click(
							function()
							{
								objPage.move(1);
							}
						);
				}
			}
		);
	}
);