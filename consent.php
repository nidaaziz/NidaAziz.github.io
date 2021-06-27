<?php
//    $host   =   "dbprojects.eecs.qmul.ac.uk"  ;
//    $user   =   "na328"  ;
//    $pass   =   "nnCVKa2HcsZ0o"  ;
//    $db   =   "na328"  ;
//
//    $link  =  mysqli_connect( $host ,  $user ,  $pass );
//    if (! $link ) {
//        die( 'Could not connect: '  .  mysql_error ());
//    }
//    echo  'Connected successfully' ;
//
//    $db_selected  =  mysqli_select_db ( $db ,  $link );
//    if (! $db_selected ) {
//        die ( 'Can\'t use $db : '  .  mysql_error ());
//    }

    $id = uniqid();
    if (isset($_POST['submit'])) {
        if (isset($_POST['consent'])) {
              $answer1 = $_POST['consent'];
         }

        $options = array("ID: ", $id, "\nConsent: ", $answer1, "\n\n~~~End of data!~~~");
    
        file_put_contents("consent.txt",  $options);
        header('Location: demographics.html');
        }


//    mysql_close ( $link );

    ?>

