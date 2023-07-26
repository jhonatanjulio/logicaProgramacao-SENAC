/**
 * 1. Escreva um programa em JavaScript que solicite dois números ao usuário e exiba o maior número no console. Utilize uma estrutura de decisão if para comparar os números e exibir o maior número no console.
 * 
*/

function maiorNumero() {
    let num1 = Number(prompt("Digite o primeiro número:"));
    let num2 = Number(prompt("Digite o segundo número:"));
    let maiorNum;
    
    if (num1 >= num2) {
        maiorNum = num1;
    } else {
        maiorNum = num2
    }

    console.log(`O maior número é o ${maiorNum}`);
}
// maiorNumero();

/*
 * 2. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é par ou ímpar. Utilize uma estrutura de decisão if para verificar se o número é par ou ímpar, e exiba a mensagem correspondente no console.
 *
*/
function parOuImpar() {
    let num = parseInt(prompt("Digite um número: "));

    if(num % 2 === 0){
        console.log(`O número ${num} é PAR!`);
    } else {
        console.log(`O número ${num} é ÍMPAR!`);
    }
}
// parOuImpar();

/*
 * 3. Escreva um programa em JavaScript que solicite um número ao usuário e exiba os números pares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é par, e exibir os números pares encontrados no console.
*/

function ehPar() {
    let num = parseInt(prompt('Digite um número: '));

    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            console.log(`O número ${i} é PAR!`);
        }
    }
}
//ehPar();

/* 
 * 4. Escreva um programa em JavaScript que solicite um número ao usuário e exiba a tabuada desse número de 1 a 10. Utilize uma estrutura de repetição while ou for para calcular e exibir a tabuada do número informado pelo usuário. O resultado deve ser exibido no console.
 */

function tabuadaDoNum() {
    let num = parseInt(prompt("Digite um número: "));
    let i = 1;
    console.log(`Tabuda do ${num}:`);
    while (i <= 10) {
        console.log(`${num} x ${i} = ${num * i}`);
        i++;
    }
}
//tabuadaDoNum();

/* 5. Escreva um programa em JavaScript que solicite um número ao usuário e verifique se ele é positivo, negativo ou igual a zero. Utilize uma estrutura de decisão if, else if e else para verificar o valor do número e exibir a mensagem de alerta correspondente no console.
*/ 

function positivoNuloOuNegativo() {
    let num = parseInt(prompt('Digite um número: '));

    if(num > 0) {
        console.log(`${num} é positivo!`);
    } else if (num < 0) {
        console.log(`${num} é negativo!`);
    } else {
        console.log("O número que você digitou é 0 (zero)!");
    }
}
// positivoNuloOuNegativo();

/* 6. Escreva um programa em JavaScript que solicite uma letra ao usuário e verifique se ela é uma vogal ou consoante. Utilize uma estrutura de decisão if para verificar se a letra informada é uma vogal ou consoante, e exiba a mensagem correspondente no console.
*/ 

function vogalOuConsoante() {
    let letra = prompt("Digite um letra: ").toLowerCase()[0];
    
    if((letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u')) {
        console.log(`${letra} é uma VOGAL!`);
    } else if (!isNaN(letra)) {
        console.log(`${letra} NÃO É uma letra!`);
    } else {
        console.log(`${letra} é uma CONSOANTE!`);
    }
}
// vogalOuConsoante();

/* 7. Escreva um programa em JavaScript que solicite uma nota ao usuário e verifique se ela é válida. Utilize uma estrutura de decisão if para verificar se a nota informada está dentro do intervalo de 0 a 10, e exiba a mensagem correspondente no console.
*/

function ehValido() {
    let nota = parseFloat(prompt("Digite uma nota: "));

    if(nota >= 0 && nota <= 10) {
        console.log(`${nota} está entre 0 e 10!`);
    } else {
        console.log(`${nota} NÃO está entre 0 e 10!`);
    }
}
// ehValido();

/* 
 * 8. Escreva um programa em JavaScript que exiba os números de 1 a 100 no console. Utilize uma estrutura de repetição while, do-while ou for para percorrer os números de 1 a 100 e exibir cada número no console.
*/ 
 
function umPraCem() {
    let i = 1;
    do{
        console.log(i);
        i++;
    } while (i <= 100);
}

//umPraCem();

/* 9. Escreva um programa em JavaScript que solicite uma operação matemática ao usuário (+, -, *, /) e dois números, e exiba o resultado da operação no console. Utilize uma estrutura de decisão switch para verificar qual operação matemática foi informada pelo usuário e realizar a operação correspondente. O resultado da operação deve ser exibido no console.
 */

function operacoesMath() {
    let entrada = prompt('Escolha uma operação:\n\n[+] Adição\n[-] Subtração\n[*] Multiplicação\n[/] Divisão');
    let num1 = Number(prompt('Digite o primeiro número: '));
    let num2 = Number(prompt('Digite o segundo número: '));
    let result;

    switch (entrada) {
        case '+':
            result = `${num1} + ${num2} = ${num1 + num2}`;
            entrada = 'ADIÇÃO';
            break;
        case '-':
            result = `${num1} - ${num2} = ${num1 - num2}`;
            entrada = 'SUBTRAÇÃO';
            break;
        case '*':
            result = `${num1} x ${num2} = ${num1 * num2}`;
            entrada = 'MULTIPLICAÇÃO';
            break;
        case '/':
            result = `${num1} : ${num2} = ${num1 / num2}`;
            entrada = 'DIVISÃO';
            break;
        default:
            result = 'invalido'
            break;
    }

    if (result === 'invalido') {
        console.log('Entrada inválida!');
    } else {
        console.log(`Você escolheu ${entrada}!\n\n${result}`);
    }
}
// operacoesMath();

 /* 10. Escreva um programa em JavaScript que solicite um número ao usuário e exiba todos os números ímpares entre 1 e o número informado. Utilize uma estrutura de repetição while ou for para verificar se cada número entre 1 e o número informado é ímpar, e exibir os números ímpares encontrados no console.
 */

 function ehImpar() {
    let num = parseInt(prompt('Digite um número: '))
    for (let i = 1; i <= num; i+= 2) {
        console.log(i)
    }
 }
 //ehImpar();