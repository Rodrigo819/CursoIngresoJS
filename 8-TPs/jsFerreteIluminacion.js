/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var Cantidad
    var Marca
    var descuento
    var lámparas
    lámparas = (lámparas *35)
     Cantidad = document.getElementById("Cantidad").value;
     Marca = document.getElementById("Marca").value;
     precioDescuento = document.getElementById("precioDescuento").value;
//para el descuento

    if(lámparas >= 6){
        descuento = 0.5
    }else if(Cantidad == 5 && Marca == "ArgentinaLuz"){
        descuento = 0.4;
    }else if (Cantidad == 5){
        descuento = 0.3
    }else if (Cantidad == 4 && marca ==("ArgentinaLuz"||"FelipreLámparas")){
        descuento = 0.25
    }else if (Cantidad == 3 && Marca == "ArgentinaLuz"){
        descuento = 0.15
    }else if (Cantidad == 3 && Marca == "FelipeLámparas"){
        descuento =0.1
    }else if (Cantidad == 3){
        descuento == (lámparas * 35) 
    }
    descuento = (cantidad * lámparas)* 0.5;
    //precio con descuento

    //impuesto

}
