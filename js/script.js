$('.header__btn').on('click', function(){
  $('.popup-form')
  .removeClass('d-none')
  .addClass('d-flex')
  .addClass('zoomIn');
  $('.popup-bg')
  .removeClass('d-none')
  .addClass('d-block');
});
$('.exit').on('click', function(){ $('.popup-form')
  .removeClass('d-flex')
  .addClass('d-none');

  $('.popup-bg')
  .removeClass('d-block')
  .addClass('d-none');
});

$('.popup-bg').on('click', function(){
  $('.popup-form')
  .removeClass('d-flex')
  .addClass('d-none');

  $('.popup-bg')
  .removeClass('d-block')
  .addClass('d-none');
});

var bCheck = false;

$('.mobile-menu__icon').on('click', function(){
  $(this).removeClass('fa-bars').addClass('fa-times');
  $('.popup-nav').removeClass('d-none').addClass('d-flex');
});

$('.popup-nav i').on('click', function(){
  $('i.mobile-menu__icon').removeClass('fa-times').addClass('fa-bars'); 
  $('.popup-nav').removeClass('d-flex').addClass('d-none');

});
