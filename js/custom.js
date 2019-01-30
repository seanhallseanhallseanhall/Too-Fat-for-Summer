/*==========================================
                    NAV
==========================================*/

$(function () {
    $(window).scroll(function() {
        if($(this).scrollTop() < 1 ) {
            $("nav").removeClass("super-top-nav");
        } else {
            $("nav").addClass("super-top-nav");
        }
    });
});

// smuth scull
$(function() {
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 65
        }, 1250);
    }); 
});

/*==========================================
                    MERCH
==========================================*/
$(function () {
    $("#merch-carousel").owlCarousel({
        items: 3,
        autoplay: true,
        loop: true,
        smartSpeed: 800,
        autoplayHoverPause: true,
    });
});

