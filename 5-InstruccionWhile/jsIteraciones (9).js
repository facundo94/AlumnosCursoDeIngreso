function Mostrar()
{
	var max;
	var min;
	var respuesta='si';
	var contador=0;

	while(true)
	{
		
		respuesta= prompt("Ingrese los números");

		if (respuesta== "no") {
			break;
		}

		else{
			contador ++;
			respuesta=parseInt(respuesta);

			if (contador==1) {
				max=respuesta;
				min=respuesta;

			}
			else{
				if(respuesta>max){
					max=respuesta;
				}
				if (respuesta<min) {
					min=respuesta;
				}
			}
		}
		
	
	}

	document.getElementById("maximo").value=max;
	document.getElementById("minimo").value=min;


}//FIN DE LA FUNCIÓN