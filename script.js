var filtro = /[A-Za-z,.;~´-ç-Ç+]/g;
var entrada = document.getElementsByName("entrada");

/*
* Verificação dos campos
*/

function autocheck() {
	for (i = 0; i < entrada.length; i++) {
		
		//Remove caracteres inválidos
		entrada[i].value = entrada[i].value.replace(filtro,'');
		
		for(j = 0; j < entrada.length; j++){
			
			//Não compara o campo com ele mesmo
			if(i != j){
				
				//Não permite números iguais
				if (parseInt(entrada[i].value) == parseInt(entrada[j].value)){
					entrada[i].value = '';
				}
			}
		}
		
		//Os números devem ser entre 1 e 9 apenas
		if(entrada[i].value < 0 || entrada[i].value > 9){
			entrada[i].value = '';
		}
	}
}

/*
* Finalizando o jogo
*/
function finalizar() {
	
	//Verifica se a soma das direções (vertical, horizontal e vertical) são iguais a 15
	if(
		(parseInt(entrada[0].value) + parseInt(entrada[1].value) + parseInt(entrada[2].value) == 15) &&
		(parseInt(entrada[3].value) + parseInt(entrada[4].value) + parseInt(entrada[5].value) == 15) &&
		(parseInt(entrada[6].value) + parseInt(entrada[7].value) + parseInt(entrada[8].value) == 15) &&
		
		(parseInt(entrada[0].value) + parseInt(entrada[3].value) + parseInt(entrada[6].value) == 15) &&
		(parseInt(entrada[1].value) + parseInt(entrada[4].value) + parseInt(entrada[7].value) == 15) &&
		(parseInt(entrada[2].value) + parseInt(entrada[5].value) + parseInt(entrada[8].value) == 15) &&
		
		
		(parseInt(entrada[0].value) + parseInt(entrada[4].value) + parseInt(entrada[8].value) == 15) &&
		(parseInt(entrada[6].value) + parseInt(entrada[4].value) + parseInt(entrada[2].value) == 15)
		
	){
		alert("Parabéns!!! Você acertou.");
		for (i = 0; i < entrada.length; i++) {
			entrada[i].value = '';
		}
	}else{
		alert("Desculpe. Infelizmente você errou.\nVeja o exemplo a seguir.");
		
		//Se não for, um exemplo é esboçado
		entrada[0].value = 2;
		entrada[1].value = 9;
		entrada[2].value = 4;
		
		entrada[3].value = 7;
		entrada[4].value = 5;
		entrada[5].value = 3;
		
		entrada[6].value = 6;
		entrada[7].value = 1;
		entrada[8].value = 8;
		
	}
}