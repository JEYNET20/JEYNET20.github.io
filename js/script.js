// slider x2 
(function(){
	var x = -100;
	var y = 100;
	var preArrow = document.querySelectorAll('.slider--x2 .slider__arrow--pre');
	var nextArrow = document.querySelectorAll('.slider--x2 .slider__arrow--next');

	var preSlider = function(){
		var sliderWrapper = this.nextSibling.nextSibling.nextSibling.nextSibling;
		var sliderPosition = sliderWrapper.style.left;
		if(sliderPosition != '0%'){
			sliderWrapper.style.left = parseInt(sliderPosition) + y + '%';
		}else{ return false; }
	};

	var nextSlider = function(){
		var sliderWrapper = this.nextSibling.nextSibling;
		var sliderPosition = sliderWrapper.style.left;
		if(sliderPosition != '-100%'){
			sliderWrapper.style.left = x + parseInt(sliderPosition) + '%';
		}else { return false; }
	};

	for(var i = 0; i < preArrow.length; i++){
		preArrow[i].addEventListener('click', preSlider);
	};

	for(var i = 0; i < nextArrow.length; i++){
		nextArrow[i].addEventListener('click', nextSlider);
	};

})();

// slider x3 
(function(){
	var x = -100;
	var y = 100;
	var preArrow = document.querySelectorAll('.slider--x3 .slider__arrow--pre');
	var nextArrow = document.querySelectorAll('.slider--x3 .slider__arrow--next');

	var preSlider = function(){
		var sliderWrapper = this.nextSibling.nextSibling.nextSibling.nextSibling;
		var sliderPosition = sliderWrapper.style.left;
		if(sliderPosition != '0%'){
			sliderWrapper.style.left = parseInt(sliderPosition) + y + '%';
		}else{ return false; }
	};

	var nextSlider = function(){
		var sliderWrapper = this.nextSibling.nextSibling;
		var sliderPosition = sliderWrapper.style.left;
		if(sliderPosition != '-200%'){
			sliderWrapper.style.left = x + parseInt(sliderPosition) + '%';
		}else { return false; }
	};

	for(var i = 0; i < preArrow.length; i++){
		preArrow[i].addEventListener('click', preSlider);
	};

	for(var i = 0; i < nextArrow.length; i++){
		nextArrow[i].addEventListener('click', nextSlider);
	};

})();


// popu-form (BIG POPUP)
(function(){
	// btn
	var redBtn = document.querySelector('.red--btn');

	// element form
	var popuBg = document.querySelectorAll('.popup-bg');
	var popuForm = document.querySelectorAll('.popup-form-wrapper');
	var exitFrom = document.querySelectorAll('.popup-form-exit');

	// function Show POPUP
	var onShowPopupClick = function(){
		for(var i = 0; i < popuForm.length; i++){
			popuForm[i].classList.remove('d-none');
		};

		for(var i = 0; i < popuBg.length; i++){
			popuBg[i].classList.remove('d-none');
		};

	};

	// function Hidden POPUP
	var onHiddenPopupClick = function(){
		for(var i = 0; i < popuForm.length; i++){
			popuForm[i].classList.add('d-none');
		};

		for(var i = 0; i < popuBg.length; i++){
			popuBg[i].classList.add('d-none');
		};
		
	};


	// add Event Click
	redBtn.addEventListener('click', onShowPopupClick);

	for(var i = 0; i < exitFrom.length; i++){
		exitFrom[i].addEventListener('click', onHiddenPopupClick);
	}
	for(var i = 0; i < popuBg.length; i++){
		popuBg[i].addEventListener('click', onHiddenPopupClick);
	}

})();

