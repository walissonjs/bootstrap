const switchTema = document.getElementById('switchTema');
const raizHtml = document.documentElement; // Seleciona a tag <html>
const labelTema = document.getElementById('labelTema');

// Escuta a mudança de estado do switch
switchTema.addEventListener('change', () => {
    if (switchTema.checked) {
        // Se estiver marcado, ativa o modo Claro
        raizHtml.setAttribute('data-bs-theme', 'light');
        labelTema.textContent = 'Modo Claro';
    } else {
        // Se desmarcado, volta para o modo Dark
        raizHtml.setAttribute('data-bs-theme', 'dark');
        labelTema.textContent = 'Modo Escuro';
    }
});
