// Factory desafio
/*
 *    const prod1 ={
 *      nome: '...',
 *
 *      preco: '...' 
 *  }
 *
 *  const prod2 = {
 *       nome: '...',
 *
 *      preco: '...' 
 *   }
 */

// Factory veio para resolver esse tipo de problema

function criarProduto(nome, preco, quantidade) {
    return {
        nome,
        preco,
        desconto: 0.1,
        quantidade

    }

}

console.log(criarProduto('Notebook', 2199.49, 1))
console.log(criarProduto('iPad', 1199.59, 4))