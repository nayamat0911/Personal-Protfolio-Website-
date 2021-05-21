

/*---------work section-----------*/
(function($){

// init Isotope
var $grid = $('.grid').isotope({
    // options
  });
  // filter items on button click
  $('.search_item').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

})(jQury);


/*---------Owl carusel-----------*/
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:5,
          nav:true,
          loop:false
      }
  }
});