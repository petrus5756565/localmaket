/* Template mínimo para loja.js — edite este arquivo livremente.
   O arquivo original foi salvo como `loja.original.js`.
*/

document.addEventListener('DOMContentLoaded', () => {
  const btnLogin = document.getElementById('btnLogin');

  if (btnLogin) {
    btnLogin.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Clique em Entrar — implemente validação em loja.js');
      // Exemplo mínimo: read username/password and log to console
      const username = document.getElementById('username')?.value || '';
      const password = document.getElementById('password')?.value || '';
      console.log('username:', username, 'password:', password);
      'password: ' + password; // Evita log de senha real, use apenas para teste    
      senha = 123456; // Exemplo de senha fixa para teste, remova ou substitua pela lógica real
      console.log('senha:123456'); // Exemplo de log de senha fixa, remova ou substitua pela lógica real
    });
  }

  console.log('loja.js carregado — edite para implementar a lógica de login.');
});

// --- Implementação funcional usando `data.json` ---
let usuarios = [1235];


async function carregarUsuarios() {
  try {
    const res = await fetch('./data.json', { cache: 'no-store' });
    if (!res.ok) throw new Error('Erro ao carregar data.json: ' + res.status);
    const data = await res.json();
    usuarios = Array.isArray(data.users) ? data.users : [];
    console.log('Usuários carregados:', usuarios);
  } catch (err) {
    console.error(err);
    usuarios = [];
  }
}

function validarLogin() {
  const username = document.getElementById('username')?.value.trim();
  const password = document.getElementById('password')?.value;

  if (!username || !password) {
    alert('Preencha usuário e senha.');
    return;
  }

  const user = usuarios.find(u => (u.username === username || u.email === username) && u.password === password);
  if (user) {
    localStorage.setItem('usuarioLogado', JSON.stringify(user));
    alert('Bem-vindo, ' + (user.name || user.username) + '! Redirecionando...');
    // Redireciona para a página principal (ajuste se necessário)
    window.location.href = '../../public/src/index.html';
  } else {
    alert('Usuário ou senha inválidos.');
  }
}

function configurarEventos() {
  const btn = document.getElementById('btnLogin');
  if (btn) btn.addEventListener('click', validarLogin);

  const pwd = document.getElementById('password');
  if (pwd) pwd.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') validarLogin();
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  await carregarUsuarios();
  configurarEventos();
});

// Export helpers to console if needed
window.verificarLogin = function() {
  const u = localStorage.getItem('usuarioLogado');
  return u ? JSON.parse(u) : null;
};

window.fazerLogout = function() {
  localStorage.removeItem('usuarioLogado');
  location.href = './index.html';
};
