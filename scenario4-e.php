<?php
    if (isset($_POST['submit'])) {
//        $username="na328"; // Mysql username
//        $password="nnCVKa2HcsZ0o"; // Mysql password
//        $db_name ="na328"; // Database name
//        $servername  ="dbprojects.eecs.qmul.ac.uk";

         
         if (isset($_POST['q45'])) {
             $answer1temp = $_POST['q45'];
             $answer1 = serialize($answer1temp);
         }
         else{
              echo "Part45 not answered";
         }
        
        $file = fopen("consent.txt","r");
        $ID = fgets($file);
       
   $options = array("\n",$ID,"\nsc4q5: ", $answer1, "~~~End of input~~~\n\n");
        
    
    file_put_contents('scenario4.txt',  $options, FILE_APPEND | LOCK_EX);
        header('Location: final_page.html');
}
else{
    echo "test your code";
}
?>


