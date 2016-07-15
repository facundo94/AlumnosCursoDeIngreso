function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeros;
	
	while(contador <5){
		numeros= parseInt(prompt("Ingrese los números"));
		contador= contador+1;
		acumulador= acumulador+numeros;
		
	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;
}//FIN DE LA FUNCIÓN