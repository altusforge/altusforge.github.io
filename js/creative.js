/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        var prefSection = $('section' + $anchor.attr('href'));
        $('html, body').stop().animate({
            scrollTop: prefSection.offset().top - 80
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '#elever-nav',
        offset: 100
    });

    $('body').on('activate.bs.scrollspy', function (e) {
      setActiveSession(e.target.lastElementChild.hash);
    });

    function setActiveSession(_hash) {
      $('section').removeClass('active');
      $('section' + _hash).addClass('active');
    }

    setActiveSession($('li.active a').attr('href'));

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
