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

		phoneBtn.style.right =  '-35px';
		messageBtn.style.right = '-35px';

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

		setTimeout(function(){
			document.querySelector('.phone-form').style.opacity = '1';
		},800);
	};
	var onPhoneExitClick = function(){
		this.classList.add('d-none');
		document.querySelector('.phone-form').style.opacity = '0';

		setTimeout(function(){
			phoneBtn.style.right =  '30px';
			messageBtn.style.right = '30px';
		},550);

		if(anime){
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

		phoneBtn.style.right =  '-35px';
		messageBtn.style.right = '-35px';

		setTimeout(function(){
			if(anime){
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

		setTimeout(function(){
			phoneBtn.style.right =  '30px';
			messageBtn.style.right = '30px';
		},550);

		if(anime){
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

	phoneBtn.addEventListener('click', onPhoneBtnClick);
	messageBtn.addEventListener('click', onMessageBtnClick);
	phoneExit.addEventListener('click', onPhoneExitClick);
	messageExit.addEventListener('click', onMessageExitClick);
	// // показать скрыть боковые формы

	// оброботка списков с датой для формы телефона
	var dayBtn = document.querySelector('.phone-form__call-day-btn');
	var dayItem = document.querySelectorAll('.phone-form__call-day-item');
	var placeItemHour = document.querySelector('#phone-forn-hour');
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
		placeItemHour.textContent = this.textContent;
		this.parentNode.classList.add('d-none');
	};

	$(".phone-form__call-hours-list").niceScroll();	

	dayBtn.addEventListener('click', onDayBtnClick);
	for(var i = 0; i < dayItem.length; i++)
		dayItem[i].addEventListener('click', onDayItemClick);

	// оброботка списков с часамы для формы телефона


})();