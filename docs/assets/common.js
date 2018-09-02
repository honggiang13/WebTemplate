jQuery(document).ready(function ($) {
    $('#ts-toggle-menu').click(function () {
        $('#fixed-nav').slideToggle();
    });
    var scrollup = $('.scrollup'),
        ts_window = $(window),
        header_fixed = $('.md-header'),
        menuHeight = $('#masthead').height() - $('#top-header').height();

    ts_window.scroll(function(){
        if ( ts_window.scrollTop() > 200) {
            scrollup.show();
        }
        else {
            scrollup.hide();
        }
        var scrollPos = ts_window.scrollTop();
        if ( menuHeight < scrollPos) {
            header_fixed.addClass('fixed');
        }
        else {
            header_fixed.removeClass('fixed');
        }
    });

    scrollup.click(function(){
        $("html, body").animate({ scrollTop: 0 }, 2000);
        return false;
    });
    $('.side-buy-upgrade .edd_download_purchase_form li label').click(function () {
        var price = $(this).find('.edd_price_option_price').html();
        $('.side-buy-upgrade .ts-price .edd_price').html(price);
    });

    /*=================================*/
    /* Accordion
     /*=================================*/
    var allPanels = $(".accordion > dd"),
        allPanels_a = $(".accordion > dt > a");
    try {
        allPanels.hide();
        allPanels.first().slideDown("easeOutExpo");
        allPanels_a.first().addClass("active");
    } catch (err) {
    }
    try {
        allPanels_a.click(function () {
            var current = $(this).parent().next("dd");
            allPanels_a.removeClass("active");
            $(this).addClass("active");
            allPanels.not(current).slideUp("easeInExpo");
            $(this).parent().next().slideDown("easeOutExpo");

            return false;

        });
    } catch (err) {
    }
    $('.fes-product-list-status-bar a').click(function (e) {
        $('a').removeClass('active');
        $(this).addClass('active');
    });


    var owl = $('.owl-carousel');
    owl.owlCarousel({
        nav: false,
        items: 1,
        autoplay:true,
        loop:true,
        autoplayTimeout:2000
    })
    
    $(".edd-submit").removeAttr('disabled');

});
