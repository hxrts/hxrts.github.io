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

    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("#sidemenu li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        var theID = aArray[0];
        var divPos = $(theID).offset().top;
        var divHeight = $(theID).height();
        if (windowPos >= 0 && windowPos < (divPos + divHeight - 200 )) {
            $("a[href='#about']").parent().addClass("selected");
            // console.log($("a[href='" + theID + "']"))
            window.history.replaceState("state", "title", "#about");
        } else {
            $("a[href='#about']").parent().removeClass("selected");
        }

        for (var i=1; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos - 200 && windowPos < (divPos + divHeight - 200)) {
                $("a[href='" + theID + "']").parent().addClass("selected");
                window.history.replaceState("state", "title", "#" + theID);
                // console.log($("a[href='" + theID + "']"))
            } else {
                $("a[href='" + theID + "']").parent().removeClass("selected");
            }
        }
        if(windowPos + windowHeight > docHeight - 50) {
            if (!$("a[href='#press']").parent().hasClass("selected")) {
                // var navActiveCurrent = $(".selected").attr("href");
                $("a[href='#projects']").parent().removeClass("selected");
                console.log("HII")
                // console.log($("#sidemenu li:nth-last-child(3)"))
                // $("a[href='" + navActiveCurrent + "']").parent().removeClass("selected");
                $("a[href='#press']").parent().addClass("selected");
                window.history.replaceState("state", "title", "#" + theID);
            }
        }
    });
});