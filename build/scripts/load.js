$(window).resize(function() {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 260);
});

$(window).scroll(function() {
    if ($(window).scrollTop() > $('.header').height()) {
        $('body').addClass('scrolled-post-header');
    } else {
        $('body').removeClass('scrolled-post-header');
    }
});

$(window).bind('resizeEnd', function() {});

$(document).ready(function() {
    $('.hamburger').on('click', function() {
        $(this).toggleClass('is-active');
        $('.main-nav').toggleClass('main-nav--active');
        // setActiveLogo();
    });

    $('.section--inactive').waypoint({
        handler: function(direction) {
            $(this.element).removeClass('section--inactive');
        },
        offset: '60%'
    });

    $('.project-wrapper--inactive').waypoint({
        handler: function(direction) {
            $(this.element).removeClass('project-wrapper--inactive');
        },
        offset: '70%'
    });

    $('.value-wrapper--inactive').waypoint({
        handler: function(direction) {
            $(this.element).removeClass('value-wrapper--inactive');
        },
        offset: '70%'
    });

    $('.instagram-wrapper--inactive').waypoint({
        handler: function(direction) {
            $(this.element).removeClass('instagram-wrapper--inactive');
        },
        offset: '70%'
    });

    $('.textarea--default-text').each(function() {
        var __this = $(this);
        var defaultText = $(this).val();
        __this.on('focus focusout', function() {
            if (__this.val() == defaultText) {
                __this.val('');
            } else if (__this.val() == '') {
                __this.val(defaultText);
            }
        });
    });

    $('.home .button--view-projects').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.section--projects').offset().top
        }, 360);
    });

    $('.header .bottom-icon--next-section').on('click', function() {
        $('html, body').animate({
            scrollTop: $('main .section:first-of-type').offset().top
        }, 220);
    });


});

$(window).on("load", function() {
    $('body').toggleClass('page-loading page-loaded');

    if ($(window).scrollTop() > $('.header').height()) {
        $('body').addClass('scrolled-post-header');
    }
});
