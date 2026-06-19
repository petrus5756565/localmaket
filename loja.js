document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (!loginForm) { return; }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput?.value?.trim() || ''; 
    const password = passwordInput?.value?.trim() || ''; 

    // Validações básicas
    if (!username || !password) { 
      alert('Por favor, preencha todos os campos para entrar na loja.');
      return;
    }

    if (password.length < 4) {
      alert('A senha deve ter no mínimo 4 caracteres.');
      passwordInput.focus();
      return;
    }

    // 
    // 
    // 
    
    // 
    localStorage.setItem('loja_nome_cliente', username);
    localStorage.setItem('loja_status_login', 'true');
    
    // 
    if (!localStorage.getItem('loja_carrinho')) {
      localStorage.setItem('loja_carrinho', JSON.stringify([]));
    }

    // 
    window.location.href = 'dashboard.html'; 

    document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (!loginForm) { return; }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput?.value?.trim() || ''; 
    const password = passwordInput?.value?.trim() || ''; 

    // Validações básicas
    if (!username || !password) { 
      alert('Por favor, preencha todos os campos para entrar na loja.');
      return;
    }

    if (password.length < 4) {
      alert('A senha deve ter no mínimo 4 caracteres.');
      passwordInput.focus();
      return;
    }

    //
    //
    // 
    
    //
    localStorage.setItem('loja_nome_cliente', username);
    localStorage.setItem('loja_status_login', 'true');
    
    // Cria um carrinho 
    if (!localStorage.getItem('loja_carrinho')) {
      localStorage.setItem('loja_carrinho', JSON.stringify([]));
    }

    // 
    window.location.href = 'dashboard.html'; 
  });
});
function removerDoCarrinho(id) {
    const index = carrinho.findIndex(item => item.id === id);

    if (index > -1) {
        carrinho[index].quantidade--;
        if (carrinho[index].quantidade === 0) {
            carrinho.splice(index, 1);
        }
    }

    atualizarCarrinho();
}


  });
});
