// Importando módulos necessários
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const fs = require("fs");

// Criando app Express e servidor HTTP
const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Lendo o arquivo escudos.json (array de objetos com { url })
const escudos = JSON.parse(fs.readFileSync("data/escudos.json"));

// Servindo a pasta "public" (onde ficam os arquivos do cliente)
app.use(express.static("public"));

// Quando um cliente se conecta via socket
io.on("connection", (socket) => {
    console.log("Novo cliente conectado!");

    //Enviar um escudo inicial
    const aleatorio = escudos[Math.floor(Math.random() * escudos.length)];
    socket.emit("escudo", aleatorio);

    // Enviar um escudo aleatório a cada 5 segundos
    setInterval(() => {
        const aleatorio = escudos[Math.floor(Math.random() * escudos.length)];
        socket.emit("escudo", aleatorio);
    }, 5000);
});

// Iniciando servidor
server.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
