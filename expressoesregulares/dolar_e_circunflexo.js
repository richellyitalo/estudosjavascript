// esta é minha segunda expressão
// isso é legal
// valores que inicial com (99
var regExp = /^\(99fim$/; // que termina($) com 'fim'
console.log(regExp.test('(99)')); // true
console.log(regExp.test('(99) 88')); // false
console.log(regExp.test('(99fim')); // true