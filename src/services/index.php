<?php
header("Access-Control-Allow-Origin: *");
if (empty($_POST['name']) && empty($_POST['email'])) die();

if ($_POST)
	{

	// set response code - 200 OK

	http_response_code(200);
	$subject = $_POST['name'];
	$to = "diego.cardoso@mlins.com.br";
	$from = $_POST['email'];

	// data
	// $msg = '';
	// $msg .= '<br/> <br/> <table border="1" cellpadding="6" cellspacing="0" style="border: 1px solid  #eeeeee;">';
	// foreach ($_POST as $label => $value) {
	// 	$msg .= "<tr><td width='100'>". ucfirst($label) . "</td><td width='300'>" . $value . " </tr>";
	// }
	// $msg .= " </table> <br> --- <br>This e-mail was sent from $website";

	$content = chunk_split($_POST['cnh']);

    // a random hash will be necessary to send mixed content
    $separator = md5(time());

    // carriage return type (RFC)
    $eol = "\r\n";

    // main header (multipart mandatory)
    $headers = "From: name <test@test.com>" . $eol;
    $headers .= "MIME-Version: 1.0" . $eol;
    $headers .= "Content-Type: multipart/mixed; boundary=\"" . $separator . "\"" . $eol;
    $headers .= "Content-Transfer-Encoding: 7bit" . $eol;
    $headers .= "This is a MIME encoded message." . $eol;

    // message
    $body = "--" . $separator . $eol;
    $body .= "Content-Type: text/plain; charset=\"utf-8\"" . $eol;
    $body .= "Content-Transfer-Encoding: 8bit" . $eol;

	$message = '';
	$message .= '<br/> <br/> <table border="1" cellpadding="6" cellspacing="0" style="border: 1px solid  #eeeeee;">';
	foreach ($_POST as $label => $value) {
		if ($label != 'cnh') {
			$message .= "<tr><td width='100'>". ucfirst($label) . "</td><td width='300'>" . $value . " </tr>";
		}
	}
	$message .= " </table> <br> --- <br>This e-mail was sent from $website";

    $body .= $message . $eol;

    // attachment
    $body .= "--" . $separator . $eol;
    $body .= "Content-Type: application/octet-stream; name=\"" . "document" . "\"" . $eol;
    $body .= "Content-Transfer-Encoding: base64" . $eol;
    $body .= "Content-Disposition: attachment" . $eol;
    $body .= $content . $eol;
    $body .= "--" . $separator . "--";

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
	$headers.= "From: <" . $from . ">";
	mail($to, $subject, $body, $headers);

	// echo json_encode( $_POST );

	echo json_encode(array(
		"sent" => true
	));
	}
  else
	{

	// tell the user about error

	echojson_encode(["sent" => false, "message" => "Something went wrong"]);
	}

?>