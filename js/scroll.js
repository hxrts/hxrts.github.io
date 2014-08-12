$('a').click(function(){

    //$(this).parent.addClass('selected');

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 250);

    //document.getElementByClass("selected").removeClass("selected");

    $(".selected").removeClass("selected");
    $(this).parent().addClass("selected");

    return false;
});