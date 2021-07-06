$(document).ready(function() {


    $('.js--lrc-rsc').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px;'
      });

   /*   console.log {'here'}; */

});
