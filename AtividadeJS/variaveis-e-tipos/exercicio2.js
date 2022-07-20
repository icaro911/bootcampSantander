var questao = [1,3,4,6,80,33,23,90];
var vazio = [];

function eliminaPares(obj){
	var resposta = obj
	
	if(resposta.length == 0){console.log(-1)}
	else{
			for(i=0; i<= resposta.length; i++){
				if(resposta[i] == 0){
					resposta.splice(1,i,0);
				}else if(resposta[i]% 2 == 0){
					resposta.splice(i,1,0);
				}
			}
			console.log(resposta);
}
}
eliminaPares(questao);
eliminaPares(vazio);
