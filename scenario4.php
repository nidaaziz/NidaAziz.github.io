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
        

        if (isset($_POST['q42'])) {
            $answer2temp = $_POST['q42'];
            $answer2 = serialize($answer2temp);
        }
        else{
            echo "Part42 not answered";
        }

        if (isset($_POST['q43'])) {
            $answer3temp = $_POST['q43'];
            $answer3 = serialize($answer3temp);
        }
        else{
            echo "Part43 not answered";
        }
        
        if (isset($_POST['q44'])) {
            $answer4temp = $_POST['q44'];
            $answer4 = serialize($answer4temp);
        }
        else{
            echo "Part44 not answered";
        }
        
        if (isset($_POST['q45'])) {
            $answer5temp = $_POST['q45'];
            $answer5 = serialize($answer5temp);
        }
        else{
            echo "Part45 not answered";
        }
   $options = array("sc4q1: ", $answer1, "\nsc4q2: ", $answer2,"\nsc4q3: ", $answer3, "\nsc4q4: ", $answer4, "\nsc4q5: ", $answer5);
        
   
//    print_r($options);
    
    file_put_contents('scenario4.txt',  $options);
    header('Location: interviewq.html');
}
else{
    echo "test your code";
}
?>


