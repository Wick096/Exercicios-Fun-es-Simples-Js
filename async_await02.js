
function gerarNumerosEntre(min,max,numerosProibidos){
    if(min > max)[max,min] = [min,max]
    return new Promise(resolve,reject =>{
        setTimeout(function(){
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random()* fator)+ min
            if(numerosProibidos.includes(aleatorio)){
                reject('Números repetido')
            }else{
                resolve(aleatorio)
            }
            
        },tempo)
    })
}

function gerarMegaSena(qtdNumeros){
    try{
    const numeros = []
    for(let _ of Array(qtdNumeros).fill()){
        await gerarNumerosEntre(1,60,numeros)
    }
    return numeros
}catch(e){
    throw "Que chato!!"
  }   
 
}

gerarNumerosEntreEntre(1,5[1,2,4])
    .then(console.log)
    .catch(console.log)

gerarMegaSena(2)
    .then(console.log)
    .catch(console.log)    