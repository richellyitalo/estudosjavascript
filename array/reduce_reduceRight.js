// Função concatenadora
var diariaSemana = [15, 10, 35, 25, 35, 15, 50];
var salarioSoma = diariaSemana.reduce(function (valPrev, valCurrent)
{
	return valPrev + valCurrent;
}, 0);// começa de 0
console.log(salarioSoma); // Sim, eu só ganho R$ 185,00 por semana

// o "reduceRight" começa a soma da direita para esquerda, so isso