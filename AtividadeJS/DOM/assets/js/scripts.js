/*var titulo = document.querySelectorAll('h1, footer, button, body');

function darkmode(){
  for(let i = 0 ; i < titulo.length; i++)
  titulo[i].classList.toggle('dark-mode')
 }
*/
//eu tinha pensado na forma de cima primeiramente. Mas revisando com a professora, vi que devo pensar em escalabilidade, resolvi pensar de outra forma.

//funcao
function darkmode(){

}

//variáveis ligadas por id e tagNames[];

const darkModeClass = 'dark-mode';
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

//funcao
function changeMode() {
	changeClasses();
	changeText();
}

function changeClasses() {
	button.classList.toggle(darkModeClass);
	h1.classList.toggle(darkModeClass);
	body.classList.toggle(darkModeClass);
	footer.classList.toggle(darkModeClass);
}
//chave de funcionamento

function changeText() {
	const lightMode = 'Light Mode';
	const darkMode = 'Dark Mode';

//se contém o darkModeClass
	if (body.classList.contains(darkModeClass)) {
		button.innerHTML = lightMode;
		h1.innerHTML = darkMode + ' ON';
		return;
	}

	button.innerHTML = darkMode;

  h1.innerHTML = lightMode + ' ON';
}

//botão clicável.
button.addEventListener("click", changeMode)
