const produto = {
    nome: 'Caneta Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}
const novo_produto = clone(produto)
novo_produto.nome = 'Caneta Bic Azul'

console.log(produto, novo_produto)
