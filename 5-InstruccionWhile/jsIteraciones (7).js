function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	
while(confirm("Quiere agregar algun numero")){
	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);
while(isNaN(numero)){
	numero = prompt("Ingrese un numero valido");
	numero = parseInt(numero);

}	
contador++;
acumulador += numero;
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN