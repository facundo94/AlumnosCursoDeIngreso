/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

function comenzar()
{
	
eleccionMaquina=Math.floor(Math.random()*(4-1)+1);
}//FIN DE LA FUNCIÓN
function piedra()
{
	comenzar();

	switch(eleccionMaquina){
		case 1:
			alert("La maquina eligio piedra: empate!");
			break;
		case 2:
			alert("La maquina eligio tijera: perdiste");
			break;
		case 3:
			alert("La maquina eligio tijera: ganaste");
			break;
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	comenzar();

	switch(eleccionMaquina){
		case 1:
			alert("La maquina eligio piedra: ganaste");
			break;
		case 2:
			alert("La maquina eligio papel: empate");
			break;
		case 3:
			alert("La maquina eligio tijera: perdiste");
			break;
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	comenzar();

	if (eleccionMaquina==1) {
		alert("La maquina eligio piedra: perdiste");

	}
	else if(eleccionMaquina==2){
		alert("La maquina eligio papel: ganaste");
	}
	else{
		alert("La maquina eligio tijera: empate");
	}

}//FIN DE LA FUNCIÓN