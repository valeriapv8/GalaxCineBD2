document.addEventListener('DOMContentLoaded', () => {
  fetch('assets/json/Data.json')
    .then(response => response.json())
    .then(data => {
      mostrarPeliculas(data);
    })
    .catch(error => console.error('Error al cargar los datos:', error));



  // Metodo de búsqueda
  document.getElementById('buscar').addEventListener('input', event => {
    const searchTerm = event.target.value.toLowerCase();
    filtrarPeliculas(pelicula => pelicula.titulo.toLowerCase().includes(searchTerm));
  });

  // Metodo para listar todas las peliculas
  document.getElementById('calc_all').addEventListener('click', () => {
    filtrarPeliculas(pelicula => pelicula.id);
  });

  // Metodo para las peliculas de estreno arriba del anio 2000
  document.getElementById('calc_anio').addEventListener('click', () => {
    filtrarPeliculas(pelicula => pelicula.anio_lanzamiento >= 2000);
  });

  // Metodo para las pleiculas de duracion arriba de 1 hora y media
  document.getElementById('calc_min').addEventListener('click', () => {
    filtrarPeliculas(pelicula => pelicula.duracion >= 90);
  });

  // Metodo para las peliculas que han sido un exito, es decir su ratio es arriba de 2
  document.getElementById('calc_rexito').addEventListener('click', () => {
    filtrarPeliculas(pelicula => (pelicula.recaudacion / pelicula.presupuesto) >= 2);
  });

  // Metodo para las peliculas que han sido un fracaso, es decir su ratio es arriba de 2
  document.getElementById('calc_rmedio').addEventListener('click', () => {
    filtrarPeliculas(pelicula => pelicula.recaudacion / pelicula.presupuesto >= 1 &&
      pelicula.recaudacion / pelicula.presupuesto < 2);
  });

  // Metodo para las peliculas que han sido un completo fracaso, es decir su ratio es menor a 1,
  // es decir que ni si quiera han recupera lo que invirtieron
  document.getElementById('calc_rfracaso').addEventListener('click', () => {
    filtrarPeliculas(pelicula => (pelicula.recaudacion / pelicula.presupuesto) < 1);
  });

  // Funcion general para el filtrado de la peliculas
  function filtrarPeliculas(condicion) {
    fetch('assets/json/Data.json')
      .then(response => response.json())
      .then(data => {
        const peliculasFiltradas = data.filter(pelicula =>
          condicion(pelicula)
        );
        console.log(peliculasFiltradas);
        mostrarPeliculas(peliculasFiltradas);
      })
      .catch(error => console.error('Error al cargar los datos:', error));
  }

});

// Función para mostrar las peliculas
function mostrarPeliculas(peliculas) {
  const container = document.getElementById('characters-container');
  container.innerHTML = '';

  peliculas.forEach(pelicula => {
    const card = document.createElement('div');
    card.className = 'col-md-3';
    card.innerHTML = `
    <html lang="en">
    <body>
    <h5 class="card-header">${pelicula.titulo}</h5>
    <div class="wrapper">
      <div class="card">
        <img src="${pelicula.imagen}" alt="${pelicula.titulo}" >
        <div class="info">
          <p style="margin: 0.2em;"><strong>Estreno:</strong> ${pelicula.fecha_estreno}</p>
          <p style="margin: 0.2em;"><strong>Genero:</strong> ${pelicula.genero}</p>
          <p style="margin: 0.2em;"><strong>Duración:</strong> ${pelicula.duracion}</p>
          <p style="margin: 0.2em;"><strong>Presupuesto:</strong> ${pelicula.presupuesto}</p>
          <p style="margin: 0.2em;"><strong>Recaudación:</strong> ${pelicula.recaudacion}</p>
          <p style="margin: 0.2em;"><strong>Sinopsis:</strong> ${pelicula.sinopsis}</p>
          <button class="favorite-btn" onclick="agregarAFavoritos(${pelicula.id})">
            ❤️ Agregar a Favoritos
          </button>

        </div>

      </div>
    </div>
    </body>
    </html>
    `;
    container.appendChild(card);
  });
}

function agregarAFavoritos(peliculaId) {
  const usuarioLogueado = localStorage.getItem('usuarioLogueado');
  if (!usuarioLogueado) {
    Swal.fire({
      icon: 'warning',
      title: 'No has iniciado sesión',
      text: 'Debes estar logueado para agregar a favoritos.',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3085d6',
    });
    return;
  }

  let favoritos = JSON.parse(localStorage.getItem(`favoritos_${usuarioLogueado}`)) || [];

  if (!favoritos.includes(peliculaId)) {
    favoritos.push(peliculaId);
    localStorage.setItem(`favoritos_${usuarioLogueado}`, JSON.stringify(favoritos));

    Swal.fire({
      icon: 'success',
      title: 'Agregado a favoritos',
      text: 'La película ha sido agregada a tus favoritos.',
      confirmButtonText: '¡Genial!',
      confirmButtonColor: '#28a745',
    });
  } else {
    Swal.fire({
      icon: 'info',
      title: 'Ya está en favoritos',
      text: 'Esta película ya está en tus favoritos.',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#007bff',
    });
  }
}



document.getElementById('verFavoritos').addEventListener('click', () => {
  console.log(localStorage.getItem(`favoritos_${localStorage.getItem('usuarioLogueado')}`));

  const usuarioLogueado = localStorage.getItem('usuarioLogueado');
  if (!usuarioLogueado) {
    Swal.fire({
      icon: 'warning',
      title: 'No has iniciado sesión',
      text: 'Debes estar logueado para ver tus favoritos.',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3085d6',
    });
    return;
  }

  let favoritos = JSON.parse(localStorage.getItem(`favoritos_${usuarioLogueado}`)) || [];
  if (favoritos.length === 0) {
    Swal.fire({
      icon: 'info',
      title: 'No hay peliculas',
      text: 'No tienes películas en favoritos.',
      confirmButtonText: 'Entendido',
      confirmButtonColor: '#3085d6',
    });
    return;
  }

  fetch('assets/json/Data.json')
    .then(response => response.json())
    .then(data => {
      const peliculasFavoritas = data.filter(pelicula => favoritos.includes(pelicula.id));
      mostrarPeliculas(peliculasFavoritas); // Reutiliza la misma función para mostrar las películas
    })
    .catch(error => console.error('Error al cargar los datos:', error));
});


