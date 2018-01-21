
// Vertical Dot Navigation Animation

$(document).ready(function () {
    $.scrollTo = $.fn.scrollTo = function (x, y, options) {
        if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);
        options = $.extend({}, {
            gap: {
                x: 0,
                y: 0
            },
            animation: {
                easing: 'swing',
                duration: 600,
                complete: $.noop,
                step: $.noop
            }
        }, options);
        return this.each(function () {
            var elem = $(this);
            elem.stop().animate({
                scrollLeft: !isNaN(Number(x)) ? x : $(y).offset().left + options.gap.x,
                scrollTop: !isNaN(Number(y)) ? y : $(y).offset().top + options.gap.y
            }, options.animation);
        });
    };
    var aChildren = $("nav li").children();
    var aArray = [];
    for (var i = 0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    }
    $(window).scroll(function () {
        var windowPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var docHeight = $(document).height();
        for (var i = 0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top;
            var divHeight = $(theID).height();
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("name-active");
            } else {
                $("a[href='" + theID + "']").removeClass("name-active");
            }
        }
        if (windowPos + windowHeight == docHeight) {
            if (!$("nav li:last-child a").hasClass("name-active")) {
                var navActiveCurrent = $(".name-active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("name-active");
                $("nav li:last-child a").addClass("name-active");
            }
        }
    });
    $("nav a").click(function (evn) {
        evn.preventDefault();
        $('html,body').scrollTo(this.hash, this.hash);
    });
});


// Animation effect

//effect for the front pages
$(document).ready(function () {

    var slideInLeft = 'animated slideInLeft';
    var slideInRight = 'animated slideInRight';

    $('.sub-main').addClass(slideInLeft);
    $('.sub-date').addClass(slideInRight); 

});
        
// Animation for the weeding details section

$(window).scroll(function () {

    var storyPos = $('.aboutText').offset().top;
    // top offset of the Babout text class i.e. the paragraphs
    var venuePos = $('.weddingVenue').offset().top;
    // top offset for the venue section
    var detailsPos = $('.invitationMsg').offset().top;
    // top offset for the wedding details section
    // var msgPos = $('.contact').offset().top;
    // top offset for the invitation section
    var detailsHeight = $(this).height();
    var topOfWindow = $(window).scrollTop();


    // for the our story section
    $('.aboutImage').each(function () { // it will apply the effect on the venue class
        if (storyPos < topOfWindow + detailsHeight && storyPos + detailsHeight > topOfWindow) {
            $(this).addClass("animated fadeInUp");
        } else {
            $(this).removeClass("animated fadeInUp");
        }
    });


    // for the venue section
    $('.venue').each(function () { // it will apply the effect on the venue class
        if (venuePos < topOfWindow + detailsHeight && venuePos + detailsHeight > topOfWindow) {
            $(this).addClass("animated rotateIn");
        } else {
            $(this).removeClass("animated rotateIn");
        }
    });

    // for the weeding details section
    $('.newevent').each(function () { // it will apply the effect on the newevent class
        if (detailsPos < topOfWindow + detailsHeight && detailsPos + detailsHeight > topOfWindow) {
            $(this).addClass("animated slideInLeft");
        } else {
            $(this).removeClass("animated slideInLeft");
        }
    });
    $('.place').each(function () { // it will apply the effect on the place class
        if (detailsPos < topOfWindow + detailsHeight && detailsPos + detailsHeight > topOfWindow) {
            $(this).addClass("animated slideInRight");
        } else {
            $(this).removeClass("animated slideInRight");
        }
    });

    // // for the invitation message section
    // $('.msg').each(function () {
    //     if (msgPos < topOfWindow + detailsHeight && msgPos + detailsHeight > topOfWindow) {
    //         $(this).addClass("animated fadeIn");
    //     } else {
    //         $(this).removeClass("animated fadeIn");
    //     }
    // });
});