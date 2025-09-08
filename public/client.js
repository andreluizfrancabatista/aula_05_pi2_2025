// Conectar ao servidor via Socket.IO
const socket = io();
const img = document.getElementById("escudo");

// Quando receber um objeto "escudo", atualizar a imagem
socket.on("escudo", (data) => {
  console.log("Escudo recebido:", data);
  img.src = data.url;
});
