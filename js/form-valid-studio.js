(function(){
	var sendBtn = document.querySelector('#submitFF');

	var userName = document.querySelector('#nameFF');
	var userEmail = document.querySelector('#contactFF');
	var userMessage = document.querySelector('#projectFF');
	var checbox = document.querySelector("#main-checkbox");

	var mainForm = document.querySelector('.form-sh-hidden');
	var popupSendForm = document.querySelector('.form-message-popup');
	var popupSendFormExitBtn = document.querySelector('.form-message-popup i');
	var popuBg = document.querySelector('.popup-bg');

	// функция которая закрывает попап отправки формы
	var hiddenPopupSendFrom = function(){
		popupSendForm.classList.add('d-none');
		popuBg.classList.add('d-none');
	};

	// оброботчик который запускает функцию закрытия попапа отправки формы
	popupSendFormExitBtn.addEventListener('click', hiddenPopupSendFrom);
	popuBg.addEventListener('click', hiddenPopupSendFrom);

	sendBtn.type = 'button';

	if(sendBtn != undefined){
		sendBtn.onclick = function(){
			if(userName.value.length <= 3){
				userName.style.borderColor = 'red';
			}else{
				userName.style.borderColor = 'rgba(0,0,0,.15)';
			}

			if((userEmail.value.indexOf("@") == -1) && (userEmail.value.length <= 5)){
				userEmail.style.borderColor = 'red';
			}else if((userEmail.value.indexOf("@") != -1) && (userEmail.value.length >= 5)){
				userEmail.style.borderColor = 'rgba(0,0,0,.15)';
			}

			if(userMessage.value.length <= 5){
				userMessage.style.borderColor = 'red';
			}else{
				userMessage.style.borderColor = 'rgba(0,0,0,.15)';
			}

			if(userName.value.length >=3 &&
			  (userEmail.value.length >= 5 && userEmail.value.indexOf("@") != -1)
			  && userMessage.value.length >= 5){
				sendBtn.type = 'submit';

			}else{
				sendBtn.type = 'button';
			}
		}
	};

})();