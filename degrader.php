<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="content-type" content="text/html; charset=UTF-8">
		<meta charset="utf-8">
		<title>PIF degrader</title>
	<script	src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>	
		<script	src="js/eloss.js"></script>

<!--
		<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
		<link href="css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css">


		<link href="css/components.css" rel="stylesheet" type="text/css">
		<link href="css/core.css" rel="stylesheet" type="text/css">

		<link href="css/icons.css" rel="stylesheet" type="text/css">
		<link href="css/menu.css" rel="stylesheet" type="text/css">
		<link href="css/pages.css" rel="stylesheet" type="text/css">
		<link href="css/responsive.css" rel="stylesheet" type="text/css">
		<link href="css/switchery.css" rel="stylesheet" type="text/css">
-->



	</head>

	<body >

			<h2>Proton energy loss calculator</h2>
		<div class="container">



<hr>
	<h2> Degrader thickness calculator</h2>
		<form id="frm">
			Initial energy (MeV):
			<input type="number" name="E0" value="200">
			Energy at DUT (MeV):
			<input type="number" name="E" value="100">
			<input type="submit">
		</form>
		<p>
		<div id="degrader"> </div></p>

		<hr>
		
		<h2> Exit energy calculator</h2>
		<form id="frm2">
			Initial energy (MeV):
			<input type="number" name="E0" value="200">
			degrader thickness (mm):
			<input type="number" name="TH" value="30">
			<input type="submit">
		</form>
		<p>
		<div id="degrader2"> </div></p>

		<hr>





			<h3>MC Energy spectrum</h3>
<?php 
$E0=0;
$TH=0;
if(isset($_GET['E0']))
{
	$E0=$_GET['E0'];
}
if(isset($_GET['TH']))
{
	$TH=$_GET['TH'];
}

?>
<form action="degrader.php">
<label>Initial Energy:</label>
<select name="E0">
  <option value="230">230 MeV</option>
  <option value="200">200 MeV</option>
  <option value="72.8">72.8 MeV</option>
  <option value="70">70 MeV</option>
</select>
<label>Degrader:</label>
<select name="TH">
<?php 
for( $l=0.5; $l<60;$l+=0.5)
{
	echo '<option value="'.$l.'">'.$l.' mm</option>';
}
?>
</select>
 <input type="submit" value="Submit">
</form>



<hr>

<?php 
$filename=sprintf("sim/Simout_%.1fMeV_%.1fmm.png",$E0,$TH);
echo "Exit Energy spectrum (E0=".$E0." MeV - Thickness:".$TH." mm)<br>";
if(file_exists($filename))
{
	echo '<img src="'.$filename.'" >';
}
else
{
	echo "<h5>Data not ready!</h5>";
}
?>

</div>
<body>
