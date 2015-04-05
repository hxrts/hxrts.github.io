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