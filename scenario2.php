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
        

        if (isset($_POST['q21c'])) {
            $answer2temp = $_POST['q21c'];
            $answer2 = serialize($answer2temp);
        }
        else{
            echo "questions 1 not answered";
        }

        if (isset($_POST['part2a'])) {
          $answer3 = $_POST['part2a'];
        }
        else{
          echo "Part2a not checked";
        }

        if (isset($_POST['q22c'])) {
            $answer4temp = $_POST['q22c'];
            $answer4 = serialize($answer4temp);
        }
        else{
             echo "questions 2 not answered";
        }

         if (isset($_POST['part3a'])) {
              $answer5 = $_POST['part3a'];
          }
          else{
              echo "Part3a not checked";
          }

         if (isset($_POST['q23c'])) {
             $answer6temp = $_POST['q23c'];
             $answer6 = serialize($answer6temp);
         }
         else{
              echo "questions 3 not answered";
         }
    
        
   $options = array("part1a: ", $answer1, "\nq21c: ", $answer2,"\npart2a: ", $answer3, "\nq22c: ", $answer4, "\npart3a: ", $answer5, "\nq23c: ", $answer6);
        
   
//    print_r($options);
    
    file_put_contents('scenario2.txt',  $options);
    header('Location: scenario3.html');
}
else{
    echo "test your code";
}
?>


