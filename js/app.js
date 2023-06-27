var swiper = new Swiper(".swiper-customer", {
  slidesPerView: 3,
  spaceBetween: 30,
  //loop: true,
  navigation: {
    nextEl: ".sc-next",
    prevEl: ".sc-prev",
  },
});

var swiper = new Swiper(".swiper-gms-app", {
  slidesPerView: 3,
  spaceBetween: 30,
  //loop: true,
  navigation: {
    nextEl: ".sc-next",
    prevEl: ".sc-prev",
  },
});

// Equal height
$(function () {
  $(".sl-gms-can-do .slgmsiconbx p").matchHeight();
});

$(".stellarnav").stellarNav({
  breakpoint: 991,
  position: "right",
});

window.addEventListener("load", (event) => {
  var calCulateBannerheight = $(".calHeight").outerHeight(true);
  $(".banner").css("height", calCulateBannerheight);
});
