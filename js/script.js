$(document).ready(function(){

    // function for mobile navbar

    // when menu icon is clicked
    $('.menu').click(function(){
        $('.mobile-nav').show(200);
        $('.close').show(200);
        $(this).hide(200);
        $('.overlay').show(200);
    })
    // when the close icon is clicked
    $('.close').click(function () {
        $('.mobile-nav').hide(200);
        $('.menu').show(200);
        $(this).hide(200);
        $('.overlay').hide(200);
    })

    // list items functionality

    // feature functions
    $('.feature > a').click(function(){
        $('.feature-dropdown').toggle();
        $('.arrow1').toggleClass("rotate");
        $('.arrow2').removeClass("rotate");
        $('.company-dropdown').hide();
    })
    // company functions
    $('.company > a').click(function () {
        $('.company-dropdown').toggle();
        $('.arrow2').toggleClass("rotate");
        $('.arrow1').removeClass("rotate");
        $('.feature-dropdown').hide();
    })

})