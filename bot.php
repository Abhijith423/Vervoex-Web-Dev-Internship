<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

// Connect to database
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "college_bot";

$conn = new mysqli($host, $user, $pass, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST["message"])) {
    $userMessage = strtolower(trim($_POST["message"]));

    $sql = "SELECT answer FROM faq WHERE LOWER(question) LIKE ?";
    $stmt = $conn->prepare($sql);
    $search = "%" . $userMessage . "%";
    $stmt->bind_param("s", $search);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        echo $row["answer"];
    } else {
        echo "Sorry, I don't know the answer to that.";
    }

    $stmt->close();
}

$conn->close();
?>
