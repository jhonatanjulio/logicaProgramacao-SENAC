/*
04 - Imagine que você é um professor e precisa calcular a média final das notas de um aluno e informar a sua situação (aprovado, recuperação ou reprovado). Escreva um programa que solicite ao usuário que informe o nome do aluno e as 4 notas utilizando a função prompt. Em seguida, calcule a média final e armazene o resultado na variável mediaFinal. Utilize uma estrutura condicional para verificar a situação do aluno e exiba uma mensagem de alerta contendo o nome do aluno, a média final em pontos e a sua situação. 
*/

let nome = prompt(`Calculadora de média!\n\nDigite o nome do aluno: `).toUpperCase();
let nota;
let soma = 0;
let situacaoAluno;

for(let i = 1; i <= 4; i++) {
    nota = parseFloat(prompt(`Calculadora de média!\nMédia do aluno: ${nome}\n\nDigite sua ${i}º nota:`));
    soma += nota;
}

let mediaFinal = (soma / 4).toFixed(1);
if(mediaFinal > 6) {
    situacaoAluno = `O aluno está APROVADO!`;
} else if(mediaFinal > 4) {
    situacaoAluno = `O aluno ficou de RECUPERAÇÃO!`;
} else {
    situacaoAluno = `O aluno está REPROVADO!`
}

alert(`Aluno: ${nome}\nMédia final: ${mediaFinal}\n\n${situacaoAluno}`)
