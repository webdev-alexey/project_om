$(function () {
  // Mixitup
  var mixer = mixitup(".portfolio__content");

  // slider
  $(".slider-blog__inner").slick({
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  // форма
  $(".footer__form").submit(function () {
    //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "php/mail.php", //Change
      data: th.serialize(),
    }).done(function () {
      alert("Спасибо! Скоро свяжемся!");
      setTimeout(function () {
        // Done Functions
        th.trigger("reset");
      }, 1000);
    });
    return false;
  });
});
