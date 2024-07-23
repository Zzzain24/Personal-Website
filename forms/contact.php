<?php
$receiving_email_address = 'zainbharde@gmail.com';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $to = $receiving_email_address;
    $subject = "Message from $name: $subject";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    if (mail($to, $subject, $body)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
