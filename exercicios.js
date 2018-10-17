//exercicio return name
function nome(identificacao) {
    return identificacao;
}
var user = "thomas";
console.log(nome(4));
//exercicios var tipo number
var numero;
numero = 4;
console.log(numero);
//exercicio boolean
var qualquer = false;
console.log(qualquer);
//exercicio parametros e valores
var calculadora = /** @class */ (function () {
    function calculadora() {
    }
    calculadora.prototype.Calculadora = function () { };
    calculadora.prototype.somar = function () {
        var result = 4 + 5;
        return result;
    };
    calculadora.prototype.subtração = function () {
        var result = 7 - 5;
        return result;
    };
    return calculadora;
}());
var calc = new calculadora;
var soma = calc.somar();
var subtração = calc.subtração();
console.log;
console.log(subtração);
//Crie um método que recebe um parametro e mostra na tela esse valor
function funcaosemparametro() {
    console.log("teste");
    console.log("mentoria");
    console.log("elenão");
}
funcaosemparametro();
funcaosemparametro();
function funcaocomparemetro(texto) {
    console.log(texto);
}
funcaocomparemetro("elenão");
funcaocomparemetro("haddad");
//Função com dois parametros
function somar(numero1, numero2) {
    console.log(numero1 + numero2);
}
somar(10, 3);
somar(10, 2);
function strgenumbr(palavra, numeracao) {
    console.log(palavra, numeracao);
}
strgenumbr("casa", 10);
