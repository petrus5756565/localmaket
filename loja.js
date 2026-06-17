// Aguarda o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // Executa a função quando o usuário envia o formulário
    loginForm.addEventListener('submit', (event) => {
        // Impede a página de recarregar imediatamente
        event.preventDefault();

        // Captura os valores dos campos
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // 1. Validação de campos vazios
        if (!username || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        // 2. Validação do tamanho mínimo da senha (4 caracteres)
        if (password.length < 4) {
            alert('A senha deve ter no mínimo 4 caracteres.');
            passwordInput.focus();
            return;
        }

        // 3. Sucesso (Simulação de login aceito)
        alert(`Login realizado com sucesso!\nBem-vindo, ${username}!`);
        
        // Aqui você pode redirecionar o usuário para outra página, ex:
        // window.location.href = 'home.html';
        // ... (mantenha o resto do código de validação igual)

// 3. Sucesso (Salva os dados e redireciona)
// Armazena o nome do usuário no navegador
localStorage.setItem('usuarioLogado', username);

// Redireciona para a página interna da loja
window.location.href = 'dashboard.html';
     <script>
        // Executa assim que a página carregar
        document.addEventListener('DOMContentLoaded', () => {
            // Busca o nome salvo no localStorage
            const usuario = localStorage.getItem('usuarioLogado');

            // Se não tiver nenhum usuário logado, expulsa de volta para o login
            if (!usuario) {
                window.location.href = 'login.html'; // mude para o nome do seu arquivo de login
                return;
            }

            // Exibe o nome na tela
            document.getElementById('nomeUsuario').textContent = usuario;

            // Configura o botão de Sair
            document.getElementById('btnSair').addEventListener('click', () => {
                localStorage.removeItem('usuarioLogado'); // apaga o dado
                window.location.href = 'login.html'; // volta pro login
            });
        });
    </script>


    });



});

