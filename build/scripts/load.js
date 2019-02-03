$(window).resize(function() {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 260);
});

$(window).bind('resizeEnd', function() {});

$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('main-nav--active');
    });


    $('.section--inactive').waypoint({
        handler: function(direction) {
            $(this.element).removeClass('section--inactive');
        },
        offset: '60%'
    });
});

$(window).on("load", function() {

    $('body').toggleClass('page-loading page-loaded');
});
