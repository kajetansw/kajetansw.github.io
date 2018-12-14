var owl = $('.owl-carousel');
owl.owlCarousel({
   items: 1,
   loop: true,
   margin: 10,
   autoplay: true,
   autoplayTimeout: 3000,
   smartSpeed: 800,
   // autoplayHoverPause: true,
   center: true
});
$('.play').on('click', function () {
   owl.trigger('play.owl.autoplay', [1000])
});
$('.stop').on('click', function () {
   owl.trigger('stop.owl.autoplay')
});

particlesJS.load('particles', 'assets/particles-config.json', function () {
});