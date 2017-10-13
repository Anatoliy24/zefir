<?php
/**
 * @author Aleksandr Terentev <alvteren@gmail.com>
 * Date: 12.04.17
 * Time: 22:59
 */
$email = 'Request@zefirproject.ru';
$subject = 'Форма обратной связи сайта Zefir Project';

if (!empty($_REQUEST['email']) && filter_var($_REQUEST['email'],FILTER_VALIDATE_EMAIL) && !empty($_REQUEST['name']) && !empty($_REQUEST['message']))
{
  $client = array(
    'email' => htmlspecialchars($_REQUEST['email']),
    'name' => htmlspecialchars(strip_tags($_REQUEST['name'])),
    'message' => htmlspecialchars(strip_tags($_REQUEST['message']))
  );
  $body = "
    Была заполнена форма обратной связи на сайте Zefir Project\r\n
    E-mail: ".$client['email']."\r\n
    Имя: ".$client['name']."\r\n
    Сообщение: ".$client['message']."\r\n
  ";
  $headers = array('From: Zefir Project <no-reply@zefirproject.ru>',
                   'MIME-Version: 1.0',
                   'Content-type: text/plain; charset=utf-8',
                   'X-Mailer: PHP/' . phpversion());
  $strHeader = implode("\r\n",$headers);
  mail($email,$subject,$body,$strHeader);
}