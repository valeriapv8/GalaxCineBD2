<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro y Login</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous"> -->

</head>
<!-- <style>
    .c-item {
        height: 500px;
    }

    .c-img {
        height: 100%;
        object-fit: cover;
        filter: brightness(0.6);
    }
</style> -->

<body class="bodyOtro">
    <div class="containerOtro" id="loginSection">
        <div class="form-container" id="registerFormContainer">
            <h2>Registro</h2>
            <form id="registerForm">
                <div class="input-group">
                    <label for="registerUsername">Usuario:</label>
                    <input type="text" id="registerUsername" required>
                </div>
                <div class="input-group">
                    <label for="registerPassword">Contraseña:</label>
                    <input type="password" id="registerPassword" required>
                </div>
                <button type="submit">Registrar</button>
            </form>
            <p id="registerMessage"></p>
            <p>¿Ya tienes una cuenta? <a href="#" onclick="showLogin()">Inicia Sesión</a></p>
        </div>

        <div class="form-container" id="loginFormContainer" style="display: none;">
            <h2>Iniciar Sesión</h2>
            <form id="loginForm">
                <div class="input-group">
                    <label for="loginUsername">Usuario:</label>
                    <input type="text" id="loginUsername" required>
                </div>
                <div class="input-group">
                    <label for="loginPassword">Contraseña:</label>
                    <input type="password" id="loginPassword" required>
                </div>
                <button type="submit">Ingresar</button>
            </form>
            <p id="loginMessage"></p>
            <p>¿No tienes una cuenta? <a href="#" onclick="showRegister()">Regístrate</a></p>
        </div>
    </div>

    <!-- <div class="container" id="mainContent" style="display: none;">
        <div id="hero-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
                <div class="carousel-item active c-item">
                    <img src="https://images6.alphacoders.com/133/thumb-1920-1331854.png" class="d-block w-100 c-img"
                        style="object-fit: cover; object-position: bottom;" alt="Slide 1">
                    <div class="carousel-caption top-0 mt-4">
                        <p class="mt-1 fs-3 text-uppercase">Explora el mundo mágico de Disney</p>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="https://images2.alphacoders.com/133/thumb-1920-1338853.png" class="d-block w-100 c-img"
                        alt="Slide 2">
                    <div class="carousel-caption top-0 mt-4">
                        <p class="text-uppercase fs-3 mt-5">Calidad no es cantidad</p>
                        <p class="display-1 fw-bolder text-capitalize">Películas de ensueño</p>
                    </div>
                </div>
                <div class="carousel-item c-item">
                    <img src="https://images4.alphacoders.com/134/1341610.png" class="d-block w-100 c-img"
                        alt="Slide 3">
                    <div class="carousel-caption top-0 mt-4">
                        <p class="text-uppercase fs-3 mt-5">Disney ...</p>
                        <p class="display-1 fw-bolder text-capitalize">Somos inclusivos</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <button onclick="logout()">Cerrar Sesión</button>
    </div> -->
    <!-- <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
        crossorigin="anonymous"></script> -->
    <script src="assets/js/script.js"></script>
</body>

</html>