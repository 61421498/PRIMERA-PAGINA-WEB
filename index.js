//veremos que tal//
// })
// function mostrar nombre(){
//     if(){
//         for(){

//         }
//     }
// }

function alerta(){
    alert('VAMOS EQUIPO');    
}
        //Declara una variable llamada valor1 del tipo numerica
        var valor1 = 10;
        //Declara una variable llamada valor2 del tipo numerica 
        var valor2 = 30;
        //Realiza un calculo
        var calculo = valor1/2 + valor2*5 - 100;
        //Escribe el resultado del calculo en la pagina web
        document.getElementById('resultado').innerHTML="Resultado: "+calculo;
        //Declarar una variable tipo arreglo (array)
            //Camel case
            var NumerosAscendentes = [3000,3020,3030,3040]

            var $SumadeNumerosAscendentes = listaNumeros[1] + listaNumeros[2] + listaNumeros[0] + listaNumeros[3];

            document.getElementById('resultadosuma').innerHTML="el resultado de la suma es" + $SumadeNumerosAscendentes;

funtion Mensajesuma(){
    if($SumadeNumerosAscendentes == 12090)
    alert("el resultado de la suma correcta" + $SumadeNumerosAscendentes);
}else
{
    alert("el resultado de la suma incorrecto"+$SumadeNumerosAscendentes)
}
var objProducto = {
         code: "001",
         name: "PC"
         price: 5000.00,
         color:{"plomo","negro","led"},
         showPriceIGV: function(){
             return this.price*0.18;
         }
 }
    
 funtion _SumaNumeros (nu1, nu2){
     var $sumaTotal = nu1 + nu2;
     alert("La suma de los numeros es: " + $sumaTotal)

 }  

 document.addEventListener('DOMContentLoaded', () => {
     fetchdata()
 })
 const fetchdata = async () => {
     try {
         const.log(data)
    } catch (error) {
        console.log(error)
    }
 }