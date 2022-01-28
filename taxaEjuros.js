function jurosSimples (taxa,tempo,capInicial){
    return taxa * tempo * capInicial;
}

function jurosCompostos (taxa,tempo,capInicial,juros){
    m=capInicial*(1+taxa)*Math.pow(tempo)

    return j=m*capInicial
}

console.log(jurosSimples(2,10,1000))
console.log(jurosCompostos(2,10,1000,5))