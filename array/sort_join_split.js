var podcasts = [
	{nome: 'Jovem Nerd', 	categoria: ['Nerd', 'Quadrinhos', 'Games']},
	{nome: 'Crazy Cast', 	categoria: ['Misc', 'Cotidiano']},
	{nome: 'MRG', 			categoria: ['Quadrinhos', 'Games']},
	{nome: 'Player Cast', 	categoria: ['Games']}
];
// vamos organizar nossa biblioteca
podcasts.sort(); // isso não vai funcionar, são objetos
// vamos fazer da maneira correta
podcasts.sort(function (a, b)
{
	return a.nome > b.nome;
});
// ou pode ser assim também (+ difícil)
podcasts.sort(function (a, b)
{
	if (a.nome > b.nome) {
		return 1;
	}
	if (a.nome < b.nome) {
		return -1;
	}
	// a é igual a b
	return 0;
});
// vamos fazer da maneira correta
podcasts.sort(function (a, b)
{
	return a.nome > b.nome;
});
console.log(podcasts);

//ordenando numeros
var numeros = [1, 5, 3, 0, 5, 9, 9];
// de forma decrescent
numeros.sort(function(a, b)
{
	// de b para a 
	return b - a;
});
console.log(numeros);

// vamos fazer uma string disso aí
var stringNumeros = numeros.join('-');
console.log(stringNumeros);

// agora eu quero um array novamente
console.log(stringNumeros.split('-')); // eita veio como string e agora? depois a gente vê!
// so quero 3 agora
console.log(stringNumeros.split('-', 3));
