# Atividade Avaliativa
# 🏆 Quiz dos escudos de times de futebol

## 📌 Descrição

Nesta atividade você irá transformar a aplicação base (Node.js + Express.js + Socket.io) em um **jogo multiplayer em tempo real**.

O servidor já está configurado para:

* Servir arquivos estáticos com **Express.js**.
* Usar **Socket.io** para comunicação em tempo real.
* Ler o arquivo `escudos.json`, que contém informações dos escudos (campos: `url`, `nome`, `alternativas`, `liga`).
* A cada **N segundos**, enviar um escudo aleatório para todos os clientes conectados.

O cliente já exibe o escudo atual.

Agora, sua missão é **gamificar** a aplicação! 🎮

---

## 🎯 Regras do Jogo

1. Os jogadores devem digitar o **nome correto do time** em um campo de texto e enviar clicando em um botão.
2. Se o jogador acertar o nome (comparando com as chaves `"nome"` ou `"alternativas"` do objeto enviado pelo servidor), ele ganha **+1 ponto**.
3. O ranking de pontos deve ser exibido para todos os jogadores em tempo real.
4. Vence quem tiver mais pontos ao final da partida (ou simplesmente acumular mais pontos).

---

## 📂 Estrutura sugerida

```
server.js
escudos.json
public/
 ├─ index.html
 ├─ styles.css
 └─ client.js
```

---

## ✅ O que deve ser feito

* Criar um **input\:text** e um **botão** no cliente (`index.html`).
* Ao enviar a resposta, verificar se está correta.
* Se o jogador acertar, atualizar a pontuação dele no servidor.
* Manter uma **lista de ranking** compartilhada entre todos os clientes conectados.
* Exibir o ranking atualizado em tempo real na tela.

---

## 🚀 Entregáveis

* **Link do GitHub** com a aplicação completa (código funcionando).
* O projeto deve rodar com os comandos:

  ```bash
  npm install
  npm run dev   # ou npm start
  ```
* README explicando como jogar.

---

## 💡 Dicas

* Use `socket.emit` para enviar a resposta do jogador ao servidor.
* No servidor, valide a resposta comparando com `"nome"` e `"alternativas"`.
* Use `io.emit` para atualizar o ranking de todos os clientes.
* Lembre-se de normalizar as strings (maiúsculas/minúsculas, acentos).

---

## 📝 Critérios de Avaliação

* Funcionamento correto do jogo (acerto → ponto).
* Ranking atualizado em tempo real.
* Organização do código.
* Criatividade na interface.

---

👉 **Entrega final:** Link do repositório no GitHub com a aplicação funcionando.

---