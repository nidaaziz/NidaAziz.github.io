<?php
     $ID = 0;
     if (isset($_POST['submit'])) {
           
             if (isset($_POST['gender'])) {
                  $answer1 = $_POST['gender'];
             }
             else{
                  echo "Please provide your gender";
             }
         
             if (isset($_POST['fname'])) {
                  $answer16 = $_POST['fname'];
             }
             if (isset($_POST['lname'])) {
                  $answer17 = $_POST['lname'];
             }
            
            if (isset($_POST['age'])) {
                $answer2 = $_POST['age'];
            }
            else{
                echo "Please provide your age";
            }
                
             if (isset($_POST['loc'])) {
                 $answer3 = $_POST['loc'];
             }
             else{
                 echo "Please provide your geographic location";
             }
         
            if (isset($_POST['sight'])) {
              $answer4 = $_POST['sight'];
            }
            else{
              echo "Please provide your sight category";
            }
            
            if (isset($_POST['sightother'])) {
                $answer5 = $_POST['sightother'];
            }
            else{
                echo "Please provide your sight category";
            }
         
            if (isset($_POST['lang'])) {
                $answer6 = $_POST['lang'];
            }
            else{
                echo "Please provide your level of language comfort";
            }
            
            if (isset($_POST['langother'])) {
                 $answer7 = $_POST['langother'];
             }
             else{
                 echo "Please provide your level of language comfort";
             }
         
            if (isset($_POST['onset'])) {
                $answer8 = $_POST['onset'];
            }
            if (isset($_POST['asstech'])) {
                 $answer9 = $_POST['asstech'];
            }
            if (isset($_POST['tacmap'])) {
                $answer10 = $_POST['tacmap'];
            }
            if (isset($_POST['elab'])) {
                $answer11 = $_POST['elab'];
            }
            else{
                 $answer11 = "Nil";
                  echo "Please elaborate your answer regarding tactile maps";
             }

             if (isset($_POST['printmap'])) {
                $answer12 = $_POST['printmap'];
             }
             else{
                  echo "Please provide your answer regarding print maps";
             }

            if (isset($_POST['printelab'])) {
                 $answer13 = $_POST['printelab'];
            }
            else{
                $answer13 = "Nil";
                echo "Please elaborate your answer regarding print maps";
            }

         if (isset($_POST['googlemap'])) {
              $answer14 = $_POST['googlemap'];
         }
         else{
              echo "Please provide your answer regarding google maps";
         }

        if (isset($_POST['googleelab'])) {
             $answer15 = $_POST['googleelab'];
        }
        else{
             $answer15 = "Nil";
             echo "Please elaborate your answer regarding google maps";
        }
         $file = fopen("consent.txt","r");
         $ID = fgets($file);
        
         $options = array("\n~~~New data~~~\n\n", $ID , "\nName: ", $answer16, " ", $answer17, "\ngender: ", $answer1, "\nage: ", $answer2,"\nloc: ", $answer3,"\nsight: ", $answer4, "\nLanguage: ", $answer6, "\nonset: ", $answer8,"\nasstech: ", $answer9, "\ntacmap: ", $answer10,"\nelab: ", $answer11, "\nprintmap: ", $answer12,"\nprintelab: ", $answer13, "\ngooglemap: ", $answer14,"\ngoogleelab: ", $answer15,  "\n\n~~~End of data~~~\n\n");
            file_put_contents("demo.txt",  $options, FILE_APPEND|LOCK_EX);
             header('Location: training.html');
         }
     else{
         echo "test your code";
     }
        
     
?>
