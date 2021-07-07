$(document).ready(function() {


    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
      });


      $('.js--scroll-to-sign-up').click(function()  {
          $('html, body').animate({scrollTop: $('.js--section-sign-up').offset().top}, 1000);
      })

      $('.js--scroll-to-start').click(function()  {
          $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
      })
      
            var $root =$('html, body');
      $('a[href^="#"]').click(function () {
          $root.animate({
              scrollTop: $( $.attr(this, 'href') ).offset().top
          }, 1000);

          return falsel;


          });

});
