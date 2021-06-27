<?php
    $var = $_POST['data'];
    
    $file = fopen("consent.txt","r");
    $ID = fgets($file);

    $options = array("\n\n~~New data~~\n~Scenario 1~\n", $ID, "\nrandom subscenarios: ", $var);

    file_put_contents("AsubA.txt", $options, FILE_APPEND|LOCK_EX);
?>


