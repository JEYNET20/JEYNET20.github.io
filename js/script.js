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

	// add Event Clic
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
	var phoneForm = document.querySelector('.phone-form-btn');
	var messageForm = document.querySelector('.message-form-btn');
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
			messageForm.classList.add('d-none');
			phoneForm.classList.add('d-none');
		}else{
			arrowUp.classList.remove('d-none');
			messageForm.classList.remove('d-none');
			phoneForm.classList.remove('d-none');
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

	// страницы услуги
	$('.gallery__item--1').magnificPopup({
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
	$('.gallery__item--2').magnificPopup({
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
	$('.gallery__item--3').magnificPopup({
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
	$('.gallery__item--4').magnificPopup({
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
	$('.gallery__item--5').magnificPopup({
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
	$('.gallery__item--6').magnificPopup({
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
					};

				}, 150);
			}
		};
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

// form change file
(function(){
	var fileChange = document.querySelector('#fileFF');
	var formFile = document.querySelector('.form-file');
	var sizeFile = document.querySelector('.max-size');

	var trashBtn = document.querySelector('.file-trash');

	var textFileNo = document.querySelector('.main-form__item-wrapper--file-mod');
	var formFile = document.querySelector('.form-file');

	if(trashBtn){
		trashBtn.onclick = function(){
			formFile.textContent = 'Файл не выбран';
			fileChange.value = '';
			if(formFile){
				formFile.classList.remove('form-file--activ');
			}
			if(textFileNo){
				textFileNo.classList.remove('main-form__item-wrapper--file-active');
			}
		}
	};

	if(fileChange){
		fileChange.onchange = function(){

			// if(this.value != ''){
			// 	formFile.classList.add('form-file--activ');
			// 	textFileNo.classList.add('main-form__item-wrapper--file-active');
			// }else{
			// 	formFile.classList.remove('form-file--activ');
			// 	textFileNo.classList.remove('main-form__item-wrapper--file-active');
			// };

			formFile.textContent = this.value.substring(this.value.indexOf('\\'), this.value.length);

	    if(this.files[0].size > 3000000){
		    sizeFile.innerHTML = "Размер файла выше допустимого.";
		    sizeFile.style.color = 'red';
		    formFile.textContent = 'Файл не выбран';
				formFile.classList.remove('form-file--activ');
				textFileNo.classList.remove('main-form__item-wrapper--file-active');
	      this.value = "";
	    }else if(this.files[0].size < 3000000){
		    sizeFile.innerHTML = "Максимально допустимый размер файла <span>3 мб.</span>";
		    sizeFile.style.color = '#000';
				formFile.classList.add('form-file--activ');
				textFileNo.classList.add('main-form__item-wrapper--file-active');
	    }
		}
	};
})();

// новые формы 
(function(){
	// показать скрыть боковые формы
	var phoneBtn = document.querySelector('.phone-form-btn');
	var messageBtn = document.querySelector('.message-form-btn');
	var phoneForm = document.querySelector('.phone-form-wrapper');
	var messageForm = document.querySelector('.message-form-wrapper');
	var phoneExit = document.querySelector('.phone-form-wrapper i.fa-times-circle');
	var messageExit = document.querySelector('.message-form-wrapper i.fa-times-circle');

	var onPhoneBtnClick = function(){
		phoneExit.classList.remove('d-none');

		phoneBtn.style.right =  '-55px';
		messageBtn.style.right = '-55px';

		var client_w = document.documentElement.clientWidth;
		if(client_w <= 500){
			anime({
			  targets: '.phone-form-wrapper',
			  width: '100%', // -> from '28px' to '100%',
			  height: '100%',
			  easing: 'easeInQuad',
			  duration: 600
			  // direction: 'alternate'
			});
		}else{
			setTimeout(function(){
				if(anime){
					anime({
					  targets: '.phone-form-wrapper',
					  width: '320px', // -> from '28px' to '100%',
					  height: '440px',
					  easing: 'easeInQuad',
					  duration: 600
					  // direction: 'alternate'
					});
				}
			},200);
		}

		setTimeout(function(){
			document.querySelector('.phone-form').style.opacity = '1';
		},800);
	};
	var onPhoneExitClick = function(){
		this.classList.add('d-none');
		document.querySelector('.phone-form').style.opacity = '0';

		if(document.querySelector('.phone-form-wrapper form').classList.contains('d-none')){
			document.querySelector('.phone-form-wrapper form').classList.remove('d-none');
			document.querySelector('.ride-side-form-complite').classList.add('d-none');
		}

		setTimeout(function(){
			phoneBtn.style.right =  '30px';
			messageBtn.style.right = '30px';
		},550);

		var client_w = document.documentElement.clientWidth;
		if(client_w <= 500){		
			anime({
			  targets: '.phone-form-wrapper',
			  width: '0px', // -> from '28px' to '100%',
			  height: '0px',
			  easing: 'easeOutQuad',
			  duration: 800
			  // direction: 'alternate'
			});
		}else{
			anime({
			  targets: '.phone-form-wrapper',
			  width: '0px', // -> from '28px' to '100%',
			  height: '0px',
			  easing: 'easeOutQuad',
			  duration: 800
			  // direction: 'alternate'
			});
		}
	};
	var onMessageBtnClick = function(){
		messageExit.classList.remove('d-none');

		phoneBtn.style.right =  '-55px';
		messageBtn.style.right = '-55px';

		setTimeout(function(){
			var client_w = document.documentElement.clientWidth;
			if(client_w <= 500){
				anime({
				  targets: '.message-form-wrapper',
				  width: '100%', // -> from '28px' to '100%',
				  height: '100%',
				  easing: 'easeInQuad',
				  duration: 600
				  // direction: 'alternate'
				});
			}else{
				anime({
				  targets: '.message-form-wrapper',
				  width: '320px', // -> from '28px' to '100%',
				  height: '440px',
				  easing: 'easeInQuad',
				  duration: 600
				  // direction: 'alternate'
				});
			}
		},200);

		setTimeout(function(){
			document.querySelector('.message-form').style.opacity = '1';
		},800);
	};
	var onMessageExitClick = function(){
		this.classList.add('d-none');
		document.querySelector('.message-form').style.opacity = '0';

		if(document.querySelector('.message-form-wrapper form').classList.contains('d-none')){
			document.querySelector('.message-form-wrapper form').classList.remove('d-none');
			document.querySelector('.ride-side-form-complite-message').classList.add('d-none');
		}

		setTimeout(function(){
			phoneBtn.style.right =  '30px';
			messageBtn.style.right = '30px';
		},550);

		var client_w = document.documentElement.clientWidth;
		if(client_w <= 500){		
			anime({
			  targets: '.message-form-wrapper',
			  width: '0px', // -> from '28px' to '100%',
			  height: '0px',
			  easing: 'easeOutQuad',
			  duration: 800
			  // direction: 'alternate'
			});
		}else{
			anime({
			  targets: '.message-form-wrapper',
			  width: '0px', // -> from '28px' to '100%',
			  height: '0px',
			  easing: 'easeOutQuad',
			  duration: 800
			  // direction: 'alternate'
			});			
		}
	};	

	var contactsEmail = document.querySelectorAll('.contacts__email');
	for(var i = 0; i < contactsEmail.length; i++){
		contactsEmail[i].addEventListener('click', onPhoneBtnClick);
	}	

	var changeClothesStrBtnPhone = document.querySelector('.str-figure-change-clothes .new-block-wrapper button');
	if(changeClothesStrBtnPhone){
		changeClothesStrBtnPhone.addEventListener('click', onPhoneBtnClick);
	}
	phoneBtn.addEventListener('click', onPhoneBtnClick);
	messageBtn.addEventListener('click', onMessageBtnClick);
	phoneExit.addEventListener('click', onPhoneExitClick);
	messageExit.addEventListener('click', onMessageExitClick);
	// // показать скрыть боковые формы


	// включить отключить поздний звонок
	var changeDate = document.querySelector('.phone-form-wrapper .button');
	var callWrapper = document.querySelector('.phone-form__call-wrapper');
	var bChangeDate = false;

	changeDate.onclick = function(){
		if(!bChangeDate){
			callWrapper.classList.remove('d-none');
			this.textContent = 'Позвонить сейчас';
			bChangeDate = true;
		}else{
			this.textContent = 'Выбрать дату и время звонка';
			callWrapper.classList.add('d-none');
			bChangeDate = false;
		}
	};

	// оброботка списков с датой для формы телефона
	var dayBtn = document.querySelector('.phone-form__call-day-btn');
	var dayItem = document.querySelectorAll('.phone-form__call-day-item');
	var placeItemDay = document.querySelector('#phone-forn-day');
	var phoneDateMonth = document.querySelectorAll('.phone-form__call-mounth');
	var phoneDateDay1 = document.querySelector('.phone-form__call-day-1');
	var phoneDateDay2 = document.querySelector('.phone-form__call-day-2');
	var phoneDateDay3 = document.querySelector('.phone-form__call-day-3');

	var onDayBtnClick = function(){
		var x = this.nextSibling.nextSibling;
		x.classList.remove('d-none');

		var date = new Date();
		// var theseMonth = date.getMonth();
		var theseMonthStr = ' ';

		var switchMonths = function(){
			switch(date.getMonth()){
				case 0:{
					theseMonthStr = ' января';
					break;
				}
				case 1:{
					theseMonthStr = ' февраля';
					break;
				}
				case 2:{
					theseMonthStr = ' марта';
					break;
				}
				case 3:{
					theseMonthStr = ' апреля';
					break;
				}
				case 4:{
					theseMonthStr = ' майа';
					break;
				}
				case 5:{
					theseMonthStr = ' июня';
					break;
				}
				case 6:{
					theseMonthStr = ' июля';
					break;
				}
				case 7:{
					theseMonthStr = ' августа';
					break;
				}
				case 8:{
					theseMonthStr = ' сентября';
					break;
				}
				case 9:{
					theseMonthStr = ' октября';
					break;
				}
				case 10:{
					theseMonthStr = ' ноября';
					break;
				}
				case 11:{
					theseMonthStr = ' декабря';
					break;
				}
			}
		}

		// блок 1
		phoneDateDay1.textContent = date.getDate();
		date.setMonth(date.getMonth());
		switchMonths();
		phoneDateMonth[0].textContent = theseMonthStr;

		// блок 2
		date.setDate(date.getDate()+1);
		phoneDateDay2.textContent = date.getDate();
		date.setMonth(date.getMonth());
		switchMonths();
		phoneDateMonth[1].textContent = theseMonthStr;

		// блок 3
		date.setDate(date.getDate()+1);
		phoneDateDay3.textContent = date.getDate();
		date.setMonth(date.getMonth());
		switchMonths();
		phoneDateMonth[2].textContent = theseMonthStr;
	};

	var onDayItemClick = function(){
		placeItemDay.textContent = this.textContent;
		this.parentNode.classList.add('d-none');
	};

	$(".phone-form__call-hours-list").niceScroll();	

	dayBtn.addEventListener('click', onDayBtnClick);
	for(var i = 0; i < dayItem.length; i++)
		dayItem[i].addEventListener('click', onDayItemClick);

	// оброботка списков с часамы для формы телефона
	var hourBtn = document.querySelector('.phone-form__call-hour-btn');
	var placeItemHour = document.querySelector('#phone-forn-hour');
	var hourItem = document.querySelectorAll('.phone-form__call-hours-item span');
	var onHourBtnClick = function(){
		var x = this.nextSibling.nextSibling;
		x.classList.remove('d-none');
	};

	var onDayItemClick = function(){
		placeItemHour.textContent = this.textContent;
		this.parentNode.parentNode.classList.add('d-none');
	};

	hourBtn.addEventListener('click', onHourBtnClick);
	for(var i = 0; i < hourItem.length; i++)
		hourItem[i].addEventListener('click', onDayItemClick);	

	// валидация формы "обратный звонок"
	var submitBtn = document.querySelector('.phone-form-wrapper .submit');
	var phoneInput = document.querySelector('.phone-form-input');
	var phoneFormDate = document.querySelector('.phone-form-date-to-call');

	var onSubmitBtnClick = function(){
		if(phoneInput.value.length >= 8){
			console.log(phoneInput.value);
			phoneInput.style.borderColor = 'unset';
			phoneInput.classList.remove('phone-form-input--active');
			this.setAttribute('type', 'submit');
			phoneFormDate.value = placeItemHour.textContent + placeItemDay.textContent;
		}else{
			phoneInput.classList.add('phone-form-input--active');
			this.setAttribute('type', 'button');
		}
	};

	submitBtn.addEventListener('click', onSubmitBtnClick);

})();

// валидация формы боковый блок "Заявка с сайта"	
(function(){
	var submitBtn = document.querySelector('.message-form-wrapper .submit');
	var userNameInput = document.querySelector('.message-form-user__name');
	var userTelInput = document.querySelector('.message-form-user__tel');
	var userEmailInput = document.querySelector('.message-form-user__email');
	var userQuestionInput = document.querySelector('.message-form-user__question');

	var onSubmitBtnClick = function(){
		if(userNameInput.value > 2){
			userNameInput.style.borderColor = 'unset';
			userNameInput.classList.remove('message-form-input--active');
		}else{
			userNameInput.classList.add('message-form-input--active');
		}

		if(userTelInput.value >= 8){
			userTelInput.style.borderColor = 'unset';
			userTelInput.classList.remove('message-form-input--active');
		}else{
			userTelInput.classList.add('message-form-input--active');
		}

		if(userQuestionInput.value >= 5){
			userQuestionInput.style.borderColor = 'unset';
			userQuestionInput.classList.remove('message-form-input--active');
		}else{
			userQuestionInput.classList.add('message-form-input--active');
		}

		if((userNameInput.value > 2) && (userTelInput.value >= 8) && (userQuestionInput.value >= 5)){
			this.setAttribute('type', 'submit');	
		}


	};

	submitBtn.addEventListener('click', onSubmitBtnClick);
})();


// AJAX и финалка для боковой формы телефона
$(function() {
  document.getElementById('right-side-phone-form').addEventListener('submit', function(evt){

    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "right_side_mail.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      	var phoneForm = document.querySelector('#right-side-phone-form');
      	var phoneFormComplite = 
      	document.querySelector('.ride-side-form-complite');
      	var placeItemHour = document.querySelector('#phone-forn-hour');
				var placeItemDay = document.querySelector('#phone-forn-day');
				var siteComplite = document.querySelector('.ride-side-form-complite-date');


				// финальное окошко что форма отправленна
      	phoneForm.classList.add('d-none');
      	phoneFormComplite.classList.remove('d-none');
      	console.log(document.querySelector('.ride-side-form-complite'));

				if(placeItemHour.textContent != 'Время' && placeItemDay.textContent != 'День'){
					siteComplite.textContent = placeItemDay.textContent + ' в ' + placeItemHour.textContent;
				}
      }

    }
    http.onerror = function() {
      alert('Ошибка, попробуйте еще раз');
    }
    http.send(new FormData(f));
  }, false);
});

// AJAX и финалка для боковой формы телефона
$(function() {
  document.getElementById('right-side-message-form').addEventListener('submit', function(evt){

    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "right_side_mail-message.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {
      	var messageForm = document.querySelector('#right-side-message-form');
      	var messageFormComplite = 
      	document.querySelector('.ride-side-form-complite-message');
				// финальное окошко что форма отправленна
      	messageForm.classList.add('d-none');
      	messageFormComplite.classList.remove('d-none');
      	console.log(messageForm);

				// финальное окошко что форма отправленна

      }

    }
    http.onerror = function() {
      alert('Ошибка, попробуйте еще раз');
    }
    http.send(new FormData(f));
  }, false);
});