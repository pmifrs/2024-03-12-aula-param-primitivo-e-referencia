// valores dos parâmetros sempre são por cópia
function mult(a, b) {
  a = a * b
  console.log(a)
  return a
}

// funções também vão para a stack (pilha2)

var x = 2 // primitivo, escalar ("comparável")
var y = 5 // primitivo, escalar
console.log(x > y)
console.log(mult(x, y))
console.log(x)
console.log(y)