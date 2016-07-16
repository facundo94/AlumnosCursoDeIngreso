function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

while(respuesta!="no"){

		respuesta=prompt("Ingrese los números");

		if(respuesta!="no"){
			respuesta= parseInt(respuesta);
			contador= contador+1;
			acumulador= acumulador+respuesta;
		}
		else if(isNaN(resppuesta)){
			
		}
		else{
			break;
		}

	}
	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN