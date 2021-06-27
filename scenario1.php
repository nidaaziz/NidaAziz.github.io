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

        if (isset($_POST['part2a'])) {
          $answer3 = $_POST['part2a'];
        }
        else{
          echo "Part2a not checked";
        }

        if (isset($_POST['q2c'])) {
            $answer4temp = $_POST['q2c'];
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

         if (isset($_POST['q3c'])) {
             $answer6temp = $_POST['q3c'];
             $answer6 = serialize($answer6temp);
         }
         else{
              echo "questions 3 not answered";
         }
    
        
   $options = array("part1a: ", $answer1, "\nq1c: ", $answer2,"\npart2a: ", $answer3, "\nq2c: ", $answer4, "\npart3a: ", $answer5, "\nq3c: ", $answer6);
        
   
//    print_r($options);
    
    file_put_contents('scenario1.txt',  $options);
        header('Location: scenario1-aß.html');

}
else{
    echo "test your code";
}
?>
