// filtros evitam códigos e deixa sua estrutura 'linda'
var podcasts = [
	{nome: 'Jovem Nerd', 	categoria: ['Nerd', 'Quadrinhos', 'Games']},
	{nome: 'Crazy Cast', 	categoria: ['Misc', 'Cotidiano']},
	{nome: 'MRG', 			categoria: ['Quadrinhos', 'Games']},
	{nome: 'Player Cast', 	categoria: ['Games']}
];

// quero um novo array apenas de podcasts de 'Games'
var podgames = podcasts.filter(function (element)
{
	return element.categoria.indexOf('Games') != -1;
});
console.log('Podgames: ');
console.log(podgames);

// agora eu quero apenas da categoria 'NERD' iuuhhaaa
var podnerds = podcasts.filter(function (element)
{
	return element.categoria.indexOf('Nerd') != -1;
});
console.log('Podnerds: ' );
console.log(podnerds);
