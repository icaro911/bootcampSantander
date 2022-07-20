/*mudei a API, ja que a API que foi proposta no exercício não estava sendo liberada pelo meu navegador Brave.
Onde apenas modifiquei a BASE_URL para outro API, e a chave 'url' quando é retornada na função getCats.
*/
// exercício é realizado de baixo para cima

//BASE_URL - é a url base da API
const BASE_URL = 'https://cataas.com/cat?json=true';

//segunda função - na qual retorna dados da api convertida em JSON;
const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.url;
	} catch (e) {
		console.log(e.message);
	}
};

//Primeira função - no qual vai gerar a imagem a partir do retorno da segunda função e é concatenada para exibir a imagem.
const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = 'https://cataas.com/' + await getCats();
};

//puxar a função inicial
loadImg();

//gerar o botão em js e reagir ao click;
const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);
