import {getItems,itemSelected,hideShowInterface} from './js/buyFunctions.js'

let items = getItems() // armazena em uma variável local o dict com os itens, isso para contornar o problema de variáveis importadas serem readOnly
let currentMoney = 7540

updateMoney() // iguala o inner text da div com o dinheiro atual à variável currentMoney

for(var x of items){createItems(x)} //cria uma div de referência para cada ítem

document.getElementById('buy').addEventListener('click',()=> buySomething(itemSelected)) // adicionando função para comprar itens ao botão de comprar

function createItems(arg){ //cria uma div com a classe 'item' e com uma h3 dentro. a h3 

	var genericObject = document.createElement('div') // cria div

	var textHolder = document.createElement('h3') // cria h3

	textHolder.innerText = arg.name // da o nome do ítem ao h3

	genericObject.appendChild(textHolder) // armazena o h3 na div

	genericObject.className = 'item' // da à div a classe .item

	genericObject.addEventListener('click',function(){arg.load()}) // adiciona a função load de cada item em cada div referente a ele mesmo

	document.getElementById('iNavI').appendChild(genericObject) // adiciona a div no menu de navegação

}

function buySomething(item){

	if(itemSelected){ // confere se a variavel itemSelected está com o valor undefined, isto é, tem um valor válido armazenado nela

		if(itemSelected.name != 'A poção mais forte'){ // confere se o ítem selecionado não é o item que não pode ser comprado

			if((currentMoney - item.price) >= 0){ // confere se o dinheiro atual é suficiente pra comprar o ítem

				currentMoney -= item.price // altera a quantia de dinheiro
				updateMoney()
				hideShowInterface('hidden')
													// fala do tadeu pra quando vocÊ não tem dinheiro
			} else { document.getElementById('textBox').innerHTML = 'Como você espera comprar um ítem não tendo o dinheiro necessário? </br></br> Não abaixo o preço de um produto nem morto, se não for comprar mais nada sai logo da minha loja' }
													// fala do tadeu pra quando você tenta comprar o ítem x
		} else {document.getElementById('textBox').innerHTML = 'Você simplesmente não pode pegar esta poção, compre outra coisa'}

	}

}

function updateMoney(){document.querySelector('#currentMoney').innerText = currentMoney}



//========================= toggle menu =========================//

let portuguese = document.getElementById('languagePtBr')
let english = document.getElementById('languageEnglish')

portuguese.style.display = 'none'
english.style.display = 'none'

document.getElementById('optsBtn').addEventListener('click',()=>toggleDisplay(portuguese,english))

function toggleDisplay(x,y){

	x.style.display == 'none' ? x.style.display = 'block' : x.style.display = 'none'
	y.style.display == 'none' ? y.style.display = 'block' : y.style.display = 'none'

}