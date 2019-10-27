// $("body").niceScroll({
//   cursorcolor:"#4c368b",
//   cursorwidth:"10px",
//   background:"#f18c00",
//   cursorborder:'none'
// });

var scroll = new SmoothScroll('a[data-target="inpage"]', {
    speed: 1000,
});




    var swiper = new Swiper('.trainers .swiper-container', {
      slidesPerView: 5,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    AOS.init();