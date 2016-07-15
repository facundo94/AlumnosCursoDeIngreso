function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';
	var numeros;

while(contador>=0){

		numeros=prompt("Ingrese los números");
		numeros= parseInt(numeros);

		if(numeros!="si" && numeros >0){
			contador= contador+1;
			positivo= positivo+numeros;
			
		}

		else if(numeros!="si" && numeros <0){
			contador= contador+1;
			negativo= negativo*numeros;

		}

		else{
			break;
		}
		document.getElementById('suma').value=positivo;
		document.getElementById('producto').value=negativo;
	}
}//FIN DE LA FUNCIÓN