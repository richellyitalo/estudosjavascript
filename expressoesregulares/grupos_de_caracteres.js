// [grupo-de-caracteres] 
// fica entre '[' e ']'
var a_z = /[a-z]/;
a_z.test('abcdef'); // true
a_z.test('123456'); // false
