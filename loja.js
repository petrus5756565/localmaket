document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');

  if (!loginForm) {
    return;
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    const username = usernameInput?.value.trim();
    const password = passwordInput?.value.trim();

    // Valida campos vazios
    if (!username || !password) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Valida tamanho da senha (trocado 'break' por 'return')
    if (password.length < 4) {
      alert('A senha deve ter no mínimo 4 caracteres.');
      passwordInput.focus();
      return; 
    }

    // Grava a sessão e redireciona o usuário
    localStorage.setItem('usuarioLogado', username);
    window.location.href = 'dashboard.html';
  });
});
