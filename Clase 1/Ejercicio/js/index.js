document.getElementById('toggleTheme').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('dark-mode');
    if (formContainer.classList.contains('dark-mode')) {
        this.textContent = 'Modo Diurno';
    } else {
        this.textContent = 'Modo Nocturno';
    }
});