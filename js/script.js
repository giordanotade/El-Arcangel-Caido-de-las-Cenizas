//Declaramos la cantidad de vidas que tenemos y el nivel por el que empezamos
let vidas = 5;
let nivel = 1;

//Hacemos la función para empezar el juego
function inicio() {
  alert(
    "(El rey del enigma vive en un castillo con muchas puertas y habitaciones. Para llegar a él, debes encontrar la llave correcta que abre cada puerta. Detrás de cada puerta hay un acertijo o pista que te llevará a la siguiente llave. Usa tu ingenio para resolver los acertijos y avanzar a través del castillo..."
  );

  alert(
    "Rey enigma: ¿Y tu quién eres? ¿Acaso creés que puedes entrar a mis dominios así porque sí?"
  );

  alert(
    "Rey enigma: Ohhhh, creo que ya sé quién eres... Eres el popular héroe; todo el mundo te conoce a estas alturas. ¡Qué tonto que soy! ¿Cómo no te reconocí...?"
  );

  alert(
    "Rey enigma: En fin, si estás aquí, en mis dominios, debe ser porque quieres ganar y adivinar mis acertijos... Desde ya te digo que no será fácil y dudo que puedas hacerlo"
  );

  alert(
    "Rey Enigma: Preparate... porque si no, no me quiero aburrir."
  );

  juegoAcertijos();
}

//Variable que nos permitirá reconocer e identificar las respuestas correctas e incorrectas
let respuestaUsuario = "";


//Funciones de los niveles y de los diálogos

function reyEnigma(){
  function nivel1() {
    respuestaUsuario = prompt(acertijos[0].pregunta);
    if (respuestaUsuario === acertijos[0].respuesta) {
      alert("(Correcto)");
      nivel2()
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

  nivel1()

  function nivel2() {
    respuestaUsuario = prompt(acertijos[1].pregunta);
    if (respuestaUsuario === acertijos[1].respuesta) {
      alert("(Correcto)");
      nivel3();
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
}
function dialogos2() {
  alert(
    "(Wow, no eres tan inútil después de todo)"
  )
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
    "Días más tarde..."
  )

  alert(
    "Viuda de las Aguas: ¿Quién eres? ¿Y qué haces aquí? ¡Vete! Antes de que salgas herido..."
  )

  alert(
    "Viuda de las Aguas: Espera... me suenas algo familiar.... ¿Acaso eres el conocido héroe?... Jajaja"
  )

  alert(
    "Viuda de las Aguas: Entonces me tendré que presentar... yo soy... la 'Viuda de las Aguas'."
  )

  alert(
    "Viuda de las Aguas: Ahora te enfrentarás conmigo por medio de algo que desde que yo era humana me han divertido... las analogías."
    )

  alert(
    "Viuda de las Aguas: Veamos que tan 'héroe' eres..."
    )

  nivel = 2
}

function viudaDeLasAguas(){
  function nivel1(){
    respuestaUsuario = prompt(acertijos[3].pregunta);
    if (respuestaUsuario === acertijos[3].respuesta){
      alert('Correcto');
      nivel2();
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

  function nivel2(){
    respuestaUsuario = prompt(acertijos[4].pregunta);
    if (respuestaUsuario === acertijos[4].respuesta){
      alert('Correcto');
      nivel3();
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
  function nivel3(){
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
  nivel1()
}

function dialogos3(){
  alert(
    "(¡Vaya! No pensé que la derrotarías)"
    )
  alert(
    "Viuda de las Aguas: Con que sí eres un héroe, me has sorprendido. En fin..."
    )
  alert(
    "Viuda de las Aguas: Tu último pero no menos importante enemigo se encuentra a través de aquel sendero. Si sigues ese camino, pronto habrás llegado al paradero de tu último enemigo... 'El Rey de las Cenizas'"
    )
  alert(
    "Viuda de las Aguas: Bueno, ya te he dicho todo, ¡ahora lárgate! ¡y no quiero verte de nuevo!"
  )

  alert(
    "(Hazle caso a la viuda y continúa por ese sendero. Luego me agradeces...)"
  )

  alert(
    "El protagonista comenzó su recorrido y días después... llegó."
  )

  alert(
    "Extraño: ¡Al fin llegas héroe!. Te reconocí a pocos kilómetros de aquí"
  )

  alert(
    "Extraño: Oh, aún no me presentado; que mala educación la mía... ¿Dónde están mis modales?"
  )

  alert(
    "Rey de las Cenizas: Yo, soy... El Rey de Las Cenizas. El enemigo que has estado esperando y por el cual tú has transitado todo este camino... Desde el Rey Enigma, la Viuda de las Aguas... ¡hasta llegar a mí!"
  )

  alert(
    "Rey de las Cenizas: Ahh, seguro te preguntarás... '¿Cómo sabe quién soy?' '¿Cómo sabe todo el camino que he recorrido?'. Bueno... pues yo te vigilado desde siempre, además de ser la voz en tu cabeza que te decía por dónde tenías que ir"
  )

  alert(
    "Rey de las Cenizas: Sorprendente... ¿no crees?"
  )
}
function reyCeniza(){

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
//Switch en un do while que nos permitirá pasar al siguiente nivel o si perdemos
function juegoAcertijos() {
  do {
    switch (nivel) {
      // Acertijos del 1er jefe
      case 1:
        reyEnigma();
        break;
      case 2:
        viudaDeLasAguas();
        break;
      case 3:
        reyCeniza();
        break;
      // Switch de ganar o perder
      case 4:
        ganaste();
        break;
      case 5:
        perdiste();
        break;
      default:
        console.log("error");
        break;
    }
  } while (vidas > 0);
}
juegoAcertijos()