/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero;
	var numeros;
	var num1;
	var num2;
	var resultado;

	numero= document.getElementById("numeroUno").value;
	numeros= document.getElementById("numeroDos").value;

	num1= parseInt(numero);
	num2= parseInt(numeros);
	
	resultado= num1+num2;

	alert("La suma es "+resultado);
}

