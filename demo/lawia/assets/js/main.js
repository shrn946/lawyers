
  $(document).ready(function() {
	$('.popup-video').magnificPopup({
    type: 'iframe'
  });
});

//header.......
 $(document).ready(function (){
    var windowOn = $(window);
    windowOn.on("scroll", function () {
  if ($(this).scrollTop() > 500) {
    $(".header").addClass("sticky-header");
  } else {
    $(".header").removeClass("sticky-header");
  }
});
 });

//  $(document).ready(function (){
//   function mobileMenu() {
//     const windowWidth = $(window).width(); 

//     if (windowWidth < 992) {
//     }
//   }
//   mobileMenu();
// // On resize
//   $(window).on("resize", function () {
//      mobileMenu();
//   });
// });

//  $(".header-search").click(function(){
//   $(".ri_header-search").addClass("ri_header-search-active")
//  })
//  $(".search-close").click(function(){
//   $(".ri_header-search").removeClass("ri_header-search-active")
//  })
 $(".header-menu-bar").click(function(){
  $(".mobile-menu").addClass("mobile-menu-active")
  $(".header-sidebar").addClass("header-sidebar-active")
 })
 $(".mobile-menu-close").click(function(){
  $(".mobile-menu").removeClass("mobile-menu-active")
 })
 $(".mobile-menu-overlay").click(function(){
  $(".mobile-menu").removeClass("mobile-menu-active")
 })
 $(".header-sidebar-close").click(function(){
  $(".header-sidebar").removeClass("header-sidebar-active")
 })
 $(".header-sidebar-overlay").click(function(){
  $(".header-sidebar").removeClass("header-sidebar-active")
 })
 $(".header-search-btn").click(function(){
  $(".header-search").addClass("header-search-active")
 })
 $(".header-search-close").click(function(){
  $(".header-search").removeClass("header-search-active")
 })
 $(".header-search-overlay").click(function(){
  $(".header-search").removeClass("header-search-active")
 })




// header end.......
// <<<<-------- Banner Start------->>>>>>>
// <<<<-------- Back to top Start------->>>>>>>

 $(document).ready(function (){
var btn = $('#back-to-top-btn');
$(window).scroll(function() {
  if ($(window).scrollTop() > 700) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '600');
});

 });
// <<<<-------- Back to top End------->>>>>>>

 var swiper = new Swiper(".banner3", {
      slidesPerView: 6,
      spaceBetween: 80,
      infinite:true,
      loop:true,
      speed:1000,
      autoplay: true,
        navigation: {
        nextEl: ".swiper-banner-button-next",
        prevEl: ".swiper-banner-button-prev",
      },
        breakpoints: {
        300: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        375: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        400: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
       
        968: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 80,
        },
      }
    });
// <<<<-------- Banner End ------->>>>>>>
// <<<<-------- Service Start ------->>>>>>>
$(document).ready(function (){
 function mobileSlick() {
    const windowWidth = $(window).width();

    if (windowWidth > 992) {
      if ($(".service-1").hasClass("slick-initialized")) {
        $(".service-1").slick("unslick");
      }
    } else {
      if (!$(".service-1").hasClass("slick-initialized")) {
        $(".service-1").slick({
            fade: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2000,
          autoplay:true,
          autoplaySpeed:5000,
          arrows: false,
       
     
        
        });
      }
    }
  }

mobileSlick();

// On resize
  $(window).on("resize", function () {
    mobileSlick();
  });
})
$(document).ready(function (){
 function mobileSlick() {
    const windowWidth = $(window).width();

    if (windowWidth > 1200) {
      if ($(".service-3").hasClass("slick-initialized")) {
        $(".service-3").slick("unslick");
      }
    } else {
      if (!$(".service-3").hasClass("slick-initialized")) {
        $(".service-3").slick({
            fade: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 2000,
          autoplay:true,
          autoplaySpeed:5000,
          arrows: false,
       
          responsive: [
  
    {
      breakpoint: 1200,
      settings: {
          slidesToShow: 3,

      }
    },
    {
      breakpoint: 992,
      settings: {
          slidesToShow: 2,

      }
    },
    {
      breakpoint: 768,
      settings: {
          slidesToShow: 2,

      }
    },
    {
      breakpoint: 400,
      settings: {
          slidesToShow: 1,

      }
    },
    
      ]     
        
        });
      }
    }
  }

mobileSlick();

// On resize
  $(window).on("resize", function () {
    mobileSlick();
  });
})
// <<<<-------- Service End ------->>>>>>>
 

