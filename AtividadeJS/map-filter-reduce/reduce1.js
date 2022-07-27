var valor1 = [
	{preco:30,
	nome:"camisa"},
	{preco:41,
	nome:"calca"},
	{preco:55,
	nome:"sapato"}
];

var respostas = valor1.reduce(function(previousValue,currentValue){ return previousValue + currentValue.preco},0);

console.log(respostas)
