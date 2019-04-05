<?php
  $to = "atelieprofi@gmail.com";
	$phone_date = $_POST['phone-form-date'];
	$phone_tel = $_POST['phone-form-tel'];

	if(isset($phone_date) && isset($phone_tel)){
		mail($to, "Когда позвонить = $phone_date <br> Номер телефона  = $phone_tel <br>");
	}elseif(isset($phone_tel)){
		mail($to, " Когда позвонить = Пользователь не указал время для звонка <br> Номер телефона  = $phone_tel <br>");
	}

?>