"use strict"
// ?<---- NUMBER COUNTER ---->
let valueDisplays = document.querySelectorAll(".num");
let interval =5000 ;

valueDisplays.forEach((valueDisplays) => {
    let startValue =0;
    let endValue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function(){
        startValue += 1;
        valueDisplays.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
})


// ?<---- SCROLL NAV-BAR ---->
let aboutOffset = $('#about').offset().top 
let navHeight = $('nav').outerHeight();
$(window).on('scroll', function (){
    if($(window).scrollTop() > aboutOffset - navHeight)
        {
            $('nav').css('backgroundColor' , 'black');
            $('.backToTop').fadeIn(1000);
            $('.backToTop').css('display', 'flex');
        }else
        {
            $('nav').css('backgroundColor' , 'transparent');
            $('.backToTop').css('display', 'none');
        }
});

// ?<----  BACK TO TOP ICON ---->
$('.backToTop').on('click' , function(){
    $(window).scrollTop(0);
});


// ?<---- LOADING & LOADER ---->
$( function(){
    $('.loader').fadeOut(1000 , function(){
        $('.loading').slideUp(1000 , function(){
            $('body').css('overflow' , 'auto');

            $('.loading').remove();
        });
    })
} )