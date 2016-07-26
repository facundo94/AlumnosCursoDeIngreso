/*Ahora debemos informar cuantas veces se ganó,
 perdió o empató desde la última recarga de página.*/

var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
eleccionMaquina=Math.floor(Math.random()*(4-1)+1);
}//FIN DE LA FUNCIÓN
function piedra()
{
	comenzar();

		switch(eleccionMaquina){
			case 1:
				alert("empate");
				ContadorDeEmpates++;
				break;
			case 2:
				alert("perdiste");
				ContadorDePerdidas++;
				break;
			case 3:
				alert("ganaste");
				ContadorDeGanadas++;
				break;
		}

		mostarResultado()
}//FIN DE LA FUNCIÓN
function papel()
{
	comenzar();

	switch(eleccionMaquina){
		case 1:
			alert("ganaste");
			ContadorDeGanadas++;
			break;
		case 2:
			alert("empate");
			ContadorDeEmpates++;
			break;
		case 3:
			alert("perdiste");
			ContadorDePerdidas++;
			break;
	}

	mostarResultado()


}//FIN DE LA FUNCIÓN
function tijera()
{
	comenzar();

	switch(eleccionMaquina){
		case 1:
			alert("perdiste");
			ContadorDePerdidas++;
			break;
		case 2:
			alert("ganaste");
			ContadorDeGanadas++;
			break;
		case 3:
			alert("empate");
			ContadorDeEmpates++;
			break;
	}

	mostarResultado()

}//FIN DE 

function mostarResultado()
{

	document.getElementById("empatadas").value=ContadorDeEmpates;
	document.getElementById("ganadas").value=ContadorDeGanadas;
	document.getElementById("perdidas").value=ContadorDePerdidas;

}