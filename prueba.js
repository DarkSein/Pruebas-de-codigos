  // JavaScript
  let carrito = [];
  const productos = [
      { id: 1, nombre: "Zapatilla", precio: 100.000, descripcion: "Buena zapatilla.",},
      { id: 2, nombre: "Collar Artesanal", precio: 79.99, descripcion: "Elegante collar hecho con piedras naturales y plata. Cada pieza es única y refleja la habilidad de nuestros artesanos." },
      { id: 3, nombre: "Tapiz Tejido", precio: 129.99, descripcion: "Colorido tapiz tejido a mano con lana natural. Una obra de arte que añadirá calidez y estilo a tus paredes." },
      { id: 4, nombre: "Prueba", precio: 129.99, descripcion: "Colorido tapiz tejido a mano con lana natural. Una obra de arte que añadirá calidez y estilo a tus paredes." }
  ];

  function agregarAlCarro(id) {
      const producto = productos.find(p => p.id === id);
      if (producto) {
          carrito.push(producto);
          actualizarCarro();
      }
  }

  function actualizarCarro() {
      const cantidadElement = document.getElementById('cantidadCarro');
      cantidadElement.textContent = carrito.length;
  }

  function mostrarDetalles(id) {
      const producto = productos.find(p => p.id === id);
      if (producto) {
          document.getElementById('modalTitulo').textContent = producto.nombre;
          document.getElementById('modalImagen').src = `zapatilla.jpg`
          document.getElementById('modalImagen').alt = producto.nombre;
          document.getElementById('modalDescripcion').textContent = producto.descripcion;
          document.getElementById('modalPrecio').textContent = `Precio: $${producto.precio}`;
          document.getElementById('modal').style.display = 'block';
      }
  }

  // Cerrar el modal
  const modal = document.getElementById('modal');
  const span = document.getElementsByClassName('close')[0];
  span.onclick = function() {
      modal.style.display = 'none';
  }
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }