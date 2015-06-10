// temos 6 tipos de objetos
// Ajudinha
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof

// 1 - 'function'
var funcao = function()
{
	return 'oi, eu sou o function';
};
console.log( 'funcao é ' +  typeof funcao);

// 2 - string
var nome = 'richellyitalo';
console.log(nome + ' é ' + typeof 'richellyitalo');

// 3 - number
var numeros = 123456;
var nan = NaN; // 
console.log(numeros + ' é ' + typeof numeros);
console.log(nan + ' (nan) é ' + typeof nan);

// 4 - undefined
var undef = undefined;
console.log(undef + ' é ' + typeof undefined);

// 5 - boolean
var verdade = true;
console.log(verdade + ' (true) é ' + typeof verdade);

// 6 - object
// parece que o restante são objetos
// vamos lá
// #6.1
var data = new Date();
console.log(data + ' (data) é ' + typeof data);
// #6.2
var pessoa = {
	nome: 'richelly', idade: 150
};
console.log(pessoa + ' (pessoa) é ' + typeof pessoa);
console.log( pessoa.nome + ' (pessoa.nome) é '+ typeof pessoa.nome);
// #6.3
var nulo = null;
console.log(nulo + ' (nulo) + ' + typeof nulo);
// #6.4
var booleanCreated = new Boolean(true);
console.log(booleanCreated + ' é ' + typeof booleanCreated);
// #6.5
// vale para qualquer outro variável construido a partir do 'NEW'
var numeros = new Number(55);
console.log(numeros + ' é ' + typeof numeros);
// #6.6
// agora expressões
var exp = /\d/;
console.log( exp + ' é ' + typeof exp);