var questao = "roma me tem amor";

function palindromo(string){
	var resposta = "";
	for(i = string.length; i >= 0; i--){
		resposta = resposta + string[i];
	}
	console.log(resposta);
}

palindromo(questao);
