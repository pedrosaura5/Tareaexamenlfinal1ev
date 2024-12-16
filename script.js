// Datos de ejemplo para las cards
const products = [
    {
      name: "Lujosa mansion",
      price: "$500.000",
      image: "images/New-Final-Final-10.jpeg",
    },
    {
      name: "Casa con vistas al mar",
      price: "$150.000",
      image: "images/images.jpg",
    },
    {
      name: "Casa en primera linea",
      price: "$100.000",
      image: "images/imge.jpg",
    },
  ];
  
  // Generar las cards desde el template
  const cardContainer = document.querySelector(".card-container");
  const template = document.getElementById("product-template");
  
  products.forEach((product) => {
    const card = template.content.cloneNode(true);
    card.querySelector(".product-image").src = product.image;
    card.querySelector(".product-name").textContent = product.name;
    card.querySelector(".product-price").textContent = product.price;
    card.querySelector(".product-action").addEventListener("click", () => {
      alert(`${product.name} agregado al carrito`);
    });
    cardContainer.appendChild(card);
  });
  
  // Mostrar el aviso de cookies como ventana emergente en cada actualización
  const cookieDialog = document.getElementById("cookie-dialog");
  const acceptCookies = document.getElementById("accept-cookies");
  const declineCookies = document.getElementById("decline-cookies");
  
  window.addEventListener("load", () => {
    cookieDialog.showModal();
  });
  
  acceptCookies.addEventListener("click", () => {
    alert("Has aceptado las cookies.");
    cookieDialog.close();
  });
  
  declineCookies.addEventListener("click", () => {
    alert("Has rechazado las cookies. Algunas funciones podrían no estar disponibles.");
    cookieDialog.close();
  });
  
  // Mostrar u ocultar contraseña
  const togglePassword = document.getElementById("toggle-password");
  const passwordField = document.getElementById("password");
  
  togglePassword.addEventListener("click", () => {
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
  });
  
  // P5.js Canvas - Barra de puntuación interactiva
  let score = 0;
  
  function setup() {
    const canvas = createCanvas(400, 100);
    canvas.parent("canvas-container");
    drawScoreBar();
  }
  
  function drawScoreBar() {
    background(220);
    fill("#007BFF");
    rect(10, 40, map(score, 0, 100, 0, 380), 20); // Escala la puntuación en píxeles
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(`Puntuación: ${score}`, width / 2, 70);
  }
  
  function mousePressed() {
    if (mouseX > 10 && mouseX < 390 && mouseY > 40 && mouseY < 60) {
      score = constrain(score + 10, 0, 100); // Incrementa puntuación hasta un máximo de 100
      drawScoreBar();
    }
  }
  
  function keyPressed() {
    if (key === 'r' || key === 'R') {
      score = 0; // Reinicia puntuación al presionar "R"
      drawScoreBar();
    }
  }
  
  // Gráficas con Chart.js
  const ctx = document.getElementById('chart').getContext('2d');
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Enero', 'Febrero', 'Marzo', 'Abril'],
      datasets: [
        {
          label: 'Ventas',
          data: [10, 20, 30, 40],
          backgroundColor: ['#007BFF', '#28A745', '#FFC107', '#DC3545'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  });
  