// popup-form (MIN POPUP)
(function(){
	var revievsBtn = document.querySelector('.btn--revievs');

	// element form
	var popuBg = document.querySelectorAll('.popup-bg');
	var popuForm = document.querySelectorAll('.popup-form-wrapper');
	var exitFrom = document.querySelectorAll('.popup-form-exit');

	// function Show POPUP
	var onShowPopupClick = function(){
		for(var i = 0; i < popuForm.length; i++){
			popuForm[i].classList.remove('d-none');
		};

		for(var i = 0; i < popuBg.length; i++){
			popuBg[i].classList.remove('d-none');
		};

	};

	// function Hidden POPUP
	var onHiddenPopupClick = function(){
		for(var i = 0; i < popuForm.length; i++){
			popuForm[i].classList.add('d-none');
		};

		for(var i = 0; i < popuBg.length; i++){
			popuBg[i].classList.add('d-none');
		};
	};

	// add Event Click
	revievsBtn.addEventListener('click', onShowPopupClick);

	for(var i = 0; i < exitFrom.length; i++){
		exitFrom[i].addEventListener('click', onHiddenPopupClick);
	}
	for(var i = 0; i < popuBg.length; i++){
		popuBg[i].addEventListener('click', onHiddenPopupClick);
	}
})();


// Hiddn/Show element for scroll
(function(){

	var newMenu = document.querySelector('.scroll-menu');
	var arrowUp = document.querySelector('.arrow-up');
	document.onscroll = function(){

		if(window.pageYOffset < 100){
			newMenu.classList.remove('fadeInDown');
			newMenu.classList.add('fadeIn');
			newMenu.classList.add('d-none');
		
		}else{
			newMenu.classList.remove('d-none');
			newMenu.classList.add('fadeInDown');
			newMenu.classList.remove('fadeInUp');			
		}

		if(window.pageYOffset < 500){
			arrowUp.classList.add('d-none');
		}else{
			arrowUp.classList.remove('d-none');
		}
	};

})();


// slowScroll
(function(){
	$('.arrow-up').click(function(){
	    SlowScrol('#header');
	});

	// functon SlowScroll
	function SlowScrol(id){
		  var offset = 160;
		  $('html, body').animate ({
		      scrollTop: $(id).offset().top - offset
		  }, 1000);
		  return false;
	};
})();

// gallery
(function(){
	$('.gallery__item').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	$('.gallery__item--equipment').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	$('.gallery__item--fabrics').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	$('.gallery__item--jackets').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	$('.gallery__item--jeans').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});

	$('.gallery__item--leather').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});


	$('.gallery__item--fur').magnificPopup({
		mainClass: 'mfp-zoom-in',
		type: 'image',
		tLoading: '',
		gallery:{
			enabled:true,
		},
		removalDelay: 300,
		callbacks: {
			beforeChange: function() {
				this.items[0].src = this.items[0].src + '?=' + Math.random(); 
			},
			open: function() {
				$.magnificPopup.instance.next = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.next.call(self); }, 120);
				}
				$.magnificPopup.instance.prev = function() {
					var self = this;
					self.wrap.removeClass('mfp-image-loaded');
					setTimeout(function() { $.magnificPopup.proto.prev.call(self); }, 120);
				}
			},
			imageLoadComplete: function() { 
				var self = this;
				setTimeout(function() { self.wrap.addClass('mfp-image-loaded'); }, 16);
			}
		}
	});
})();

// Гамбургер

(function(){
	var burger = document.querySelectorAll('.burger');
	var exitBtn = document.querySelectorAll('.exit-btn');
	var mainMenu = document.querySelectorAll('.main-menu');

	var onBurgerShowClick = function(){
		for(var i = 0; i < mainMenu.length; i++){
			mainMenu[i].classList.add('main-menu--active');
			document.body.onscroll = function(){
				setTimeout(function(){
					for(var i = 0; i < mainMenu.length; i++){
						mainMenu[i].classList.remove('main-menu--active');
					}
				}, 150);
			}
		};
		console.log('hi');
	}; 

	var onBurgerHiddenClick = function(){
		for(var i = 0; i < mainMenu.length; i++){
			mainMenu[i].classList.remove('main-menu--active');
		};
	};

	for(var i = 0; i < burger.length; i++){
		burger[i].addEventListener('click', onBurgerShowClick);
	};
	for(var i = 0; i < exitBtn.length; i++){
		exitBtn[i].addEventListener('click', onBurgerHiddenClick);
	};

})();