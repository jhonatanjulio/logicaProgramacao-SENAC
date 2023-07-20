alert("Essa é uma mensagem de alerta");
alert("Mensagem 2");

// Digitar um número no prompt, e aparecer o dobro desse número no alert.

let numero = prompt("Digite um número:");
let numeroEmDobro = numero * 2; // casting (dinamicamente altera string para number para realizar a operação)
alert(`O dobro de ${numero} é ${numeroEmDobro}`);

console.log(typeof numero);
console.log(typeof numeroEmDobro);