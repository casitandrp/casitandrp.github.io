document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide',{
        start: 2,
        perPage: 3,
        type: 'loop',
        perMove: 1,
        gap:'3%',
        focus  : 'center',
        speed: 500,
        cloneStatus: true,
        pagination: false,
        breakpoints: {
            800: {
                perPage: 1,
            },
      }
    } );
    splide.mount();
  } );

