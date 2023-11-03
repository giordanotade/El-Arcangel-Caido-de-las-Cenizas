//alert("(Lee la historia que está debajo para entrar en este mundo de fantasía)")
alert("El rey del enigma vive en un castillo con muchas puertas y habitaciones. Para llegar a él, debes encontrar la llave correcta que abre cada puerta. Detrás de cada puerta hay un acertijo o pista que te llevará a la siguiente llave. Usa tu ingenio para resolver los acertijos y avanzar a través del castillo...")
alert("Rey enigma:saludos! aventurero veo que llegaste a mi castillo")
alert("ahora entraras a mis acertijos, espero que estes preparado!")

let vidas = 3;

const acertijos = [
  {
    pregunta: "lo adivinas o te quedas con la duda en la cabez.Di ¿que es?",
    respuesta: "un acertijo"
  },
  {
    pregunta: "sin alas vuelo, sin dientes muerdo,sin boca hablo ¿que soy?", 
    respuesta: "el viento"
  },
  {
    pregunta: "de metal soy y protejo tu humanidad,cubro tu cuerpo en a liza o en batalla ¿que parte de la armadura soy?",
    respuesta: "la cota de malla" 
  }
];

function juegoAcertijos() {

    for(let i = 0; i < acertijos.length; i++) {
  
      const acertijo = acertijos[i];
      
      const respuestaUsuario = prompt(acertijo.pregunta);
      
      if(respuestaUsuario.toLowerCase() === acertijo.respuesta.toLowerCase()) {
        console.log("¡Respuesta correcta!");
      } else {
        vidas--;
        console.log(`Respuesta incorrecta. Te quedan ${vidas} vidas.`);
        if(vidas === 0) {
          console.log("Perdiste todas tus vidas. Fin del juego.");
          break;
        }
      }
    }
    
    if(vidas > 0) {
      console.log("¡Ganaste!"); 
    }
  }
  
  juegoAcertijos();
alert("el rey enigma se sorprendio con tal fortaleza y determinacion para lograr esto")
alert("felicidades por derrotarme aventurero pero tu siguiente desafio es alguien bien oculta en las profundas aguas del bosque")