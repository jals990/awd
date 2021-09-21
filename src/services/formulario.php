<?php

/*
 * ------------------------------------
 * Contact Form Configuration
 * ------------------------------------
 */
 
$to    			= "diego.cardoso@mlins.com.br"; // <--- Your email ID here

/*
 * ------------------------------------
 * END CONFIGURATION
 * ------------------------------------
 */
 
$nome       = $_POST["name"];
$email      = $_POST["email"];
$nameCnh    = $_FILES["cnh"]["name"];
$cnh  		= $_FILES["cnh"]["tmp_name"];
$nameDoc    = $_FILES["documents"]["name"];
$documents  = $_FILES["documents"]["tmp_name"];
$nameDoc1    = $_FILES["documents1"]["name"];
$documents1  = $_FILES["documents1"]["tmp_name"];
$subject    = $nome;// $_POST["subject"]; // titulo do email

$contentCnh = file_get_contents($cnh);
$contentCnh = chunk_split(base64_encode($contentCnh));

$contentDoc = file_get_contents($documents);
$contentDoc = chunk_split(base64_encode($contentDoc));

$contentDoc1 = file_get_contents($documents1);
$contentDoc1 = chunk_split(base64_encode($contentDoc1));

$separator = md5(time());
$eol = "\r\n";

if (isset($email) && isset($nome)) {
	$headers  = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
	$headers .= "From: ".$name." <".$email.">\r\n"."Reply-To: ".$email."\r\n" ;
	$headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;
	
	
	$body = "--" . $separator . $eol;
	$body .= "Content-Type: text/html; charset=utf-8" . $eol;
	$body .= "Content-Transfer-Encoding: 8bit" . $eol;
	$body     .= '<br/> <br/> <table border="1" cellpadding="6" cellspacing="0" style="border: 1px solid  #eeeeee;">' . $eol;
		foreach ($_POST as $label => $value) {
	    	$body .= "<tr><td width='100'>". ucfirst($label) . "</td><td width='300'>" . $value . " </tr>" . $eol;
		}
	$body      .= " </table> <br> --- <br>This e-mail was sent from" . $eol;

	$body .= "--" . $separator . $eol;
    $body .= "Content-Type: application/octet-stream; name=\"" . $nameCnh . "\"" . $eol;
    $body .= "Content-Transfer-Encoding: base64" . $eol;
    $body .= "Content-Disposition: attachment" . $eol;
    $body .= $contentCnh . $eol;
	$body .= "--" . $separator . $eol;
    
	$body .= "Content-Type: application/octet-stream; name=\"" . $nameDoc . "\"" . $eol;
    $body .= "Content-Transfer-Encoding: base64" . $eol;
    $body .= "Content-Disposition: attachment" . $eol;
    $body .= $contentDoc . $eol;
	$body .= "--" . $separator .  $eol;

	$body .= "Content-Type: application/octet-stream; name=\"" . $nameDoc1 . "\"" . $eol;
    $body .= "Content-Transfer-Encoding: base64" . $eol;
    $body .= "Content-Disposition: attachment" . $eol;
    $body .= $contentDoc1 . $eol;
	$body .= "--" . $separator .  $eol;

	/* Please do not change the values below. */
	if(mail($to, $subject, $body, $headers)) {
		echo "success";
	} else {
		echo 'failed';
	}

} // END isset
