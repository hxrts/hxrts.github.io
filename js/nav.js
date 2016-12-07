//---------------
// click function
//---------------

$('#sidemenu.link a').click(function(){

	// scroll to the proper tag
	$('html, body').animate({
		//scrollTop: $($(this).attr('href')).offset().top
		scrollTop: $($('#title').attr('href')).offset().top - 25
	}, 250);

	// logic for setting the current page
	$(".selected").removeClass("selected");
	$(this).parent().addClass("selected");

	// change the URL for deep linking
	//window.location.href = $(this)[0].href;

	return false;

});


//---------
// on ready
//---------


$(document).ready(function(){

	//------------------
	// link highlighting
	//------------------

	var aChildren = $("#sidemenu li").children(); // find the a children of the list items
	window.aArray    = [];

	for (var i = 0; i < aChildren.length; i++) {
		var aChild = aChildren[i];
		var aHref = $(aChild).attr('href');
		window.aArray.push(aHref);
	}

	//-------------
	// scroll logic
	//-------------

	$(window).scroll(function(){

		var windowPos    = $(window).scrollTop(); // get the offset of the window from the top of page
		var windowHeight = $(window).height();    // get the height of the window
		var docHeight    = $(document).height();  // height of the entire page 


		var theID = window.aArray[0];
		var divHeight = $(theID).height();
		var divPos = $(theID).offset().top;

		if (windowPos >= 0 && windowPos < (divPos + divHeight - 200 )) {

			$("#sidemenu li:first-child").addClass("selected");

			if ("#" + window.location.hash.substr(1) != theID) {
				// window.history.replaceState("state", "title", theID);
			}

		} else {
			$("a[href='" + theID + "']").parent().removeClass("selected");
		}

		for (var i = 0; i < window.aArray.length - 1; i++) { // subtract 1 because CV is not an anchor

			var theID = window.aArray[i];
			var divPos = $(theID).offset().top;
			var divHeight = $(theID).height();

			if (windowPos >= divPos - 200 && windowPos < (divPos + divHeight - 200)) {
				$("a[href='" + theID + "']").parent().addClass("selected");
				if ("#" + window.location.hash.substr(1)!=theID) {
					// window.history.replaceState("state", "title", theID);
				}
			} else {
				$("a[href='" + theID + "']").parent().removeClass("selected");
			}
		}

		if (windowPos + windowHeight == (docHeight)) {

			if (!$("#sidemenu li:last-child").hasClass("selected")) {
				$("#sidemenu li:nth-last-child(3)").removeClass("selected");
				$("#sidemenu li:last-child").addClass("selected");
			}

			if ("#" + window.location.hash.substr(1) != window.aArray[window.aArray.length - 1]) {
				// window.history.replaceState("state", "title", theID);
			}
		}

	});

});

