$('a').click(function(){

	// scroll to the proper tag
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top-20
    }, 250);

    // logic for setting the current page
    $(".selected").removeClass("selected");
    $(this).parent().addClass("selected");

    //  change the URL for deep linking
  	var page = $(this).parent();
	window.location.href = url;

	// no return objects necessary
    return false;
    
});

$(document).bind('scroll',function(e){
    $('div').each(function(){
        if (
           $(this).offset().top < window.pageYOffset + 10
        //begins before top
        && $(this).offset().top + $(this).height() > window.pageYOffset + 10
        //but ends in visible area
        //+ 10 allows you to change hash before it hits the top border
        ) {
            window.location.hash = $(this).attr('id');
        }
    });
});