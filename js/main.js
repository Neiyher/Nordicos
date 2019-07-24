// var x =30;
// console.log("el valor de x es ",x)
// alert("el valo de x es: "+x);

// console.log(Math.min(4, 8, 9)+100);

// confirm("¿emtonces, deberiamos?");

// prompt("Tell me everything you know","...");



/*var nombre=prompt("ingrese nombre: ","...");

var edad=prompt("ingrese edad: ","...");

var grado=prompt("ingrese grado escolar : ","...");
console.log(nombre);
console.log(edad);
console.log(grado);

var mate1=prompt("ingrese el nombre materia 1: ","...");

//var m1c1=prompt("ingrese nota#1 de materia 1: ","...");
//var m1c2=prompt("ingrese nota#2 de materia 1: ","...");
//var m1c3=prompt("ingrese nota#3 de materia 1: ","...");

var m1c1=parseInt (prompt("ingrese nota#1 de "+mate1+" ","..."));
var m1c2=parseInt (prompt("ingrese nota#1 de "+mate1+" ","..."));
var m1c3=parseInt (prompt("ingrese nota#1 de "+mate1+" ","..."));
var promedio=(m1c1+m1c2+m1c3)/3;



alert("el promdio de la materia1: "+promedio);

if(promedio==5){
    alert("Felicitacion se gano un litro de frutiño");
}else if(calfin>3){
    alert("Gano un BoneIce")
}else {alert("perdio, ni bolis")}
//////////////////////////////////////////////////////////////////////////

var mate2=prompt("ingrese el nombre materia 2: ","...");

var m2c1=parseFloat (prompt("ingrese nota#1 de "+mate2+" ","..."));
var m2c2=parseFloat (prompt("ingrese nota#2 de "+mate2+" ","..."));
var m2c3=parseFloat (prompt("ingrese nota#3 de "+mate2+" ","..."));
var m2c4=parseFloat (prompt("ingrese nota#4 de "+mate2+" : ","..."));

var calfin2=parseFloat((m2c1*0.25)+(m2c2*0.25)+(m2c3*0.25)+(m2c4*0.25));

alert("calificacion final "+calfin2);

if(calfin2==5){
    alert("Felicitacion se gano un litro de frutiño");
}else if(calfin2>3){
    alert("Gano un BoneIce")
}else{alert("perdio, ni bolis")}
//////////////////////////////////////////////////////////////////////////////////
var mate3=prompt("ingrese el nombre materia 3: ","...");

var m3c1=parseFloat (prompt("ingrese nota#1 de "+mate3+": ","..."));
var m3c2=parseFloat (prompt("ingrese nota#2 de "+mate3+": ","..."));
var m3c3=parseFloat (prompt("ingrese nota#3 de "+mate3+": ","..."));
var m3c4=parseFloat (prompt("ingrese nota#4 de "+mate3+": ","..."));
var m3c5=parseFloat (prompt("ingrese nota#5 de "+mate3+": ","..."));
var m3c6=parseFloat (prompt("ingrese nota#6 de "+mate3+": ","..."));

var calfin3=((m3c1*0.125)+(m3c2*0.125)+(m3c3*0.125)+(m3c4*0.125)+(m3c5*0.25)+(m3c6*0.25));

alert("calificacion final "+calfin2);

if(calfin3==5){
    alert("Felicitacion se gano un litro de frutiño");
}else if(calfin3>3){
    alert("Gano un BoneIce")
}else{alert("perdio, ni bolis")}
//////////////////////////////////////////////////////////////////////////////////////
var mate4=prompt("ingrese el nombre materia 4: ","...");

var m4c1=parseFloat (prompt("ingrese nota#1 de "+mate4+": ","..."));
var m4c2=parseFloat (prompt("ingrese nota#2 de "+mate4+": ","..."));
var m4c3=parseFloat (prompt("ingrese nota#3 de "+mate4+": ","..."));
var m4c4=parseFloat (prompt("ingrese nota#4 de "+mate4+": ","..."));
var m4c5=parseFloat (prompt("ingrese nota#5 de "+mate4+": ","..."));

var m4cf1=((m4c1*0.333)+(m4c2*0.333)+(m4c3*0.333));

var m4cf2=((m4c4*0.25)+(m4c5*0.25))+(m4cf1*0.5);
alert(m4cf2);
if(m4cf2==5){
    alert("Felicitacion se gano un litro de frutiño");
}else if(m4cf2>3){
    alert("Gano un BoneIce")
}else{alert("perdio, ni bolis")}*/

//-----------------------------------------------------------------------------------------

//Ejercicio 2

var num1=parseFloat (prompt("ingrese el primer numero: ","..."));
var num2=parseFloat (prompt("ingrese el segundo numero: ","..."));

if(num1>num2){
    var sum=(num1+num2);
    var res=(num1-num2);
    alert("la suma es: "+sum);
    alert("la resta es: "+res);
}else{
    var mul=(num1*num2);
    var div=(num1/num2);
    alert("la multiplicacion es: "+mul);
    alert("la division es: "+div);
}