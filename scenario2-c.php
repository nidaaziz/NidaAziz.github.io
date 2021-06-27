<?php
    if (isset($_POST['submit'])) {
//        $username="na328"; // Mysql username
//        $password="nnCVKa2HcsZ0o"; // Mysql password
//        $db_name ="na328"; // Database name
//        $servername  ="dbprojects.eecs.qmul.ac.uk";

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
    
        $file = fopen("consent.txt","r");
        $ID = fgets($file);
        
   $options = array("\n",$ID,"\npart3a: ", $answer5, "\nq3: ", $answer6, "\n\n\n~~~End of input~~~");
        
    file_put_contents('scenario2.txt',  $options, FILE_APPEND | LOCK_EX);
        header('Location: scenario3.html');
}
else{
    echo "test your code";
}
?>


