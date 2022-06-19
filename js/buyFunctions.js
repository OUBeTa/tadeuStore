export let itemSelected

export function getItems(){return items}

export function hideShowInterface(arg){ // esconde os elementos relacionados a compra do ítem até que outro ítem seja selecionado. atualiza a fala do tadeu para depois de um ítem ser comprado

	document.getElementById('itemEffect').className = arg // .visible = opacity: 100%; / .hidden = opacity: 100%;
	document.getElementById('itemDesc').className =  arg
	document.getElementById('price').className =  arg
	document.getElementById('itemImg').className =  arg
	document.getElementById('buy').className = arg
	if(arg === 'hidden'){document.getElementById('textBox').innerHTML = 'Precisa de algo mais? </br></br> Claro que precisa, pense bem, ninguém quer que goblins te encham de chumbo certo?'}

}

// =========================== adicionando a função load em cada item

let items = [

	{
		name : 'Poção de cura',
		effect : 'Cura cinco corações de vida',
		desc : 'Um fraco com um líquido vermelho que cheira à cereja. Quando aberto solta uma neblina vermelha',
		price : 50,
		imgPath : 'img/pocaoDeCura',
		tadeuLine : 'Uma simples poção? devo ter isso no estoque, um segundo... </br></br> Aqui está, não é tão boa, mas creio que você não irá encontrar uma melhor pela região'

	},
	{
		name : 'Espada de Netherite',
		effect : 'Causa cinco corações de dano',
		desc : 'Uma espada forjada com detritos ancestrais encontrados nas profundezas do nether. </br></br> Uma espada leve, possibilita ao portador um menor intervalo entre os ataques',
		imgPath: 'img/netheriteSword',
		price : 285,
		tadeuLine : 'Uma espada? pensei que você já estivesse armado, você sabe, nós não estamos no lugar mais seguro do reino, me atrevo a dizer que nem do reino nós fazemos parte, estamos em uma terra sem lei afinal'

	},
	{
		name : 'Coração humano',
		effect : 'Aumenta a Força em três pontos',
		desc : 'Um coração humano que ainda pulsa. Melhor ficar em dúvida sobre como isso foi parar em uma taverna',
		imgPath: 'img/coracao',
		price : 1000,
		tadeuLine : 'Oh... isso. você faz muitas perguntas...'

	},
	{
		name : 'Picareta de Netherite',
		effect : 'Causa dois corações de dano </br></br> Capaz de minera elementos de dureza menor ou igual à 3' ,
		desc : 'Uma picareta forjada com com detritos ancestrais encontrados nas profundezas do nether. </br></br> Durabilidade extrema, ótima para mineração ',
		imgPath: 'img/netheritePickaxe',
		price : 260,
		tadeuLine : 'Imagino que você esteja planejando ir para as montanhas não?  </br></br> Cuidado, fiquei sabendo que existe uma infestação de larvas gigantes lá'

	},
	{
		name : 'Cérebro de um Eldritch',
		effect : 'Concede mais 300 pontos de mana e mais 5 de inteligencia quando equipado' ,
		desc : 'Um asqueroso cérebro doque um dia foi um Eldritch. </br></br> Os Eldritch são inofensivos sem um hospedeiro e, quando arrancado, seu cérebro pode servir como um útil equipamento para fortes magos... </br></br> Seu uso não é recomendado de modo algum para feiticeiros mais fracos',
		imgPath: 'img/cerebro',
		price : 6200,
		tadeuLine : 'A sim, o cérebro... só por favor compre isso logo, não aguento mais essa coisa nojenta na minha loja'

	},
	{
		name : 'Pedaço de couro',
		effect : '' ,
		desc : 'Uma tira de couro. bom para fazer novos equipamentos e remendar os aintigos',
		imgPath: 'img/couro',
		price : 20,
		tadeuLine : 'Esse couro é do gado do meu próprio rebanho, se estiver interessado em comprar algumas cabeças podemos negociar...'

	},
	{
		name : 'Barra de ferro',
		effect : '' ,
		desc : 'Uma pesada barra de ferro',
		imgPath: 'img/ironIngot',
		price : 30,
		tadeuLine : 'Apenas uma barra de ferro comum </br></br> Se você pretende fazer uma longa viagem eu não recomendo que você leve muitas, ter todo esse peso não é bem uma vantagem'

	},
	{
		name : 'A poção mais forte',
		effect : 'Aumenta todos os atributos em 10 pontos' ,
		desc : 'uma frasco de vidro com um líquido que emana uma aura forte demais para você',
		imgPath: 'img/strongestPotion',
		price : 7100,
		tadeuLine : 'Essa poção é muito forte pra você, você não pode leva-lá </br></br> Essa poção é apenas para os aventureiros mais fortes e você é claramente um dos mais fracos'

	},
	{
		name : 'Mini tadeu',
		effect : '' ,
		desc : 'Espamar alguns desses só pra mostrar que a div é passiva de ter mais itens injetados',
		imgPath: 'img/tadeu',
		price : 0,
		tadeuLine : '...'

	},
	{
		name : 'Mini tadeu',
		effect : '' ,
		desc : 'Espamar alguns desses só pra mostrar que a div é passiva de ter mais itens injetados',
		imgPath: 'img/tadeu',
		price : 0,
		tadeuLine : '...'

	},
	{
		name : 'Mini tadeu',
		effect : '' ,
		desc : 'Espamar alguns desses só pra mostrar que a div é passiva de ter mais itens injetados',
		imgPath: 'img/tadeu',
		price : 0,
		tadeuLine : '...'

	},
	{
		name : 'Mini tadeu',
		effect : '' ,
		desc : 'Espamar alguns desses só pra mostrar que a div é passiva de ter mais itens injetados',
		imgPath: 'img/tadeu',
		price : 0,
		tadeuLine : '...'

	},
	{
		name : 'Mini tadeu',
		effect : '' ,
		desc : 'Espamar alguns desses só pra mostrar que a div é passiva de ter mais itens injetados',
		imgPath: 'img/tadeu',
		price : 0,
		tadeuLine : '...'

	}, //arquivo com as infos de todos os itens
]

for(var x of items){ x.load = function(){ //adiciona em cada item a função load

	hideShowInterface('visible') // mostra as informações dos itens
	itemSelected = this // anota o ítem selecionado em uma variável

	document.getElementById('itemEffect').innerHTML = this.effect
	document.getElementById('itemDesc').innerHTML = this.desc 		//
	document.querySelector('#itemImg img').src = this.imgPath 		//// atualizando as informações dos placeHolders coerentemente com o ítem que foi selecionado
	document.getElementById('textBox').innerHTML = this.tadeuLine	// 
	document.querySelector('#price p').innerText = this.price

}}