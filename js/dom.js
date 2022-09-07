let mensajes=["Hola!","Hello","Bonjour","Hallo","Olá","Ciao"];
let rand = Math.floor(Math.random()*mensajes.length);
let rValue =mensajes[rand];

let parrafo =document.createElement("p");
parrafo.innerHTML="<h1>"+ rValue+"</h1>";
document.body.append(parrafo);



