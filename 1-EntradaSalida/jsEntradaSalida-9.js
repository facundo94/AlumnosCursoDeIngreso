/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
	var num1;
	var resultado;

	sueldo= document.getElementById("sueldo").value;
	num1= parseInt(sueldo);
	resultado= num1+num1*10/100;
	
	document.getElementById("resultado").value= resultado;

}
