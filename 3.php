<?php
$tek=$_GET["tek"];
$name=$_GET["name"];
$email=$_GET["email"];
$otz=$_GET["otz"];
$xml = simplexml_load_file("4.xml"); 
$cs = $xml->addChild('otziv','');
$cs->addChild("name", $name);
$cs->addChild("email", $email);
$cs->addChild("otz", $otz);
$done = $xml->asXML("4.xml");
$schiotchik=0;
$cn = count($xml->otziv);
$xml = simplexml_load_file("4.xml");
        for($i = 0; $i <= $cn; $i++){
          $schiotchik++;
          echo("<br>");
       echo "Имя: ".$xml->otziv[$i]->name . "<br>";
       echo "Почта: ".$xml->otziv[$i]->email . "<br>";
       echo "Отзыв: ".$xml->otziv[$i]->otz . "<br>";
       if($schiotchik==$cn)break;
        }
?>