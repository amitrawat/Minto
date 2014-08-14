$(document).ready(function(){
	$("body, html").scrollTop(0);
	var topMenu = $(".nav"),
	topMenuHeight = topMenu.outerHeight()+15,
	// All list items
	menuItems = topMenu.find("a"),
	// Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
	  var item = $($(this).attr("href"));
	  if (item.length) { return item; }
	});

   // cache the window object
   $window = $(window);
	$(window).scroll(function() { 
	  scrollTop =$window.scrollTop();
		if(scrollTop > 0){
			$('.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
		} else {
			$('.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
		}
		
		var fromTop = $(this).scrollTop()+topMenuHeight;
		   // Get id of current scroll item
		   var cur = scrollItems.map(function(){
			 if ($(this).offset().top < fromTop)
			   return this;
		   });
		   // Get the id of the current element
		   cur = cur[cur.length-1];
		   var id = cur && cur.length ? cur[0].id : "";
		   // Set/remove active class
		   menuItems
			 .parent().removeClass("active")
			 .end().filter("[href=#"+id+"]").parent().addClass("active");
	});
   $('section[data-type="background"]').each(function(){
	 // declare the variable to affect the defined data-type
	 var $scroll = $(this);
					 
	  $(window).scroll(function() { 

		var x = $(this).scrollTop();		
		$scroll.css('background-position', '0% ' + parseInt(-x / 10) + 'px');		
	  }); // end window scroll
   });  // end section function
}); // close out script

$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 2000);
  return false;
});
	
$(".menu-link").on("click", function( e ) {
	e.preventDefault();
	if($(this).attr('href') =='#home')
		ofset = 0;
	else
		ofset = 	$( $(this).attr('href') ).offset().top ;
		$("body, html").animate({	scrollTop: ofset}, 1000);
});