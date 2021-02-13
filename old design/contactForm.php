<?php

    $to = "sobanfarhan@gmail.com";
    $subject = $_POST['subject'];
    $txt = "Sent From " . $_POST['name'] . "\n\n" . $_POST['message'];
    $headers = "From: " . $_POST['email'];

    if ( mail($to,$subject,$txt,$headers) ) {
        echo "<img style='width: 20px;' src='./images/checkmark.png' alt='Cross Icon'> Sent Successfully.";
    } else {
        echo "Something Went Wrong.";
    }
    
?>