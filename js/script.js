// шапка попапы комплектации
(function(){
  // анимации меню
  var mainNav = document.querySelector('.main-nav');
  var mainLink = document.querySelectorAll('.main-menu__item a');
  var itemMenu = document.querySelector('.contacts span:nth-child(3)');
  var itemMenuNoPoz = document.querySelector('.contacts span:nth-child(1)');
  var mainLogo = document.querySelector('.main-logo');


  $(window.document).scroll(function(){
    var mScroll = $(window.document).scrollTop();

    if(mScroll <= 100){
      mainNav.style.backgroundColor = 'unset';
      mainNav.style.height = '80px';
      mainNav.style.boxShadow = "unset"
      itemMenu.style.display = 'block';
      itemMenuNoPoz.style.color = '#fff';
      mainLogo.style.top = '0';

      for(var i = 0; i <  mainLink.length; i++){
        mainLink[i].style.color = '#fff';
      }
    }else if(mScroll >= 100){
      mainNav.style.backgroundColor = '#fff';
      mainNav.style.boxShadow = "rgba(0,0,0,.5) 0 0 10px"
      itemMenu.style.display = 'none';
      itemMenuNoPoz.style.color = '#333';
      mainLogo.style.top = '-30px';
      mainNav.style.height = '50px';

      for(var i = 0; i <  mainLink.length; i++){
        mainLink[i].style.color = '#333';
      }
    }else{
        return false;
    };
  });

  // Показываем формы
  var headerBtn = document.querySelector('.header__btn');
  var headerNumberBtn = document.querySelector('.contacts a');
  var formBtn = document.querySelector('.popup-form');
  var bacgroundForm = document.querySelector('.popup-bg');
  var formExit = document.querySelector('.popup-form i');
  var priceItemBtn = document.querySelectorAll('.price__item-btn');
  var otvetVoprosBtn = document.querySelector('.block-15__btn-wrapper .btn');

  // картчока с галереи
  var galleryCard = document.querySelector('.popup-galery-card');

  var onShowFormClick = function(){
    formBtn.classList.add('fadeIn');
    bacgroundForm.classList.add('fadeIn');
    formBtn.classList.remove('fadeOut');
    bacgroundForm.classList.remove('fadeOut');    

    formBtn.classList.remove('d-none');
    bacgroundForm.classList.remove('d-none');
  };

  var onHiddenFormClick = function(){
    formBtn.classList.remove('fadeIn');
    bacgroundForm.classList.remove('fadeIn');
    formBtn.classList.add('fadeOut');
    bacgroundForm.classList.add('fadeOut');

    galleryCard.classList.remove('fadeIn');
    galleryCard.classList.add('fadeOut');

    setTimeout(function(){
      formBtn.classList.add('d-none');
      bacgroundForm.classList.add('d-none');
      galleryCard.classList.add('d-none');
    },800);
  };

  for(var i = 0; i < priceItemBtn.length; i++){
    priceItemBtn[i].addEventListener('click', onShowFormClick);
  };

  formExit.addEventListener('click', onHiddenFormClick);
  bacgroundForm.addEventListener('click', onHiddenFormClick);
  headerBtn.addEventListener('click', onShowFormClick);
  headerNumberBtn.addEventListener('click', onShowFormClick);
  otvetVoprosBtn.addEventListener('click', onShowFormClick);
})();

// плавный скрол в блоки
(function(){
  $('#price-link').click(function(){
    SlowScrol('.price');
  });

  $('#calc-link').click(function(){
    SlowScrol('.calculator');
  });

  $('#zamer-link').click(function(){
    SlowScrol('.block-9');
  });

  $('#header-link').click(function(){
    SlowScrol('.header');
  });

  $('#production-link').click(function(){
    SlowScrol('.photo-block');
  });

  $('#portfolio-link').click(function(){
    SlowScrol('.portfolio');
  });

  $('#contacts-link').click(function(){
    SlowScrol('footer');
  });

  $('#mobile-price-link').click(function(){
    SlowScrol('.price');
  });

  $('#mobile-calc-link').click(function(){
    SlowScrol('.calculator');
  });

  $('#mobile-zamer-link').click(function(){
    SlowScrol('.block-9');
  });

  $('#mobile-header-link').click(function(){
    SlowScrol('.header');
  });

  $('#mobile-production-link').click(function(){
    SlowScrol('.photo-block');
  });

  $('#mobile-portfolio-link').click(function(){
    SlowScrol('.portfolio');
  });

  $('#mobile-contacts-link').click(function(){
    SlowScrol('.footer');
  });


  $('.type__item-1').click(function(){
    SlowScrol('.h3__item-1');
  });

  $('.type__item-2').click(function(){
    SlowScrol('.h3__item-2');
  });
  
  $('.type__item-3').click(function(){
    SlowScrol('.h3__item-3');
  });
  
  $('.type__item-4').click(function(){
    SlowScrol('.h3__item-3');
  });

  $('.header__arrow-down').click(function(){
    SlowScrol('.block-1');
  });

  $('.calculator .calculator__btn').click(function(){
    SlowScrol('.block-10');
  });

  $('.block-8 .green-btn').click(function(){
    SlowScrol('.block-10');
  });

  $('.block-9__btn').click(function(){
    SlowScrol('.block-10');
  });  
})();

