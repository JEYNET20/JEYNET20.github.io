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

// список для менюхы
(function(){
	var btn = document.querySelectorAll('.main-menu__item--list-btn');
	var list = document.querySelectorAll('.main-menu__item--list');

	var onBtnShowClick = function(){
		for(var i = 0; i < btn.length; i++){
			btn[i].classList.remove('main-menu__item--list-btn--active');
			btn[i].addEventListener('click', onBtnShowClick);
			btn[i].removeEventListener('click', onBtnHiddenClick);
			var elemListOther = btn[i].nextSibling.nextSibling;
			elemListOther.style.opacity = '0';
			setTimeout(function(){
				elemListOther.style.display = 'none';
			}, 300);
		};

		this.classList.add('main-menu__item--list-btn--active');
		var elemList = this.nextSibling.nextSibling;

		elemList.style.display = 'block';
		setTimeout(function(){
			elemList.style.display = 'block';
			elemList.style.opacity = '1';
		}, 300);

		this.removeEventListener('click', onBtnShowClick);
		this.addEventListener('click', onBtnHiddenClick);
	};

	var onBtnHiddenClick = function(){
		this.classList.remove('main-menu__item--list-btn--active');
		var elemList = this.nextSibling.nextSibling;

		elemList.style.opacity = '0';
		setTimeout(function(){
			elemList.style.display = 'none';
		}, 300);

		this.addEventListener('click', onBtnShowClick);
		this.removeEventListener('click', onBtnHiddenClick);
	};

	for(var i = 0; i < btn.length; i++){
		btn[i].addEventListener('click', onBtnShowClick);
	};
})();