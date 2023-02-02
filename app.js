function carregaSite(){
	modal=document.querySelector(".modal")
	nomeSite=document.querySelector(".nomeModal")
	imgSite=document.querySelector(".imgModal")
	btnSite=document.querySelector("#site").value
	btnRepositorio=document.querySelector("#repositorio").value
	return[modal,nomeSite,imgSite,btnRepositorio,btnSite];
}
function mudaTema(){
	document.body.classList.toggle("dark")
}
function carregaModal(site){
	modal.classList.remove("modal")
	modal.classList.add("modalAberta")
	switch(site){
		case "snake":
			btnSite="snake"
			btnRepositorio="snake"
			nomeSite.innerHTML="Snake Game"
			imgSite.setAttribute('src','https://media.discordapp.net/attachments/1070405371467927615/1070503915243704320/image.png?width=884&height=409')
		break;
		case "fy":
			btnSite="alurafy"
			btnRepositorio="alurafy"
			nomeSite.innerHTML="Alurafy"
			imgSite.setAttribute('src','https://media.discordapp.net/attachments/1070405371467927615/1070517699983179786/image.png?width=873&height=409')
		break;
		case "men":
			btnSite="mentalista"
			btnRepositorio="mentalista"
			nomeSite.innerHTML="Mentalista"
			imgSite.setAttribute('src','https://media.discordapp.net/attachments/1070405371467927615/1070521589940109383/image.png?width=873&height=409')
		break;
		case "flix":
			btnSite="aluraflix"
			btnRepositorio="aluraflix"
			nomeSite.innerHTML="Aluraflix"
			imgSite.setAttribute('src','https://media.discordapp.net/attachments/1070405371467927615/1070522537534050384/image.png?width=873&height=409')
		break;
		case "calc":
			btnSite="calculadora"
			btnRepositorio="calculadora"
			nomeSite.innerHTML="Calculadora"
			imgSite.setAttribute('src','https://media.discordapp.net/attachments/1070405371467927615/1070523188548747335/image.png?width=884&height=409')
		break;
		case "conv":
			btnSite="conversor"
			btnRepositorio="conversor"
			nomeSite.innerHTML="Conversor de Moedas"
			imgSite.setAttribute('src','https://media.discordapp.net/attachments/1070405371467927615/1070524709617278996/image.png?width=873&height=409')
		break;
		case "qatar":
			btnSite="qatar"
			btnRepositorio="qatar"
			nomeSite.innerHTML="Copa do Mundo 2022"
			imgSite.setAttribute('src','https://media.discordapp.net/attachments/1070405371467927615/1070525350913781861/image.png?width=884&height=409')
		break;
		case "toquio":
			btnSite="toquio"
			btnRepositorio="toquio"
			nomeSite.innerHTML="Olimpíada de Tóquio 2020"
			imgSite.setAttribute('src','https://media.discordapp.net/attachments/1070405371467927615/1070529608933441536/image.png?width=873&height=409')
		break;
		case "exo":
			btnSite="exo"
			btnRepositorio="exo"
			nomeSite.innerHTML="Exoplanetas"
			imgSite.setAttribute('src','https://media.discordapp.net/attachments/1070405371467927615/1070528407965802506/image.png?width=873&height=409')
		break;
	}
	
}

function vaiPraSite(){
	if(btnSite=="snake"){
		window.open('https://spnh.github.io/SnakeGame/index.html')
	}else if(btnSite=="alurafy"){
		window.open('https://spnh.github.io/Alurafy/')
	}else if(btnSite=="mentalista"){
		window.open('https://spnh.github.io/Mentalista/')
	}else if(btnSite=="aluraflix"){
		window.open('https://spnh.github.io/Aluraflix/')
	}else if(btnSite=="calculadora"){
		window.open('https://spnh.github.io/Calculadora/')
	}else if(btnSite=="conversor"){
		window.open('https://spnh.github.io/ConversorDeMoedas/')
	}else if(btnSite=="qatar"){
		window.open('https://spnh.github.io/CopaDoMundo2022/SOBRE.html')
	}else if(btnSite=="toquio"){
		window.open('https://spnh.github.io/Olimpiada-Tokyo-2020/')
	}else if(btnSite=="exo"){
		window.open('https://spnh.github.io/Exoplanetas/')
	}
	// fechaModal()
}

function vaiPraRep(){
	if(btnRepositorio=="snake"){
		window.open('https://github.com/Spnh/SnakeGame')
	}else if(btnRepositorio=="alurafy"){
		window.open('https://github.com/Spnh/Alurafy')
	}else if(btnRepositorio=="mentalista"){
		window.open('https://github.com/Spnh/Mentalista')
	}else if(btnRepositorio=="aluraflix"){
		window.open('https://github.com/Spnh/Aluraflix/')
	}else if(btnRepositorio=="calculadora"){
		window.open('https://github.com/Spnh/Calculadora/')
	}else if(btnRepositorio=="conversor"){
		window.open('https://github.com/Spnh/ConversorDeMoedas/')
	}else if(btnRepositorio=="qatar"){
		window.open('https://github.com/Spnh/CopaDoMundo2022/')
	}else if(btnRepositorio=="toquio"){
		window.open('https://github.com/Spnh/Olimpiada-Tokyo-2020/')
	}else if(btnRepositorio=="exo"){
		window.open('https://github.com/Spnh/Exoplanetas/')
	}
	// fechaModal()
}

function fechaModal(){
	modal.classList.remove("modalAberta")
	modal.classList.add("modal")
}
