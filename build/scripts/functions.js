function tiltStuff() {
    // $('.tilt-me').tilt({
    //     maxTilt: 15,
    //     perspective: 2000,
    //     easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    //     scale: 1.05,
    //     speed: 500,
    //     transition: true,
    //     disableAxis: null,
    //     reset: true,
    //     glare: false,
    //     maxGlare: 1
    // });

    $('.tilt-me').tilt({
        maxTilt: 20,
        perspective: 1000,
        easing: "cubic-bezier(0.68, 0, 0.265, 1.55)",
        scale: 1.05,
        speed: 350,
        transition: true,
        reset: true,
        glare: false
    });

    // if (lg.matches) {}
}

function setTeamTitleHeights() {
    equalElsHeightEachEl('.person__text');
    $(window).bind('resizeEnd', function() {
        equalElsHeightEachEl('.person__text');
    });
}

function equalElsHeightEachEl(el) {
    $(el).removeAttr('style');

    var newHeight = 0;
    $(el).each(function() {
        if ($(this).outerHeight() > newHeight) {
            newHeight = Math.ceil($(this).outerHeight());
        }
    });

    $(el).css({
        height: newHeight
    });
}


function getInternetExplorerVersion() {
    var ua, rv, re;
    rv = -1;
    if (navigator.appName === 'Microsoft Internet Explorer') {
        ua = navigator.userAgent;
        re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) !== null)
            rv = parseFloat(RegExp.$1);
    } else if (navigator.appName === 'Netscape') {
        ua = navigator.userAgent;
        re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) !== null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}
