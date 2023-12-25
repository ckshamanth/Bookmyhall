<?php
    $check_in_out = $_POST['check_in_out'];
	$check_in_time = $_POST['check_in_time'];
    $guests = $_POST['guests'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $vname = $_POST['vname'];
    $price = $_POST['price'];

    $conn = new mysqli('localhost', 'root', '', 'book');
    if ($conn->connect_error) {
        echo "$conn->connect_error";
        die("Connection Failed : " . $conn->connect_error);
    } else {
        $stmt = $conn->prepare("INSERT INTO userinput(check_in_out, check_in_time, guests, first_name, last_name, email, mobile, vname, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssiss", $check_in_out, $check_in_time, $guests, $first_name, $last_name, $email, $mobile, $vname, $price);
        $execval = $stmt->execute();
        $stmt->close();
        $conn->close();
    }

    // Redirect to the booking-confirm.html with the query parameters
    $query_params = http_build_query([
        'title' => $_POST['title'],
        'first_name' => $first_name,
        'last_name' => $last_name,
        'check_in_out' => $check_in_out,
		'check_in_time' => $check_in_time,
        'guests' => $guests,
        'email' => $email,
        'mobile' => $mobile,
        'vname' => $vname,
        'price' => $price
	
    ]);

    header('Location: booking-confirm.html?' . $query_params);
    exit;
?>
