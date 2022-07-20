function atividade(a,b){
	var soma = a + b;
	var resposta = "";
	var respostaDois = "";
	var compara = "";

	if(soma > 10){
		resposta = " maior ";
	}else{
		resposta = " menor ";}

	if(soma < 20){
		respostaDois = " menor ";
	}else{
		respostaDois = " maior ";}
	
	if( a != b){
		compara = " não são ";
	}else{
		compara = " são ";
i	}

	console.log("Os numeros " + a + " e "+ b + compara + "iguais. Sua soma é "+ soma+", que é"+ resposta+ "que 10 e"+respostaDois+"que 20.") 

}

atividade(1,2);
