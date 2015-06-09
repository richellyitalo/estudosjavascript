var getIdade = function(extra, sobrenome)
{
	return (this.idade + extra) + ' de ' + this.nome + ' ' + arguments[1];
};

var pessoa = {
	nome: 'Richelly',
	idade: 35
};

console.log(getIdade.call(pessoa, 3, 'Italo'));

console.log(getIdade.apply(pessoa, [25, 'Sousa Rodrigues', 'Mauro']));