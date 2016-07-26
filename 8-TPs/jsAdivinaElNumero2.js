/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos=0;
var numeroJugador;

function comenzar()
{
	contadorIntentos=0;
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto= Math.floor(Math.random()*(101-1)+1);
		//alert(numeroSecreto );
	alert(numeroSecreto);

}

function verificar()
{
	numeroJugador= document.getElementById("numero").value;

	if (numeroJugador<numeroSecreto) {
		contadorIntentos++;
		alert("Falta para llegar");
	}
	else if(numeroJugador>numeroSecreto){
		contadorIntentos++;
		alert("Te pasaste");
	}
	else {
		contadorIntentos++;
		
		if (contadorIntentos==1) {
			alert("Usted es un psiquico");
		}
		else if (contadorIntentos==2) {
			alert("excelente percepción");
		}
		else if (contadorIntentos==3) {
			alert("esto es suerte");
		}
		else if(contadorIntentos==4) {
			alert("Excelente técnica");
		}
		else if (contadorIntentos==5) {
			alert("usted está en la media");
		}
		else if (contadorIntentos<=10) {
			alert("falta técnica");
		}
		else{
			alert("afortunado en el amor!!");
		}
	}
	
	document.getElementById("intentos").value=contadorIntentos;
}