(function(){
    var SCREEN_SMALL = 768;
    $(window).on('resize load', showDecollapsedMenu);

    $('.nav-pills > li ').hover(correctNavigationWithTabMenu);

    $('#clientType').find('a').on('click', changeNavigationIfClientTypeChanged);

    $('#selectLocation').click(function(event){

        event.stopPropagation();
//       $(this).preventDefault();
    });

    function showDecollapsedMenu(){
        // footer text if medium screen
        if($(window).width() < SCREEN_SMALL - 1){
            $(".footer-collapsed").removeClass('in');
        } else {
            $(".footer-collapsed").addClass('in');
        }
    }

    function changeNavigationIfClientTypeChanged(event, item){
        $('#clientType').find('a').removeClass('active');
        $(this).addClass('active');
        $(this).blur();

        if ($(this).attr('id') == 'typeChef') {
            $('.customer-only').addClass('hide');
            $('.chefs-only').removeClass('hide');
        } else {
            $('.chefs-only').addClass('hide');
            $('.customer-only').removeClass('hide');
        }
    }

    function correctNavigationWithTabMenu(){
        if($(this).hasClass('hoverblock')){
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            return;
        } else {
            $(this).find('a').tab('show');
        }
    }





})();