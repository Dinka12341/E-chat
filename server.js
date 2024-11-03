// server/server.js
const WebSocket = require('ws');
const express = require('express');
const app = express();
const PORT = 3003;

// Создаем WebSocket-сервер
const socket = new WebSocket("wss://e-chat-pg90.onrender.com");

wss.on('connection', (ws) => {
    console.log('Клиент подключен');

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.type === 'register') {
            // Присваиваем пользователю уникальный ID и отправляем его обратно
            const user = { id: Date.now(), name: data.name, avatar: data.avatar || '' };
            ws.send(JSON.stringify({ type: 'register', user }));
            console.log(`Пользователь зарегистрирован: ${user.name}`);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
