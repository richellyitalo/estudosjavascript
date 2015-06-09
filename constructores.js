// Fabricador
var criaHero = function(nome, superpoder)
{
	return 
		nome: nome,
		superpoder: superpoder
	};
};

var superMan = criaHero('Superman', 'voar');

console.log(superMan);
console.log(criaHero('Superman', 'voar'));
console.log(criaHero('Superman', 'voar')());