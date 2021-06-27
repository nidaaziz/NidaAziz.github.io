<?php
    if (isset($_POST['submit'])) {
//        $username="na328"; // Mysql username
//        $password="nnCVKa2HcsZ0o"; // Mysql password
//        $db_name ="na328"; // Database name
//        $servername  ="dbprojects.eecs.qmul.ac.uk";

        if (isset($_POST['q42'])) {
            $answer2temp = $_POST['q42'];
            $answer2 = serialize($answer2temp);
        }
        else{
            echo "Part42 not answered";
        }
    $file = fopen("consent.txt","r");
    $ID = fgets($file);
        
   $options = array ("\n",$ID,"\nsc4q2: ", $answer2);
        
   
//    print_r($options);
    
    file_put_contents('scenario4.txt',  $options, FILE_APPEND | LOCK_EX);
    header('Location: scenario4-c.html');
}
else{
    echo "test your code";
}
?>


