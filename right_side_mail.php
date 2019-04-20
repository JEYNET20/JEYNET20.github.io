<?php
  $to = "atelieprofi@gmail.com";
  $from = "support@atelieprofi.ru";
  $subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";
  // $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";  
	$phone_date = $_POST['phone-form-date'];
	$phone_tel = $_POST['phone-form-tel'];

	// if($phone_date !== false){
	$message = "Когда позвонить " . "$phone_date\r\n";
	$message .= "Номер телефона ". "$phone_tel\r\n";
	mail($to, $subject, $message, $headers);
	// }else{
	// 	$message = "Когда позвонить = Пользователь не указал время для звонка <br> Номер телефона  = $phone_tel <br>";
	// 	mail($to, $from, $subject, $message, $headers);
	// }

	echo 'new2123412312';

?>