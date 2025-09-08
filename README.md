# Quiz Escudos em Tempo Real

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen)
![Express](https://img.shields.io/badge/express-4.18.2-green)
![Socket.IO](https://img.shields.io/badge/socket.io-4.7.2-black)

## Objetivo Pedagógico

Este projeto foi desenvolvido como material didático para demonstrar conceitos fundamentais de desenvolvimento web em tempo real usando **Node.js**, **Express.js** e **Socket.IO**. É um quiz interativo sobre escudos de times de futebol onde múltiplos jogadores competem simultaneamente em salas virtuais.

## Funcionalidades

- Sistema de salas (lobby) para múltiplos jogadores
- Quiz de 10 rodadas com escudos de futebol
- Pontuação em tempo real (primeiro a acertar ganha o ponto)
- Interface simples e intuitiva
- Sem banco de dados (dados em memória para fins didáticos)

## Estrutura do Projeto

```
quiz-escudos-realtime/
├── server.js              # Servidor Express + Socket.IO
├── package.json           # Dependências e scripts
├── data/
│   ├── escudos.json      # Dados dos escudos (não incluído - deve ser criado)
│   └── nomes_falsos.json # Nomes para alternativas incorretas
├── public/
│   ├── index.html        # Página do lobby
│   ├── room.html         # Página do jogo/sala
│   ├── css/
│   │   └── styles.css    # Estilos da aplicação
│   └── js/
│       └── client.js     # Lógica do cliente Socket.IO
├── README.md
├── LICENSE
└── .gitignore
```

## Como Executar Localmente

### Pré-requisitos
- Node.js versão 14 ou superior
- npm (incluído com Node.js)

### Passos

1. **Clone ou baixe o projeto**
   ```bash
   git clone <url-do-repositorio>
   cd quiz-escudos-realtime
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Crie o arquivo de dados** (obrigatório)
   - Crie o arquivo `data/escudos.json` com o formato:
   ```json
   [
     {
       "id": 1,
       "nome": "Flamengo",
       "pais": "Brasil",
       "liga": "Brasileirão",
       "url": "https://example.com/flamengo.png",
       "alternativas": []
     }
   ]
   ```

4. **Inicie o servidor**
   ```bash
   npm start
   ```

5. **Acesse a aplicação**
   - Abra o navegador e vá para `http://localhost:3000`

## Como Jogar

1. Escolha um nickname na página inicial
2. Crie uma nova sala ou entre em uma existente
3. Clique em "Estou Pronto" quando quiser iniciar
4. O jogo começa quando todos os jogadores estão prontos
5. Para cada escudo mostrado, clique na alternativa correta
6. O primeiro a acertar ganha 1 ponto naquela rodada
7. Após 10 rodadas, veja o ranking final

## Tópicos para Discussão em Aula

### Conceitos de Programação Web
- **Arquitetura Cliente-Servidor**: Como o navegador se comunica com o servidor
- **Protocolo HTTP vs WebSockets**: Diferenças entre requisições tradicionais e comunicação em tempo real
- **Eventos Assíncronos**: Como lidar com múltiplas ações simultâneas

### Socket.IO e Tempo Real
- **Rooms (Salas)**: Agrupamento de conexões para jogos isolados
- **Broadcasting**: Envio de mensagens para múltiplos clientes
- **Eventos Customizados**: Definição e tratamento de eventos específicos da aplicação

### Gerenciamento de Estado
- **Estado no Servidor**: Como manter dados de jogo em memória
- **Sincronização**: Manter todos os clientes com a mesma informação
- **Validação Server-Side**: Por que validar ações no servidor

### Concorrência e Race Conditions
- **Atomicidade**: Garantir que apenas o primeiro acerto conte
- **Controle de Submissões**: Evitar múltiplas respostas por rodada
- **Gerenciamento de Estado Compartilhado**: Como múltiplos usuários interagem com os mesmos dados

### Boas Práticas
- **Separação de Responsabilidades**: Cliente vs Servidor
- **Modularização**: Organização do código em arquivos separados
- **Tratamento de Erros**: Como lidar com desconexões e erros

## Comportamento do Jogo

**Progressão de Rodadas**: O servidor avança automaticamente para a próxima rodada quando **todos os jogadores enviaram suas respostas** OU quando **o primeiro acerto for registrado** (o que ocorrer primeiro). Esta abordagem mantém o jogo fluido sem necessidade de temporizadores.

## Limitações Intencionais (Para Fins Didáticos)

- Sem banco de dados (dados perdidos ao reiniciar)
- Sem autenticação de usuários
- Sem persistência de histórico de jogos
- Interface minimalista sem frameworks
- Sem temporizadores ou efeitos visuais

Essas limitações são propositais para manter o foco nos conceitos fundamentais de comunicação em tempo real e facilitar o entendimento do código.