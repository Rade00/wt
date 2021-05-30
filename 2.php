<?php
$schiotchik=0;
$xml = simplexml_load_file("4.xml");
$cn = count($xml->otziv);
        for($i = 0; $i <= $cn; $i++){
          $schiotchik++;
          echo("<br>");
       echo "Имя: ".$xml->otziv[$i]->name . "<br>";
       echo "Почта: ".$xml->otziv[$i]->email . "<br>";
       echo "Отзыв: ".$xml->otziv[$i]->otz . "<br>";
       if($schiotchik==$cn)break;
        }
?>