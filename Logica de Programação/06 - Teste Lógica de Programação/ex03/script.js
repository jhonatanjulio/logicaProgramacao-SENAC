/*
03- Imagine que você é um professor e precisa calcular a média final das notas de um aluno. Escreva um programa que solicite ao usuário que informe as 4 notas do aluno utilizando a função prompt. Em seguida, calcule a média final e exiba uma mensagem de alerta contendo o valor da média final. 
*/

let nota;
let soma = 0;

for(let i = 1; i <= 4; i++) {
    nota = parseFloat(prompt(`Calculadora de média!\n\nDigite a ${i}º nota:`));
    soma += nota;
}

alert(`A média final do aluno é igual a ${(soma / 4).toFixed(1)}`)