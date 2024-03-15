
// console.log(teste(1, 2, 3))

// function-signature (assinatura função)
// declaração: function, nome: somam, parâmetros: a e b
function soma(a, b) { // parâmetros são opcional
  if (a == undefined || b == undefined) {
    // exceção
    throw 'é necessário definir a e b com números válidos'
  }
  var res = a + b
  return res // retorno é opcional
}

console.log(soma(2, 5))
console.log(soma())

// tipagem dinâmica (não estática)
// tipagem fraca (forte)
console.log(5 * '4')
var x = 1
console.log(x)
console.log(typeof(x))
x = 'teste'
console.log(typeof(x))
var y
console.log(y)
var z = null
console.log(z)
// não-valor, ausência de valor
var nome = ""
console.log(nome)
var r = NaN
