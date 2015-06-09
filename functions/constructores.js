// Factory
var criaHero = function(nome, superpoder)
{
	return {
		nome: nome,
		superpoder: superpoder
	};
};
var superMan = criaHero('Superman', 'voar');
//console.log(superMan);
//console.log(criaHero('Superman', 'voar'));
//console.log(criaHero('Superman', 'voar')());

// Construtor
var acao = function()
{
		return 'Vai lá e utilize o pode de ' + this.superpoder;
};
var Hero = function(nome, superpoder)
{
	this.nome = nome;
	this.superpoder = superpoder;
	this.acao = acao
};
// new
var eu = new Hero("Rich", "cabeçada");
//call & apply
var flash = {}, coisa = {};
Hero.call(flash, 'Flash', 'supervelocidade');
Hero.apply(coisa, ['Coisa', 'Num faz nada!']);
console.log(eu);
console.log(flash);
console.log(flash.acao());
console.log(coisa.acao());
