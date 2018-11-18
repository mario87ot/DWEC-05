window.addEventListener("load", iniciar);

var audio;

function iniciar() {

    /****************************************************  
     *            CREACIÓN DE LA PARTE GRÁFICA          *
     ****************************************************/

    //Creamos un div que contendrá el piano
    var div = document.createElement("div");

    //Creamos 7 inputs de tipo button, cada input será una tecla del piano
    for (var i = 0; i < 7; i++) {
        var input = document.createElement("input");
        /*A cada tecla(cada input de tipo button que vamos a crear), se le asignará un id diferente 
        y escribimos qué nota es cada tecla mediante su atributo value. Aprovechamos y asignamos también 
        a cada tecla el evento mousedown para que suene mientras se deje pulsando un botón del ratón*/
        switch (i) {
            //Tecla DO
            case 0:
                input.setAttribute("id", "do");
                input.setAttribute("value", "DO");
                input.addEventListener("mousedown", tecla_DO, false);
                break;
            //Tecla RE
            case 1:
                input.setAttribute("id", "re");
                input.setAttribute("value", "RE");
                input.addEventListener("mousedown", tecla_RE, false);
                break;
            //Tecla MI
            case 2:
                input.setAttribute("id", "mi");
                input.setAttribute("value", "MI");
                input.addEventListener("mousedown", tecla_MI, false);
                break;
            //Tecla FA
            case 3:
                input.setAttribute("id", "fa");
                input.setAttribute("value", "FA");
                input.addEventListener("mousedown", tecla_FA, false);
                break;
            //Tecla SOL
            case 4:
                input.setAttribute("id", "sol");
                input.setAttribute("value", "SOL");
                input.addEventListener("mousedown", tecla_SOL, false);
                break;
            //Tecla LA
            case 5:
                input.setAttribute("id", "la");
                input.setAttribute("value", "LA");
                input.addEventListener("mousedown", tecla_LA, false);
                break;
            //Tecla SI
            case 6:
                input.setAttribute("id", "si");
                input.setAttribute("value", "SI");
                input.addEventListener("mousedown", tecla_SI, false);
                break;
        }

        //Asignamos a los inputs el atributo type button y la clase teclas
        input.setAttribute("type", "button");
        input.setAttribute("class", "teclas");

        //Añadimos los inputs al div contenedor
        div.appendChild(input);
    } //Fin bucle for

    //Asignamos al div contenedor la clase piano
    div.setAttribute("class", "piano");
    //Agregamos el div al documento
    document.body.appendChild(div);
    //Creamos el botón Mute que servirá para silenciar o activar el sonido del piano
    var botonMute = document.createElement("input");
    //Asignamos al botón Mute los atributos type button, la clase botonmute, id botonmute y valor por defecto "Desactivar sonido"
    botonMute.setAttribute("type", "button");
    botonMute.setAttribute("id", "botonmute");
    botonMute.setAttribute("class", "botonmute");
    botonMute.setAttribute("value", "Desactivar sonido");
    //Añadimos el botón al documento
    document.body.appendChild(botonMute);

    //Creamos mediante un bucle 7 etiquetas audio, una por cada nota, así como sus respectivas etiquetas source
    for (var i = 0; i < 7; i++) {
        audio = document.createElement("audio");
        var source = document.createElement("source");

        switch (i) {
            //Audio DO
            case 0:
                audio.setAttribute("id", "audioDO");
                source.setAttribute("src", "piano/do.wav");
                break;
            //Audio RE
            case 1:
                audio.setAttribute("id", "audioRE");
                source.setAttribute("src", "piano/re.wav");
                break;
            //Audio MI
            case 2:
                audio.setAttribute("id", "audioMI");
                source.setAttribute("src", "piano/mi.wav");
                break;
            //Audio FA
            case 3:
                audio.setAttribute("id", "audioFA");
                source.setAttribute("src", "piano/fa.wav");
                break;
            //Audio SOL
            case 4:
                audio.setAttribute("id", "audioSOL");
                source.setAttribute("src", "piano/sol.wav");
                break;
            //Audio LA
            case 5:
                audio.setAttribute("id", "audioLA");
                source.setAttribute("src", "piano/la.wav");
                break;
            //Audio SI
            case 6:
                audio.setAttribute("id", "audioSI");
                source.setAttribute("src", "piano/si.wav");
                break;
        }
        //Establecemos el atributo source de las etiquetas audio indicando que son audios con extensión wav
        source.setAttribute("type", "audio/wav");
        //Por defecto, el sonido estará activado
        audio.muted = false;
        //Añadimos las etiquetas audio al documento
        document.body.appendChild(audio);
        //Añadimos los elementos source dentro de las etiquetas audio
        audio.appendChild(source);
    } //Fin bucle for

    //Creamos el div que contendrá las instrucciones sobre qué tecla hay que pulsar para cada nota
    var divInstrucciones = document.createElement("div");
    //Le asignamos la clase instrucciones
    divInstrucciones.setAttribute("class", "instrucciones");
    //Añadimos el div al documento
    document.body.appendChild(divInstrucciones);

    //Creamos un elemento h2 para el título del div instrucciones
    var tituloInstrucciones = document.createElement("h2");
    //Añadimos el elemento h2 al div
    divInstrucciones.appendChild(tituloInstrucciones);
    //Creamos un nodo de texto para el título del div instrucciones
    var textoTituloInstrucciones = document.createTextNode("Instrucciones");
    //Añadimos el texto dentro de las etiquetas h2 creadas anteriormente
    tituloInstrucciones.appendChild(textoTituloInstrucciones);

    //Mediante un bucle, vamos a crear 7 párrafos, cada uno contendrá la instrucción para hacer sonar cada tecla
    for (var i = 0; i < 7; i++) {
        var parrafo = document.createElement("p");
        var texto = "";

        switch (i) {
            //Instrucción tecla DO
            case 0:
                texto = document.createTextNode("DO-->Pulsar tecla D");
                break;
            //Instrucción tecla RE
            case 1:
                texto = document.createTextNode("RE-->Pulsar tecla R");
                break;
            //Instrucción tecla MI
            case 2:
                texto = document.createTextNode("MI-->Pulsar tecla M");
                break;
            //Instrucción tecla FA
            case 3:
                texto = document.createTextNode("FA-->Pulsar tecla F");
                break;
            //Instrucción tecla SOL
            case 4:
                texto = document.createTextNode("SOL-->Pulsar tecla S");
                break;
            //Instrucción tecla LA
            case 5:
                texto = document.createTextNode("LA-->Pulsar tecla L");
                break;
            //Instrucción tecla SI
            case 6:
                texto = document.createTextNode("SI-->Pulsar tecla Y");
                break;
        }
        //Añadimos los textos a las etiquetas p
        parrafo.appendChild(texto);
        //Añadimos las etiquetas p al div instrucciones
        divInstrucciones.appendChild(parrafo);
        //Añadimos dentro de las etiquetas p el texto de cada instrucción
        divInstrucciones.appendChild(texto);
    } //Fin bucle for


    /****************************************************  
     *              ASIGNACIÓN DE EVENTOS               *
     ****************************************************/

    /*Le asignamos el evento de tipo click al boton de Mute, de forma que cuando se pulse, 
    el piano dejará de sonar, si se pulsa de nuevo, se vuelve a activar el sonido*/
    document.getElementById("botonmute").addEventListener('click', mute);

    //Guardamos todos los inputs
    var inputs = document.getElementsByTagName("input");
    //Recorremos los inputs menos el último, que sería el botón Mute, ya que sólo queremos asignar los siguientes eventos a las teclas del piano
    for (var i = 0; i < inputs.length - 1; i++) {
        //Asignamos a cada tecla el evento mousedown, mientras se mantenga pulsado cualquier botón del ratón, el color de la tecla será verde
        inputs[i].addEventListener("mousedown", cambiarColor);
        /*Asignamos a cada tecla el evento mouseup, cuando se deje de pulsar el botón del ratón que estuviera pulsado, el color de la tecla será blanco, que es su color por defecto*/
        inputs[i].addEventListener("mouseup", colorPorDefecto);
        //Asignamos a cada tecla otro evento mouseup, cuando se deje de pulsar el botón del ratón que estuviera pulsado, dejará también de sonar
        inputs[i].addEventListener("mouseup", pararSonido);
    }

    /*Asignamos un evento keydown a diferentes letras del teclado, para que mientras se esté de pulsando la letra que corresponda, esté sonando la nota y la tecla se vuelva de color verde*/
    document.addEventListener("keydown", function (event) {
        switch (event.key) {
            case 'd':
                audio = document.getElementById("audioDO");
                document.getElementById("do").style.background = "green";
                audio.play();
                break;
            case 'r':
                audio = document.getElementById("audioRE");
                document.getElementById("re").style.background = "green";
                audio.play();
                break;
            case 'm':
                audio = document.getElementById("audioMI");
                document.getElementById("mi").style.background = "green";
                audio.play();
                break;
            case 'f':
                audio = document.getElementById("audioFA");
                document.getElementById("fa").style.background = "green";
                audio.play();
                break;
            case 's':
                audio = document.getElementById("audioSOL");
                document.getElementById("sol").style.background = "green";
                audio.play();
                break;
            case 'l':
                audio = document.getElementById("audioLA");
                document.getElementById("la").style.background = "green";
                audio.play();
                break;
            case 'y':
                audio = document.getElementById("audioSI");
                document.getElementById("si").style.background = "green";
                audio.play();
                break;
        }
    });

    /*Asignamos un evento keyup a diferentes teclas del teclado, para que cuando se deje de pulsar la letra que corresponda, deje de sonar la nota
    y el color de la tecla recupere el color blanco*/
    document.addEventListener("keyup", function (event) {
        switch (event.key) {
            case 'd':
                document.getElementById("do").style.background = "white";
                pararSonido();
                break;
            case 'r':
                document.getElementById("re").style.background = "white";
                pararSonido();
                break;
            case 'm':
                document.getElementById("mi").style.background = "white";
                pararSonido();
                break;
            case 'f':
                document.getElementById("fa").style.background = "white";
                pararSonido();
                break;
            case 's':
                document.getElementById("sol").style.background = "white";
                pararSonido();
                break;
            case 'l':
                document.getElementById("la").style.background = "white";
                pararSonido();
                break;
            case 'y':
                document.getElementById("si").style.background = "white";
                pararSonido();
                break;
        }
    });
} //Fin función iniciar



/****************************************************  
 *                    FUNCIONES                     *
 ****************************************************/


/**
 * Función que silencia el piano si el botón muestra el texto "Desactivar sonido" y se pulsa sobre él
 * cambiándose el texto del botón a "Activar sonido", o activa de nuevo el sonido si el botón muestra
 * el texto "Activar sonido" y se pulsa sobre él, cambiándose el texto del botón a "Desactivar sonido"
 */
function mute() {
    //Guardamos todas las etiquetas audio
    var audios = document.getElementsByTagName("audio");
    //Si el audio está silenciado
    if (audio.muted) {
        //Cambiamos el texto del botón para silenciar/activar el sonido a "Desactivar sonido"
        document.getElementById("botonmute").setAttribute("value", "Desactivar sonido");
        //Recorremos todas las etiquetas audio para establecer el atributo muted(silenciado) a falso
        for (var j = 0; j < audios.length; j++) {
            audios[j].muted = false;
        }
        //Si el audio está activado
    } else {
        //Cambiamos el texto del botón para silenciar/activar sonido a "Activar sonido"
        document.getElementById("botonmute").setAttribute("value", "Activar sonido");
        //Recorremos todas las etiquetas audio para establecer el atributo muted(silenciado) a verdadero
        for (var j = 0; j < audios.length; j++) {
            audios[j].muted = true;
        }
    }
}

/**
 * Función que hace sonar el audio de la tecla DO en bucle, asignándole el atributo loop a la
 * etiqueta de audio DO
 */
function tecla_DO() {
    audio = document.getElementById("audioDO");
    audio.setAttribute("loop", "");
    audio.play();
}

/**
 * Función que hace sonar el audio de la tecla RE en bucle, asignándole el atributo loop a la
 * etiqueta de audio RE
 */
function tecla_RE() {
    audio = document.getElementById("audioRE");
    audio.setAttribute("loop", "");
    audio.play();
}

/**
 * Función que hace sonar el audio de la tecla MI en bucle, asignándole el atributo loop a la
 * etiqueta de audio MI
 */
function tecla_MI() {
    audio = document.getElementById("audioMI");
    audio.setAttribute("loop", "");
    audio.play();
}

/**
 * Función que hace sonar el audio de la tecla FA en bucle, asignándole el atributo loop a la
 * etiqueta de audio FA
 */
function tecla_FA() {
    audio = document.getElementById("audioFA");
    audio.setAttribute("loop", "");
    audio.play();
}

/**
 * Función que hace sonar el audio de la tecla SOL en bucle, asignándole el atributo loop a la
 * etiqueta de audio SOL
 */
function tecla_SOL() {
    audio = document.getElementById("audioSOL");
    audio.setAttribute("loop", "");
    audio.play();
}

/**
 * Función que hace sonar el audio de la tecla LA en bucle, asignándole el atributo loop a la
 * etiqueta de audio LA
 */
function tecla_LA() {
    audio = document.getElementById("audioLA");
    audio.setAttribute("loop", "");
    audio.play();
}

/**
 * Función que hace sonar el audio de la tecla SI en bucle, asignándole el atributo loop a la
 * etiqueta de audio SI
 */
function tecla_SI() {
    audio = document.getElementById("audioSI");
    audio.setAttribute("loop", "");
    audio.play();
}

/**
 * Función que recarga el audio de todas las etiquetas audio para que deje 
 * de sonar cuando se deja de pulsar la tecla correspondiente
 */
function pararSonido() {
    var audios = document.querySelectorAll("audio");

    for (var i = 0; i < audios.length; i++) {
        audios[i].load();
    }
}

/**
 * Función que cambia el color de una tecla a verde
 */
function cambiarColor() {
    this.style.background = "green";
}

/**
 * Función que cambia el color de una tecla a blanco
 */
function colorPorDefecto() {
    this.style.background = "white";
}
