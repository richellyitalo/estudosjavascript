// 'in' verificar se existe uma propriedade dentro do objeto
var filmes = new Array('Mad Max', 'Power Rangers');
// existe 0 no array?
// filmes[0] sim, caro amigo
console.log(0 in filmes); // true
console.log(filmes[0]);

// existe a propriedade toString?
console.log('toString' in filmes); // true
console.log(filmes.toString());

var eu = {nome: 'Richelly'};
console.log('nome' in eu); // true
console.log(eu.nome);
