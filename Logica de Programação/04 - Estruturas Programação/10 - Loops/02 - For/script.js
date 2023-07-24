// Imprimir no console os números de 1 até 5

// let entrada = parseInt(prompt("Digite um número"));

// for (let i = 0; i <= entrada; i++) {
//     console.log(entrada - i);
// }

// Imprima os números de 1 a 10 no console
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
// }

// Imprima os números pares de 0 a 20
// for (let i = 0; i <= 20; i+=2){
//     console.log(i)
// }

// Imprima os números ímpares de 10 a 30 no console
// for (let i = 11; i <= 30; i+=2) {
//     console.log(i);
// }

// Imprima os números de 100 a 0, decrementando de 5 em 5, no console
// for (let i = 100; i >= 0; i-=5) {
//     console.log(i);
// }

// Imprima a tabuada de multiplicação do número 7, do 1 ao 10, no console
// let numero = 7;
// console.log(`Tabuada do ${numero}!`);
// for(let i = 1; i <= 10; i++) {
//     console.log(`${numero} x ${i} = ${numero * i}`);
// }

// Solicite ao usuário que digite um número no prompt e, em seguida, imprima os números pares de 0 até esse número no console.
// let numero = parseInt(prompt("Digite um número:"));
// for (let i = 0; i <= numero; i+=2)  {
//     console.log(i);
// }

// Solicite ao usuário que digite dois números e, em seguida, imprima os números entre esses números no console, em ordem crescente.
// let num1 = parseInt(prompt("Digite o primeiro número"));
// let num2 = parseInt(prompt("Digite o segundo número"));

// num1 <= num2 ? [num1, num2] = [num1, num2] : [num2, num1] = [num1, num2];

// for(let i = num1; i <= num2; i++) {
//     console.log(i);
// }

//Desenvolva um programa que solicite ao usuário que digite um número e, em seguida, imprima no console a soma dos números ímpares entre 1 e esse número.

let entrada = parseInt(prompt("Digite um número:"));
let soma = 0;

for(let i = 1; i <= entrada; i += 2) {
    console.log(i);
    soma += i;
}

console.log(`A soma dos números ímpares entre 1 e ${entrada} é: ${soma}`);