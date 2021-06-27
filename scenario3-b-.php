<?php
    if (isset($_POST['submit'])) {
        echo "Im here";
        if (isset($_POST['q3b1'])) {
             $answer1temp = $_POST['q3b1'];
             $answer1 = serialize($answer1temp);
         }
         else{
              echo "Part3b1 not answered";
         }
        

        if (isset($_POST['q3b2'])) {
            $answer2temp = $_POST['q3b2'];
            $answer2 = serialize($answer2temp);
        }
        else{
            echo "Part3b2 not answered";
        }

        if (isset($_POST['part3b'])) {
          $answer3 = $_POST['part3b'];
        }
        else{
          echo "Part3b3 not checked";
        }
    $file = fopen("consent.txt","r");
    $ID = fgets($file);
       
   $options = array("~~~New data~~~\n\n~Scenario 3~\n", $ID, "\npart3b1: ", $answer1, "\npart3b2: ", $answer2,"\npart3b3: ", $answer3);
    
    file_put_contents('scenario3.txt',  $options, FILE_APPEND | LOCK_EX);
    header('Location: scenario3-c.html');

}
else{
    echo "Test your code";
}
?>


