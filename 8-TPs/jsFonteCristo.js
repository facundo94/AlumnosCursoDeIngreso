/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

	
var numero;
var contador=0;
var cantPares=0;
var cantImp=0;
var cantDiv=0;
var primo=0;
var primos=0;

function ComenzarIngreso () 
{
	NumerosPares()
	NumerosImpares()
	NumerosDivisibles()

}

function NumerosPares()
{
	numero=parseInt(document.getElementById("numero").value);

	while(numero>1){
 		
 		if (numero%2==0) {
 			cantPares++;
 		}

 		numero--;
 	}

 	alert("Numero pares "+cantPares);
}

function NumerosImpares() 
{
	numero=parseInt(document.getElementById("numero").value);

 	while(numero>=1){

 		if(numero%2==1){
 			cantImp++;
 		}

 		numero--;
 	}

 	alert("Numero Impares "+cantImp);
}

function NumerosDivisibles()
{
 	numero=parseInt(document.getElementById("numero").value);
 	contador=0;

	while(contador<100){

 		if (numero%contador==0) {
 			cantDiv++;
 		}
 		contador++;
 	}

 	alert("Numeros divisibles "+cantDiv);
}

function VerificarPrimo()
{
	numero=parseInt(document.getElementById("numero").value);
	conador=0;
	primo=0;

	while(contador<numero){
		contador++;

		if (numero%contador==0){
			primo++;
		}
	}

	if(primo>2){
		alert("No es primo");
	}
	else{
		alert("Es primo");
	}
}
