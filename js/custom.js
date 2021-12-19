// preLoader
$(document).ready(function(){
    $(".preloader").hide();
});

// Back to Top Button fadeIn & fadeOut
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

        // Back to Top
    if( scrolling > 500){
        $(".back-to-top-btn").fadeIn();
    }else{
        $(".back-to-top-btn").fadeOut();
    };

    // Nav Fix
    if (scrolling > 300){
        $("#nav").addClass("nav-fix");
    }else{
        $("#nav").removeClass("nav-fix");
    }
});


// Back to Top by Clicking on the Back to Top Button Using Animate Function
$(".back-to-top-btn").click(function(){
    $("html, body").animate({
        scrollTop: "0px"
    },500);
});








// // Animation
// $("#btn10").click(function(){
//     $(".child").animate({
//         left: "280px",
//         top: "0",
//     },500);
//     $(".child").animate({
//         left: "280px",
//         top: "280px",
//     },500);
//     $(".child").animate({
//         left: "0px",
//         top: "280px",
//     },500);
//     $(".child").animate({
//         left: "0px",
//         top: "0px",
//     },500);
// });


// // fadeIn, fadeOut & fadeToggle
// $("#btn1").click(function(){
//     $("#para").fadeOut();
// });

// $("#btn2").click(function(){
//     $("#para").fadeIn();
// });

// $("#btn3").click(function(){
//     $("#para").fadeToggle();
// });


// // addClass, removeClass & toggleClass using jQuery
// $("#btn4").mouseover(function(){
//     $(".par").addClass("para");
// });

// $("#btn5").mouseover(function(){
//     $(".par").removeClass("para");
// });

// $("#btn6").dblclick(function(){
//     $(".par").toggleClass("para");
// });



// // SlidUp, SlideDown & Slide Toggle
// $("#btn7").click(function(){
//     $("#para").slideUp();
// });


// $("#btn8").click(function(){
//     $("#para").slideDown();
// });


// $("#btn9").click(function(){
//     $("#para").slideToggle();
// });