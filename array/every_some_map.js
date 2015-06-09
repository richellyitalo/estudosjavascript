var consoles = [
	{nome: 'Playstation', fabricante: 'Sony', ano: 1994},
	{nome: 'Super Nintendo', fabricante: 'Nintendo', ano: 1990},
	{nome: 'Dreamcast', fabricante: 'Sega', ano: 1998},
	{nome: 'PSP', fabricante: 'Sony', ano: 2004},
	{nome: 'Nintendo Wii U', fabricante: 'Nintendo', ano: 2004 }
];

// quero saber se todos os itens estão acima do ano 1990
var superiorA1990 = consoles.every(function (element)
{
	return element.ano > 1990;
});
console.log(superiorA1990); // Também não

// se todos são da fabricante 'Nintendo'
var todosSaoNintendo = consoles.every(function (element)
{
	return element.fabricante == 'Nintendo';
});
console.log(todosSaoNintendo); // Não mesmo

// há algum da sony?
var temSony = consoles.some(function (element)
{
	return element.fabricante === 'Sony';
});
console.log(temSony); // sim, amigo tem sony sim!

// eu quero um novo array com "{console} - {fabricante}"
var listaDeVideoGames = consoles.map(function (element)
{
	return element.nome + ' - ' + element.fabricante;
});
console.log(listaDeVideoGames);

// agora eu quero uma lista de objetos com fabricante e ano
var listaFabricantes = consoles.map(function (element)
{
	return {
		fabricante: element.nome + ' - ' + element.fabricante,
		ano: element.ano
	};
});
console.log(listaFabricantes);