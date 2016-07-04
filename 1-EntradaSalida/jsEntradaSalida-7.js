/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
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

function restar()
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
	
	resultado= num1-num2;

	alert("La resta es "+resultado);
}

function multiplicar()
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
	
	resultado= num1*num2;

	alert("La multiplicacion es "+resultado);
}

function dividir()
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
	
	resultado= num1/num2;

	alert("La divicion es "+resultado);
}

