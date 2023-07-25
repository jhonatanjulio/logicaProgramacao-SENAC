/*
Escreva um programa em JavaScript que declare uma variável "idade" com o valor 15. Em seguida, verifique se a idade é maior ou igual a 18. Se a idade for maior ou igual a 18, o programa deve imprimir no console a mensagem "Pode entrar!". Caso contrário, o programa não deve imprimir nada.

Para implementar a verificação de idade, utilize uma estrutura condicional (if statement). O programa deve seguir a seguinte estrutura:

Declarar a variável "idade" com o valor 15.
Verificar se a idade é maior ou igual a 18 utilizando uma estrutura condicional (if statement).
Se a idade for maior ou igual a 18, imprimir no console a mensagem "Pode entrar!".
Caso contrário, não imprimir nada.
*/

function ex01() {
    let idade = 15;
    if(idade >= 18) {console.log("Pode entrar!")};
}
// ex01();

/* 
02 -  Escreva um programa em JavaScript que declare uma constante "nome" com o valor "Ana".
Em seguida, utilize uma estrutura condicional if para verificar se o valor da constante "nome" é igual a "Ana". Caso seja, imprima no console a mensagem "Olá Ana, tudo bem?" utilizando o recurso de template literals para interpolar a variável "nome" na mensagem.
*/

function ex02() {
    const nome = "Ana";
    if(nome === "Ana") {console.log(`Olá ${nome}, tudo bem?`)};    
}
// ex02();

/*  
03 - Escreva um programa em JavaScript que declare uma constante "num" com o valor 18.
Em seguida, utilize a função Math.pow() para calcular e imprimir no console o valor de 2 elevado ao quadrado (2²), 3 elevado ao quadrado (3²) e "num" elevado ao quadrado ("num"²).
*/

function ex03() {
    const num = 18;
    console.log(Math.pow(2, 2));
    console.log(Math.pow(3, 2));
    console.log(Math.pow(num, 2));
}
// ex03();

/* 04 - Imagine que alguém está dirigindo um carro em uma estrada, cujo limite de velocidade é de 80 km/h. Se essa pessoa estiver dirigindo a 55 km/h, não há problema e ela não receberá uma multa por excesso de velocidade. No entanto, se ela estiver dirigindo a uma velocidade maior que 80 km/h, ela será multada.

O programa em JavaScript simula essa situação, verificando se a velocidade do veículo é maior que 80 km/h e imprimindo a mensagem "Levou multa" caso seja, ou "Não levou multa" caso contrário. Isso pode ser útil para os motoristas se conscientizarem sobre a importância de respeitar os limites de velocidade e evitar multas e acidentes.
*/

function ex04() {
    let velocidadeAtual = parseFloat(prompt("Digite a velocidade atual do veículo: "));
    velocidadeAtual > 80 ? console.log("Levou multa") : console.log("Não levou multa");
}
// ex04();

/* 05 - Escreva um programa em JavaScript que declare uma variável "idade" com o valor 23 e uma variável "cnh" com o valor false.

Em seguida, utilize uma estrutura condicional if-else-if para verificar se a idade é maior ou igual a 18 e se a pessoa possui CNH. Caso ambas as condições sejam verdadeiras, imprima no console a mensagem "Sim, pode dirigir".
Caso a idade seja maior ou igual a 18 mas a pessoa não possui CNH, imprima no console a mensagem "Não pode dirigir, mas pode fazer a CNH".
Caso contrário, ou seja, se a pessoa tiver menos de 18 anos, imprima no console a mensagem "Não pode dirigir".

Certifique-se de que a estrutura condicional esteja completa, com o uso das chaves {} para delimitar o bloco de código a ser executado em caso de cada condição.
*/

function ex05() {
    let idade = parseInt(prompt("Digite sua idade: "));
    let cnh = prompt("Você possui CNH? [S/N]:").toLowerCase()[0];

    if (idade >= 18 && cnh === 's') {
        console.log("Sim, pode dirigir.");
    } else if (idade >= 18 && cnh === 'n') {
        console.log("Você não pode dirigir, porém pode tirar sua CNH!");
    } else {
        console.log("Você não pode dirigir.");
    }
}  
// ex05();

/* 
06 - Escreva um programa em JavaScript que utilize a estrutura de repetição while para imprimir no console os números de 0 a 10.
Certifique-se de utilizar uma variável de controle "i" inicializada em 0 e incrementada em 1 a cada iteração, verificando se o valor de "i" é menor ou igual a 10 para evitar um loop infinito. Utilize a função console.log() para imprimir os valores de "i" em cada iteração do loop.
*/
 
function ex06() {
    let i = 0;
    while (i <= 10) {
        console.log(i);
        i++;
    }
}
// ex06();

// 07 - Crie um programa em Javascript que conte de 100 até 50 em ordem decrescente e imprima cada número no console. Utilize um laço de repetição for para realizar essa tarefa.

function ex07() {
    for(let i = 100; i >= 50; i--) {
        console.log(i);
    }
}
// ex07();

/* 
08 - Crie um programa em Javascript que conte de 0 até 50 e imprima no console se cada número é par ou ímpar. Utilize um laço de repetição for para percorrer cada número de 0 a 50 e utilize uma estrutura condicional if...else para verificar se o número é par ou ímpar. Caso o número seja par, o programa deve imprimir a mensagem "O número X é par", onde X é o número em questão. Caso o número seja ímpar, o programa deve imprimir a mensagem "O número X é ímpar". 
*/

function ex08() {
    for (let i = 0; i <= 50; i++) {
        if(i % 2 === 0) {
            console.log(`O número ${i} é PAR!`);
        } else {
            console.log(`O número ${i} é ÍMPAR!`);
        }
    }
}
// ex08();

/* 
09 - Crie um programa em Javascript que verifique se um número é primo ou não. O número a ser verificado deve ser armazenado em uma variável chamada num. O programa deve contar quantas divisões exatas o número tem utilizando um laço de repetição for que percorre todos os números de 1 até o próprio número. Caso o número seja divisível por um desses números, aumenta-se o valor da variável divisoes. Ao final do laço, utiliza-se uma estrutura condicional if...else para verificar se o número é primo ou não. Se o número tiver exatamente duas divisões exatas (1 e ele mesmo), o programa deve imprimir a mensagem "O número X é primo", onde X é o número em questão. Caso contrário, o programa deve imprimir a mensagem "O número X não é primo".
*/

function ex09() {
    let num = parseInt(prompt("Digite um número"));
    let qtdeDivisoes = 0;

    for (let i = 1; i <= num; i++) {
        if(num % i === 0) {
            qtdeDivisoes++;
        }
    }

    qtdeDivisoes === 2 ? console.log(`O número ${num} é primo!`) : console.log(`O número ${num} NÃO É primo!`);
}
ex09();