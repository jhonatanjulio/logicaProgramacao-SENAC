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

let nomeDaFruta = "maçã";

switch(nomeDaFruta) {
    case "limão":
    case "uva":
    case "laranja":
        console.log("Essa fruta é cítrica!");
        break;
    case "abacate":
    case "manga":
        console.log("Essa fruta é tropical!");
        break;
    default:
        console.log("Não sei que tipo de fruta é essa!");
}