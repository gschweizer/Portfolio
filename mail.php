<?php $name = $_POST['user_name'];
$email = $_POST['user_email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "ginamschweizer@gmail.com";
$subject = "Website Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!" . " -" . "<a href='index.html' style='text-decoration:none;color:#ff0099;'> Return Home</a>";
?>