/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
function comenzar()
{
	ColorSecreto= Math.floor(Math.random()*(7-1)+1);
	 switch(ColorSecreto){
	 	case 1:
	 		ColorSecreto="Rojo";
	 		document.getElementById("ColorElejido").value=ColorSecreto;
	 		break;
	 	case 2:
	 		ColorSecreto="Azul";
	 		document.getElementById("ColorElejido").value=ColorSecreto;
	 		break;
	 	case 3:
	 		ColorSecreto="Celeste";
	 		document.getElementById("ColorElejido").value=ColorSecreto;
	 		break;
	 	case 4:
	 		ColorSecreto="Amarillo";
	 		document.getElementById("ColorElejido").value=ColorSecreto;
	 		break;
	 	case 5:
	 		ColorSecreto="Marron";
	 		document.getElementById("ColorElejido").value=ColorSecreto;
	 		break;
	 	case 6:
	 		ColorSecreto="Verde";
	 		document.getElementById("ColorElejido").value=ColorSecreto;
	 		break;
	 }
	

}//FIN DE LA FUNCIÓN
function Responder(colorParametro)
{
	switch(ColorElejido){
		case rojo:
	}
	
	


}//FIN DE LA FUNCIÓN
