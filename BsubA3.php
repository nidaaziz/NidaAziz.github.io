<?php
        $ans =  $_POST['count'];
        $file = fopen("consent.txt","r");
        $ID = fgets($file);
   
   file_put_contents("BsubA3.txt", $ID, FILE_APPEND|LOCK_EX);
    file_put_contents("BsubA3.txt", $ans, FILE_APPEND|LOCK_EX);
        
?>



