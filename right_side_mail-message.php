<?php
  $to = "atelieprofi@gmail.com";
	$message_name = $_POST['message-form-user__name'];
	$message_tel = $_POST['message-form-user__tel'];
	$message_email = $_POST['message-form-user__email'];
	$message_quite = $_POST['message-form-user__question'];

	mail($to, $message_name, $message_tel, $message_email, $message_quite);

?>