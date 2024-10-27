// creo la variable donde va a estar asignado el numero a adivinar
let numerosecreto = 7;

//creo la variable adivinanza donde el usuario ingresa el numero
let adivinanza = parseInt(prompt("ingrese el numero (entre 1 y 10)"));

//comparo el numero con el numero secreo con las condicionales
if(adivinanza === numerosecreto){
    alert("correcto! adivinaste el número,");
}else  if (adivinanza > numerosecreto){
    alert("demaciado alto, intentalo con un numero menor,");

}else {
    alert("demaciado bajo, intentalo con un numero menor,");

}
