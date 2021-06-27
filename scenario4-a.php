<?php
    if (isset($_POST['submit'])) {
//        $username="na328"; // Mysql username
//        $password="nnCVKa2HcsZ0o"; // Mysql password
//        $db_name ="na328"; // Database name
//        $servername  ="dbprojects.eecs.qmul.ac.uk";

         
         if (isset($_POST['q41'])) {
             $answer1temp = $_POST['q41'];
             $answer1 = serialize($answer1temp);
         }
         else{
              echo "Part41 not answered";
         }
        

        $file = fopen("consent.txt","r");
        $ID = fgets($file);
        
   $options = array("\n~~~New data~~~\n\nScenario 4\n",$ID, "\nsc4q1: ", $answer1);
    

    file_put_contents('scenario4.txt',  $options, FILE_APPEND | LOCK_EX);
    header('Location: scenario4-b.html');
}
else{
    echo "test your code";
}
?>


