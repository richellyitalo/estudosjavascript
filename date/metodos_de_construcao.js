// ano, mes-1, dia 
// nao esqueca do (-1)
var data = new Date(2013, 11, 12);
console.log(data);

// em milisegundos
var mili = data.getTime();
console.log('data em mili : ' + mili)

// Criação por string
// yyyy/MM/dd -aqui não tem -1
var data1 = new Date('2013/12/12');

// MM/dd/yyyy -aqui também naõ tem -1
var data2 = new Date('12/12/2013');

// convertendo para milisegundos
console.log(Date.parse(data1));

// Milisegundos de agora
var agoraMili = Date.now();
console.log('agoraMili-----');
console.log('Isso é do tipo:' + typeof agoraMili)
console.log('Vale: ' + agoraMili);

// agora quero de milisegundos para data
var dataDeMili = new Date(agoraMili);
console.log(dataDeMili);
console.log('O mês é: ' + (dataDeMili.getMonth() + 1)); // não esquecer o -1

// Metodo de criação interessante
// December 25, 1995 23:15:30
var data3 = new Date('August 7, 1994 23:00:55');
console.log(data3);