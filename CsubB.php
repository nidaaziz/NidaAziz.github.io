<?php
        $ans =  $_POST['count'];
        $file = fopen("consent.txt","r");
        $ID = fgets($file);
   
   file_put_contents("CsubB.txt", $ID, FILE_APPEND|LOCK_EX);
    file_put_contents("CsubB.txt", $ans, FILE_APPEND|LOCK_EX);
        
?>


