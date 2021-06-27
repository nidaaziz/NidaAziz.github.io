

<?php
    $username="na328"; // Mysql username
    $password="nnCVKa2HcsZ0o"; // Mysql password
    $db_name ="na328"; // Database name
    $servername  ="dbprojects.eecs.qmul.ac.uk";
    
    // Create connection
    $conn = new mysqli($servername, $username, $password);
    // Check connection
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }
   
    // Create database
    $sql = "CREATE DATABASE myDB";
    if ($conn->query($sql) === TRUE) {
      echo "Database created successfully";
    } else {
      echo "Error creating database: " . $conn->error;
    }

    $query = "INSERT INTO (answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11) VALUES ('$_POST[gender]', '$_POST[age]','$_POST[sight]', '$_POST[onset]', '$_POST[asstech]', '$_POST[tacmap]', '$_POST[elab] ', '$_POST[printmap]', '$_POST[printelab]', '$_POST[googlemap]', '$_POST[googleelab]')";
    mysqli_query($conn,$query);
    

    $conn = null;
  


    ?>
