const carrinho = [
    '{"nome":"Borracha","preco":3.45}',
    '{"nome":"Caderno","preco":13.45}',
    '{"nome":"Kit Lápis","preco":43.45}',
    '{"nome":"Caneta","preco":7.45}'
    
]

//Retorne um Array apenas com os preços
const paraObjeto = json => JSON.parse(json)//Transformar as strings em objetos
const apenasPreco = produto => produto.preco//Recebe um objeto como entrada e retorna apenas os preços

const result = carrinho.map(paraObjeto).map(apenasPreco)
console.log(result)