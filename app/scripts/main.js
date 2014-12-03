(function(){
    var SCREEN_SMALL = 768;
    $(window).on('resize load', function(){
        // footer text if medium screen
        if($(window).width() < SCREEN_SMALL - 1){
            $(".footer-collapsed").removeClass('in');
        } else {
            $(".footer-collapsed").addClass('in');
        }
    });

    $('.nav-pills > li ').hover( function(){
        if($(this).hasClass('hoverblock')){
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            return;
        } else {
            $(this).find('a').tab('show');
        }
    });
    $('#clientType').find('a').on('click', function(event, item){
        $('#clientType').find('a').removeClass('active')
        $(this).addClass('active');
    })



})();