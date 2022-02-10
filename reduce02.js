const alunos= [
    {nome:'Jorge', nota:9.2,bolsista:true},
    {nome:'Maria', nota:7.2,bolsista:false},
    {nome:'Pedro', nota:5,bolsista:true},
    {nome:'Ana', nota:10,bolsista:false}
]

//Desafio 1:Todos os alunos são bolsista?
const todosBolsistas = (resultado , bolsista) =>resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsistas))

//Desafio 2 : algum aluno é bolsista?
const algumBolsista = (resultado,bolsista)=> resultado || bolsista
console.log(alunos.map(a=>a.bolsista).reduce(algumBolsista))

