$(function() {
    
    $(window).scroll(function() {
        if($(this).scrollTop() > 50) {
            $('.menu').addClass('shadow');
        }
        else $('.menu').removeClass('shadow');
    });
})



