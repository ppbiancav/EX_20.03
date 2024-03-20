const leia = require("readline-sync");

let Salario 
let Abono

Salario = leia.questionFloat("\nDigite um valor do tipo Float: ", {limitMessage: 'Digite um numero float'});
console.log("O valor float digitado foi: " + Salario);

Abono = leia.questionFloat("\nDigite um valor do tipo Float: ", {limitMessage: 'Digite um numero float'});
console.log("O valor float digitado foi: " + Abono);

console.log("O valor float digitado foi: " + (Salario + Abono));
