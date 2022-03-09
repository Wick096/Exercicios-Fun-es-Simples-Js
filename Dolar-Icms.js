function converteEmDolar(valorMoeda,cotacaoDolar){
    

return valorMoeda*cotacaoDolar


}



function icms(conv,pLucro,im){
    

return ((conv*im/100)+(conv*pLucro/100))+ conv


}


console.log(converteEmDolar(200,5.06))

console.log(icms(10,20,30))
