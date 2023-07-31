/*
05 - Imagine que você é um vendedor e precisa calcular o valor final da compra de um cliente levando em consideração um desconto. Escreva um programa que solicite ao usuário que informe o nome do cliente, o valor total da compra e a porcentagem de desconto utilizando a função prompt. Em seguida, calcule o valor final da compra com o desconto aplicado e exiba uma mensagem de alerta contendo o nome do cliente e o valor final da compra. 
*/

let nomeCliente = prompt(`Digite o nome do cliente: `).toUpperCase();
let valCompra = parseFloat(prompt(`Digite o valor total da compra: `)).toFixed(2);
let porcentagem = parseInt(prompt(`Digite a porcentagem de desconto (apenas números): `));

let desconto = ((porcentagem / 100) * valCompra).toFixed(2);
alert(desconto);
alert(`Cliente: ${nomeCliente}\nValor total da compra: ${valCompra}\nDesconto aplicado: ${porcentagem}%\n\nValor final: ${(valCompra - desconto).toFixed(2)}`);