/*
02 - Imagine que você está indo ao supermercado e precisa fazer algumas operações matemáticas. Escreva um programa que defina duas variáveis numéricas representando o valor total das suas compras e o valor que você tem disponível para gastar. Em seguida, realize as operações de soma, subtração, multiplicação, divisão entre elas e exiba o resultado de cada operação no console. 
*/

let compras = parseFloat(prompt("Digite o valor total das suas compras: "));
let saldo = parseFloat(prompt("Digite o seu saldo: "));
let menu;
let i = true;

do {
    menu = parseInt(prompt("Escolha uma operação:\n\n[1] Soma\n[2] Subtração\n[3] Multiplicação\n[4] Divisão\n[5] Sair"));
    let resultado;
    let escolha;

    switch(menu) {
        case 1:
            resultado = `${compras} + ${saldo} = ${compras + saldo}`;
            escolha = "SOMA";
            break;
        case 2:
            resultado = `${compras} - ${saldo} = ${compras - saldo}`;
            escolha = "SUBTRAÇÃO";
            break;
        case 3:
            resultado = `${compras} x ${saldo} = ${compras * saldo}`;
            escolha = "MULTIPLICAÇÃO";
            break;
        case 4:
            resultado = `${compras} : ${saldo} = ${compras / saldo}`;
            escolha = "DIVISÃO";
            break;
        case 5:
            alert("Finalizando o programa...");
            i = false;
            escolha = false;
            break;
        default:
            alert("Opção inválida! Digite novamente...");
            escolha = false;
            break;
    }

    if(escolha != false) {
        alert(`Você escolheu ${escolha}!\n\nValor das suas compras: ${compras}\nSeu saldo: ${saldo}\n\n${resultado}`);
    }
} while(i);
