<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if the required fields are set
    if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $subject = $_POST['subject'];
        $message = $_POST['message'];
        $phone = isset($_POST['phone']) ? $_POST['phone'] : ''; // Optional phone number field

        // File upload handling
        $file_attached = false;
        if (isset($_FILES['file']) && $_FILES['file']['error'] == UPLOAD_ERR_OK) {
            $file_attached = true;
            $file_name = $_FILES['file']['name'];
            $file_tmp_name = $_FILES['file']['tmp_name'];
            $file_type = $_FILES['file']['type'];
            $file_size = $_FILES['file']['size'];
        }

        // Email message construction
        $to = "agrawalmanan2@gmail.com"; // Replace with your email address
        $from = $email;
        $headers = "From: $name <$from>";
        $message_body = "Name: $name\n";
        $message_body .= "Email: $email\n";
        $message_body .= "Phone: $phone\n\n";
        $message_body .= "Subject: $subject\n";
        $message_body .= "Message: $message\n";

        // Handle file attachment
        if ($file_attached) {
            $file = fopen($file_tmp_name, "r");
            $content = fread($file, filesize($file_tmp_name));
            fclose($file);
            $encoded_content = chunk_split(base64_encode($content));
            $boundary = md5(date('r', time()));
            $headers .= "\nMIME-Version: 1.0\n";
            $headers .= "Content-Type: multipart/mixed; boundary=\"PHP-mixed-".$boundary."\"";
            $message_body .= "\n\n--PHP-mixed-$boundary\n";
            $message_body .= "Content-Type: application/octet-stream; name=\"$file_name\"\n";
            $message_body .= "Content-Transfer-Encoding: base64\n";
            $message_body .= "Content-Disposition: attachment\n\n";
            $message_body .= $encoded_content."\n";
        }

        // Send email
        if (mail($to, $subject, $message_body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message. Please try again later.";
        }
    } else {
        echo "Missing required fields.";
    }
} else {
    echo "Invalid request method.";
}
?>