// проектирование увеличения картинок
(function(){
  var bZoomImgStart = false;
  var bZoomImgCenter = false;
  var bZoomImgEnd = false;

  $('.sixth__item-start').on('click', function(){
      if(!bZoomImgStart){
          $(this).removeClass('col-xl-4');
          $(this).addClass('col-xl-6');
          $('.sixth__item-center').removeClass('col-xl-4');
          $('.sixth__item-center').addClass('col-xl-3');
          $('.sixth__item-end').removeClass('col-xl-4');
          $('.sixth__item-end').addClass('col-xl-3');
          bZoomImgStart = true;
          if(bZoomImgCenter || bZoomImgEnd){
              $('.sixth__item-center').removeClass('col-xl-6');
              $('.sixth__item-center').addClass('col-xl-3');
              $('.sixth__item-end').removeClass('col-xl-6');
              $('.sixth__item-end').addClass('col-xl-3');
              bZoomImgCenter = false;
              bZoomImgEnd  = false;
          }
      }else{
          $(this).removeClass('col-xl-6');
          $(this).addClass('col-xl-4');
          $('.sixth__item-center').removeClass('col-xl-3');
          $('.sixth__item-center').addClass('col-xl-4');
          $('.sixth__item-end').removeClass('col-xl-3');
          $('.sixth__item-end').addClass('col-xl-4');
          bZoomImgStart = false;
      }
  });
  $('.sixth__item-center').on('click', function(){
      if(!bZoomImgCenter){
          $(this).removeClass('col-xl-4');
          $(this).addClass('col-xl-6');
          $('.sixth__item-start').removeClass('col-xl-4');
          $('.sixth__item-start').addClass('col-xl-3');
          $('.sixth__item-end').removeClass('col-xl-4');
          $('.sixth__item-end').addClass('col-xl-3');
          bZoomImgCenter = true;
          if(bZoomImgStart || bZoomImgEnd){
              $('.sixth__item-start').removeClass('col-xl-6');
              $('.sixth__item-start').addClass('col-xl-3');
              $('.sixth__item-end').removeClass('col-xl-6');
              $('.sixth__item-end').addClass('col-xl-3');
              bZoomImgStart = false;
              bZoomImgEnd  = false;
          }
      }else{
          $(this).removeClass('col-xl-6');
          $(this).addClass('col-xl-4');
          $('.sixth__item-start').removeClass('col-xl-3');
          $('.sixth__item-start').addClass('col-xl-4');
          $('.sixth__item-end').removeClass('col-xl-3');
          $('.sixth__item-end').addClass('col-xl-4');
          bZoomImgCenter = false;
      }
  });
  $('.sixth__item-end').on('click', function(){
      if(!bZoomImgEnd){
          $(this).removeClass('col-xl-4');
          $(this).addClass('col-xl-6');
          $('.sixth__item-center').removeClass('col-xl-4');
          $('.sixth__item-center').addClass('col-xl-3');
          $('.sixth__item-start').removeClass('col-xl-4');
          $('.sixth__item-start').addClass('col-xl-3');
          bZoomImgEnd = true;
          if(bZoomImgStart || bZoomImgCenter){
              $('.sixth__item-center').removeClass('col-xl-6');
              $('.sixth__item-center').addClass('col-xl-3');
              $('.sixth__item-start').removeClass('col-xl-6');
              $('.sixth__item-start').addClass('col-xl-3');
              bZoomImgCenter = false;
              bZoomImgStart  = false;
          }

      }else{
          $(this).removeClass('col-xl-6');
          $(this).addClass('col-xl-4');
          $('.sixth__item-center').removeClass('col-xl-3');
          $('.sixth__item-center').addClass('col-xl-4');
          $('.sixth__item-start').removeClass('col-xl-3');
          $('.sixth__item-start').addClass('col-xl-4');
          bZoomImgEnd = false;
      }
  });
})();

// акардион ОТВЕТЫ НА ВОПРОСЫ
(function(){
  var item = document.querySelectorAll('.block-15__title');
  var itemText = document.querySelectorAll('.block-15__content');

  var onItemClick = function(){
    var x = this.parentNode.lastChild.previousSibling;

    if(x.classList.contains('block-15__content--hidden')){
      x.classList.remove('block-15__content--hidden');
    }else{
      x.classList.add('block-15__content--hidden');
    }
  };

  for(var i = 0; i < item.length; i++){
    item[i].addEventListener('click', onItemClick);
  }
})();

