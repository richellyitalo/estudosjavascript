// shift desaloca
var games = ['Brothers in Arms', 'Croc', 'Ape Scape'];
console.log(games);
console.log(games.shift()); // Remove e retorna
// Vocês tiram o brothers
console.log(games);

// unshift aloca
// Agora ele vai para primeiro item
console.log(games.unshift("Brothers in Arms (revenge)"));
console.log(games);

// Adicionando array (hehe!)
Array.prototype.unshift.apply(games, ['Mario', 'Sonic']);
console.log(games);