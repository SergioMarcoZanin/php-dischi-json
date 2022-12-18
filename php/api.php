<?php 
$disks = file_get_contents("../dischi.json");
$disks = json_decode($disks, true);


$json_disks = json_encode($disks);
header("Content-Type: application/json");
echo $json_disks;