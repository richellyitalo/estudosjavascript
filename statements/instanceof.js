// verificar se foi criado a partir de certo construtor (prototype)
var nome = new String('Eu gosto de podcasts!');

// true por ser prototype de String
console.log(nome instanceof String); //sim

function SouViciado()
{
	return "Eu gosto de jogos!";
}
var jogos = new SouViciado();
// true por também ser prototype da Função
console.log(jogos instanceof SouViciado);

// Toda função é herança de outra
// esta é instância de Object
SouViciado.prototype instanceof Object; //true
console.log('Instância de instância');

// true para ambos, jogos é instancia de SouViciado que é instância de Object
console.log(jogos instanceof SouViciado);
console.log(jogos instanceof Object);

// então todo objeto é instância de Object?
// sim porque ele é um 'object, veja só
console.log(typeof jogos);

// Provocando heranca
console.log('------------\nHerança');
function Pai(){}
function Filho(){}
var P = new Pai();
console.log(P instanceof Pai); // false

// herdando
var F = {};
console.log(F instanceof Pai);
Filho.prototype = new Pai();
console.log(F instanceof Pai); // não é filho de PAI ainda
var F = new Filho(); // Precisa ser reescrito
console.log(F instanceof Pai); // agora F é filho de PAI