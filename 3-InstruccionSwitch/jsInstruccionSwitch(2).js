function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case"Julio":
    alert("Abrigate que hace frio");
    break;
    case"Agosto":
    alert("Abrigate que hace frio");
    case"Enero":
    case"Febrero":
    case"Marzo":
    case"Abril":
    case"Mayo":
    case"Junio":
    alert("Falta para el invierno");
    default:
    alert("Ya pasamos el frio, ahora calor!!")


}
alert (mesDelAño);




}//FIN DE LA FUNCIÓN