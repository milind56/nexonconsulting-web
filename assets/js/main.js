(function ($) {
  $(document).ready(function () {

  ////////////////////////////////////////////////////

  ////////////////////////////////////////////////////
	// 03. Search Js
	$(".search-open-btn").on("click", function () {
		$(".search__popup").addClass("search-opened");
	});
		
	$(".search-close-btn").on("click", function () {
		$(".search__popup").removeClass("search-opened");
	});


  //========== HEADER ACTIVE STRATS ============= //
 var windowOn = $(window);
 windowOn.on('scroll', function () {
   var scroll = windowOn.scrollTop();
   if (scroll < 100) {
     $("#vl-header-sticky").removeClass("header-sticky");
   } else {
     $("#vl-header-sticky").addClass("header-sticky");
   }
 });
 
//========== HEADER ACTIVE ENDS ============= //

//========== MOBILE MENU STARTS ============= //
  var vlMenuWrap = $('.vl-mobile-menu-active > ul').clone();
  var vlSideMenu = $('.vl-offcanvas-menu nav');
  vlSideMenu.append(vlMenuWrap);
  if ($(vlSideMenu).find('.sub-menu, .vl-mega-menu').length != 0) {
    $(vlSideMenu).find('.sub-menu, .vl-mega-menu').parent().append('<button class="vl-menu-close"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList = $('.vl-offcanvas-menu nav > ul > li button.vl-menu-close, .vl-offcanvas-menu nav > ul li.has-dropdown > a');
  $(sideMenuList).on('click', function (e) {
    console.log(e);
    e.preventDefault();
    if (!($(this).parent().hasClass('active'))) {
      $(this).parent().addClass('active');
      $(this).siblings('.sub-menu, .vl-mega-menu').slideDown();
    } else {
      $(this).siblings('.sub-menu, .vl-mega-menu').slideUp();
      $(this).parent().removeClass('active');
    }
  });


$(".vl-offcanvas-toggle").on('click',function(){
  $(".vl-offcanvas").addClass("vl-offcanvas-open");
  $(".vl-offcanvas-overlay").addClass("vl-offcanvas-overlay-open");
});

$(".vl-offcanvas-close-toggle,.vl-offcanvas-overlay").on('click', function(){
  $(".vl-offcanvas").removeClass("vl-offcanvas-open");
  $(".vl-offcanvas-overlay").removeClass("vl-offcanvas-overlay-open");
});

//========== MOBILE MENU ENDS ============= //
  

    {
      function animateElements() {
        $('.progressbar').each(function () {
          var elementPos = $(this).offset().top;
          var topOfWindow = $(window).scrollTop();
          var percent = $(this).find('.circle').attr('data-percent');
          var percentage = parseInt(percent, 10) / parseInt(100, 10);
          var animate = $(this).data('animate');
          if (elementPos < topOfWindow + $(window).height() - 10 && !animate) {
            $(this).data('animate', true);
            $(this).find('.circle').circleProgress({
              startAngle: -Math.PI / 2,
              value: percent / 100,
              size: 80,
              thickness: 5,
              emptyFill: "#E7E6F1",
              fill: {
                color: '#F0C73C'
              }
            }).on('circle-animation-progress', function (event, progress, stepValue) {
              $(this).find('div').text((stepValue*100).toFixed() + "%");
            }).stop();
          }
        });
      }
    
      // Show animated elements
      animateElements();
      $(window).scroll(animateElements);
    };
     // sticky header active
     if ($("#header").length > 0) {
      $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 1) {
          $("#header").removeClass("sticky");
        } else {
          $("#header").addClass("sticky");
        }
      });
    }

          //Aos animation active
            AOS.init({
              offset: 100,
              duration: 400,
              easing: "ease-in-out",
              anchorPlacement: "top-bottom",
              disable: "mobile",
              once: false,
            });


            //Video poppup
            if ($(".play-btn").length > 0) {
              $(".play-btn").magnificPopup({
                type: "iframe",
              });
            };

              // page-progress
              var progressPath = document.querySelector(".progress-wrap path");
              var pathLength = progressPath.getTotalLength();
              progressPath.style.transition = progressPath.style.WebkitTransition =
                "none";
              progressPath.style.strokeDasharray = pathLength + " " + pathLength;
              progressPath.style.strokeDashoffset = pathLength;
              progressPath.getBoundingClientRect();
              progressPath.style.transition = progressPath.style.WebkitTransition =
                "stroke-dashoffset 10ms linear";
              var updateProgress = function () {
                var scroll = $(window).scrollTop();
                var height = $(document).height() - $(window).height();
                var progress = pathLength - (scroll * pathLength) / height;
                progressPath.style.strokeDashoffset = progress;
              };
              updateProgress();
              $(window).scroll(updateProgress);
              var offset = 50;
              var duration = 550;
              jQuery(window).on("scroll", function () {
                if (jQuery(this).scrollTop() > offset) {
                  jQuery(".progress-wrap").addClass("active-progress");
                } else {
                  jQuery(".progress-wrap").removeClass("active-progress");
                }
              });
              jQuery(".progress-wrap").on("click", function (event) {
                event.preventDefault();
                jQuery("html, body").animate({ scrollTop: 0 }, duration);
                return false;
              });

              //product colors
              const colors = $(".accordion1 .accordion-item");
              colors.on("click", function () {
                $(".accordion1 .accordion-item").removeClass("active");
                $(this).addClass("active");
              });

              //product colors
              const colors2 = $(".accordion2 .accordion-item");
              colors2.on("click", function () {
                $(".accordion2 .accordion-item").removeClass("active");
                $(this).addClass("active");
              });

              //tes1 active
              const tes1 = $(".controls li");
              tes1.on("click", function () {
                $(".controls li").removeClass("active");
                $(this).addClass("active");
              });

              $("#ce-toggle1").click(function (event) {
                $(".plan-toggle-wrap1").toggleClass("active");
              });
              
              $("#ce-toggle1").change(function () {
                if ($(this).is(":checked")) {
                  $(".tab-content #yearly1").hide();
                  $(".tab-content #monthly1").show();
                } else {
                  $(".tab-content #yearly1").show();
                  $(".tab-content #monthly1").hide();
                }
              });

            //hero 1 slider
            $(".hero1-sliders").slick({
              margin: "30",
              slidesToShow: 1,
              arrows: true,
              prevArrow: $(".tes2-prev-arrow"),
              nextArrow: $(".tes2-next-arrow"),
              centerMode: true,
              dots: false,
              loop: true,
              centerMode: false,
              draggable: true,
              autoplay: true,
              autoplaySpeed: 4000,
              fade: true,
              fadeSpeed: 1000,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });

            //hero 2 slider
            $(".hero2-sliders").slick({
              margin: "30",
              slidesToShow: 1,
              arrows: true,
              prevArrow: $(".tes2-prev-arrow"),
              nextArrow: $(".tes2-next-arrow"),
              centerMode: true,
              dots: false,
              loop: true,
              centerMode: false,
              draggable: true,
              autoplay: true,
              autoplaySpeed: 4000,
              fade: true,
              fadeSpeed: 1000,
              responsive: [
                {
                  breakpoint: 769,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: true,
                    centerMode: false,
                    centerPadding: "40px",
                    slidesToShow: 1,
                  },
                },
              ],
            });
            
      //service 1 slider
      $('.service1-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: $(".service1-prev-arrow"),
        nextArrow: $(".service1-next-arrow"),

        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],
      });


      //service 2 slider
      $('.service2-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $(".service2-prev-arrow"),
        nextArrow: $(".service2-next-arrow"),

        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],

      });

      //case 2 slider
      $('.case2-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $(".case2-prev-arrow"),
        nextArrow: $(".case2-next-arrow"),

        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],

      });

      //case 3 slider
      $('.case3-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $(".case3-prev-arrow"),
        nextArrow: $(".case3-next-arrow"),

        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],

      });

      //testimonial 4
      $('.tes4-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        adaptiveHeight: true,
        arrows: true,
        prevArrow: $(".tes4-prev-arrow"),
        nextArrow: $(".tes4-next-arrow"),
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],

      });


      //about page brand slider
      $('.about-brand-slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
          {
            breakpoint: 769,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: false,
              centerPadding: "40px",
              slidesToShow: 1,
            },
          },
        ],

      });

      // testimonial//
      $('.slider-galeria').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        infinite: false,
        infinite:true,
        asNavFor: '.slider-galeria-thumbs',
        prevArrow: $('.testimonial-next-arrow'),
        nextArrow: $('.testimonial-prev-arrow'),
      });
      $('.slider-galeria-thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        items:15,
        arrows: true,
        asNavFor: '.slider-galeria',
        vertical: true,
        infinite:true,
        verticalSwiping: true,
        focusOnSelect: true,
        infinite: false,
        prevArrow: $('.testimonial-next-arrow'),
        nextArrow: $('.testimonial-prev-arrow'),
      });


  // testimonial //
