function Mostrar()
{

	var contador=0;
	var sumaNeg=0;
	var sumaPos=0;
	var cantNeg=0;
	var cantPos=0;
	var cantCeros=0;
	var cantPares=0;
	var promPos=0;
	var promNeg=0;
	var dif=0;
	var respuesta="si";

	while(respuesta!="no")
	{
		respuesta=prompt("Ingrese los nmumeros");
		if (respuesta=="no") {
			break;
		}
		else{
			contador++;
			respuesta=parseInt(respuesta);

			if ((respuesta%2)==0) {
				cantPares++;
			}

			if (respuesta<0) {
				cantNeg++;
				sumaNeg= sumaNeg+respuesta;
				promNeg= sumaNeg/cantNeg;
			}
			else if (respuesta==0){
				cantCeros++;
			}
			else{
				cantPos++;
				sumaPos= sumaPos+respuesta;
				promPos=sumaPos/cantPos;
			}
		}
	
	}

	dif=sumaPos+sumaNeg;
	document.write("Cantidad de positivos: "+cantPos);
	document.write("Suma de positivos: "+sumaPos);
	document.write("Promedio de positivos: "+promPos);
	document.write("Cantidad de negativos: "+cantNeg);
	document.write("Suma de negativos: "+sumaNeg);
	document.write("Promedio de negativos: "+promNeg);
	document.write("Cantidad de ceros: "+cantCeros);
	document.write("Cantidad de pares: "+cantPares);
	document.write("Diferencia entre pos y neg: "+dif);



}//FIN DE LA FUNCIÓN