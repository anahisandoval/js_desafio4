/*Representacion de turnos de una sala de ensayo
Los turnos son sabados y domingos desde las 14hs hasta las 18 hs. Cada turno es de 2 horas
0 significa libre, 1 es ocupado*/

//Array que representa los turnos de los dias sábado y domingo
//Se agregó una nueva funcionalidad en el menú para seleccionar el horario o que la aplicacion de el primer horario dispobible
//

//const dias=[0,0,0,0,0,0];
//const horario=["Sábado 14 hs","Sábado 16 hs","Sábado 18 hs","Domingo 14 hs","Domingo 16 hs","Domingo 18 hs"];


//array que contendrá los horarios de la sala
const l_horarios=[]; 
//Constructor del objeto horario
class Horario {
    constructor(dia, hora, ocupado) {
        this.dia = dia;
        this.hora = hora;
        this.ocupado = ocupado;
    }
}

function inicializar_turnos(){
    const turno1 = new Horario("Sábado","14 hs",0);
    l_horarios.push(turno1);
    const turno2 = new Horario("Sábado","16 hs",0);
    l_horarios.push(turno2);
    const turno3 = new Horario("Sábado","18 hs",0);
    l_horarios.push(turno3);
    const turno4 = new Horario("Domingo","14 hs",0);
    l_horarios.push(turno4);
    const turno5 = new Horario("Domingo","16 hs",0);
    l_horarios.push(turno5);
    const turno6 = new Horario("Domingo","18 hs",0);
    l_horarios.push(turno6);
}

const l_persons=[];   //array que guarda las personas que se registran

//Constructor del objeto persona
class Persona {
    constructor(nombre, banda, genero, integrantes) {
        this.nombre = nombre;
        this.banda = banda;
        this.genero = genero;
        this.integrantes = integrantes;
    }
}


function solicitarDatos(pos){
    let nombre=prompt("Nombre y apellido");
    let banda=prompt("Nombre de la banda");
    let genero=prompt("Género que tocan");
    let integrantes=prompt("Cantidad de integrantes");
    const datos = new Persona(nombre,banda,genero,integrantes);
    l_persons[pos]=datos;
}

function mostrarDatos(posicion){

    alert("Se confirma la reserva con los siguientes datos: \n Banda: "+l_persons[posicion].banda+ "\n Género musical: "+l_persons[posicion].genero+"\n Cantidad de integrantes: "+l_persons[posicion].integrantes);

}

function buscarPrimerDiaLibre(lista){
    let i =0;
    while(i < lista.length && lista[i].ocupado!=0){
            i++;
        }
    return i;        
}


inicializar_turnos();
let mje = prompt("Bienvenido a Salas de Ensayo OVERDRIVE. ¿Que desea hacer? \n 1 = Elegir un horario \n 2 = Buscar el primer horario disponible \n 3 = Salir");
while(mje != 3)
{
        switch(mje)
        {
            case "1":
                let entrada= prompt("Seleccione el horario en el que desea ocupar la sala de ensayo. \n 1 = Sábado 14 a 16 hs \n 2 = Sábado 16 a 18 hs \n 3 = Sábado 18 a 20 hs \n 4 = Domingo 14 a 16 hs \n 5 = Domingo 16 a 18 hs \n 6 = Domingo 18 a 20 hs");
                switch (entrada)
                {
                    case "1":
                        alert("Seleccionaste el horario Sábado de 14 a 16 hs \n Ahora chequearemos si está disponible");
                        if(l_horarios[0].ocupado==0)
                        {
                            alert("El horario está disponible");
                            let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                            if (resp.toUpperCase()=="S")
                            {
                                solicitarDatos(0);
                                l_horarios[0].ocupado=1;
                                mostrarDatos(0);
                            }
                        }
                        else
                        {
                            alert("El horario no está disponible")
                        }
                        break;
                    case "2":
                        alert("Seleccionaste el horario Sábado de 16 a 18 hs \n Ahora chequearemos si está disponible");
                        if(l_horarios[1].ocupado==0)
                        {
                            alert("El horario está disponible")
                            let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                            if (resp.toUpperCase()=="S")
                            {
                                solicitarDatos(1);
                                l_horarios[1].ocupado=1;
                                mostrarDatos(1);
                            }
                        }
                        else
                        {
                            alert("El horario no está disponible")
                        }
                        break;
                        case "3":
                            alert("Seleccionaste el horario Sábado de 18 a 20 hs \n Ahora chequearemos si está disponible");
                            if(l_horarios[2].ocupado==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos(2);
                                    l_horarios[2].ocupado=1;
                                    mostrarDatos(2);
                                   
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }   
                            break;
                        case "4":
                            alert("Seleccionaste el horario Domingo de 14 a 16 hs \n Ahora chequearemos si está disponible");
                            if(l_horarios[3].ocupado==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos(3);
                                    l_horarios[3].ocupado=1;
                                    mostrarDatos(3);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }
                            break;
                        case "5":
                            alert("Seleccionaste el horario Domingo de 16 a 18 hs \n Ahora chequearemos si está disponible");
                            if(l_horarios[4].ocupado==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos(4);
                                    l_horarios[4].ocupado=1;
                                    mostrarDatos(5);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }
                            break;
                        case "6":
                            alert("Seleccionaste el horario Domingo de 18 a 20 hs \n Ahora chequearemos si está disponible");
                            if(l_horarios[5].ocupado==0)
                            {
                                alert("El horario está disponible");
                                let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                                if (resp.toUpperCase()=="S")
                                {
                                    solicitarDatos(5);
                                    l_horarios[5].ocupado=1;
                                    mostrarDatos(5);
                                }
                            }
                            else
                            {
                                alert("El horario no está disponible")
                            }
                            break;
                        default:
                            alert("La opción ingresada no es válida");
                            break;
                    }
                    break;
                case "2":
                    let libre = buscarPrimerDiaLibre(l_horarios);
                    if (libre<l_horarios.length)
                    {
                        alert("El primer horario libre es: "+l_horarios[libre].dia + " - "+l_horarios[libre].hora);
                        let resp = prompt("Lo reserva? Presioná 'S' para SI o 'N' para NO");
                        if (resp.toUpperCase()=="S")
                        {
                            solicitarDatos(libre);
                            l_horarios[libre].ocupado=1;
                            mostrarDatos(libre);
                        }
                    }else{
                        alert("No hay ningún horario libre");
                    }
                    
                    break;
                case "3":
                    alert("Adios");
                    break;
                default:
                    alert("La opción ingresada no es válida");
                    break;

        }
    mje = prompt("Bienvenido a Salas de Ensayo OVERDRIVE. ¿Que desea hacer? \n 1 = Elegir un horario \n 2 = Buscar el primer horario disponible \n 3 = Salir");
        
}

for (const una_persona of l_persons){
    let contenedor=document.createElement("div");
    contenedor.innerHTML= '<h2> Nombre: '+ una_persona.nombre+'</h2> <p> Banda:'  + una_persona.banda +'</p><p> Género: '+ una_persona.genero+'</p> <p> Integrantes: '+una_persona.integrantes+'<h2>';
    document.body.appendChild(contenedor);
}

