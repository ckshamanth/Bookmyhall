<?php
    // Establish a database connection
    $conn = new mysqli('localhost', 'root', '', 'book');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Fetch data from the database
    $sql = "SELECT * FROM userinput";
    $result = $conn->query($sql);

    // Generate table rows dynamically with the fetched data
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo '<tr>';
            echo '<td><h6 class="mb-0">' . $row['id'] . '</h6></td>';
            echo '<td><h6 class="mb-0"><a href="#">' . $row['vname'] . '</a></h6></td>';
            echo '<td>' . $row['price'] . '</td>';
            echo '<td><h6 class="mb-0 fw-light">' . $row['check_in_out'] . '</h6></td>';
            echo '<td><div class="badge text-bg-success">Booked</div></td>';
            echo '<td><div class="badge bg-success bg-opacity-10 text-success">Full payment</div></td>';
            echo '<td><a href="#" class="btn btn-sm btn-light mb-0">View</a></td>';
            echo '</tr>';
        }
    } else {
        echo '<tr><td colspan="7">No data available</td></tr>';
    }
    

    // Close the database connection
    $conn->close();
?>
