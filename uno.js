/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad; 
	let respuesta="s";
	let contMujeres = 0;
	let edadPromedio = 0;
	let mayorpeso = 0;
	let nombremayor ;
	let flag1 = 0;
	
	for (i = 0; i < 5; i++) {

        do {
            nombre = prompt("Ingresar Nombre: \n Sólo caracteres")
        } while (!(isNaN(nombre)));
        do {
            peso = parseFloat(prompt("Ingrese peso:  "));
        } while (!(peso>0));
        do {
            sexo = prompt("Ingrese sexo: \n (m/f)")
        } while (!(sexo == "m" || sexo == "f"));
        do {
            edad = parseInt(prompt("Ingrese edad"));
        } while (!(edad > 0));
		if (sexo == "f") {
			contMujeres++;
		} else {
			if (flag1==0|| mayorpeso<peso) {
				mayorpeso=peso;
				nombremayor=nombre;
				flag1=1;

			}
		}

		edadPromedio += edad;
		
		      

	}
	edadPromedio = (edadPromedio/5).toFixed(2);

	document.write("La cantidad de mujeres es: " + contMujeres + "<br>");
	document.write("El promedio de edad es: " + edadPromedio + "<br>");
	document.write("El hombre mas pesado es: " + nombremayor +"Y su peso es: "+ mayorpeso+ "<br>");

}
