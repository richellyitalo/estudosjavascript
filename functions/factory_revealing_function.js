var counter = (function () {
	var _value = 0;
	var _add = function () {
		return ++_value;
	};
	var _minus = function () {
		return --_value;
	}
	return {
		add: _add,
		minus: _minus
	};
})();
// test
console.log(counter.add());
console.log(counter.add());
console.log(counter.minus());
console.log(counter.minus());
console.log(counter.add());