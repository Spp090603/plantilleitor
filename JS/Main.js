    document.getElementById('descargarBoton').addEventListener('click', function() {
      // URL del archivo .exe
      var url = 'https://drive.google.com/uc?id=1a2x1WpPA7d6OiFxLMEmvjhZS3KqGS04F&export=download';

      // Crear un elemento de enlace
      var enlace = document.createElement('a');

      // Establecer la URL del enlace
      enlace.href = url;

      // Ocultar el enlace y agregarlo al cuerpo del documento
      enlace.style.display = 'none';
      document.body.appendChild(enlace);

      // Simular un clic en el enlace para iniciar la descarga
      enlace.click();

      // Eliminar el enlace después de la descarga
      document.body.removeChild(enlace);
    });
