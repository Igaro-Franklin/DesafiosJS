var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));

var soma = num1 + num2;
var subtracao = num1 - num2;
var multiplicacao = num1 * num2;
var divisao = num1 / num2;

var somar = document.getElementById("somar");
var subtrair = document.getElementById("subtrair");
var multiplicar = document.getElementById("multiplicar");
var dividir = document.getElementById("dividir");


somar.innerHTML = soma;
subtrair.innerHTML = subtracao;
multiplicar.innerHTML = multiplicacao;
dividir.innerHTML = divisao;

console.log("Resultado da soma:", soma);
console.log("Resultado da subtração:", subtracao);
console.log("Resultado da multiplicação:", multiplicacao);
console.log("Resultado da divisão:", divisao);