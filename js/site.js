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
    //$('[data-popup-open]').on('click', function (e) {
    //    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    //    $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);

    //    e.preventDefault();
    //    $('.people img').hide();
    //    $('.people p').hide();
    //    $('.headshot').hide();
    //    $('ul.clearfix a').hide();
    //});

    //----- CLOSE
    //$('[data-popup-close]').on('click', function (e) {
    //    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    //    $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    //    e.preventDefault();
    //    $('.people img').show();
    //    $('.people p').show();
    //    $('.headshot').show();
    //    $('ul.clearfix a').show();
    //});

    //$("#toggle").click(function () {
    //    $("#hideworks").toggle(500);
    //    // Locks or unlocks the page
    //    //$.scrollLock();
    //    //$("#myImage").slidetoggle("5000");
    //});
    //$("#close").click(function () {
    //    $("#hideworks").show();
    //    // Locks or unlocks the page
    //    //$.scrollLock();
    //    //$("#myImage").slidetoggle("5000");
    //});


    //$.scrollLock = (function scrollLockClosure() {
    //    'use strict';

    //    var $html = $('html'),
    //        // State: unlocked by default
    //        locked = false,
    //        // State: scroll to revert to
    //        prevScroll = {
    //            scrollLeft: $(window).scrollLeft(),
    //            scrollTop: $(window).scrollTop()
    //        },
    //        // State: styles to revert to
    //        prevStyles = {},
    //        lockStyles = {
    //            'overflow-y': 'scroll',
    //            'position': 'fixed',
    //            'width': '100%'
    //        };

    //    // Instantiate cache in case someone tries to unlock before locking
    //    saveStyles();

    //    // Save context's inline styles in cache
    //    function saveStyles() {
    //        var styleAttr = $html.attr('style'),
    //            styleStrs = [],
    //            styleHash = {};

    //        if (!styleAttr) {
    //            return;
    //        }

    //        styleStrs = styleAttr.split(/;\s/);

    //        $.each(styleStrs, function serializeStyleProp(styleString) {
    //            if (!styleString) {
    //                return;
    //            }

    //            var keyValue = styleString.split(/\s:\s/);

    //            if (keyValue.length < 2) {
    //                return;
    //            }

    //            styleHash[keyValue[0]] = keyValue[1];
    //        });

    //        $.extend(prevStyles, styleHash);
    //    }

    //    function lock() {
    //        var appliedLock = {};

    //        // Duplicate execution will break DOM statefulness
    //        if (locked) {
    //            return;
    //        }

    //        // Save scroll state...
    //        prevScroll = {
    //            scrollLeft: $(window).scrollLeft(),
    //            scrollTop: $(window).scrollTop()
    //        };

    //        // ...and styles
    //        saveStyles();

    //        // Compose our applied CSS
    //        $.extend(appliedLock, lockStyles, {
    //            // And apply scroll state as styles
    //            'left': -prevScroll.scrollLeft + 'px',
    //            'top': -prevScroll.scrollTop + 'px'
    //        });

    //        // Then lock styles...
    //        $html.css(appliedLock);

    //        // ...and scroll state
    //        $(window)
    //            .scrollLeft(0)
    //            .scrollTop(0);

    //        locked = true;
    //    }

    //    function unlock() {
    //        // Duplicate execution will break DOM statefulness
    //        if (!locked) {
    //            return;
    //        }

    //        // Revert styles
    //        $html.attr('style', $('<x>').css(prevStyles).attr('style') || '');

    //        // Revert scroll values
    //        $(window)
    //            .scrollLeft(prevScroll.scrollLeft)
    //            .scrollTop(prevScroll.scrollTop);

    //        locked = false;
    //    }

    //    return function scrollLock(on) {
    //        // If an argument is passed, lock or unlock depending on truthiness
    //        if (arguments.length) {
    //            if (on) {
    //                lock();
    //            }
    //            else {
    //                unlock();
    //            }
    //        }
    //            // Otherwise, toggle
    //        else {
    //            if (locked) {
    //                unlock();
    //            }
    //            else {
    //                lock();
    //            }
    //        }
    //    };
    //}());

    //$(".textbox").mousemove(function (event) {
    //    //$.scrollLock();
    //});

});