// <<<<<<------- test start -------->>>>>>>
  $(document).ready(function () {
    const $slider = $('.test-1');

    $slider.slick({
          fade: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          centerMode:true,
          centerPadding:"266px",
          speed: 1000,
          autoplay:true,
          autoplaySpeed:5000,
          arrows: false,
          
          responsive: [
    {
      breakpoint: 1441,
      settings: {
        centerPadding:"120px",
      }
    },
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 2,
        centerPadding:"120px",
      }
    },
    {
      breakpoint: 1025,
      settings: {
        centerPadding:"80px",
          slidesToShow: 2,

      }
    },
    {
      breakpoint: 769,
      settings: {
        centerPadding:"0",
          slidesToShow: 2,

      }
    },
    {
      breakpoint: 575,
      settings: {
        centerPadding:"50px",
          slidesToShow: 1,

      }
    },
    {
      breakpoint: 400,
      settings: {
        centerPadding:"0px",
          slidesToShow: 1,

      }
    },
      ]     
    });

    $('.testimonial-prev-btn').on('click', function () {
      $slider.slick('slickPrev');
    });

    $('.testimonial-next-btn').on('click', function () {
      $slider.slick('slickNext');
    });
  });
// <<<<<<------- test End -------->>>>>>>

// <<<<<<------- blog start -------->>>>>>>
  $(document).ready(function () {
    const $slider = $('.blog-standard');

    $slider.slick({
          fade: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          speed:2000,
          autoplay:true,
          autoplaySpeed:5000,
          arrows: true,
          
         
    });

    $('.blog-standard-prev-btn').on('click', function () {
      $slider.slick('slickPrev');
    });

    $('.blog-standard-next-btn').on('click', function () {
      $slider.slick('slickNext');
    });
  });
// <<<<<<------- blog End -------->>>>>>>

// $(document).ready(function (){

//   $(".test-1").slick({
//           fade: false,
//           infinite: true,
//           slidesToShow: 3,
//           slidesToScroll: 1,
//           dots: true,
//           centerMode:true,
//           centerPadding:"266px",
//           speed: 1000,
//           autoplay:true,
//           autoplaySpeed:5000,
//           arrows: true,
//           prevArrow: '<button type="button" class="testimonial-prev"><i class="fa-solid fa-arrow-left-long"></i></button>',
//           nextArrow:'<button type="button" class="testimonial-next"><i class="fa-solid fa-arrow-right-long"></i></button>',
//           responsive: [
//     {
//       breakpoint: 1441,
//       settings: {
//         centerPadding:"120px",
//       }
//     },
//     {
//       breakpoint: 1201,
//       settings: {
//         slidesToShow: 2,
//         centerPadding:"120px",
//       }
//     },
//     {
//       breakpoint: 1025,
//       settings: {
//         centerPadding:"80px",
//           slidesToShow: 2,

//       }
//     },
//     {
//       breakpoint: 769,
//       settings: {
//         centerPadding:"0",
//           slidesToShow: 2,

//       }
//     },
//     {
//       breakpoint: 575,
//       settings: {
//         centerPadding:"50px",
//           slidesToShow: 1,

//       }
//     },
//     {
//       breakpoint: 400,
//       settings: {
//         centerPadding:"0px",
//           slidesToShow: 1,

