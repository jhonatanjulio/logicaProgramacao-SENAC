/*
09 - Imagine que você precisa calcular a potência de um número. Escreva uma função chamada "potencia" que recebe dois parâmetros, "a" e "b". A função deve calcular e retornar o valor de "a" elevado à "b" potência. Para calcular a potência, você pode utilizar o operador de exponenciação "**" ou a função "Math.pow(a, b)". Em seguida, chame a função "potencia" quatro vezes com diferentes valores para "a" e "b": (2,2), (3,2), (4,4) e (5,2). Exiba o resultado de cada chamada no console utilizando o método "console.log()". 
*/

function potencia(a, b) {
    return a ** b;
}

console.log(potencia(2,2));
console.log(potencia(3,2));
console.log(potencia(4,4));
console.log(potencia(5,2));