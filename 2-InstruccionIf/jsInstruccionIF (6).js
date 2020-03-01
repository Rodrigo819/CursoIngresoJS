function mostrar()
{
//tomo la edad  
var edad

edad = document.getElementById("edad").value;
if (edad >=18){
    console.log("Usted es mayor")
}
else if (edad <=17 && edad >= 13){
    console.log("Usted es un adolescente");
} 
else if (edad <= 12){
    console.log("Usted es un niño");
}


}//FIN DE LA FUNCIÓN