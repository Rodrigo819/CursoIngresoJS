function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch (mesDelAño) {
    case "Enero":
        mensaje = "que comiences bien el año!!!."
        break;
    case "Marzo":
        mensaje = "a clases!!!"
        break;
    case "Diciembre":
        mensaje = "Felices fiesta!!!"
        break;
}
console.log(mensaje)

}//FIN DE LA FUNCIÓN