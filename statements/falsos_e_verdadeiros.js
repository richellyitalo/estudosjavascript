// o que é falso no javascript
console.log('Falsos------------');
console.log('null é ' + !!null); // falso :0
console.log('undefined é ' +!!undefined); // falso :0
console.log('false é ' + !!false); // nossa, falso também

console.log('\nVerdadeiros------------');
// o que é true
console.log('true é ' + !!true); // não vou nem falar
console.log('[]:array é ' + !![]); // true (mesmo vazio)
console.log('{}:object é ' + !!{}); // true (mesmo vazio)