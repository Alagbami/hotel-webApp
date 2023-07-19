

/* script for onclick menubar for small screen */


let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
  	navbar.classList.toggle('active');
}

window.onscroll = () => {
	navbar.classList.remove('active');
}

/*the end menubar small screen onclick*/


/* script for contact section frequecy question*/
document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
  faqBox.onclick = () => {
    faqBox.parentElement.classList.toggle('active');
  }
});

/* the end script for contact section frequecy question*/

/* script for home image sliding from swiperjs.com */
var swiper = new Swiper(".home-slider", {
		loop:true,
		effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
    },
});


/* script for home gallery sliding from swiperjs.com */
var swiper = new Swiper(".gallery-slider", {
    loop:true,
    effect: "coverflow",
        slidesPreview: "auto",
        centeredSlides:true,
        grabCursor: true,
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
         pagination: {
          el: ".swiper-pagination",
        },
      });

/* script for review image sliding from swiperjs.com */

var swiper = new Swiper(".reviews-slider", {
    loop:true,
    slidesPreview: "auto",
    grabCursor: true,
    spaceBetween: 30,
    pagination: {
          el: ".swiper-pagination",
    },
    breakpoints: {
          768: {
            slidesPerView: 1,
          },
          991: {
            slidesPerView: 2,
          },
        },

});
