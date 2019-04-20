<?php
  $to = "atelieprofi@gmail.com";
  $from = "support@atelieprofi.ru";  
  $subject = "Заполнена контактная форма на сайте ".$_SERVER['HTTP_REFERER'];
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "From: " . $from . "\r\n";
  $headers .= "Reply-To: " . $from . "\r\n";	

	$message_name = $_POST['message-form-user__name'];
	$message_tel = $_POST['message-form-user__tel'];
	$message_email = $_POST['message-form-user__email'];
	$message_quite = $_POST['message-form-user__question'];


	$message = 'Имя: ' . "$message_name\r\n";
	$message .= 'Телефон:' . "$message_tel\r\n";
	$message .= 'E-mail: ' . "$message_email\r\n";
	$message .= 'Сообщение: ' . "$message_quite\r\n";

	mail($to, $subject, $message, $headers);

?>