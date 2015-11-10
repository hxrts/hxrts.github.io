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

    // highlighting functionality
    var aChildren = $("#sidemenu li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        var theID = aArray[0];
        var divPos = $(theID).offset().top;
        var divHeight = $(theID).height();
        if (windowPos >= 0 && windowPos < (divPos + divHeight - 200 )) {
            $("#sidemenu li:first-child").addClass("selected");
            if("#" + window.location.hash.substr(1)!=theID) {
                window.history.replaceState("state", "title", theID);
            }
        } else {
            $("a[href='" + theID + "']").parent().removeClass("selected");
        }

        for (var i=1; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top;
            var divHeight = $(theID).height();
            if (windowPos >= divPos - 200 && windowPos < (divPos + divHeight - 200)) {
                $("a[href='" + theID + "']").parent().addClass("selected");
                if("#" + window.location.hash.substr(1)!=theID) {
                    window.history.replaceState("state", "title", theID);
                }
            } else {
                $("a[href='" + theID + "']").parent().removeClass("selected");
            }
        }
        if(windowPos + windowHeight > (docHeight - 100)) {
            if (!$("#sidemenu li:last-child").hasClass("selected")) {
                $("#sidemenu li:nth-last-child(3)").removeClass("selected");
                $("#sidemenu li:last-child").addClass("selected");
            }
            // window.setInterval(function(){
                if("#" + window.location.hash.substr(1)!=aArray[aArray.length - 1]) {
                    window.history.replaceState("state", "title", theID);
                }
            // }, 100);
        }
    });
});