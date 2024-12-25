document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    // Проверка локального хранилища на наличие сохранённых данных
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
        usernameInput.value = localStorage.getItem('username');
        passwordInput.value = localStorage.getItem('password');
    }

    form.addEventListener('submit', event => {
        event.preventDefault();

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Простая валидация пароля (не менее 6 символов)
        if (password.length < 6) {
            errorMessage.textContent = 'Пароль должен содержать минимум 6 символов';
            return;
        }

        // Сохранение данных в localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        // Очистка сообщения об ошибке
        errorMessage.textContent = '';

        alert(`Вы вошли как ${username}`);
    });
});