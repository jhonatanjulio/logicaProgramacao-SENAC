// // Ex01: Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C
// let a = parseFloat(prompt("Insira o valor de A: "));
// let b = parseFloat(prompt("Insira o valor de B: "));
// let c = parseFloat(prompt("Insira o valor de C: "));

// function maiorQueC(a, b, c) {
//     if ((a + b) < c) {
//         return "A soma de A + B é menor que C!";
//     }
//     return "A soma de A + B NÃO é menor que C!";
// }

// console.log(maiorQueC());

// // Ex02: Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso o sexo seja "F" e estado civil "CASADA", solicitar o tempo de casada (anos).

// let nome = prompt("Digite seu nome: ");
// let sexo = prompt("Digite seu sexo: ").toLowerCase();
// let estado = prompt("Digite seu estado civil: ").toLowerCase();

// function estadoCivil(nome, sexo, estado) {
//     if (sexo[0] === 'f' && estado === 'casada') {
//         let tempoDeCasada = parseInt(prompt("Quanto tempo você está casada?"));
//         return `${nome} do sexo feminino, está casada a ${tempoDeCasada} anos!`
//     }
//     return `Bem vindo ${nome}.`
// }

// // Ex03: Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.
// let num = parseInt(prompt("Digite um número inteiro: "));
// const imparPar = num => {
//     if (num % 2 === 0) {
//         return `O número ${num} é par!`
//     }
//     return `O número ${num} é impar!`
// }

// console.log(imparPar(num));

// Ex04: Faça um algoritmo que recebe o nome de um time e indique qual a sua posição na tabela do brasileirão. Considerar os 7 primeiros times.

// const brasileirao = {
//     "botafogo": 1,
//     "flamengo": 2,
//     "grêmio": 3,
//     "são paulo": 4,
//     "fluminense": 5,
//     "palmeiras": 6,
//     "bragantino": 7
// }

// let qualTime = prompt("Digite o nome do time para saber sua posição: ");
// const posTime = time => `O ${time} está na posição ${brasileirao[time.toLowerCase()]}`;

// console.log(posTime(qualTime));

// Ex05: Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.
// Código | Condição de Pagamento
//   1    | À vista em dinheiro ou cheque, recebe 10% de desconto
//   2    | À vista no cartão de crédito, recebe 15% de desconto
//   3    | Em duas vezes, preço normal de etiqueta sem juros
//   4    | Em três vezes para mais, preço normal de etiqueta mais juros de 10%

// const preco = parseFloat(prompt("Digite o preço de etiqueta do produto: "));
// const formaDePagamento = () => parseInt(prompt(`Escolha a forma de pagamento: \n
// [1] À vista em dinheiro ou cheque\n
// [2] À vista no cartão de crédito\n
// [3] Parcelar
// [4] Sair`));

// let loopGlobal = true;
// while (loopGlobal) {
//     switch(formaDePagamento()) {
//         case 1:
//             const descontoDinheiroCartao = 0.1 * preco
//             alert(`À vista em dinheiro ou cheque (10% de desconto):\n\n
//             Você receberá R$${descontoDinheiroCartao} de desconto!\n
//             Preço final: R$${preco - descontoDinheiroCartao}.`);
//             break;
//         case 2:
//             const descontoCredito = 0.15 * preco
//             alert(`À vista em dinheiro ou cheque (15% de desconto):\n\n
//             Você receberá R$${descontoCredito} de desconto!\n
//             Preço final: R$${preco - descontoCredito}.`);
//             break;
//         case 3:
//             let loopParcela = true;
//             const parcela = () => parseInt(prompt(`Parcelar em quantas vezes?:
//             [1] Duas vezes (Preço de Etiqueta sem Juros)\n
//             [2] Três vezes (Preço de Etiqueta mais 10% de Juros)`))
//             while (loopParcela) {
//                 switch(parcela()) {
//                     case 1:
//                         alert(`Duas vezes (Preço de Etiqueta sem Juros):\n\nPreço final: R$${preco}.`);
//                         loopParcela = false;
//                         break;
//                     case 2:
//                         const juros = 0.1 * preco
//                         alert(`Três vezes (Preço de Etiqueta com 10% de Juros):\n\n
//                         Você receberá R$${juros} de juros!\n
//                         Preço final: R$${preco + juros}.`);
//                         loopParcela = false;
//                         break;
//                     default:
//                         alert("Opção inválida!");
//                         break;
//                 }
//             }
//             break;
//         case 4:
//             alert("Saindo...");
//             loopGlobal = false;
//             break;
//         default:
//             alert("Opção inválida!");
//             break;
//     }
// }

// Ex06: Escrever um algoritmo que gera e escreve os números ímpares entre 100 e 200.
// for (let i = 101; i < 200; i += 2) {
//     console.log(i);
// }

// Ex07: Escrever um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três e que se encontram no conjunto dos números de 1 até 500.
let soma = 0;
for (let i = 0; i < 500; i += 3) {
    soma += i;
}

console.log(soma);