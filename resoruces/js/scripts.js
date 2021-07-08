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



          /* animations on scroll */ 

          $('.js--wp-1').waypoint(function(direction) {
              $('.js--wp-1').addClass('animate__animated animate__fadeIn');
          }, {
              offset: '50%'
          });
          
          $('.js--wp-2').waypoint(function(direction) {
              $('.js--wp-2').addClass('animate__animated animate__fadeInUpBig');
          }, {
              offset: '50%'
          });

          $('.js--wp-3').waypoint(function(direction) {
              $('.js--wp-3').addClass('animate__animated animate__fadeIn');
          }, {
              offset: '50%'
          });

          $('.js--wp-4').waypoint(function(direction) {
              $('.js--wp-4').addClass('animate__animated animate__pulse');
          }, {
              offset: '50%'
          });

           /* Mobile Nav */ 

        $('.js--nav-icon').click(function() {
            var nav = $('.js--main-nav');
            var icon = $('.js--nav-icon i');
            nav.slideToggle(200);
        });


          
});
