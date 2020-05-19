
var altura = 0 //declaração de variável
var largura = 0
var vidas = 1
var tempo = 15

var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '') //substituir caracter

if(nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris') {
	//750
	criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo() {
	 altura = window.innerHeight //altura = de acordo com o limite da tela
	 largura = window.innerWidth

	 console.log(largura, altura)

}

	ajustaTamanhoPalcoJogo() //chamada da função

	var cronometro = setInterval(function() { 

		tempo -= 1

		if(tempo < 0) {
			clearInterval(cronometro)
			clearInterval(criaMosquito)
			window.location.href = 'vitoria.html'
		} else {
		document.getElementById('cronometro').innerHTML = tempo
		}
		}
		, 1000)

	function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove() //remove o mosquito da tela

		//console.log('elemento selecionado foi: v' + vidas)
		if(vidas > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png" //id dinâmicosaiusa

		vidas++ //aumento de 1 unidade do id 'v' que representa os corações
		}
	}//fechamento da função posicaoRandomica()
	

	var posicaoX = Math.floor(Math.random() * largura) - 90 //gera valores aleatórios
	var posicaoY = Math.floor(Math.random() * altura) - 90

	//controle
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img') //criação de imagem (img)
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //.className = retorna e define o valor do atributo class
	mosquito.style.left = posicaoX + 'px' //precisa ter o 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove() //remove o mosquito quando houver o click pulando a primeira condição
	}

	document.body.appendChild(mosquito) //elemento filho


} //fim função posicaoRandomica()

function tamanhoAleatorio() { 
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) { //troca do valor da variável
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}
}

function ladoAleatorio() {

	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) { //troca do valor da variável
		case 0:
			return 'ladoA'
		case 1:
			return 'ladoB'
		
	}


}