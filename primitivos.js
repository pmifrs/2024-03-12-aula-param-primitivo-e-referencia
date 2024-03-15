// tipos: primitivos, escalares, referenciados (objetos)
var x = 12 // primitivo (number, int, double, ...)
// primitivo é um valor em bits na memória
// operações primitivas (operador)
console.log(x + 10)
console.log(x)
console.log(typeof(x))
console.log("tads".toUpperCase())

var y = new Number(10)
console.log(y)
console.log(typeof(y))
console.log(y.toString(2))

// objetos são referenciados
// primitivos guardam o valor puro (raw value)
// wrap unwrap (js, acontece automaticamente)
// boxing
// boxing unboxing

var z = x + y // x primitivo e y objeto
console.log(z)
console.log(typeof(z))

var r = new Number(new Number(2) + new Number(5))
console.log(typeof(r))