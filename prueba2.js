// let cards = ['̶(̶\̶_̶█̶_̶/̶)̶', '♣', '♦', '♠'];
// let numbers = ['2200', '3200', '4500', '6700', '1200', '300', '120', '180', '912', '1000', '1100', '128', '1231']; 


// function displayCard() {
//   let singleCard = cards[Math.floor(Math.random() * cards.length)];
//   let singleNumber = numbers[Math.floor(Math.random() * numbers.length)];
//   let showCard = `${singleNumber}   ${singleCard}`;
//   document.getElementById("showning").style.background = '#0accff';
//   document.getElementById("showning").innerHTML = showCard;

// }


var vaedad = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
var $vaedad = listaNumeros[6] + listaNumeros[10]
document.getElementById('resultadosuma').innerHTML="el resultado de la suma es" + $vaedad;

funtion Mensajesuma(){
  if($vaedad == 16)
  alert("el resultado de la suma correcta" + $vaedad);
}
funtion _SumaNumeros (nu1, nu2){
  var $sumaTotal = nu1 + nu2;
  alert("La suma de los numeros es: " + $sumaTotal)

}  