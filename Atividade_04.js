const leia = require("readline-sync");

let n1, n2, n3, n4, calculo

n1 = leia.questionFloat("Digite o numero 1:\t", {limitMessage: 'Digite um numero float'});
n2 = leia.questionFloat("Digite o numero 2:\t", {limitMessage: 'Digite um numero float'});
n3 = leia.questionFloat("Digite o numero 3:\t", {limitMessage: 'Digite um numero float'});
n4 = leia.questionFloat("Digite o numero 4:\t", {limitMessage: 'Digite um numero float'});

calculo = (n1 * n2) - (n3 * n4);

console.log("O valor float digitado foi: ", calculo);

n1 = leia.questionFloat("Digite o numero 1:\t", {limitMessage: 'Digite um numero float'});
n2 = leia.questionFloat("Digite o numero 2:\t", {limitMessage: 'Digite um numero float'});
n3 = leia.questionFloat("Digite o numero -3:\t", {limitMessage: 'Digite um numero float'});
n4 = leia.questionFloat("Digite o numero 4:\t", {limitMessage: 'Digite um numero float'});

calculo = (n1 * n2) - (-n3 * n4);

console.log("O valor float digitado foi: ", calculo);