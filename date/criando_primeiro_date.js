// todo date está em milisegundos desde 1 de janeiro de 1970 (UTC)
// *UTC - Universal Temporal Coordinates
// 
// construtores
// new Date();
// new Date(valor);
// new Date(dataString);
// new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
// vamos começar com a data de hoje
var hoje = new Date();
console.log(hoje); // Wed Jun 10 2015 05:14:24 GMT-0300 (Hora oficial do Brasil)

// interpretando de uma forma melhor
console.log(hoje.getTime()); // assim é mais global retorna os milisegundos desde 1970