<?php
    if (isset($_POST['submit'])) {
        echo "Im here";
        if (isset($_POST['q3a1'])) {
             $answer1temp = $_POST['q3a1'];
             $answer1 = serialize($answer1temp);
         }
         else{
              echo "Part3a1 not answered";
         }
        

        if (isset($_POST['q3a2'])) {
            $answer2temp = $_POST['q3a2'];
            $answer2 = serialize($answer2temp);
        }
        else{
            echo "Part3a2 not answered";
        }

        if (isset($_POST['part3a'])) {
          $answer3 = $_POST['part3a'];
        }
        else{
          echo "Part3a3 not checked";
        }
    $file = fopen("consent.txt","r");
    $ID = fgets($file);
       
   $options = array("~~~New data~~~\n\n~Scenario 3~\n", $ID, "\npart3a1: ", $answer1, "\npart3a2: ", $answer2,"\npart3a3: ", $answer3);
    
    file_put_contents('scenario3.txt',  $options, FILE_APPEND | LOCK_EX);
        header('Location: scenario3-b.html');
    }
    else{
        echo "test your code";
    }

?>


