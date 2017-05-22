$(document).ready(function () {

    //toggle headshot picture upon mouseover
    $(".headshot").mouseover(function () {
        $(this).attr('src', $(this).data("hover"));
    });
    $(".headshot").mouseout(function () {
        $(this).attr('src', $(this).data("src"));
    });

    //pop-ups open and close for "many hats" page//
    //----- OPEN
    $('[data-popup-open]').on('click', function (e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

        e.preventDefault();
        $('.people img').hide();
        $('.people p').hide();
        $('ul.clearfix a').hide();
    });

    //----- CLOSE
    $('[data-popup-close]').on('click', function (e) {
        var targeted_popup_class = jQuery(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

        e.preventDefault();
        $('.people img').show();
        $('.people p').show();
        $('ul.clearfix a').show();
    });

});