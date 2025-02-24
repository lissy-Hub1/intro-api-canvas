let canvas = document.getElementById("canvas");  // Obtener el elemento canvas
let ctx = canvas.getContext("2d");  // Obtener el contexto de dibujo 2D

// Crear un degradado lineal desde la coordenada (0, 0) hasta la coordenada (canvas.width, 0)
let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);  

// Agregar los colores en el degradado con valores hexadecimales
gradient.addColorStop(0, "#f3b7e6");  // Rosa (magenta) en hexadecimal (#FF00FF)

gradient.addColorStop(1, "#c9d7f5");  // Azul en hexadecimal (#0000FF)

// Establecer el degradado como el color de relleno
ctx.fillStyle = gradient;  

// Dibujar un rectángulo con el degradado como relleno
ctx.fillRect(50, 50, 300, 150);  // Dibujar el rectángulo en la posición (50, 50) con un tamaño de 300x150
