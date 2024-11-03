// client/src/App.js
import React, { useState } from 'react';
import Register from './pages/Register';

function App() {
    const [user, setUser] = useState(null);  // Состояние для хранения данных пользователя

    const handleRegister = (name, avatar) => {
        const ws = new WebSocket('ws://localhost:3001');  // Подключение к WebSocket серверу
        ws.onopen = () => {
            // Отправка данных пользователя на сервер для регистрации
            ws.send(JSON.stringify({ type: 'register', name, avatar }));
        };
        ws.onmessage = (message) => {
            const data = JSON.parse(message.data);
            if (data.type === 'register') {
                setUser(data.user);  // Сохранение зарегистрированного пользователя
            }
        };
    };

    return (
        <div className="App">
            {user ? (
                <p>Добро пожаловать, {user.name}!</p>
            ) : (
                <Register onRegister={handleRegister} />
            )}
        </div>
    );
}

export default App;
