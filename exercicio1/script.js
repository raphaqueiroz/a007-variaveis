let nome = undefined //o tipo ainda não foi defnido.   
let idade = undefined  //o tipo ainda não foi definido

console.log(typeof nome)
console.log(typeof idade)


nome = prompt('Qual seu primeiro nome?')  //nova definição de <nome>, agora ele é uma string

idade = parseInt(prompt('Qual sua idade?')) //nova definição de <idade>, agora ele é um número pois a declaração pede o recebiento de um número.

alert(`Olá ${nome}, você tem ${idade} anos de idade.`)

console.log(typeof nome) // strig 
console.log(typeof idade)// number