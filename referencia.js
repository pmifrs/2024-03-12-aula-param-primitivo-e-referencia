// passar um objeto como parâmetro
// objetos são tipos referenciados (em vez de primitivo)
// a função tem acesso à referência, logo
// acesso ao objeto original.
function ordenar(vet) { // vet = [3, 2] => [2, 3]
  if (vet.length != 2) throw 'deve conter 2 elementos'
  // lógica:
  if (vet[0] > vet[1]) {
    var x = vet[0]
    vet[0] = vet[1] // in-place
    vet[1] = x // 
  }
}
var teste = [3, 2]
ordenar(teste)
console.log(teste)

// console.log(ordenar([]));
// console.log(ordenar([1]));

var s = "aaaa"
console.log(typeof(s))
console.log(typeof(new String(s)))

var v = [4, 2] // primitivo ou referenciado (objeto)?
console.log(typeof(v))
var x = 5
