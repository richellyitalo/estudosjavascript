var estouVivo = function()
{
	var message = 'Sim, eu estou vivo!'; // Acessível ao function
	return function()
	{
		return message; // Incrível, mas funciona
	};
};

var orgaosInternos = function()
{
	var orgaoPrimo = 'Orgão primo'; // Aqui não retorna no this
	return function()
	{
		this.orgaoPrimo2 = 'Primo 2'; // Aqui retorna no this
		this.message = 'Mensagens internas!'; // Aqui tambem
		return this;
	};

};
console.log(estouVivo); // Function
console.log(estouVivo()); // Function
console.log(estouVivo()()); // String

console.log(orgaosInternos()()); // Aqui vai retornar tudo do this