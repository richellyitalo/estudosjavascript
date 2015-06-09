// Factory function
var counter = (function()
{
	var value = 0;
	return {
		add: function()
		{
			return ++value;
		}
	};
})();
//test
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());