(function ($) {

    
    var technologists = $('.technologists').find('div');
    technologists.on('click', function(event) {
        $(this).addClass('active').siblings().removeClass('active');
   })

   var animCard = $('.anim-card'),
       win = $(window);

    win.on('scroll', function() {
        if (win.scrollTop() >= 1500 || win.scrollTop() >= 2280) {
            animCard.fadeIn(1000);
        }  
        else
        {animCard.fadeOut(100)}  
    });


})(jQuery);