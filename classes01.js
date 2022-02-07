class Lancamento {
   constructor(nome = 'Genérico', valor = 0){
       this.nome = nome
       this.valor = valor
   } 

}

class CicloFinanceiro {
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l =>this.lancamentos.push(l))

   }

   sumario (){
       let valorConsolidado = 0
       this.lancamentos.forEach(l=>{
           valorConsolidado +=l.valor
       })
       return valorConsolidado
   }
}

const salario = new Lancamento('Salario',4500)
const contaDeluz = new Lancamento('Luz',-200)
const contas = new CicloFinanceiro(6,2018)
contas.addLancamentos(salario,contaDeluz)
console.log(contas.sumario())
  
    