//array evento
var listaEventos = [];
var participantes = [];
document.getElementById("submitCadastro").addEventListener("click", function(event){

	
	
	//para não enviar form
  event.preventDefault();

  //variavel do dia corrente
  let today = new Date();

  //pegando dados do form
  let nomeEvento = document.getElementById("inputEvento").value;
  let dataEvento = document.getElementById("inputDataEvento").value;
	
	let partesData = dataEvento.split("-");
	date = new Date(partesData[0], partesData[1] - 1, partesData[2]);
	hoje = new Date( today.getFullYear(), today.getMonth(), today.getDate());
 

  if (date > hoje) {
  	listaEventos.push(nomeEvento);
  	console.log(listaEventos);


  	Swal.fire(
	  'Cadastrado',
	  'O EVENTO FOI CADASTRADO COM SUCESSO!',
	  'success'
	);
	var selEventos = document.getElementById("listEventos");
	selEventos.options.length = 0;
	for (var i = listaEventos.length - 1; i >= 0; i--) {
		var opt0 = document.createElement("option");
	    opt0.value = i;
	    opt0.text = listaEventos[i];
	    selEventos.add(opt0, selEventos.options[i]);	
	}

  	
  }else{
  	Swal.fire({
	  icon: 'error',
	  title: 'DATA ERRADA',
	  text: 'A DATA DEVE SER MAIOR QUE O DIA ATUAL',
	});
  	
  }
});

document.getElementById("submitParticipante").addEventListener("click", function(event){

	
	
	//para não enviar form
  event.preventDefault();

  //variavel do dia corrente
  let today = new Date();

  //pegando dados do form
  let nomeParticipante = document.getElementById("inputParticipante").value;
  let idadeParticipante = document.getElementById("inputIdade").value;
  let nomeEventoParticipante = document.getElementById("listEventos").value;

  if (idadeParticipante >= 18) {
  	let countEvento = 0;
  	for (var i = participantes.length - 1; i >= 0; i--) {
  		if(participantes[i][1] == nomeEventoParticipante){
  			countEvento++;
  		}
  		
  	}

  	if (countEvento < 5 ) {
  		participantes.push([nomeParticipante, nomeEventoParticipante]);
	  	Swal.fire(
		  'Cadastrado',
		  'O EVENTO FOI CADASTRADO COM SUCESSO!',
		  'success'
		);
		let areaListsGeral = document.getElementById("areaListaEventosParticipantes");
		areaListsGeral.value = '';
		for (var i = 	participantes.length - 1; i >= 0; i--) {
				
				areaListsGeral.value += "Participante: ";
				areaListsGeral.value += participantes[i][0];
				areaListsGeral.value += " - Evento: ";
				areaListsGeral.value += listaEventos[participantes[i][1]];
				areaListsGeral.value += '\n'
		}
  	}else{
  		Swal.fire({
	  icon: 'error',
	  title: 'Evento cheio',
	  text: 'O evento já atingiu o limite de participantes',
	});

  	}
	
  	
  }else{
  	Swal.fire({
	  icon: 'error',
	  title: 'MENOR DE IDADE',
	  text: 'O PARTICIPANTE É MENOR QUE 18 ANOS',
	});
  	
  }
});