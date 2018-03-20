var bombarray = [];
for (var i = 0; i < 16; i++) {
  do {
    var number = Math.floor((Math.random() * 100) + 1);
  } while (bombarray.includes(number)==true)
  bombarray.push(number)
}
alert (bombarray[0])
var cont = 0
do {
  var guess = parseInt(prompt ("Inserisci un numero"))
  cont++;
} while ((bombarray.includes(guess)==false) && (cont<84))

if (cont==84) {
  alert ("Hai stravinto!")
}
else {
  alert ("Hai perso " +cont)
}
