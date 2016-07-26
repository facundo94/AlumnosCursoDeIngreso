/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var numeroUno;
var numeroDos;
var operacion;
var operador;

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
	
}//FIN DE LA FUNCIÓN
function Responder()
{
	respuesta=document.getElementById("Respuesta").value;

	if(respuesta==operacion){
		alert("correcto!");
		comenzar();
	}
	else{
		alert("incorrecto!");
	}
	

}//FIN DE LA FUNCIÓN
