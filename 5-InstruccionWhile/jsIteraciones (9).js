function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	var acumulador;
	var respuesta='si';
	var primeraVez = true
	
	while(respuesta!='no')
	{
		while(confirm("¿Desea continuar?"));
		var numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		while(isNaN(numero)){
			numero = prompt("Ingrese un numero valido");
	        numero = parseInt(numero);
		}
	
	if(primeraVez){
		primeraVez = false;
		maximo = numero;
		minimo = numero;
	} else{

	}if (numero > maximo){
			maximo = numero
		}
		if (numero <minimo){
			minimo = numero
		}
	}
document.getElementById("maximo").value;
document.getElementById("minimo").value;
}//FIN DE LA FUNCIÓN