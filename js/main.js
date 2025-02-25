document.addEventListener("DOMContentLoaded", () => {
    const shapes = [
        { name: "Círculo", draw: drawCircle },
        { name: "Cuadro", draw: drawSquare },
        { name: "Triángulo", draw: drawTriangle },
        { name: "Carita Feliz", draw: drawHappyFace },
        { name: "Triangulos", draw: drawTriengle2 },
        { name: "Corazón", draw: drawHeart },
        { name: "Pac-Man", draw: drawPacman },
        { name: "Marco", draw: drawFrame },
        { name: "Circulo-cuadro", draw: drawCircleSquare },
        
        { name: "Dialogo", draw: drawDialog },
       
        { name: "Luna", draw: drawMoon },
        
        { name: "Nube", draw: drawCloud },
        
        
    ];

    const container = document.getElementById("canvasGrid");

    shapes.forEach((shape, index) => {
        const card = document.createElement("div");
        card.className = "card shadow border border-light rounded";

        const title = document.createElement("h5");
        title.innerText = shape.name;

        const canvas = document.createElement("canvas");
        canvas.width = 150;
        canvas.height = 150;
        canvas.id = `canvas-${index}`;

        card.appendChild(title);
        card.appendChild(canvas);
        container.appendChild(card);

        shape.draw(canvas);
    });
});

function drawCircle(canvas) {
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 3; j++) {
          ctx.beginPath();
          const x = 25 + j * 50; // Coordenada x
          const y = 25 + i * 50; // Coordenada y
          const radius = 20; // Radio del Arco
          const startAngle = 0; // Punto inicial del Círculo
          const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
          const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario
  
          ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  
          if (i > 1) {
            ctx.fill();
          } else {
            ctx.stroke();
          }
          ctx.fillStyle = "blue";
        }
    }
    
}

function drawTriangle(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(30, 80); 
    ctx.lineTo(150, 150);  
    ctx.lineTo(150, 20);  

    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.stroke();
}

function drawPacman(canvas) {
    const ctx = canvas.getContext("2d");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");
    
        roundedRect(ctx, 12, 12, 150, 150, 15);
        roundedRect(ctx, 19, 19, 150, 150, 9);
        roundedRect(ctx, 53, 53, 49, 33, 10);
        roundedRect(ctx, 53, 119, 49, 16, 6);
        roundedRect(ctx, 135, 53, 49, 33, 10);
        roundedRect(ctx, 135, 119, 25, 49, 10);
    
        ctx.beginPath();
        ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
        ctx.lineTo(31, 37);
        ctx.fill();
    
        for (let i = 0; i < 8; i++) {
          ctx.fillRect(51 + i * 16, 35, 4, 4);
        }
    
        for (i = 0; i < 6; i++) {
          ctx.fillRect(115, 51 + i * 16, 4, 4);
        }
    
        for (i = 0; i < 8; i++) {
          ctx.fillRect(51 + i * 16, 99, 4, 4);
        }
    
        ctx.beginPath();
        ctx.moveTo(83, 116);
        ctx.lineTo(83, 102);
        ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
        ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
        ctx.lineTo(111, 116);
        ctx.lineTo(106.333, 111.333);
        ctx.lineTo(101.666, 116);
        ctx.lineTo(97, 111.333);
        ctx.lineTo(92.333, 116);
        ctx.lineTo(87.666, 111.333);
        ctx.lineTo(83, 116);
        ctx.fill();
    
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.moveTo(91, 96);
        ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
        ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
        ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
        ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
        ctx.moveTo(103, 96);
        ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
        ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
        ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
        ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
        ctx.fill();
    
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
    
        ctx.beginPath();
        ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
        ctx.fill();
    }
   
}
function roundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
}
function drawCircleSquare(canvas) {
    const ctx = canvas.getContext("2d");
    const rectangle = new Path2D();
    rectangle.rect(10, 10, 50, 50);

    const circle = new Path2D();
    circle.arc(100, 35, 25, 0, 2 * Math.PI);

    ctx.stroke(rectangle);
    ctx.fill(circle);
    ctx.fillStyle = "purple";
    ctx.fill();
    ctx.stroke();
}

function drawFrame(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillRect(25, 25, 100, 100);
    ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
    ctx.fillStyle = "orange";
    
}

function drawDialog(canvas) {
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(75, 25);
    ctx.quadraticCurveTo(25, 25, 25, 62.5);
    ctx.quadraticCurveTo(25, 100, 50, 100);
    ctx.quadraticCurveTo(50, 120, 30, 125);
    ctx.quadraticCurveTo(60, 120, 65, 100);
    ctx.quadraticCurveTo(125, 100, 125, 62.5);
    ctx.quadraticCurveTo(125, 25, 75, 25);
    ctx.stroke();
}


function drawSquare(canvas) {
    const ctx = canvas.getContext("2d");
    let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0); 
    gradient.addColorStop(0, "#f3b7e6");
    gradient.addColorStop(1, "#c9d7f5");
    
    ctx.fillStyle = gradient;  
    ctx.fillRect(25, 25, 100, 100);
   
    
}

function drawHeart(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(75, 40);
    ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
    ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
    ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
    ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
    ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
    ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
    ctx.fillStyle = "pink";
    ctx.fill();
}



function drawMoon(canvas) {
    const ctx = canvas.getContext("2d");

    // Limpiar el canvas antes de dibujar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Crear degradado radial (del amarillo brillante al dorado oscuro)
    const gradient = ctx.createRadialGradient(80, 75, 10, 80, 75, 50);
    gradient.addColorStop(0, "#FFFF99"); // Amarillo claro
    gradient.addColorStop(1, "#FFD700"); // Dorado

    // Dibujar el círculo principal de la luna
    ctx.beginPath();
    ctx.arc(80, 75, 50, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Superponer un círculo más pequeño para crear el efecto de media luna
    ctx.beginPath();
    ctx.arc(100, 75, 40, 0, Math.PI * 2);
    ctx.fillStyle = "white"; // Color de fondo para "recortar" la luna
    ctx.fill();
}

function drawCloud(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "lightgray";
    ctx.beginPath();
    ctx.arc(50, 80, 30, 0, Math.PI * 2);
    ctx.arc(80, 80, 40, 0, Math.PI * 2);
    ctx.arc(110, 80, 30, 0, Math.PI * 2);
    ctx.fill();
}

function drawTriengle2(canvas) {
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
  
      // Triángulo relleno
      ctx.beginPath();
      ctx.moveTo(25, 25);
      ctx.lineTo(105, 25);
      ctx.lineTo(25, 105);
      ctx.fill();
  
      // Triángulo contorneado
      ctx.beginPath();
      ctx.moveTo(125, 125);
      ctx.lineTo(125, 45);
      ctx.lineTo(45, 125);
      ctx.closePath();
      ctx.stroke();
    }
}

function drawHappyFace(canvas) {
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2); // cara
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();

    // ojos
    ctx.beginPath();
    ctx.arc(55, 60, 8, 0, Math.PI * 2); // ojo izquierdo
    ctx.arc(95, 60, 8, 0, Math.PI * 2); // ojo derecho
    ctx.fillStyle = "black";
    ctx.fill();

    // boca
    ctx.beginPath();
    ctx.arc(75, 75, 30, 0, Math.PI, false); // sonrisa
    ctx.stroke();
}
