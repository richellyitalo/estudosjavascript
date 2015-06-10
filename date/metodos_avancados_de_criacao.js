// var today = new Date();
// var birthday = new Date('December 17, 1995 03:24:00');
// var birthday = new Date('1995-12-17T03:24:00');
// var birthday = new Date(1995, 11, 17);
// var birthday = new Date(1995, 11, 17, 3, 24, 0);
var data1 = new Date('June 25, 1994');
console.log(data1);

var data2 = new Date('1994-12-31T10:30:00');
console.log(data2);

// correçao de fuso horário
var data3 = new Date('1994-12-31T10:30:00+03:00');
console.log('Correção de fuso:');
console.log(data3);