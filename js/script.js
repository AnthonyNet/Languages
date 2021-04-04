
(function($) {

	$(document).ready(function() {
        $('.choose_words_section li').hide();
        
    });

	$(document).ready(function() {
        $('.menu-words-btn h3').click(function() {
			$('.choose_words_section li').fadeIn(2000);
        });
    });

	$(document).ready(function() {
        $('.choose_words_section li').click(function() {
			$('.choose_words_section li').fadeOut(2000);
        });
    });
	
		
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
	
	   // ak klikneme na link v menu, nastavime mu class selected a vsetky surodencom ho odoberieme
		// aby vzdy bol selected iba jeden
		// nasledne zobrazime aktualnu galeriu
		$('.choose_words_section li').on('click', function(event) {
			var fadeClass = 'fadeIn' + $(this).data('from');
	
			$(this)
				.data('class', fadeClass)
				.addClass('selected')
				.siblings().removeClass('selected');
	
			showGallery( $(this) );
			event.preventDefault();
		});
	
		//SHOW ALL
	
		
		$("#vsecko").click(function(){
			galleries.show();
			
		})
		
	
				$("#random").click(function(){
					galleries.hide()
					var arrayId = [];
				$("#container > div").each((index, elem) => {
				arrayId.push(elem.id);
				});
	
				console.log(arrayId);
	
				let randomCislo = Math.floor(Math.random()*arrayId.length)
				let randomElement = arrayId[randomCislo];
				let randomId = "#" +randomElement
	
				console.log(randomId)
	
					$(randomId).show()
					
				})
	
	
	
	
	})(jQuery);
	
	
	
	