var counter = {
	value: 0,
	add: function () {
		return ++this.value;
	}
}

console.log(counter.add());
console.log(counter.add());