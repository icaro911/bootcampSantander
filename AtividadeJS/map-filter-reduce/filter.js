var conteudo = [1,2,3,4,5,6,7,8,9];

function filtro(x){
	const filter = x.filter((item) => item % 2 == 0);
	return filter;
}

console.log(filtro(conteudo))
