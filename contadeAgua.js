
function contadeAgua(conta,consumo){
  
  return((conta + 500)+(0.025*consumo));
   
 
}



console.log(`O valor da conta a ser pago é:R$${contadeAgua(100,50)}`)