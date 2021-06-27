<?php
    if (isset($_POST['submit'])) {
//        $username="na328"; // Mysql username
//        $password="nnCVKa2HcsZ0o"; // Mysql password
//        $db_name ="na328"; // Database name
//        $servername  ="dbprojects.eecs.qmul.ac.uk";

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
        $file = fopen("consent.txt","r");
        $ID = fgets($file);
        
   $options = array("\n", $ID, "\npart2a: ", $answer3, "\nq22: ", $answer4);
        
    file_put_contents('scenario2.txt',  $options, FILE_APPEND | LOCK_EX);
        header('Location: scenario2-c.html');
}
else{
    echo "test your code";
}
?>