// галерея
// (function(){
//   var galleryCard = document.querySelector('.popup-galery-card');
//   var galleryBG = document.querySelector('.popup-bg');
//   var btnExit = document.querySelector('.popup-exit__galery');
//   var btnShow = document.querySelectorAll('.hover-item__btn');

//   var popupForm = document.querySelector('.popup-form');

//   var calcBtn = document.querySelector('.galery-card__calc-btn');
//   var formBtn = document.querySelector('.galery-card__form-btn');

//   $(calcBtn).click(function(){
//     onGalleryHiddenClick();
//     setTimeout(function(){
//       SlowScrol('.calculator');
//     }, 800);
//   });

//   $(formBtn).click(function(){
//     onGalleryHiddenClick();
//     setTimeout(function(){
//       popupForm.classList.remove('d-none');

//       galleryBG.classList.remove('d-none');
//       galleryBG.classList.add('fadeIn');
//       galleryBG.classList.remove('fadeOut');

//     }, 800);
//   });

//   var onGalleryShowClick = function(){
//     galleryCard.classList.remove('d-none');
//     galleryBG.classList.remove('d-none');

//     galleryCard.classList.add('fadeIn');
//     galleryBG.classList.add('fadeIn');
//     galleryCard.classList.remove('fadeOut');
//     galleryBG.classList.remove('fadeOut');
//   };

//   var onGalleryHiddenClick = function(){

//     popupForm.classList.remove('fadeOut');
//     popupForm.classList.add('fadeIn');

//     galleryCard.classList.remove('fadeIn');
//     galleryBG.classList.remove('fadeIn');
//     galleryCard.classList.add('fadeOut');
//     galleryBG.classList.add('fadeOut');

//     setTimeout(function(){
//       galleryCard.classList.add('d-none');
//       galleryBG.classList.add('d-none');
//     }, 800);
//   };


//   for(var i = 0; i < btnShow.length; i++){
//     btnShow[i].addEventListener('click', onGalleryShowClick);
//   };

//   btnExit.addEventListener('click', onGalleryHiddenClick);
// })();

// мобильное меню
(function(){
  var exitBtn = document.querySelector('.mobile-menu li i');
  var barsBtn = document.querySelector('.mobile-bars');
  var mobileMenu = document.querySelector('.mobile-menu');
  var mobileLink = document.querySelectorAll('.mobile-menu__item  a');
  exitBtn.onclick = function(){
    setTimeout(function(){
      mobileMenu.classList.add('d-none');
    }, 800);

    mobileMenu.classList.remove('fadeInDown');
    mobileMenu.classList.add('fadeOut');
  };

  barsBtn.onclick = function(){
    mobileMenu.classList.remove('d-none');
    mobileMenu.classList.add('fadeInDown');
    mobileMenu.classList.remove('fadeOut');
  };

  for(var i = 0; i < mobileLink.length; i++){
    mobileLink[i].onclick = function(){
      setTimeout(function(){
        mobileMenu.classList.add('d-none');
      }, 800);

      mobileMenu.classList.remove('fadeInDown');
      mobileMenu.classList.add('fadeOut');
    };
  }
  $(window.document).scroll(function(){
    var mScroll = $(window.document).scrollTop();
    if(mScroll >= 300 && document.body.clientWidth <= 560){
      var bottomBtn = document.querySelector('.bottom-btn');
      bottomBtn.classList.remove('d-none');
    }else  if(mScroll <= 300 && document.body.clientWidth <= 560){
      var bottomBtn = document.querySelector('.bottom-btn');
      bottomBtn.classList.add('d-none');
    }
    else{
        return false;
    };
  });
})();

// галерея попапы
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
})();

(function(){
 $('#desigh-item1').on('click', function(){
  $('.card__title-item').html(designTitleItem1); 
  $('.card__body__first_icon').attr('src',designImageItem1);
  $('.card__text').html(designLoremItem1);
  $('.card-price').html(designPriceItem1);
  console.log('hi');

 }); 

 $('#desigh-item2').on('click', function(){
  $('.card__title-item').html(designTitleItem2); 
  $('.card__body__first_icon').attr('src',designImageItem2);
  $('.card__text').html(designLoremItem2);
  $('.card-price').html(designPriceItem2);

 }); 

 $('#desigh-item3').on('click', function(){
  $('.card__title-item').html(designTitleItem3); 
  $('.card__body__first_icon').attr('src',designImageItem3);
  $('.card__text').html(designLoremItem3);
  $('.card-price').html(designPriceItem3);

 }); 
})();