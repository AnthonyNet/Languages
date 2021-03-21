(function($) {

// close the toggle menu if user clicks outside of the menu


  


    
        var list = $(".words-section");
    
        // skryjeme elementy
        list.find("dd").slideUp();
    
        // zobrazime dd po kliknuti na term
        list.find("dt").on("click", function (event) {
            $(this).next().slideToggle().siblings("dd").slideUp();
    
            event.preventDefault();
        });

        $('.words_cover').click(function() {
  
            $(this).find('.hide').add('.show').toggleClass('hide show');
          });

//
//GO TOP
//


//scroll event
$(window).scroll(function(){
    const scrolled = $(window).scrollTop();
    if(scrolled > 200) $('.go-top').fadeIn('slow');
    if(scrolled < 200) $('.go-top').fadeOut('slow');

});

//click event
$('.go-top').click(function() {
    $("html, body").animate({ scrollTop: "0"}, 1000);
});


})(jQuery);

