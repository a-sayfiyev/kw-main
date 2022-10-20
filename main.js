// addEventListener('DOMContentLoaded', (event) => {
//     document.querySelector(".slider").slick({
//         slidesToShow: 5,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 1500,
//         arrows: false,
//         dots: false,
//         pauseOnHover: false,
//         responsive: [{
//             breakpoint: 768,
//             settings: {
//                 slidesToShow: 4
//             }
//         }, {
//             breakpoint: 520,
//             settings: {
//                 slidesToShow: 3
//             }
//         }]
//     })
// });

$(document).ready(function () {
  $(".slider").slick({
    speed: 5000,
    cssEase: "linear",

    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 0.8,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 0.6,
        },
      },
    ],
  });
});

window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.querySelector(".navbar");

var sticky = navbar.getBoundingClientRect().height; 
function myFunction() { 
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else if(window.pageYOffset <= sticky) {
    navbar.classList.remove("sticky");
  }
}

AOS.init()