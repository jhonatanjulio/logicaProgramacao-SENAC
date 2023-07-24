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

// const maiorNum = () => {
//     let maior = 0;
//     for(let i = 1; i != 6; i++) {
//         let num = parseInt(prompt(`Digite o ${i}º número:`));
//         if(i === 0 || num >= maior) {
//             maior = num;
//         }
//     }
//     return maior;
// }

// alert(`O maior número entres os que você escreveu é ${maiorNum()}`);

/*
* Exercício 1: Faça um programa que leia 5 números e mostre a soma e a média deles.
*/

// let i = 1;
// let soma = 0;
// while(i <= 5) {
//     soma += parseFloat(prompt(`Digite o ${i}º número:`));
//     i++;
// }
// console.log(`A soma dos números que você digitou é: ${soma}\nA média dos números que você digitou é: ${(soma / i).toFixed(2)}`);

/*
* Exercício 2: Faça um algoritmo que pergunte ao usuário uma operação e um número e depois exiba sua respectiva tabuada.
*/

const calculadora = () => {
    let loop = true;
    while(loop) {
        const operacao = parseInt(prompt(`Que operação você deseja realizar?\n\n[1] Adição\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n[5] Sair do programa`));
        let escolha;
        let entrada;

        switch(operacao) {
            case "+":
            case 1:
                escolha = "ADIÇÃO";
                break;
            case "-":
            case 2:
                escolha = "SUBTRAÇÃO";
                break;
            case "*":
            case 3:
                escolha = "MULTIPLICAÇÃO";
                break;
            case "/":
            case 4: 
                escolha = "DIVISÃO";
                break;
        }
        
        if(!(operacao < 1 || operacao > 4)) {
            entrada = parseFloat(prompt(`Você escolheu ${escolha}!\nDigite um número:`));
        }

        switch(operacao) {
            case '+':
            case 1:
                let outputAdicao = "";
                for(let i = 0; i <= 10; i++) {
                    outputAdicao += `${entrada} + ${i} = ${entrada + i}\n`;
                }
                alert(`Tabuada de SOMA do ${entrada}\n\n${outputAdicao}`);
                break;
            case "-":
            case 2:
                let outputSubtracao = "";
                for(let i = 0; i <= 10; i++) {
                    outputSubtracao += `${entrada} - ${i} = ${entrada - i}\n`;
                }
                alert(`Tabuada de SUBTRAÇÃO do ${entrada}\n\n${outputSubtracao}`);
                break;
            case "*":
            case 3:
                let outputMult = "";
                for(let i = 0; i <= 10; i++) {
                    outputMult += `${entrada} x ${i} = ${entrada * i}\n`;
                }
                alert(`Tabuada de MULTIPLICAÇÃO do ${entrada}\n\n${outputMult}`);
                break;
            case "/":
            case 4:
                let outputDiv = "";
                for(let i = 0; i <= 10; i++) {
                    if(!(i === 0)) {
                        outputDiv += `${entrada} / ${i} = ${entrada / i}\n`;
                    }
                }
                alert(`Tabuada de DIVISÃO do ${entrada}\n\n${outputDiv}`);
                break;
            case 5:
                alert(`Finalizando...`);
                loop = false;
                break;
            default:
                alert(`Opção inválida! Digite novamente.`);
                break;
        }
    }
}

calculadora();

/*
* Crie uma lista com 5 itens;
* Alterar o terceiro e quinto item;
* Adicionar um sexto item;
* 
* Criar uma outra lista com dois itens;
* 
* Unir ambas as listas
*
*/

// let lista = [1, 2, 3, true, false];
// console.log('primeira lista', lista);
// lista[2] = 'tinha tres';
// console.log('segunda lista',lista);
// lista[4] = 'tinha cinco';
// console.log('terceira lista', lista);
// lista.push('sexto item');
// console.log('quarta lista', lista);

// let novaLista = ['gato', 'cachorro', 5.5];
// console.log('primeira nova lista', novaLista);
// let listaUnida = novaLista.concat(lista);
// console.log('lista Unida', listaUnida);
