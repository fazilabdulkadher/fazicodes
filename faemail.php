<?php

$url = 'https://api.sendgrid.com/';
$user = 'fazilabdulkhader';
$pass = 'passw0rd';
$to = 'fanafazil@gmail.com';

$params = array(
    'api_user'  => $user,
    'api_key'   => $pass,
    'to'        => $to,
    'subject'   => $_POST["email_sender"]." : ".$_POST["email_subject"],
    'text'      => $_POST["email_message"],
    'from'      => $_POST["email_from"],
  );



$request =  $url.'api/mail.send.json';

$cr_req = curl_init($request);
curl_setopt ($cr_req, CURLOPT_POST, true);
curl_setopt ($cr_req, CURLOPT_POSTFIELDS, $params);
curl_setopt($cr_req, CURLOPT_HEADER, true);
curl_setopt($cr_req, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($cr_req);
$errmsg = curl_error($cr_req);
$info = curl_getinfo($cr_req);
curl_close($cr_req);


/*
//PLEASE DONT DELETE IT.. WE NEED IT FOR FUTURE DEBUGGING
echo "Testing ... ".$url." - ".$info['url']."<br />";
print_r("Error $errmsg");
print_r("Info Start");
print_r($info);
print_r("Info End");
print_r(htmlentities($response));
echo "</pre>There is a problem with cURL. You need to contact your server admin or hosting provider.";
*/

/*
//PLEASE DONT DELETE IT.. WE NEED IT FOR FUTURE DEBUGGING
<br><br>
<hl>
<br><br>

Email Send <br>
From : <?php echo $_POST["email_sender"]; ?> <br>
From Email: <?php echo $_POST["email_from"]; ?> <br>
Subject : <?php echo $_POST["email_subject"]; ?> <br>
Message : <?php echo $_POST["email_message"]; ?> <br>
Response :  <?php echo $response; ?><br>
*/

 echo "<script>alert('Thanks for your Email. We will respond back shortly'); location.href='index.php';</script>";

?>



