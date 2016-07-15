function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numeros;

while(contador>=0){

		numeros=prompt("Ingrese los números");

		if(numeros!="si"){
			numeros= parseInt(numeros);
			contador= contador+1;
			acumulador= acumulador+numeros;
		}
		else{
			break;
		}

	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN