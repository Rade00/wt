<?php
   $tek=$_GET["tek"];
	$url = "http://lenta.ru/rss/"; 
   $rss = simplexml_load_file($url);       
   $schiotchik=0;
   foreach ($rss->channel->item as $item) {
       $schiotchik++;
       echo '<h2>'.$item->title.'</h2>';     
       echo '<p>'.$item->description.'</p>'; 
       echo "<img src=\"". (string)$item->enclosure['url'][0]. "\" width='300px'>";
       if($schiotchik==$tek)break;
   }
?>