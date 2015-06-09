var carros = ['Gol', 'BMW', 'Ranger Rover'];
var motos = ['Kawasaki', 'Titan Honda', 'Faggio'];
//vamos unir essa galera e montar um novo array
var veiculos = carros.concat(motos);
console.log(veiculos);

// eu quero um novo array da 'Kawasaki' a 'Titan Honda'
var novasMotos = veiculos.slice(veiculos.indexOf('Kawasaki'), veiculos.indexOf('Titan Honda') + 1);
console.log(novasMotos); // a maneira acima é meio confusa

// vamos com números
var numeros = [1, 2, 3, 4, 5];
// quero de 1 a 3
console.log(numeros.slice(0,3)); // agora entendi é slice(posicaoInicial, posiciaoFinal - 1);
console.log(numeros.slice(3, 4));

// invertendo
numeros.reverse(); // Aqui modifica o array sem precisa associar
console.log(numeros);