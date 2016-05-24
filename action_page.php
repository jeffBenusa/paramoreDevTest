<?php
// define variables and set to empty values

$businessName = $businessType = $userName = $userAddress = $businessStreet = $businessApt = $businessCity = $businessState = $businessZIP = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $businessName = test_input($_POST["BusinessName"]);
  $businessType = test_input($_POST["BusinessType"]);
  $userName = test_input($_POST["UserName"]);
  $userAddress = test_input($_POST["UserAddress"]);
  $businessStreet = test_input($_POST["BusinessStreet"]);
  $businessApt = test_input($_POST["BusinessApt"]);
  $businessCity = test_input($_POST["BusinessCity"]);
  $businessState = test_input($_POST["BusinessState"]);
  $businessZIP = test_input($_POST["BusinessZIP"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>
