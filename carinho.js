// Cart handling (carinho.js)
$(document).ready(function () {
     const carrinhoRaw = localStorage.getItem('carrinho');
     let carinho = [];
     try {
          if (carrinhoRaw) carinho = JSON.parse(carrinhoRaw);
     } catch (err) {
          console.error('Failed to parse carrinho from localStorage:', err);
     }
     console.log('carinho', carinho);
     // TODO: render `carinho` into the page
});



