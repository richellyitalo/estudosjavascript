var games = ["hatred", "NFS", "FIFA", "Call of Duty"];

// Adiciona mais um ao último
console.log(games.push('Assassins Creed', 'Dino Crysis'));
console.log(games.valueOf());
// Exclui o último
games.pop();
console.log(games.valueOf());

// Fusão de varios arrays
var novosGames = ['Pro Evolution', 'Medal of Honor'];
Array.prototype.push.call(games, 'Mortal Kombat', 'Street Fighter');
Array.prototype.push.apply(games, ['Super Mario', 'Sonic']);
console.log(games);
console.log(games);

games.pop();
console.log(games);