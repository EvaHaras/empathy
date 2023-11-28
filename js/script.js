$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:2000,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },
            330:{
                items:2
            },
            480:{
                items:3
            },
            625:{
                items:4
            },
            785:{
                items:5
            },
            935:{
                items:6
            },
            1090:{
                items:7
            },
            1250:{
                items:8
            },
            1290:{
                items:9
            }
        }
});
    $( function() {
        $( "#accordion" ).accordion();
      } );
});
