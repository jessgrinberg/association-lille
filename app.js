$('.carousel').carousel()

$(window).scroll(function() {
    if($(this).scrollTop()> $( window ).height() ) {
        $( ".navbar-me" ).addClass("fixed-me");
    } else {
        $( ".navbar-me" ).removeClass("fixed-me");
    }
});
