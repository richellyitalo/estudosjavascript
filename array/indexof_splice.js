var movies = ['Terminator 2', 'Life of Pie', 'Into the Wild'];
// Buscando...
console.log(movies.indexOf('Exterminador')); // -1 : não encontrou :(
console.log(movies.indexOf('Terminator 2')); // agora sim está na posição '0'

// Removendo itens com SPLICE
// removendo "Life of Pie" para entrar "Furious"
console.log(movies.splice(movies.indexOf('Life of Pie'), 1, 'Furious'));
console.log(movies);

// removendo 'Furious' & 'Into the Wild'
movies.splice(1, 2);
console.log(movies);

// adicionando dois itens no início
movies.splice(0, 0, 'Titanic', 'Forest Gump');
console.log(movies);