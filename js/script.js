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

//
//GALLERKA
//

var galleries = $('.cover_25_words');

galleries.hide();


var selected = $('.choose_words_section').find('.selected');


   // vytvorim funkciu show gallery, ktora akceptuje selectnuty prvok menu na zaklade ktoreho vyberieme a zobrazime galeriu
	function showGallery( selected ) {

		// ak takyto element existuje, najdeme z jeho linku idcko elementu
		// toto idcko pouzijeme na najdeme galerie, ktoru chceme zobrazit
		if ( selected.length ) {
			var id = selected.find('a').attr('href');
			selectedGallery = $(id);
		} 
		
		// ak tato galeria existuje bude to nasa newGallery, inak new Gallery bude prva galeria v zozname
		var newGallery = selectedGallery.length ?  selectedGallery : galleries.eq(0);

		// vsetky galerie ktore nie su nasa nova galeria schovame
		galleries.not( newGallery ).hide();
		
		// zobrazime nasu novu galeriu
		newGallery.show().addClass( selected.data('class') || 'fadeInLeft' );
	}

  showGallery(selected);

   


})(jQuery);



