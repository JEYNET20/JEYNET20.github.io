<?php
$to = "stupenki-pro@yandex.ru"; // емайл получателя данных из формы 
$tema = "Форма обратной связи на PHP"; // тема полученного емайла 

$message  = "Ваше имя: ".$_POST['user_name']."<br>";//присвоить переменной значение, полученное из формы name=name
$message .= "Номер телефона: ".$_POST['user_tel']."<br>"; //полученное из формы name=phone
// $message .= "E-mail: ".$_POST['user_email']."<br>"; //полученное из формы name=phone


$headers  = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
  $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
header("Location: success.html");
?>