$(".testimonial-horizental-slider2").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-boxarea2",
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay: false,
  autoplaySpeed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$(".slider-boxarea2").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay:false,
  autoplaySpeed:2000,
  loop: true,
  focusOnSelect: true,
  vertical:true,
  asNavFor: ".testimonial-horizental-slider2",
  infinite: true,
  prevArrow: $('.next-arrow'),
  nextArrow: $('.prev-arrow'),
});
          

          
  });



    //preloader
    $(window).on("load", function (event) {
      setTimeout(function () {
        $(".preloader").fadeToggle();
      }, 500);
    });

    	/* Text Effect Animation */
	if ($('.text-anime-style-1').length) {
		let staggerAmount 	= 0.05,
			translateXValue = 0,
			delayValue 		= 0.5,
		   animatedTextElements = document.querySelectorAll('.text-anime-style-1');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.words, {
				duration: 1,
				delay: delayValue,
				x: 20,
				autoAlpha: 0,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
				});
		});		
	}
	
	if ($('.text-anime-style-2').length) {				
		let	 staggerAmount 		= 0.05,
			 translateXValue	= 20,
			 delayValue 		= 0.5,
			 easeType 			= "power2.out",
			 animatedTextElements = document.querySelectorAll('.text-anime-style-2');
		
		animatedTextElements.forEach((element) => {
			let animationSplitText = new SplitText(element, { type: "chars, words" });
				gsap.from(animationSplitText.chars, {
					duration: 1,
					delay: delayValue,
					x: translateXValue,
					autoAlpha: 0,
					stagger: staggerAmount,
					ease: easeType,
					scrollTrigger: { trigger: element, start: "top 85%"},
				});
		});		
	}
	
	if ($('.text-anime-style-3').length) {		
		let	animatedTextElements = document.querySelectorAll('.text-anime-style-3');
		
		 animatedTextElements.forEach((element) => {
			//Reset if needed
			if (element.animation) {
				element.animation.progress(1).kill();
				element.split.revert();
			}

			element.split = new SplitText(element, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(element, { perspective: 400 });

			gsap.set(element.split.chars, {
				opacity: 0,
				x: "50",
			});

			element.animation = gsap.to(element.split.chars, {
				scrollTrigger: { trigger: element,	start: "top 95%" },
				x: "0",
				y: "0",
				rotateX: "0",
				opacity: 1,
				duration: 1,
				ease: Back.easeOut,
				stagger: 0.02,
			});
		});		
	}

  $('select').niceSelect();

            
})(jQuery);
    