//       }
//     },
//       ]     
//   });
// })
// <<<<<<------- tast end-------->>>>>>>
// <<<<<<------- Cases start-------->>>>>>>
$(document).ready(function (){
  var swiper = new Swiper(".cases-1", {
     
      
      infinite:true,
      loop:true,
      spaceBetween: 30,
      speed:2000,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
       breakpoints: {
        300:{
          slidesPerView: 1,
          spaceBetween:10,
          
        },
        450:{
          slidesPerView: 1.4,
          spaceBetween:10,
        
        },
        575:{
          slidesPerView: 1.6,
          spaceBetween: 20,
          
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
       
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
       
       
        1600: {
          slidesPerView: 3.3,
        },      
        1650: {
          slidesPerView: 3.4,
        },      
        1670: {
          slidesPerView: 3.4,
        },      
        1750: {
          slidesPerView: 3.5,
        },      
        1800: {
          slidesPerView: 3.6,
        },      
        1850: {
          slidesPerView: 3.6,
        },      
        1900: {
          slidesPerView: 3.68,
        },      
        1921: {
          slidesPerView: 3,
        },      
      },
     
    });
})
$(document).ready(function (){
  var swiper = new Swiper(".cases-details-2", {
      slidesPerView:1,
      infinite:true,
       spaceBetween: 30,
       loop:true,
      effect: "fade",
      speed:2000,
       navigation: {
        nextEl: ".swiper-cases-button-next",
        prevEl: ".swiper-cases-button-prev",
      },
      //  breakpoints: {
      //   300:{
      //     slidesPerView: 1,
      //     spaceBetween:10,
      //     centerMode:false,
      //     centeredSlides:true,
      //   },
      //   450:{
      //     slidesPerView: 2,
      //     spaceBetween:10,
      //     centerMode:false,
      //     centeredSlides:true,
      //   },
      //   575:{
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //     centerMode:true,
      //     centeredSlides:true,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 20,
      //   },
      //   992: {
      //     slidesPerView: 3,
      //     spaceBetween: 30,
      //   },
       
      //   1200: {
      //     slidesPerView: 4,
      //     spaceBetween: 30,
      //   },
      
      // },
     
    });
})


// <<<<<<------- Cases end-------->>>>>>>


// <<<<<<-------Blog Start-------->>>>>>>
 $(".share-icon1").click(function(){
  $(".social-wrapper-toggle1").toggleClass("social-wrapper-toggle1-active")
  $(".social-wrapper-toggle2").removeClass("social-wrapper-toggle2-active")
  $(".social-wrapper-toggle3").removeClass("social-wrapper-toggle3-active")
  $(".social-wrapper-toggle4").removeClass("social-wrapper-toggle4-active")
  $(".social-wrapper-toggle5").removeClass("social-wrapper-toggle5-active")
  $(".social-wrapper-toggle6").removeClass("social-wrapper-toggle6-active")
 })
 $(".share-icon2").click(function(){
  $(".social-wrapper-toggle2").toggleClass("social-wrapper-toggle2-active")
  $(".social-wrapper-toggle1").removeClass("social-wrapper-toggle1-active")
  $(".social-wrapper-toggle3").removeClass("social-wrapper-toggle3-active")
  $(".social-wrapper-toggle4").removeClass("social-wrapper-toggle4-active")
  $(".social-wrapper-toggle5").removeClass("social-wrapper-toggle5-active")
  $(".social-wrapper-toggle6").removeClass("social-wrapper-toggle6-active")
 })
 $(".share-icon3").click(function(){
  $(".social-wrapper-toggle3").toggleClass("social-wrapper-toggle3-active")
  $(".social-wrapper-toggle1").removeClass("social-wrapper-toggle1-active")
  $(".social-wrapper-toggle2").removeClass("social-wrapper-toggle2-active")
  $(".social-wrapper-toggle4").removeClass("social-wrapper-toggle4-active")
  $(".social-wrapper-toggle5").removeClass("social-wrapper-toggle5-active")
  $(".social-wrapper-toggle6").removeClass("social-wrapper-toggle6-active")
 })
 $(".share-icon4").click(function(){
  $(".social-wrapper-toggle4").toggleClass("social-wrapper-toggle4-active")
  $(".social-wrapper-toggle2").removeClass("social-wrapper-toggle2-active")
  $(".social-wrapper-toggle3").removeClass("social-wrapper-toggle3-active")
  $(".social-wrapper-toggle5").removeClass("social-wrapper-toggle5-active")
  $(".social-wrapper-toggle6").removeClass("social-wrapper-toggle6-active")
  $(".social-wrapper-toggle1").removeClass("social-wrapper-toggle1-active")
 })
 $(".share-icon5").click(function(){
  $(".social-wrapper-toggle5").toggleClass("social-wrapper-toggle5-active")
  $(".social-wrapper-toggle1").removeClass("social-wrapper-toggle1-active")
  $(".social-wrapper-toggle2").removeClass("social-wrapper-toggle2-active")
  $(".social-wrapper-toggle3").removeClass("social-wrapper-toggle3-active")
  $(".social-wrapper-toggle4").removeClass("social-wrapper-toggle4-active")
  $(".social-wrapper-toggle6").removeClass("social-wrapper-toggle6-active")
 })
 $(".share-icon6").click(function(){
  $(".social-wrapper-toggle6").toggleClass("social-wrapper-toggle6-active")
  $(".social-wrapper-toggle1").removeClass("social-wrapper-toggle1-active")
  $(".social-wrapper-toggle2").removeClass("social-wrapper-toggle2-active")
  $(".social-wrapper-toggle3").removeClass("social-wrapper-toggle3-active")
  $(".social-wrapper-toggle4").removeClass("social-wrapper-toggle4-active")
  $(".social-wrapper-toggle5").removeClass("social-wrapper-toggle5-active")
 })
$(document).ready(function (){
 function mobileSlick() {
    const windowWidth = $(window).width();

    if (windowWidth > 1200) {
      if ($(".blog-1").hasClass("slick-initialized")) {
        $(".blog-1").slick("unslick");
      }
    } else {
      if (!$(".blog-1").hasClass("slick-initialized")) {
        $(".blog-1").slick({
            fade: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 1000,
          autoplay:true,
          autoplaySpeed:5000,
          arrows: false,
       
          responsive: [
  
    {
      breakpoint: 992,
      settings: {
          slidesToShow: 2,

      }
    },
    {
      breakpoint: 992,
      settings: {
          slidesToShow: 2,

      }
    },
    {
      breakpoint: 768,
      settings: {
          slidesToShow: 1,

      }
    },
    
      ]     
        
        });
      }
    }
  }

mobileSlick();

// On resize
  $(window).on("resize", function () {
    mobileSlick();
  });
})


 $(document).ready(function (){
  $(".blog-post").slick({
          fade: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          centerMode:false,
          speed: 1000,
          autoplay:true,
          autoplaySpeed:5000,
          arrows: true,
          prevArrow: '<button type="button" class="blog-post-prev"><i class="fa-solid fa-arrow-left-long"></i> previous post</button>',
          nextArrow:'<button type="button" class="blog-post-next">next post<i class="fa-solid fa-arrow-right-long"></i></button>',
    //       responsive: [

    // {
    //   breakpoint: 992,
    //   settings: {
    //     centerPadding:"80px",

    //   }
    // },
    // {
    //   breakpoint: 768,
    //   settings: {
    //     centerPadding:"100px",
    //       slidesToShow: 1,

    //   }
    // },
    // {
    //   breakpoint: 575,
    //   settings: {
    //     centerPadding:"50px",
    //       slidesToShow: 1,

    //   }
    // },
    //   ]     
  });
})
// <<<<<<------- Blog End-------->>>>>>>
// <<<<<<------- Price Start -------->>>>>>>
  $(".price-switch").click(function(){
  $(".price-switch-toggle").toggleClass("price-switch-toggle-active")
  $(".price-switch").toggleClass("price-switch-active")
  $(".price-rate-yearly").toggleClass("price-rate-yearly-unactive")
  $(".monthly").toggleClass("monthly-highlight")
  $(".yearly").toggleClass("yearly-highlight")
  $(".price-monthly").toggleClass("price-monthly-unactive")
  $(".price-yearly").toggleClass("price-yearly-active")
 })
// <<<<<<------- Price End-------->>>>>>>
// <<<<<<-------Range-------->>>>>>>

// $(document).ready(function (){
//    var slider = document.getElementById("range");
//   var selector = document.getElementById("selector");
//   var selectValue = document.getElementById("selectValue");
//   var progressBar = document.getElementById("progressBar");

//   selectValue.innerHTML = slider.value;

//   slider.oninput = function(){
//     selectValue.innerHTML = this.value + "%" ;
//     selector.style.left = this.value + "%";
//     progressBar.style.width = this.value + "%";
//   };
// });

// <<<<<<-------Range-------->>>>>>>

// $(document).ready(function() {

// 	$('a.btn-gallery').on('click', function(event) {
// 		event.preventDefault();
		
// 		var gallery = $(this).attr('href');
    
// 		$(gallery).magnificPopup({
//       delegate: 'a',
// 			type:'image',
// 			gallery: {
// 				enabled: true
// 			}
// 		}).magnificPopup('open');
// 	});
	
// });

$(document).ready(function(){
$('.gallery-popup').magnificPopup({
	type: 'image',
  mainClass: 'mfp-with-zoom', 
  gallery:{
			enabled:true
		},

  zoom: {
    enabled: true, 

    duration: 300, // duration of the effect, in milliseconds
    easing: 'ease-in-out', // CSS transition easing function

    opener: function(openerElement) {

      return openerElement.is('img') ? openerElement : openerElement.find('img');
  }
}

});

});
 
// <<<<<<-------product start-------->>>>>>>
  $(".products-details-color1").click(function(){
    $(".products-details-color1").toggleClass("products-details-color1-active")
    $(".products-details-color2").removeClass("products-details-color2-active")
    $(".products-details-color3").removeClass("products-details-color3-active")
 })
  $(".products-details-color2").click(function(){
    $(".products-details-color2").toggleClass("products-details-color2-active")
    $(".products-details-color1").removeClass("products-details-color1-active")
    $(".products-details-color3").removeClass("products-details-color3-active")
 })
  $(".products-details-color3").click(function(){
    $(".products-details-color3").toggleClass("products-details-color3-active")
    $(".products-details-color2").removeClass("products-details-color2-active")
    $(".products-details-color1").removeClass("products-details-color1-active")
 })

 $(document).ready(function(){
   $(".quantity-plus").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var $qty = $(this).siblings(".quantity-value");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal)) {
        $qty.val(currentVal + 1);
      }
    });
  });

  $(".quantity-minus").each(function () {
    $(this).on("click", function (e) {
      e.preventDefault();
      var $qty = $(this).siblings(".quantity-value");
      var currentVal = parseInt($qty.val());
      if (!isNaN(currentVal) && currentVal > 1) {
        $qty.val(currentVal - 1);
      }
    });
  });

