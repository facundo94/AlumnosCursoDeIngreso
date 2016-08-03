/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso()
{
 	var edad=0;
 	var sexo;
 	var estadoCivil=0;
 	var sueldo=0;
 	var legajo=0;
 	var nacionalidad;

 	while(edad<18 || edad>90){
 		edad=parseInt(prompt("Ingrese su edad"));
 	}

 	while(sexo!= "M" && sexo!="F"){
 		sexo=prompt("Indique sexo");
 	}
 	while(estadoCivil<1 || estadoCivil>4){
 		estadoCivil=parseInt(prompt("Estado civil"));
 	}
 	while(sueldo<8000){
 		sueldo=parseInt(prompt("Ingrese su sueldo"));
 	}
 	while(legajo<1000 || legajo>9999){
 		legajo=parseInt(prompt("Ingrese el legajo"));
 	}
 	while(nacionalidad != "A" && nacionalidad!="E" && nacionalidad!="N"){
 		nacionalidad=prompt("Indique su nacionalidad");
 	}

 	switch(sexo){
 		case "M":
 			sexo="masculino";
 			break;
 		case "F":
 			sexo="femenino";
 			break;
 	}

 	switch(estadoCivil){
 		case 1:
 			estadoCivil="solerto";
 			break;
 		case 2:
 			estadoCivil="casado";
 			break;
 		case 3:
 			estadoCivil="divorciado";
 			break;
 		case 4:
 			estadoCivil="viudo";
 			break;
 	}
 	switch(nacionalidad){
 		case "A":
 			nacionalidad="argentino";
 			break;
 		case "E":
 			nacionalidad="extranjero";
 			break;
 		case "N":
 			nacionalidad="nacionalizado";
 			break;
 	}
 	document.getElementById("Edad").value=edad;
 	document.getElementById("Sexo").value=sexo;
 	document.getElementById("EstadoCivil").value=estadoCivil;
 	document.getElementById("Sueldo").value=sueldo;
 	document.getElementById("Legajo").value=legajo;
 	document.getElementById("Nacionalidad").value=nacionalidad;

}
