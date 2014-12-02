(function(){
    var SCREEN_SMALL = 768;
    $(window).on('resize load', function(){
        if($(window).width() < SCREEN_SMALL - 1){
            $(".footer-collapsed").removeClass('in');
        } else {
            $(".footer-collapsed").addClass('in');
        }
    });


})();