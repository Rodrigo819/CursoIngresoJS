function mostrar()
{

	var contador=0;
	// declarar variables
	var maximo;
	var minimo;
	
	var respuesta='si';

	while(respuesta!='no')
	{
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
	
	}




}//FIN DE LA FUNCIÓN