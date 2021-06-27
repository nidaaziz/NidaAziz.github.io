<?php
    if (isset($_POST['submit'])) {
         if (isset($_POST['interview'])) {
              $answer1 = $_POST['interview'];
         }
        if (isset($_POST['email'])) {
             $answer2 = $_POST['email'];
        }
         
        $file = fopen("consent.txt","r");
        $ID = fgets($file);
        
    $options = array("~~New data~~\n\n", "\nID", $ID, "\nInterview: ", $answer1, "\nemail address: ", $answer2, "\n\n~~End of data~~\n\n");
    file_put_contents("Final.txt",  $options, FILE_APPEND | LOCK_EX);
    header('Location: final_page.html');
}
else{
    echo "test your code";
}
?>
