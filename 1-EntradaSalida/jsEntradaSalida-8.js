/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numero;
	var numeros;
	var num1;
	var num2;
	var resultado;

	numero= document.getElementById("numeroDividendo").value;
	numeros= document.getElementById("numeroDivisor").value;

	num1= parseInt(numero);
	num2= parseInt(numeros);
	
	resultado= num1%num2;

	alert("EL resto es "+resultado);
}
