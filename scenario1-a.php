<?php
    if (isset($_POST['submit'])) {
//        $username="na328"; // Mysql username
//        $password="nnCVKa2HcsZ0o"; // Mysql password
//        $db_name ="na328"; // Database name
//        $servername  ="dbprojects.eecs.qmul.ac.uk";

         
         if (isset($_POST['part1a'])) {
              $answer1 = $_POST['part1a'];
         }
         else{
              echo "Part1a not checked";
         }
        

        if (isset($_POST['q1c'])) {
            $answer2temp = $_POST['q1c'];
            $answer2 = serialize($answer2temp);
        }
        else{
            echo "questions 1 not answered";
        }
    
    $file = fopen("consent.txt","r");
    $ID = fgets($file);
   $options = array("~~New data~~\n\n~Scenario 1~\n", "ID",$ID, "\npart1a: ", $answer1, "\nq1: ", $answer2);
       
    file_put_contents('scenario1.txt',  $options, FILE_APPEND | LOCK_EX);
    header('Location: scenario1-b.html');
}
else{
    echo "test your code";
}
?>
