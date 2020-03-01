function mostrar()
{
//tomo la edad  
var edad
var estadoCivil

edad = document.getElementById("edad").value;
estadoCivil = document.getElementById("estadoCivil").value;

console.log(edad , estadoCivil)
if (edad < 18 && estadoCivil != "Soltero"){
    alert("Es muy pequeño para NO ser soltero")
}
edad = document.getElementById("edad").value;
if (edad >=13 || edad <=17) {
    console.log ("ustede es un adolescente");
}

}//FIN DE LA FUNCIÓN