// SWIPER SLIDER //
document.addEventListener("DOMContentLoaded", function () {
  var swiper3 = new Swiper(".swiper-thumb2", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var swiper4 = new Swiper(".swiper-testimonial-2", {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper3,
    },
  });
});


// document.addEventListener("DOMContentLoaded", () => {
//   const categories = document.querySelectorAll(".category");
//   const slider = document.getElementById("balance-slider");
//   const selectedValue = document.getElementById("selected-value");

//   // Category selection logic
//   categories.forEach((category) => {
//     category.addEventListener("click", () => {
//       categories.forEach((cat) => cat.classList.remove("active"));
//       category.classList.add("active");
//     });
//   });

//   // Update slider value
//   slider.addEventListener("input", (event) => {
//     selectedValue.textContent = event.target.value;
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const categories = document.querySelectorAll(".category");
//   const slider = document.getElementById("balance-slider");
//   const selectedValue = document.getElementById("selected-value");

//   // Ensure elements exist before adding event listeners
//   if (categories.length > 0) {
//     categories.forEach((category) => {
//       category.addEventListener("click", () => {
//         categories.forEach((cat) => cat.classList.remove("active"));
//         category.classList.add("active");
//       });
//     });
//   } else {
//     console.error("No elements with the class 'category' found.");
//   }

//   if (slider && selectedValue) {
//     // Update slider value
//     slider.addEventListener("input", (event) => {
//       selectedValue.textContent = event.target.value;
//     });
//   } else {
//     if (!slider) console.error("Slider element with id 'balance-slider' not found.");
//     if (!selectedValue) console.error("Element with id 'selected-value' not found.");
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  // Safe checks for elements to avoid errors
  const categories = document.querySelectorAll(".category");

  // Check if categories exist before adding event listeners
  if (categories.length > 0) {
    categories.forEach((category) => {
      category.addEventListener("click", () => {
        categories.forEach((cat) => cat.classList.remove("active"));
        category.classList.add("active");
      });
    });
  }

  // Check if slider and selectedValue exist before adding event listener
  // if (slider && selectedValue) {
  //   slider.addEventListener("input", (event) => {
  //     selectedValue.textContent = event.target.value;
  //   });
  // }
});


// const slider = document.getElementById('balance-slider');
//     const selectedValue = document.getElementById('selectedValue');

//     // Function to update the background gradient
//     function updateSliderBackground() {
//       const value = slider.value;
//       const max = slider.max;
//       const percentage = (value / max) * 100;
//       slider.style.background = `linear-gradient(to right, Navy ${percentage}%, #e0e0e0 ${percentage}%)`;
//     }

//     // Event listener for slider input
//     slider.addEventListener('input', function () {
//       selectedValue.textContent = this.value;
//       updateSliderBackground();
//     });

//     // Initialize the slider background on page load
//     updateSliderBackground();

const slider = document.getElementById('balance-slider');
const selectedValue = document.getElementById('selectedValue');

if (slider && selectedValue) {
  // Function to update the background gradient
  function updateSliderBackground() {
    const value = slider.value;
    const max = slider.max;
    const percentage = (value / max) * 100;
    slider.style.background = `linear-gradient(to right, Navy ${percentage}%, #e0e0e0 ${percentage}%)`;
  }

  // Event listener for slider input
  slider.addEventListener('input', function () {
    selectedValue.textContent = this.value;
    updateSliderBackground();
  });

  // Initialize the slider background on page load
  updateSliderBackground();
}
