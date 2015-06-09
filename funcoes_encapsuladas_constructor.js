// Função encapsulada construtora
var Counter = function()
{
	var value = 0;
	this.add = function () {
		return ++value;
	};
};
count = new Counter();
count2 = {};
// via call
Counter.call(count2);
// testando
console.log(count.add());
console.log(count2.add());
console.log(count2.add());
console.log(count2.add());