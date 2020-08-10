/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,
lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar() {
	let sexo;
	let lugar;
	let temporada;
	let cantidad;
	let respuesta = "s";
	let contBar = 0;
	let contCat = 0;
	let contSal = 0;
	let flag1 = 0;
	let sexoPasajeros;
	let masPasajeros = 0;
	let acumInv = 0;
	let contInv = 0;

	do {
		do {
			sexo = prompt("Ingrese sexo del titular: \n (f/m)");
		} while (!(sexo == "f" || sexo == "m"));
		do {
			lugar = prompt("Ingrese lugar de destino: \n (bariloche/salta/cataratas)");
		} while (!(lugar == "bariloche" || lugar == "cataratas" || lugar == "salta"));
		do {
			temporada = prompt("En que temporada desea ir ? \n (Verano/primavera/otoño/Invierno) ");

		} while (!(temporada == "verano" || temporada == "otoño" || temporada == "primavera" || temporada == "invierno"));
		do {
			cantidad = parseInt(prompt("Ingrese cantidad: "))
		} while (!(cantidad > 0));
		respuesta = prompt("Desea continuar? s/n");

		// a)el lugar más elegido
		if (lugar == "bariloche") {
			contBar++;
		} else if (lugar == "cataratas") {
			contCat++;
		} else {
			contSal++;
		}

		if (flag1 == 0 || masPasajeros < cantidad) {
			masPasajeros = cantidad;
			sexoPasajeros = sexo;
			flag1 = 1;
		}

		if (temporada == "invierno") {
			acumInv += cantidad;
			contInv++;
		}

	} while (respuesta == "s");

	//a)
	if (sexoPasajeros = "f") {
		sexoPasajeros = "Femenino";
	} else {
		sexoPasajeros = "Masculino";
	}
	
	if (contBar > contCat && contBar > contSal) {
		alert("El lugar mas elegido es Bariloche");
	} else if (contCat >= contBar && contCat > contSal) {
		prompt("El lugar mas elgido es Cataratas");
	} else {
		alert("El lugar mas elegido es Salta");
	}
	
	alert("El sexo que lleva más pasajeros es: " + sexoPasajeros + " con " + masPasajeros);
	if (acumInv != 0) {
		acumInv = acumInv / contInv;
		alert("El promedio de personas que viajan en invierno es: "+ acumInv);
	} else {
		alert("No viajan personas en Invierno");
	}
}
