/*
let titulo = document.querySelector("h1"); //Indica que la variable titulo guardara los valores y se muestran en donde esta h1
titulo.innerHTML = "Juego del numero secreto "; // Muestra el mensaje en la pagina 

let parrafo = document.querySelector("p"); //Indica que parrafo se pocisiona en p
parrafo.innerHTML = " Indica un numero del 1 al 10 "; //Imprime en el codigo HTML
*/
let numeroSecreto = GenerarNumeroSecreto(); //El numero secreto es asignado del valor que regresa la funcion generar numero secreto
let intentos = 1; //Numero de intentos
let listaNumerosSorteados = [];
let numeroMaximo = 10;

//Dicha funcion realiza varias impresiones, ya sea de titulos, subtitulos, etc.
function AsignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function VerificarNumero(){
    let numeroUsuario = parseInt(document.getElementById("ValorUsuario").value); //Seleccionamos como valor al numero de usuario 

    /*
    console.log(typeof(numeroUsuario)); //Se imprime el tipo de numeroUsuario ya sea string, value, etc
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroUsuario);
    console.log(numeroUsuario === numeroSecreto); //El triple igual compara valor y tipo de variable
    */

    if(numeroUsuario===numeroSecreto){
        AsignarTextoElemento("p",`Adivinaste el numero secreto en ${intentos}! ${(intentos===1) ? "vez" : "veces"}`); //El operador ternario es booleano, primera vez verdadero la otra la tomara como falsa (0,1)
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroUsuario>numeroSecreto){
            AsignarTextoElemento("p","El numero es menor ");
        }else{
            AsignarTextoElemento("p","El numero es mayor");
        }
        intentos++;
        limpiarCaja();
    }//Fin del else

    return;
}

function limpiarCaja(){
    document.querySelector('#ValorUsuario').value = " ";
}

function GenerarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;  //La funcion Math.floor genera que el numero se quede ene enetro, ya sea 5.9999 lo convierte a 5


    //Ver si ya se sortaron todos los numeros 
    if(listaNumerosSorteados.length==numeroMaximo){
        AsignarTextoElemento("p","Ya se sortearon todos los numeros posibles");
    }else{

        if(listaNumerosSorteados.includes(numeroGenerado)){
            return GenerarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesInicio(){
    AsignarTextoElemento("h1", "Juego de adivinar el numero!");  //Los parametros que se usaran en la funcion AsignarTexto
    AsignarTextoElemento("p", "Indique un numero de 1 al 100");

    //Generar el numero aleatorio
    numeroSecreto = GenerarNumeroSecreto();

    //Inicializar el numero de intentos
    intentos=1;
    
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();
    //Mensaje de inicio
    condicionesInicio();

    //Deshabilitar el botón de nuevo jeugo
    document.querySelector('#reiniciar').setAttribute("disabled", "true");
}

condicionesInicio();

