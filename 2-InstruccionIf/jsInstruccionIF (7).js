function Mostrar()
{
//tomo la edad  
	var edad;
	var estado;

	edad= document.getElementById("edad").value;
	estado= document.getElementById("estadoCivil").value;
	edad=parseInt(edad);
	
	if (edad < 18 && estado != "Soltero") 
	{
		alert("Eres muy pequeño para NO ser soltero");
	}


}//FIN DE LA FUNCIÓN