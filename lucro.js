const lucro = (precoCompra,precoVenda) => precoCompra-precoVenda
 
 
 

let mercadoria = {
     
nomeProduto:'Celular',
     
marca:'Apple',
     
precoCompra:'R$1520',
     
precoVenda: 'R$900'


}
 
 





console.log(`A mercadoria ${mercadoria.nomeProduto} teve lucro de R$:${lucro(1520,900)}` )