/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var temporizador;
var respuesta;
var numeroUno;
var numeroDos;
var operacion;
var operador;

function temp(){
	alert("se termino el tiempo");
	clearInterval(temporizador);
	comenzar();
} 

function comenzar()
{
	numeroUno= Math.floor(Math.random()*(11-1)+1);
	numeroDos= Math.floor(Math.random()*(11-1)+1);
	operacion= Math.floor(Math.random()*(5-1)+1);


	switch(operacion){
		case 1:
			operador="mas";
			operacion= numeroUno+numeroDos;
			break;
		case 2:
			operador="menos";
			operacion= numeroUno-numeroDos;
			break;
		case 3:
			operador="por";
			operacion= numeroUno*numeroDos;
			break;
		case 4:
			operador="dividido";
			operacion=numeroUno/numeroDos;
			break;
	}

	document.getElementById("PrimerNumero").value=numeroUno;
	document.getElementById("Operador").value=operador;
	document.getElementById("SegundoNumero").value=numeroDos;
	
	temporizador= setInterval(temp, 10000);
}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=document.getElementById("Respuesta").value;

	if(respuesta==operacion){
		alert("correcto!");
		clearInterval(temporizador);
		comenzar();
	}
	else{
		alert("incorrecto!");
	}

	

}

//FIN DE LA FUNCIÓN