<?php
        $ans =  $_POST['btnsCnt'];
        $file = fopen("consent.txt","r");
        $ID = fgets($file);
   
   file_put_contents("training.txt", $ID, FILE_APPEND|LOCK_EX);
    file_put_contents("training.txt", $ans, FILE_APPEND|LOCK_EX);
        
?>