//    var buttonPlus  = $(".products-details-stepper-up");
//   var buttonMinus = $("..products-details-stepper-down");

// var incrementPlus = buttonPlus.click(function() {
//   var $n = $(this)
//   .parent(".products-details-stepper")
//   .find(".products-details-stepper-value");
//   $n.val(Number($n.val())+1 );
// });

// var incrementMinus = buttonMinus.click(function() {
//   var $n = $(this)
//   .parent(".products-details-stepper")
//   .find(".products-details-stepper-value");
//   var amount = Number($n.val());
//   if (amount > 0) {
//     $n.val(amount-1);
//   }
// });
//   var buttonPlus  = $(".quantity-plus");
// var buttonMinus = $(".quantity-minus");

// buttonPlus.click(function() {
//   var $n = $(this)
//   .parent(".quantity-wrapper")
//   .find(".quantity-value");
//   $n.val(Number($n.val())+1 );
// });

// var incrementMinus = buttonMinus.click(function() {
//   var $n = $(this)
//   .parent(".quantity-wrapper")
//   .find(".quantity-value");
//   var amount = Number($n.val());
//   if (amount > 0) {
//     $n.val(amount-1);
//   }
// });
    // let count = 1;
    // var plus = $(".increment");
    // const countDisplay = document.getElementById("qty-count");

    // document.getElementById("increment").onclick = function() {
    //   plus.value = count++;
    //   countDisplay.textContent = count;
    // };

    // document.getElementById("decrement").onclick = function() {
    //   count--;
    //   countDisplay.textContent = count;
    // };

    //   const value = document.getElementsByClassName('quantity-value');
    // const up = document.getElementsByClassName('quantity-plus');
    // const down = document.getElementsByClassName('quantity-minus');

    // up.addEventListener('click', () => {
    //   value.textContent = parseInt(value.textContent) + 1;
    // });

    // down.addEventListener('click', () => {
    //   const current = parseInt(value.textContent);
    //   if (current > 0) value.textContent = current - 1;
    // });

 });
