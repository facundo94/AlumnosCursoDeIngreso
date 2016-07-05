function Mostrar()
{
//tomo la edad  

var edad;

edad=document.getElementById("edad").value;
edad=parseInt(edad);

	if (edad >= 18) 
	{
		alert("Eres mayor de edad");
	}

}//FIN DE LA FUNCIÓN