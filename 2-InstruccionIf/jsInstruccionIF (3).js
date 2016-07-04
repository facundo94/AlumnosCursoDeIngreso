function Mostrar()
{
//tomo la edad  

	var edad;
	var result;

	edad= document.getElementById("edad").value;
	result= parseInt(edad);

	if (edad >= 18) 
	{
		alert("eres mayor de edad");
	}
	else
	{
		alert("eres menor de edad");
	}

}//FIN DE LA FUNCIÓN