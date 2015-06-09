// Factory
var createCounter = function () {
	var value = 0;
	return {
		add: function()
		{
			return ++value;
		}
	};
};
count = createCounter();
// test
console.log(count.add());
console.log(count.add());
console.log(count.add());