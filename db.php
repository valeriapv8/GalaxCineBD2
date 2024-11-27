<?php
// Configuración de la base de datos
$host = 'localhost'; // Cambiar según sea necesario
$dbname = 'galaxycine'; // Nombre de la base de datos
$user = 'postgres'; // Usuario de PostgreSQL
$password = 'password'; // Contraseña del usuario

try {
    // Crear una nueva conexión con PDO
    $pdo = new PDO("pgsql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error al conectar con la base de datos: " . $e->getMessage());
}
?>

