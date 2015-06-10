// achar apenas os numeros no padrao dentro do bloco
var regExp = /\(\d{2}\)\s\d{4,5}-\d{4}/g;
var telefonesTable = '<h2>(84) 9999-9999</h2><h2>(84) 99999-9999</h2>';
//console.log(telefonesTable.match(regExp));
var apenasNumero = telefonesTable.match(regExp);
console.log(telefonesTable.replace(regExp, '{Aqui tem um número}'));
console.log(apenasNumero);