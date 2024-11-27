document.addEventListener('DOMContentLoaded', function() {
    // console.log('DOM fully loaded and parsed');

    // // Verificar si el usuario está logueado
    // const loggedIn = localStorage.getItem('loggedIn');
    // console.log('loggedIn:', loggedIn);
    // if (loggedIn === 'true') {
    //     showMainContent();
    // } else {
    //     showLoginSection();
    // }

});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('registerUsername').value;
    var password = document.getElementById('registerPassword').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        document.getElementById('registerMessage').textContent = 'Registro exitoso!';
        document.getElementById('registerMessage').style.color = 'green';
    } else {
        document.getElementById('registerMessage').textContent = 'Por favor, completa todos los campos.';
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    var storedUsername = localStorage.getItem('username');
    var storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        console.log("showmaincontentts")
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('usuarioLogueado', username);
        showMainContent();
    } else {
        alert('Nombre de usuario o contraseña incorrectos.');
    }
});

function showRegister() {
    document.getElementById('registerFormContainer').style.display = 'block';
    document.getElementById('loginFormContainer').style.display = 'none';
}

function showLoginSection() {
    console.log('Showing login section');
    const loginSection = document.getElementById('loginSection');
    //const mainContent = document.getElementById('mainContent');
    console.log('loginSection:', loginSection);
    //console.log('mainContent:', mainContent);

    loginSection.style.display = 'block';
    // mainContent.style.display = 'none';
}

function showMainContent() {
    const loggedIn = localStorage.getItem('loggedIn');
    if (loggedIn === 'true' && !isOnMainPage()) { 
        window.location.href = 'ContenidoPrincipal.html';
    }
}

function showLogin() {
    document.getElementById('registerFormContainer').style.display = 'none';
    document.getElementById('loginFormContainer').style.display = 'block';
}

function logout() {
    // alert("logout")
    localStorage.removeItem('loggedIn');
    window.location.href = 'index.html';
    // showLoginSection();
}
function ShowCards() {
    window.location.href = 'peliculas.html';
}
function isOnMainPage() {
    // Verifica si la página actual es 'ContenidoPrincipal.html'
    return window.location.pathname.endsWith('ContenidoPrincipal.html');
}
