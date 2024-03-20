const leia = require("readline-sync");

let SalarioBruto
let AdicionalNoturono
let HorasExtras
let Descontos 

SalarioBruto = leia.questionFloat("Digite o numero 1:\t", {limitMessage: 'Digite um numero float'});
AdicionalNoturono= leia.questionFloat("Digite o numero 2:\t", {limitMessage: 'Digite um numero float'});
HorasExtras= leia.questionFloat("Digite o numero 3:\t", {limitMessage: 'Digite um numero float'});
Descontos= leia.questionFloat("Digite o numero 4:\t", {limitMessage: 'Digite um numero float'});

SalarioLiquido = (SalarioBruto + AdicionalNoturono+ (HorasExtras * 5) - Descontos);

console.log("O valor float digitado foi: ", SalarioLiquido);





