// Owl-Carousel init
var owl = $('.owl-carousel');
owl.owlCarousel({
   items: 1,
   loop: true,
   margin: 10,
   autoplay: true,
   autoplayTimeout: 2500,
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

// ParticlesJS init
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS("particles", {
   "particles": {
      "number": {
         "value": 80,
         "density": {
            "enable": true,
            "value_area": 800
         }
      },
      "color": {
         "value": "#ffffff"
      },
      "shape": {
         "type": "circle",
         "stroke": {
            "width": 0,
            "color": "#000000"
         },
         "polygon": {
            "nb_sides": 5
         },
         "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
         }
      },
      "opacity": {
         "value": 0.5,
         "random": false,
         "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
         }
      },
      "size": {
         "value": 3,
         "random": true,
         "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
         }
      },
      "line_linked": {
         "enable": true,
         "distance": 150,
         "color": "#ffffff",
         "opacity": 0.4,
         "width": 1
      },
      "move": {
         "enable": true,
         "speed": 6,
         "direction": "none",
         "random": false,
         "straight": false,
         "out_mode": "out",
         "bounce": false,
         "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
         }
      }
   },
   "interactivity": {
      "detect_on": "canvas",
      "events": {
         "onhover": {
            "enable": false,
            "mode": "repulse"
         },
         "onclick": {
            "enable": false,
            "mode": "push"
         },
         "resize": true
      },
      "modes": {
         "grab": {
            "distance": 400,
            "line_linked": {
               "opacity": 1
            }
         },
         "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
         },
         "repulse": {
            "distance": 200,
            "duration": 0.4
         },
         "push": {
            "particles_nb": 4
         },
         "remove": {
            "particles_nb": 2
         }
      }
   },
   "retina_detect": true
});




// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

const progressbars = document.getElementsByClassName('progressbar');
for (const progressbar of progressbars) {
   const bar = new ProgressBar.Circle(progressbar, {
      color: '#aaa',
      // This has to be the same size as the maximum width to
      // prevent clipping
      strokeWidth: 4,
      trailWidth: 1,
      easing: 'easeInOut',
      duration: 1400,
      text: {
         autoStyleContainer: false
      },
      from: { color: '#aaa', width: 1 },
      to: { color: '#ddd', width: 4 },
      // Set default step function for all animate calls
      step: function (state, circle) {
         circle.path.setAttribute('stroke', state.color);
         circle.path.setAttribute('stroke-width', state.width);

         let value = Math.round(circle.value() * 100);
         if (value === 0) {
            circle.setText('');
         } else {
            circle.setText(`${value}%`);
         }

      }
   });
   bar.text.style.fontFamily = '"Quicksand", sans-serif';
   bar.text.style.fontSize = '1.8rem';

   bar.animate(.8);  // Number from 0.0 to 1.0
}
