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



$(document).ready(function(){

    function isScrolledIntoView(elem){
        var $elem = $(elem);
        var $window = $(window);

        var docViewTop = $window.scrollTop();
        var docViewBottom = docViewTop + $window.height();

        var elemTop = $elem.offset().top;
        var elemBottom = elemTop + $elem.height();

        console.log($(elem));

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).scroll(function() {
        if (isScrolledIntoView("#about")) { window.history.replaceState("state", "title", ""); return; }
        if (isScrolledIntoView("#publications")) { window.history.replaceState("state", "title", "#publications"); return; }
        if (isScrolledIntoView("#talks")) { window.history.replaceState("state", "title", "#talks"); return; }
        if (isScrolledIntoView("#exhibitions")) { window.history.replaceState("state", "title", "#exhibitions"); return; }
        if (isScrolledIntoView("#performances")) { window.history.replaceState("state", "title", "#performances"); return; }
        if (isScrolledIntoView("#projects")) { window.history.replaceState("state", "title", "#projects"); return; }
        if (isScrolledIntoView("#press")) { window.history.replaceState("state", "title", "#press"); return; }
    });

});