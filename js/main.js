$(document).ready(function() {
  $('.slider__home').slick({});
  $('.slider-main').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.slider-nav',
    vertical: true,
    autoplay: true,
    verticalSwiping: true,
    centerMode: true
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    asNavFor: '.slider-main',
    vertical: true,
    focusOnSelect: true,
    autoplay: false,
    centerMode: true
  });

  $(window).on('resize orientationchange', function() {
    if ($(window).width() > 1200) {
      $('.slider-nav').slick('unslick');
      $('.slider-nav').slick({
        slidesToShow: 4,
        asNavFor: '.slider-main',
        vertical: true,
        focusOnSelect: true,
        autoplay: false,
        centerMode: true
      });
    }
  });

  $('.slider__home').on('afterChange', function(event, slick, currentSlide){   
    $('.home__food__description__text').hide();
    $('.home__food__description__text[data-id=' + (currentSlide + 1) + ']').show();
  });
    
});

// loader

document.getElementsByTagName("html")[0].style.overflow = "hidden";
window.addEventListener("load", function(event) {
  setTimeout(function() {
    var loading = document.querySelector('.loader');
    document.querySelector('body').removeChild(loading);
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }, 5000);

});

// Menu

var sidenav = document.getElementById('sidenav');

document.getElementById("bottonOpen").addEventListener("click", function(e) {
  e.preventDefault();
  if (sidenav.classList.contains('-active')) {
    sidenav.classList.remove('-active');
  } else {
    sidenav.classList.add('-active');
  }
});
document.getElementById("bottonClose").addEventListener("click", function(e) {
  e.preventDefault();
  if (sidenav.classList.contains('-active')) {
    sidenav.classList.remove('-active');
  } else {
    sidenav.classList.add('-active');
  }
});

// Card

var snack = document.getElementById('snack');
var piqueos = document.getElementById('piqueos');
var sandwiches = document.getElementById('sandwiches');
var fondos = document.getElementById('fondos');
var postres = document.getElementById('postres');
var snackContent = document.getElementById('snackContent');
var piqueosContent = document.getElementById('piqueosContent');
var sandwichesContent = document.getElementById('sandwichesContent');
var fondosContent = document.getElementById('fondosContent');
var postresContent = document.getElementById('postresContent');

if (snack, piqueos, sandwiches, fondos, postres) {
  snack.addEventListener("click", function(e) {
    e.preventDefault();
    if (!snackContent.classList.contains('-active')) {
      piqueosContent.classList.remove('-active');
      sandwichesContent.classList.remove('-active');
      fondosContent.classList.remove('-active');
      postresContent.classList.remove('-active');
      snackContent.classList.add('-active');

    }

    if (!snack.classList.contains('actived')) {
      piqueos.classList.remove('actived');
      sandwiches.classList.remove('actived');
      fondos.classList.remove('actived');
      postres.classList.remove('actived');
      snack.classList.add('actived');
    }
  });
  document.getElementById("piqueos").addEventListener("click", function(e) {
    e.preventDefault();
    if (!piqueosContent.classList.contains('-active')) {
      snackContent.classList.remove('-active');
      sandwichesContent.classList.remove('-active');
      fondosContent.classList.remove('-active');
      postresContent.classList.remove('-active');
      piqueosContent.classList.add('-active');
    }

    if (!piqueos.classList.contains('actived')) {
      snack.classList.remove('actived');
      sandwiches.classList.remove('actived');
      fondos.classList.remove('actived');
      postres.classList.remove('actived');
      piqueos.classList.add('actived');
    }
  })

  document.getElementById("sandwiches").addEventListener("click", function(e) {
    e.preventDefault();
    if (!sandwichesContent.classList.contains('-active')) {
      piqueosContent.classList.remove('-active');
      snackContent.classList.remove('-active');
      fondosContent.classList.remove('-active');
      postresContent.classList.remove('-active');
      sandwichesContent.classList.add('-active');
    }

    if (!sandwiches.classList.contains('actived')) {
      snack.classList.remove('actived');
      piqueos.classList.remove('actived');
      fondos.classList.remove('actived');
      postres.classList.remove('actived');
      sandwiches.classList.add('actived');
    }
  })

  document.getElementById("fondos").addEventListener("click", function(e) {
    e.preventDefault();
    if (!fondosContent.classList.contains('-active')) {
      snackContent.classList.remove('-active');
      piqueosContent.classList.remove('-active');
      sandwichesContent.classList.remove('-active');
      postresContent.classList.remove('-active');
      fondosContent.classList.add('-active');
    }

    if (!fondos.classList.contains('actived')) {
      snack.classList.remove('actived');
      piqueos.classList.remove('actived');
      sandwiches.classList.remove('actived');
      postres.classList.remove('actived');
      fondos.classList.add('actived');
    }
  })

  document.getElementById("postres").addEventListener("click", function(e) {
    e.preventDefault();
    if (!postresContent.classList.contains('-active')) {
      snackContent.classList.remove('-active');
      piqueosContent.classList.remove('-active');
      sandwichesContent.classList.remove('-active');
      fondosContent.classList.remove('-active');
      postresContent.classList.add('-active');
    }

    if (!postres.classList.contains('actived')) {
      snack.classList.remove('actived');
      piqueos.classList.remove('actived');
      sandwiches.classList.remove('actived');
      fondos.classList.remove('actived');
      postres.classList.add('actived');
    }

  })
}

var sliderGalery = document.getElementById("galery")

if (sliderGalery) {
  var slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
}