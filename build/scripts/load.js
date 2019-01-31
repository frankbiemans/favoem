$(window).resize(function() {
    if (this.resizeTO) clearTimeout(this.resizeTO);
    this.resizeTO = setTimeout(function() {
        $(this).trigger('resizeEnd');
    }, 260);
});

$(window).bind('resizeEnd', function() {
    console.log('Window is resized');
});

$(document).ready(function() {
    console.log('Document ready');
});

$(window).on("load", function() {
    console.log('Page loaded');
});
