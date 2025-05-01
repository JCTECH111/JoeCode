<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Composer autoload

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'your@gmail.com'; // Your Gmail
    $mail->Password   = 'your-app-password'; // Use App Password (2FA)
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('your@gmail.com', 'Your Name');
    $mail->addAddress('recipient@example.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'Test Email';
    $mail->Body    = '<b>Hello from PHPMailer!</b>';

    $mail->send();
    echo 'Email sent!';
} catch (Exception $e) {
    echo "Failed: {$mail->ErrorInfo}";
}