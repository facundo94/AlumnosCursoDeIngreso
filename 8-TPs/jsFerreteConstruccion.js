/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var result;

	largo=parseInt( document.getElementById("Largo").value);
	ancho=parseInt( document.getElementById("Ancho").value);
	result= (largo+ancho)*6;

	alert(result);

}
function Circulo () 
{
	
	var radio;
	var result;

	radio=parseInt( document.getElementById("Radio").value);
	result= (radio*2*3.14)*3;

	alert(result);

}
function Materiales () 
{
	var largo;
	var ancho;
	var result;
	var cal;
	var cemento;

	largo=parseInt( document.getElementById("Largo").value);
	ancho=parseInt( document.getElementById("Ancho").value);
	result= largo*ancho;
	cal= largo*ancho*3;
	cemento= largo*ancho*2;

	alert(result+" se necesitan "+cemento+" bolsas de cemento y "+cal+" bolsas de cal.");
}