<?php
    if (isset($_POST['submit'])) {
//        $username="na328"; // Mysql username
//        $password="nnCVKa2HcsZ0o"; // Mysql password
//        $db_name ="na328"; // Database name
//        $servername  ="dbprojects.eecs.qmul.ac.uk";

        
        if (isset($_POST['q3c1'])) {
            $answer7temp = $_POST['q3c1'];
            $answer7 = serialize($answer7temp);
        }
        else{
             echo "Part3c1 not answered";
        }
       

       if (isset($_POST['q3c2'])) {
           $answer8temp = $_POST['q3c2'];
           $answer8 = serialize($answer8temp);
       }
       else{
           echo "Part3c2 not answered";
       }

       if (isset($_POST['part3c'])) {
         $answer9 = $_POST['part3c'];
       }
       else{
         echo "Part3c3 not checked";
       }
    $file = fopen("consent.txt","r");
    $ID = fgets($file);
   $options = array("\n",$ID, "\npart3c1: ", $answer7, "\npart3c2: ", $answer8, "\npart3c3: ", $answer9, "\n\n\n~~~End of input~~~");
        
    file_put_contents('scenario3.txt',  $options, FILE_APPEND | LOCK_EX);

    header('Location: scenario4.html');
}
else{
    echo "Test your code";
}
?>


