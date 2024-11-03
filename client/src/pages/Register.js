// client/src/pages/Register.js
import React, { useState } from 'react';
import './Register.css';

function Register({ onRegister }) {
    // Локальное состояние для имени и аватара
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');

    // Обработка отправки формы
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            alert("Пожалуйста, введите имя!");
            return;
        }
        onRegister(name, avatar);  // Передача данных в родительский компонент
    };

    return (
        <div className="register">
            <h2>Регистрация в E-Chat</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Введите ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Ссылка на аватар (необязательно)"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                />
                <button type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default Register;
