<?php
        $firstname = $_POST['firstname'];
        $lastname  = $_POST['lastname'];
        $email     = $_POST['emailadd'];
        $age       = $_POST['age'];
        $gender    = $_POST['gender'];
        $emp       = $_POST['emp'];
        $city      = $_POST['city'];
        $ethnicity = $_POST['ethnicity'];
        $often     = $_POST['often'];
        $feelwalk  = $_POST['feelwalk'];
        $howsafe   = $_POST['safe'];
        $exp       = $_POST['exp'];
        $mainrd    = $_POST['mainrd'];
        $siderd    = $_POST['siderd'];
        $park      = $_POST['park'];
        $particular= $_POST['particular'];
        $winters   = $_POST['winters'];
        $summers   = $_POST['summers'];
        $rainy     = $_POST['rainy'];
        $oseas     = $_POST['oseas'];
        $particularseasons = $_POST['particularseasons'];
        $morning   = $_POST['morning'];
        $afternoon = $_POST['afternoon'];
        $eeven     = $_POST['eeven'];
        $even      = $_POST['even'];
        $night     = $_POST['night'];
        $particulartimes = $_POST['$particulartimes'];
        $alone     = $_POST['alone'];
        $fecomp    = $_POST['fecomp'];
        $mcomp     = $_POST['mcomp'];
        $grp       = $_POST['grp'];
        $festrange = $_POST['festrange'];
        $mstrange  = $_POST['mstrange'];
        $particularconditions = $_POST['particularconditions'];
        $stranger  = $_POST['stranger'];
        $walkingapps = $_POST['walkingapps'];
        $safeapps  = $_POST['safeapps'];
        $nameapp   = $_POST['nameapp'];
        $like      = $_POST['like'];
        $dislike   = $_POST['dislike'];
        $solution  = $_POST['solution'];
        $tech      = $_POST['tech'];
        $comments  = $_POST['comments'];
        $interview = $_POST['interview'];

        $options   = array($firstname,
                           $lastname,
                           $email,
                           $age,
                           $gender,
                           $emp,
                           $city,
                           $ethnicity,
                           $often,
                           $feelwalk,
                           $howsafe,
                           $exp,
                           $mainrd,
                           $siderd,
                           $park,
                           $particular,
                           $winters,
                           $summers,
                           $rainy,
                           $oseas,
                           $particularseasons,
                           $morning,
                           $afternoon,
                           $eeven,
                           $even,
                           $night,
                           $particulartimes,
                           $alone,
                           $fecomp,
                           $mcomp,
                           $grp,
                           $festrange,
                           $mstrange,
                           $particularconditions,
                           $stranger,
                           $walkingapps,
                           $safeapps,
                           $nameapp,
                           $like,
                           $dislike,
                           $solution,
                           $tech,
                           $comments,
                           $interview);
            
        file_put_contents('survey.txt',  $options);
        header('Location: thankyou.html');

?>
