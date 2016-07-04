/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var sueldo;
	var num1;
	var resultado;

	sueldo= document.getElementById("importe").value;
	num1= parseInt(sueldo);
	resultado= num1-num1*25/100;
	
	document.getElementById("resultado").value= resultado;
}