// <<<<<<-------product End-------->>>>>>>
// <<<<<<------- Checkout Start-------->>>>>>>
  $(".checkout-checkbox1").click(function(){
    $(".checkout-checkbox1").toggleClass("checkout-checkbox1-active")
    $(".checkout-checkbox2").removeClass("checkout-checkbox2-active")
    $(".checkout-checkbox3").removeClass("checkout-checkbox3-active")
    
 })
  $(".checkout-checkbox2").click(function(){
    $(".checkout-checkbox2").toggleClass("checkout-checkbox2-active")
    $(".checkout-checkbox1").removeClass("checkout-checkbox1-active")
    $(".checkout-checkbox3").removeClass("checkout-checkbox3-active")
    
 })
  $(".checkout-checkbox3").click(function(){
    $(".checkout-checkbox3").toggleClass("checkout-checkbox3-active")
    $(".checkout-checkbox2").removeClass("checkout-checkbox2-active")
    $(".checkout-checkbox1").removeClass("checkout-checkbox1-active")
    
 })
// <<<<<<------- Checkout End-------->>>>>>>
// <<<<<<-------Wow start-------->>>>>>>


$(document).ready(function() {
    wow = new WOW 
    (
        {
          boxClass:     'wow',      
          animateClass: 'animated', 
          offset:       0,          
          mobile:       true,       
          live:         true        
        }
      )
    wow.init();
});

// <<<<<<-------Wow end-------->>>>>>>


 
// <<<<<------Count Start------->>>>>>

// if($('.count').length) {
//       $('.count').counterUp({
//           delay: 10,
//         time: 3000,
//     });

//     }


  $(document).ready(function() {
    $('.count').counterUp({
      delay: 10,
      time: 3000,
    });
  });


// <<<<<------Count End------->>>>>>

 

 var list = document.querySelectorAll("[data-bg-src]");

for (var i = 0; i < list.length; i++) {
var src = list[i].getAttribute('data-bg-src');
   list[i].style.backgroundImage="url('" + src + "')"}
