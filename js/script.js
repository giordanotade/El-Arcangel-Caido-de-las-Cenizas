//Declaramos la cantidad de vidas que tenemos y el nivel por el que empezamos
let vidas = 5;
let nivel = 1;

//Hacemos la función para empezar el juego
function inicio() {
  alert(
    "(El rey del enigma vive en un castillo con muchas puertas y habitaciones. Para llegar a él, debes encontrar la llave correcta que abre cada puerta. Detrás de cada puerta hay un acertijo o pista que te llevará a la siguiente llave. Usa tu ingenio para resolver los acertijos y avanzar a través del castillo..."
  );
  alert("Rey enigma: ¡Saludos aventurero! Veo que llegaste a mi castillo.");
  alert("Rey Enigma: Ahora responderás a mis acertijos, ¡espero que estes preparado!");

  juegoAcertijos();
}

//Variable que nos permitirá reconocer las respuestas correctas e incorrectas
let respuestaUsuario = "";


//Funciones de los niveles
function nivel1() {
  respuestaUsuario = prompt(acertijos[0].pregunta);
  if (respuestaUsuario === acertijos[0].respuesta) {
    alert("(Correcto)");
    nivel = 2
  } else {
    alert("(Incorrecto)");
    vidas -= 1;
    if (vidas > 0) {
      alert( `Te quedan ${vidas} vidas`)
    } else {
      perdiste();
    }
  }
}

function nivel2() {
  respuestaUsuario = prompt(acertijos[1].pregunta);
  if (respuestaUsuario === acertijos[1].respuesta) {
    alert("(Correcto)");
    nivel = 3;
  } else {
    alert("(Incorrecto)");
    vidas -= 1;
    if (vidas > 0) {
      alert( `Te quedan ${vidas} vidas`);
    } else {
      perdiste();
    }
  }
}

function nivel3() {
  respuestaUsuario = prompt(acertijos[2].pregunta);
  if (respuestaUsuario === acertijos[2].respuesta) {
    alert("(Correcto)");
    dialogos2()
  } else {
    alert("(Incorrecto)");
    vidas -= 1;
    if (vidas > 0) {
      alert( `Te quedan ${vidas} vidas`)
    } else {
      perdiste();
    }
  }
}

function dialogos2() {
  alert(
    "El rey enigma se sorprendio con tal fortaleza y determinacion tras lograr esto."
  );
  alert(
    "Rey Enigma: Felicidades por derrotarme aventurero, pero tu siguiente desafio es alguien que se oculta en las profundas aguas del bosque."
  );

  alert(
    "(Busca y adéntrate por el bosque. Allí encontrarás a tu siguiente oponente: la Viuda de las Aguas.)" 
  )

  alert(
    "Viuda de las Aguas: ¿Con que eres el conocido 'elegido'? Pues yo soy la Viuda de las Aguas."
  )

  alert(
    "Viuda de las Aguas: Ahora te enfrentarás a mí por medio de analogías. Veamos que tan 'elegido' eres..."
    )

  nivel = 6
}

function nivel4(){
  respuestaUsuario = prompt(acertijos[3].pregunta);
  if (respuestaUsuario === acertijos[3].respuesta){
    alert('Correcto');
    nivel = 7;
  } else{
    alert('Incorrecto');
    vidas -= 1;
    if (vidas > 0) {
      alert(`Te quedan ${vidas} vidas`);
      } else {
      perdiste();
    }
  }
}

function nivel5(){
  respuestaUsuario = prompt(acertijos[4].pregunta);
  if (respuestaUsuario === acertijos[4].respuesta){
    alert('Correcto');
    nivel = 8;
  } else{
    alert('Incorrecto');
    vidas -= 1;
    if (vidas > 0) {
      alert(`Te quedan ${vidas} vidas`);
      } else {
      perdiste();
    }
  }
}

function nivel6(){
  respuestaUsuario = prompt(acertijos[5].pregunta);
  if (respuestaUsuario === acertijos[5].respuesta){
    alert('Correcto');
    dialogos3()
  } else{
    alert('Incorrecto');
    vidas -= 1;
    if (vidas > 0) {
      alert(`Te quedan ${vidas} vidas`);
      } else {
      perdiste();
    }
  }
}



// Funciones de si ganas al primer jefe o pierdes
function ganaste() {
  vidas = 0;
}

function perdiste() {
  alert("Game Over");
}

//Array donde guardamos las preguntas y acertijos en objetos

const acertijos = [

  //Preguntas Rey Enigma

  {
    pregunta: "¿Lo adivinas o te quedas con la duda en la cabeza? Di qué es",
    respuesta: "un acertijo",
  },

  {
    pregunta: "Sin alas vuelo, sin dientes muerdo, sin boca hablo ¿qué soy?",
    respuesta: "el viento",
  },

  {
    pregunta: "De metal soy y protejo tu humanidad, cubro tu cuerpo en a liza o en batalla ¿qué parte de la armadura soy?",
    respuesta: "la cota de malla",
  },

  //Preguntas Viuda de las Aguas

  {
    pregunta: "Dragón es a escamas como caballero es a...",
    respuesta: "armadura",
  },

  {
    pregunta: "Espectro es a sombra como no-muerto es a...",
    respuesta: "no-vida",
  },

  {
    pregunta: "Armadura es a protección como anillo es a..",
    respuesta: "encantamiento",
  }
];

//Switch en un do while que nos permitirá pasar al siguiente nivel o si perdemos o ganamos
function juegoAcertijos() {
  do {
    switch (nivel) {
      // Acertijos del 1er jefe
      case 1:
        nivel1();
        break;
      case 2:
        nivel2();
        break;
      case 3:
        nivel3();
        break;
      // Switch de ganar o perder
      case 4:
        ganaste();
        break;
      case 5:
        perdiste();
        break;
      // Acertijos del 2do jefe
      case 6:
        nivel4();
        break
      case 7:
        nivel5();
        break
      case 8:
        nivel6();
        break
      default:
        console.log("error");
        break;
    }
  } while (vidas > 0);
}
