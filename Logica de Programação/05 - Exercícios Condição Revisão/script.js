/*
* Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 
* 8 caso seja ímpar, imprimir o resultado desta operação
*/ 

// let num = 2;
// console.log(num % 2 === 0 ? num += 5 : num += 8);

/*
* Encontrar o dobro de um número caso ele seja positivo e o seu triplo
* caso seja negativo, imprimindo o resultado.
*/

// let num = 20;
// console.log(num >= 0 ? num *= 2 : num *= 3);

/*
* Crie um algoritmo que leia um nome e uma idade e exiba se essa
* pessoa pode ou não dirigir.
*/

// const nome = 'Jhonatan'
// const idade = 18;

// if (!(idade < 18)) {
//     console.log(`Olá, ${nome}! Você é maior de idade e já pode dirigir!`);
// } else {
//     console.log(`Olá, ${nome}! Você não é maior de idade e não pode dirigir!`);
// }

// Exercicio 1: Faça um algoritmo que receba um numero e gere a sua respectiva tabuada. A saída deve ser conforme o exemplo abaixo:
/*
*   Tabuada de N:
*   N x 1 = Y
*   N x 2 = Y
*   N x 3 = Y
*   N x 4 = Y
*   N x 5 = Y
*   ...
*   N x 10 = Y
*/

// const tabuadaDeNFor = n => {
//     console.log(`\nTabuada de ${n}`);
//     for(let i = 1; i <= 10; i++) {
//         console.log(`${n}x${i} = ${n*i}`);
//     }
// }

// tabuadaDeNFor(9);

// const tabuadaDeNWhile = n => {
//     let i = 1
//     console.log(`\nTabuada de ${n}`);
//     while (i <= 10) {
//         console.log(`${n}x${i} = ${n*i}`);
//         i++;
//     }
// }

// tabuadaDeNWhile(9);

/*
* Exercício 2: Faça um programa que leia 5 números e informe o maior número.
*/ 

const maiorNum = () => {
    let maior = 0;
    for(let i = 1; i != 6; i++) {
        let num = parseInt(prompt(`Digite o ${i}º número:`));
        if(num === 0 || num >= maior) {
            maior = num;
        }
    }
    return maior;
}

alert(`O maior número entres os que você escreveu é ${maiorNum()}`);

