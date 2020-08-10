/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, 
precio, 
peso en kilogramos,
 tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/
function mostrar() {
  let precio;
  let marca;
  let peso;
  let tipo;
  let respuesta = "s";
  let acumPeso = 0;
  let flag1 = 0;
  let liquidoCaro;
  let marcaCara;
  let bandera = 0;
  let solidoBarato = 0;
  let marcaBarato;
  do {
    do {
      marca = prompt("Ingrese marca \n solo caracteres");
    } while (!(isNaN(marca)));
    do {
      precio = (parseFloat(prompt("Ingrese precio: ")));
    } while (!(precio > 0) && isNaN(precio));
    do {
      peso = parseFloat(prompt("Ingrese peso: "));
    } while (!(peso > 0));
    do {
      tipo = prompt("Ingrese tipo : \n (solido o liquido)");
    } while (!(tipo == "liquido" || tipo == "solido"));


    respuesta = prompt("desea continuar? s/n");

    acumPeso += peso;
    if (tipo == "liquido") {
      if (flag1 == 0 || liquidoCaro < precio) {
        liquidoCaro = precio;
        marcaCara = marca;
        flag1 = 1;
      }
    } else {
      if (bandera == 0 || solidoBarato > precio) {
        solidoBarato = precio;
        marcaBarato = marca;
        bandera = 1;
      }
    }
  } while (respuesta == "s");
  document.write("El Peso total de la compra es: " + acumPeso + "<br>");
  if (flag1 == 0) {
    document.write("No Ingresó ningún liquido" + "<br>");
  } else {
    document.write("La marca más cara de todos los líquidos es " + marcaCara + "  Con $ " + liquidoCaro + "<br>");
  }
  if (bandera == 0) {
    document.write("No Ingresó ningún sólido" + "<br>");
  } else {
    document.write("La marca más  barata de todos los sólidos es " + marcaBarato + "  Con $ " + solidoBarato + "<br>");
  }
}
