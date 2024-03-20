const leia = require("readline-sync");

let nota1, nota2, nota3, nota4, mediafinal

nota1 = leia.questionFloat("Digite o numero 1:\t", {limitMessage: 'Digite um numero float'});
nota2 = leia.questionFloat("Digite o numero 2:\t", {limitMessage: 'Digite um numero float'});
nota3 = leia.questionFloat("Digite o numero 3:\t", {limitMessage: 'Digite um numero float'});
nota4 = leia.questionFloat("Digite o numero 4:\t", {limitMessage: 'Digite um numero float'});

mediafinal = (nota1 + nota2 + nota3 + nota4) / 4

console.log("O valor float digitado foi: " + (mediafinal));


