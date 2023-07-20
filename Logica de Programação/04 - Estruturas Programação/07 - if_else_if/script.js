// let soma = parseFloat(prompt("Digite a nota do aluno:"));
// let media;
// let count = 0;
// let escolha = prompt("Deseja digitar uma nova nota? [S/N]");

// while(escolha != "n") {
//     soma += parseFloat(prompt("Digite a nota do aluno:"));
//     count++;
//     escolha = prompt("Deseja digitar uma nova nota? [S/N]");
// };

// if (count != 0) {
//     media = (soma / count);
// } else {
//     media = soma;
// };

// if(media.toFixed(2) >= 7) {
//     alert(`Foi aprovado com a nota ${media.toFixed(2)}!`);
// } else if (media.toFixed(2) >= 5) {
//     alert(`Sua média foi ${media.toFixed(2)} e você tem direito a uma recuperação!`);
// } else {
//     alert(`Foi reprovado com a nota ${media.toFixed(2)}!`);
// };

//teste: 

const alunos = [
    { nome: 'Diogo', media: 5.5 },
    { nome: 'Julia', media: 9.5 },
    { nome: 'Roberto', media: 1.5 },
    { nome: 'Tiago', media: 6.0},
  ];

function aprovados(alunos, media) {
    alunos.forEach(element => {
        if (element.media >= media) {
            
            console.log(element);
        }
    })
}

aprovados(alunos, 6.5)
