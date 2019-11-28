// SLIDER HOME
if ($('.slider__home')) {
  $('.slider__home').slick({});

  $('.slider__home').on('afterChange', function(event, slick, currentSlide){   
    $('.home__food__description__text').hide();
    $('.home__food__description__text[data-id=' + (currentSlide + 1) + ']').show();
  });  
}

//SLIDER EVENT
if ($('.slider__event')) {
  
}

$('.slider__event').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  prevArrow: $('.prev-arrow-event'),
  nextArrow: $('.next-arrow-event'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
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

$('.slider__event').on('afterChange', function(event, slick, currentSlide){   
  $('.event__event-description__title').hide();
  //$('.event__event-description__title[data-id=' + (currentSlide + 1) + ']').css('display', 'flex');
  console.log(currentSlide);
  
  if ((currentSlide + 1) == 1 || (currentSlide + 1) == 2 || (currentSlide + 1) ==  3 ) {
    $('#event-title-1').css('display', 'flex');
  }

  if ((currentSlide + 1) == 4 || (currentSlide + 1) == 5 || (currentSlide + 1) ==  6) {
    $('#event-title-2').css('display', 'flex');
  }

});

// SLIDER GALERY

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

// LOADER

document.getElementsByTagName("html")[0].style.overflow = "hidden";
window.addEventListener("load", function(event) {
  setTimeout(function() {
    var loading = document.querySelector('.loader');
    document.querySelector('body').removeChild(loading);
    document.getElementsByTagName("html")[0].style.overflow = "auto";
  }, 3000);

});

// MENU

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

// CARD MENU

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
var snackImg = document.getElementById('snackImg');
var piqueosImg = document.getElementById('piqueosImg');
var sandwichesImg = document.getElementById('sandwichesImg');
var fondosImg = document.getElementById('fondosImg');
var postresImg = document.getElementById('postresImg');

if (snack, piqueos, sandwiches, fondos, postres) {
  snack.addEventListener("click", function(e) {
    e.preventDefault();
    if (!snackContent.classList.contains('-active')) {
      piqueosContent.classList.remove('-active');
      sandwichesContent.classList.remove('-active');
      fondosContent.classList.remove('-active');
      postresContent.classList.remove('-active');
      piqueosImg.classList.remove('-active');
      sandwichesImg.classList.remove('-active');
      fondosImg.classList.remove('-active');
      postresImg.classList.remove('-active');
      snackContent.classList.add('-active');
      snackImg.classList.add('-active');

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
      snackImg.classList.remove('-active');
      sandwichesImg.classList.remove('-active');
      fondosImg.classList.remove('-active');
      postresImg.classList.remove('-active');
      piqueosContent.classList.add('-active');
      piqueosImg.classList.add('-active');
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
      piqueosImg.classList.remove('-active');
      snackImg.classList.remove('-active');
      fondosImg.classList.remove('-active');
      postresImg.classList.remove('-active');
      sandwichesContent.classList.add('-active');
      sandwichesImg.classList.add('-active');
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
      snackImg.classList.remove('-active');
      piqueosImg.classList.remove('-active');
      sandwichesImg.classList.remove('-active');
      postresImg.classList.remove('-active');
      fondosContent.classList.add('-active');
      fondosImg.classList.add('-active');
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
      snackImg.classList.remove('-active');
      piqueosImg.classList.remove('-active');
      sandwichesImg.classList.remove('-active');
      fondosImg.classList.remove('-active');
      postresContent.classList.add('-active');
      postresImg.classList.add('-active');
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

// MENU DEGUSTACION

var snackDegustacion = document.getElementById('snackDegustacion');
var piqueosDegustacion = document.getElementById('piqueosDegustacion');
var sandwichesDegustacion = document.getElementById('sandwichesDegustacion');
var fondosDegustacion = document.getElementById('fondosDegustacion');
var postresDegustacion = document.getElementById('postresDegustacion');
var snackContentDegustacion = document.getElementById('snackContentDegustacion');
var piqueosContentDegustacion = document.getElementById('piqueosContentDegustacion');
var sandwichesContentDegustacion = document.getElementById('sandwichesContentDegustacion');
var fondosContentDegustacion = document.getElementById('fondosContentDegustacion');
var postresContentDegustacion = document.getElementById('postresContentDegustacion');

if (snackDegustacion, piqueosDegustacion, sandwichesDegustacion, fondosDegustacion, postresDegustacion) {
  snackDegustacion.addEventListener("click", function(e) {
    e.preventDefault();
    if (!snackContentDegustacion.classList.contains('-active')) {
      piqueosContentDegustacion.classList.remove('-active');
      sandwichesContentDegustacion.classList.remove('-active');
      fondosContentDegustacion.classList.remove('-active');
      postresContentDegustacion.classList.remove('-active');
      snackContentDegustacion.classList.add('-active');
    }

    if (!snackDegustacion.classList.contains('actived')) {
      piqueosDegustacion.classList.remove('actived');
      sandwichesDegustacion.classList.remove('actived');
      fondosDegustacion.classList.remove('actived');
      postresDegustacion.classList.remove('actived');
      snackDegustacion.classList.add('actived');
    }
  });
  document.getElementById("piqueosDegustacion").addEventListener("click", function(e) {
    e.preventDefault();
    if (!piqueosContentDegustacion.classList.contains('-active')) {
      snackContentDegustacion.classList.remove('-active');
      sandwichesContentDegustacion.classList.remove('-active');
      fondosContentDegustacion.classList.remove('-active');
      postresContentDegustacion.classList.remove('-active');
      piqueosContentDegustacion.classList.add('-active');
    }

    if (!piqueosDegustacion.classList.contains('actived')) {
      snackDegustacion.classList.remove('actived');
      sandwichesDegustacion.classList.remove('actived');
      fondosDegustacion.classList.remove('actived');
      postresDegustacion.classList.remove('actived');
      piqueosDegustacion.classList.add('actived');
    }
  })

  document.getElementById("sandwichesDegustacion").addEventListener("click", function(e) {
    e.preventDefault();
    if (!sandwichesContentDegustacion.classList.contains('-active')) {
      piqueosContentDegustacion.classList.remove('-active');
      snackContentDegustacion.classList.remove('-active');
      fondosContentDegustacion.classList.remove('-active');
      postresContentDegustacion.classList.remove('-active');
      sandwichesContentDegustacion.classList.add('-active');
    }

    if (!sandwichesDegustacion.classList.contains('actived')) {
      snackDegustacion.classList.remove('actived');
      piqueosDegustacion.classList.remove('actived');
      fondosDegustacion.classList.remove('actived');
      postresDegustacion.classList.remove('actived');
      sandwichesDegustacion.classList.add('actived');
    }
  })

  document.getElementById("fondosDegustacion").addEventListener("click", function(e) {
    e.preventDefault();
    if (!fondosContentDegustacion.classList.contains('-active')) {
      snackContentDegustacion.classList.remove('-active');
      piqueosContentDegustacion.classList.remove('-active');
      sandwichesContentDegustacion.classList.remove('-active');
      postresContentDegustacion.classList.remove('-active');
      fondosContentDegustacion.classList.add('-active');
    }

    if (!fondosDegustacion.classList.contains('actived')) {
      snackDegustacion.classList.remove('actived');
      piqueosDegustacion.classList.remove('actived');
      sandwichesDegustacion.classList.remove('actived');
      postresDegustacion.classList.remove('actived');
      fondosDegustacion.classList.add('actived');
    }
  })

  document.getElementById("postresDegustacion").addEventListener("click", function(e) {
    e.preventDefault();
    if (!postresContentDegustacion.classList.contains('-active')) {
      snackContentDegustacion.classList.remove('-active');
      piqueosContentDegustacion.classList.remove('-active');
      sandwichesContentDegustacion.classList.remove('-active');
      fondosContentDegustacion.classList.remove('-active');
      postresContentDegustacion.classList.add('-active');
    }

    if (!postresDegustacion.classList.contains('actived')) {
      snackDegustacion.classList.remove('actived');
      piqueosDegustacion.classList.remove('actived');
      sandwichesDegustacion.classList.remove('actived');
      fondosDegustacion.classList.remove('actived');
      postresDegustacion.classList.add('actived');
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

// video home

let videoHome = document.getElementById('video-home');

if (videoHome) {
  videoHome.addEventListener("play", function() {
    document.getElementById("banner-logo").style.display = "none"; 
  });
  
  videoHome.addEventListener("pause", function() {
    document.getElementById("banner-logo").style.display = "block";
  });
}

// SLIDER DEGUSTACION

$('.slider__snack-degustacion').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$('.slider__piqueos-degustacion').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$('.slider__sandwiches-degustacion').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$('.slider__fondos-degustacion').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});

$('.slider__postres-degustacion').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
});