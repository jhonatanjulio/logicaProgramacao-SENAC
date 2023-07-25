// let diaSemana = parseInt(prompt("Digite um número do dia da semana:"));

// switch(diaSemana){

//     case 1:
//         console.log("Segunda-Feira");
//         break;
//     case 2:
//         console.log("Terça-Feira");
//         break;
//     case 3:
//         console.log("Quarta-Feira");
//         break;
//     case 4:
//         console.log("Quinta-Feira");
//         break;
//     case 5:
//         console.log("Sexta-Feira");
//         break;
//     default:
//         console.log("Fim de Semana");
//         break;
// }

// Ex.02

// let nomeDaFruta = prompt();

// switch(nomeDaFruta) {
//     case "limão":
//     case "uva":
//     case "laranja":
//         console.log("Essa fruta é cítrica!");
//         break;
//     case "abacate":
//     case "manga":
//         console.log("Essa fruta é tropical!");
//         break;
//     default:
//         console.log("Não sei que tipo de fruta é essa!");
// }

// Crie um programa que solicite ao usuário que insira dois números e selecione uma operação (soma, subtração, multiplicação ou divisão). Use um switch para selecionar a operação apropriada com base na entrada do usuário e exiba o resultado no console

// let entrada = parseInt(prompt("Escolha uma operação: \n[1] Adição\n[2] Subtração\n[3] Multiplicação\n[4] Divisão"));

// let num1 = parseFloat(prompt("Digite um número:"));
// let num2 = parseFloat(prompt("Digite mais um número:"));

// let resultado;
// let escolha;

// switch(entrada){
//     case 1:
//         resultado = `${num1} + ${num2} = ${num1 + num2}`;
//         entrada = "ADIÇÃO"
//         break;
//     case 2:
//         resultado = `${num1} - ${num2} = ${num1 - num2}`;
//         entrada = "SUBTRAÇÃO"
//         break;
//     case 3:
//         resultado = `${num1} x ${num2} = ${num1 * num2}`;
//         entrada = "MULTIPLICAÇÃO"
//         break;
//     case 4:
//         resultado = `${num1} : ${num2} = ${num1 / num2}`;
//         entrada = "DIVISÃO"
//         break;
//     default:
//         alert("Opção inválida");
//         break;
// }
// alert(`Você escolheu ${entrada}!\n\n${resultado}`);

/**

 * Escreva um programa em JavaScript que solicite ao usuário que insira um número e verifique se ele é positivo, negativo ou zero. Se o número for maior que zero, o programa deve exibir "O número é positivo". Se o número for menor que zero, o programa deve exibir "O número é negativo". Se o número for igual a zero, o programa deve exibir "O número é zero". Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".




Para implementar a verificação, utilize um switch statement. O programa deve seguir a seguinte estrutura:




Solicitar ao usuário que insira um número.

Verificar se o número é positivo, negativo ou zero utilizando um switch statement.

Exibir a mensagem correspondente ao tipo de número.

Se a entrada do usuário não for um número válido, exibir "Entrada inválida".

 */

// let entrada = Number(prompt("Digite um número: "));
// let resultado;

// switch(true) {
//     case (entrada < 0):
//         resultado = "negativo";
//         break;
//     case (entrada > 0):
//         resultado = "positivo";
//         break;
//     case (entrada === 0):
//         resultado = "igual a zero";
//         break;
//     default:
//         resultado = "invalido";
//         break;
// }
// !(resultado === "invalido") ? alert(`O ${entrada} é ${resultado}`) : alert(`Entrada inválida!`)

/**

 Escreva um programa em JavaScript que solicite ao usuário que insira um número correspondente ao dia da semana (1-7) e exiba o nome do dia da semana correspondente à entrada do usuário. Se a entrada do usuário não for um número válido, o programa deve exibir "Entrada inválida".




Para implementar a verificação do nome do dia da semana, utilize um switch statement. O programa deve seguir a seguinte estrutura:




Solicitar ao usuário que insira um número correspondente ao dia da semana (1-7).

Verificar qual é o número inserido pelo usuário e exibir o nome do dia da semana correspondente utilizando um switch statement.

Se a entrada do usuário não for um número válido, exibir "Entrada inválida".

 */

// let entrada = parseInt(prompt("Digite um número da semana (1 a 7):"));

// switch(entrada) {
//     case 1:
//         alert("Domingo");
//         break;
//     case 2:
//         alert("Segunda-feira");
//         break;
//     case 3:
//         alert("Terça-feira");
//         break;
//     case 4:
//         alert("Quarta-feira");
//         break;
//     case 5:
//         alert("Quinta-feira");
//         break;
//     case 6:
//         alert("Sexta-feira");
//         break;
//     case 7:
//         alert("Sábado");
//         break;
//     default:
//         alert("Entrada inválida");
//         break;
// }

