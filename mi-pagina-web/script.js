// Datos de las imágenes para cada servicio
const serviceImages = {
    'estampado-textil': [
        {src: 'imagenes/estampado1.jpg', alt: 'Camisetas estampadas'},
        {src: 'imagenes/estampado2.jpg', alt: 'Sudaderas personalizadas'},
        {src: 'imagenes/estampado3.jpg', alt: 'Gorras estampadas'},
        {src: 'imagenes/estampado4.jpg', alt: 'Gorras estampadas'}
    ],
    'productos-promocionales': [
        {src: 'imagenes/promocionales1.jpg', alt: 'Tazas personalizadas'},
        {src: 'imagenes/promocionales2.jpg', alt: 'Termos con logo'},
        {src: 'imagenes/promocionales3.jpg', alt: 'Llaveros promocionales'},
         {src: 'imagenes/promocionales4.jpg', alt: 'Llaveros promocionales'}
    ],
    'diseno-personalizado': [
        {src: 'imagenes/diseno1.jpg', alt: 'Diseño de arte'},
        {src: 'imagenes/diseno2.jpg', alt: 'Proceso creativo'},
        {src: 'imagenes/diseno3.jpg', alt: 'Diseño vectorial'},
         {src: 'imagenes/diseno4.jpg', alt: 'Diseño vectorial'}
    ],
    'bordado-industrial': [
        {src: 'imagenes/bordado1.jpg', alt: 'Bordado en uniformes'},
        {src: 'imagenes/bordado2.jpg', alt: 'Detalle de bordado'},
        {src: 'imagenes/bordado3.jpg', alt: 'Bordado corporativo'}
    ]
};

// Títulos para cada modal
const serviceTitles = {
    'estampado-textil': 'Estampado Textil',
    'productos-promocionales': 'Productos Promocionales',
    'diseno-personalizado': 'Diseño Personalizado',
    'bordado-industrial': 'Bordado Industrial'
};

// Función para abrir el modal
function openModal(serviceId) {
    const modal = document.getElementById('imageModal');
    const gallery = document.getElementById('modal-gallery');
    const title = document.getElementById('modal-title');
    
    // Limpiar galería anterior
    gallery.innerHTML = '';
    
    // Establecer título
    title.textContent = serviceTitles[serviceId];
    
    // Agregar imágenes al modal
    serviceImages[serviceId].forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        gallery.appendChild(imgElement);
    });
    
    // Mostrar modal
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');
    if (event.target == modal) {
        closeModal();
    }
}