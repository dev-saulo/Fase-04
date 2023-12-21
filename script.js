let userName = prompt(`Digite o seu nome:`);

alert(`${userName}, iremos fazer alguns cálculos matemáticos, digite dois números.`);

let n1 = Number(prompt(`Primeiro número:`));
let n2 = Number(prompt(`Segundo número:`));

let sum = n1 + n2;
let sub = n1 - n2;
let mult = n1 * n2;
let div = n1 / n2;

alert(`A soma dos dois números é: ${sum}`);
alert(`A subtração dos dois números é: ${sub}`);
alert(`A multiplicação dos dois números é: ${mult}`);
alert(`A divisão dos dois números é : ${div}`);

if ((n1 + n2) % 2 == 0) {
    alert(`A soma dos dois números é par : ${sum}`);
} else {
    alert(`A soma dos dois números é ímpar: ${sum}`);
}

if(n1 != n2) {
    alert(`Os números inseridos são diferentes.`);
} else {
    alert(`Os números inseridos são iguais.`);
}