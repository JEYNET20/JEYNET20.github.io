$(function() {
  var mainForm = document.querySelector('.form-sh-hidden');
  var popupSendForm = document.querySelector('.form-message-popup');
  var popuBg = document.querySelector('.popup-bg');  

  document.getElementById('ajax-contact-form').addEventListener('submit', function(evt){

    if(popupSendForm){
      popupSendForm.classList.remove('d-none');
      var text = document.querySelector('.form-message-popup p');
      text.textContent = 'Ваше сообщения в процессе отправки';
    };

    if(mainForm){
      mainForm.classList.add('d-none');      
    };
    
    popuBg.classList.remove('d-none');

    var http = new XMLHttpRequest(), f = this;
    var th = $(this);
    evt.preventDefault();
    http.open("POST", "contact.php", true);
    http.onreadystatechange = function() {
      if (http.readyState == 4 && http.status == 200) {

      if(popupSendForm){
        popupSendForm.classList.remove('d-none');
        var text = document.querySelector('.form-message-popup p');
        text.textContent = 'Спасибо, ваше сообщение отправлено!';
      };

      if(mainForm){
        mainForm.classList.add('d-none');      
      };
      
      popuBg.classList.remove('d-none');        

        if(!f.nameFF){ return};

        if (http.responseText.indexOf(f.nameFF.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
          th.trigger("reset");
        }
      }
    }
    http.onerror = function() {
      alert('Ошибка, попробуйте еще раз');
    }
    http.send(new FormData(f));
  }, false);
  
});