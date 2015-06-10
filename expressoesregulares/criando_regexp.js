// Esse é meu primeiro regExp 
// em minha vida de programador
// tinha medo de expressões regulares
var regExp = /9999-9999/;
var telefone1 = '9999-9999';
// o telefone está no padrão?
console.log(regExp.test(telefone1)); // retorn boolean

// padrão sp (5 digitos)
var telefone2 = '88999-9999';
console.log(regExp.test(telefone2));
//com exec
console.log(regExp.exec(telefone1)); // retorna array e outras coisas detalhadas

// Construtor não utiliza '/'
var regExp2 = new RegExp('99');
console.log(regExp2.test('99'));