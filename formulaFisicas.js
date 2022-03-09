function trabalho(massa,velocidade) {
 
  
 return ((massa)*(velocidade*velocidade))/2   

 
} 



function velocidade(acelaracao,tempo){
 
  
 return (acelaracao*tempo)


}



function massa(valorMassa){
  
  
return (valorMassa*1000)


}



console.log(`Valor da força trabalho é:${trabalho(80,65)}`)

console.log(`Valor da Velocidade é:${velocidade(60,6)}`)

console.log(`Valor da massa é:${massa(90)}`)
