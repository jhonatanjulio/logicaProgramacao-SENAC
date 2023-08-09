function imprimirNoConsole() {
    console.log("Hello, World!");
}

function imprimirUmNumero(num) {
    console.log('O número é:', num);
}

// Desafio 01 - Escreva uma função que recebe um input do nome do usuário como parâmetro e imprima no console "Seu nome é [nome]"

function seuNome(nome) {
    console.log(`Seu nome é ${nome}`);
}

// seuNome(prompt(`Digite seu nome: `));

// Desafio 02 - Escreva uma função que imprima no console o dobro de um número a partir do que foi definido na chamada da função. Ao final deve imprimir "O nome digitado foi: [nome do user]"

function dobro(num) {
    return num * 2;
}
// console.log(dobro(5));

// Desafio 03 - Escreva uma função que imprima no console o resultado da potencia de um número elevado por ele mesmo, a partir do que foi definido na chamada da função.

function potenciaPorSiMesmo(num) {
    return num ** num;
}
console.log(potenciaPorSiMesmo(2));
Math.random();

// Desafio 04: Escreva uma função que multiplique 3 números.

function multiplicar(num1,num2,num3) {
    return num1 * num2 * num3;
}
console.log(multiplicar(5, 2, 2));