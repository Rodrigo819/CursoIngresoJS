function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var acumulador;
	
	var respuesta='si';
	do{
		while(confirm("¿Agregar numeros?"))
		numero = prompt("¿Quiere agregar algun numero?");
		numero = parseInt(numero);
		if (numero > 0)
		positivo = parseInt(positivo);
		positivo += numero
	}
	else{
	}
/*
while(confirm("Quiere agregar algun numero")){
	numero = prompt("Ingrese un numero");
	numero = parseInt(numero);

	if (numero >0){
		positivo = parseInt(positivo);
		positivo += numero;
	}	
	else{
		negativo = parseInt(negativo);
		negativo *= numero;
	}
	while(isNaN(numero)){
	numero = prompt("Ingrese un numero valido");
	numero = parseInt(numero);

}	
contador++;
acumulador += numero;
}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN