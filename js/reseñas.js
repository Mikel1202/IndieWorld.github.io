const juegos={
     1: { titulo: "Hollow Knight: Silksong (2025)",
          info: "Hornet protagoniza una secuela esperadísima que lleva la exploración y el arte a un nuevo nivel.",
          resenas: ["⭐⭐⭐⭐ “Más rápido, más elegante, más letal. Silksong es poesía en movimiento: cada salto y aguijón tejen una danza perfecta entre belleza y peligro. Una secuela que ya se siente legendaria antes de salir”", "⭐⭐⭐⭐⭐ “El metroidvania del año”"] },
     2: { titulo: "Hotline Miami (2012)",
          info: "Violento, frenético y visualmente único. Una joya del synthwave pixelado.",
          resenas: ["⭐⭐⭐⭐⭐ “Un frenesí de violencia pixelada y ritmo frenético. Con una jugabilidad brutal y una banda sonora hipnótica, cada nivel es un rompecabezas sangriento que premia la precisión y la rapidez”", "⭐⭐⭐⭐ “Caos, neones y pura adrenalina. Hotline Miami no te deja respirar: fallas, mueres, y vuelves más rápido, con la música bombeando directo a tus venas”"] },
     3: { titulo: "Undertale (2015)",
          info: "Un RPG con alma, donde cada decisión importa y la música emociona.",
          resenas: ["⭐⭐⭐⭐ “Una joya del indie que combina humor, emociones y decisiones morales. Cada encuentro puede resolverse con violencia… o empatía”", "⭐⭐⭐⭐⭐ “Ríes, lloras y te rompes un poco por dentro. Undertale te demuestra que incluso un juego de píxeles puede hacerte sentir más que muchos triple A”"] },
     4: { titulo: "The Binding of Isaac (2011)",
          info: "Un roguelike oscuro, irreverente y profundamente rejugable.",
          resenas: ["⭐⭐⭐⭐ “Un roguelike oscuro y adictivo lleno de objetos, secretos y simbolismo perturbador. Ninguna partida es igual”", "⭐⭐⭐⭐⭐ “Grotesco, brillante y casi infinito. Isaac te atrapa con su caos divino y su dificultad despiadada. No podrás dejarlo”"] },
     5: { titulo: "Celeste (2018)",
          info: "Un viaje emocional y desafiante sobre la superación personal.",
          resenas: ["⭐⭐⭐⭐ “Un desafiante plataformas sobre escalar montañas y superar tus propios límites. Preciso, emotivo y perfectamente diseñado”", "⭐⭐⭐⭐⭐ “Cada salto cuenta, cada caída enseña. Celeste no solo se juega, se vive. Cuando llegas a la cima, entiendes por qué valió la pena”"] },
     6: { titulo: "Hades (2020)",
          info: "Combate, historia y carisma en una obra maestra de acción.",
          resenas: ["⭐⭐⭐⭐ “Acción roguelike con narrativa impecable. Cada intento de escapar del inframundo revela más sobre sus personajes y su historia”", "⭐⭐⭐⭐⭐ “Combates elegantes, dioses carismáticos y un ritmo que no se detiene. Hades convierte el fracaso en diversión pura”"] },
     7: { titulo: "Cuphead (2017)",
          info: "Una animación de los años 30 y dificultad endiablada.",
          resenas: ["⭐⭐⭐⭐⭐ “Una obra maestra visual inspirada en la animación de los años 30. Su dificultad desafiante contrasta con su estilo encantador”", "⭐⭐⭐⭐ “Cada jefe es una locura animada. Cuphead es frustrante y maravilloso a partes iguales. Te hace sufrir... con una sonrisa”"] },
     8: { titulo: "Balatro (2024)",
          info: "Poker + roguelike: una mezcla tan simple como adictiva.",
          resenas: ["⭐⭐⭐⭐⭐ “Una mezcla adictiva entre póker y roguelike. Estrategia, azar y combinaciones imposibles se mezclan en partidas rápidas y tensas”", "⭐⭐⭐⭐⭐ “El juego que convierte las cartas en magia pura. Balatro es simple de entender, imposible de soltar”"] },
     9: { titulo: "Stardew Valley (2016)",
          info: "Un simulador de vida acogedor y relajante con música encantadora.",
          resenas: ["⭐⭐⭐⭐ “Un simulador de vida relajante donde cultivar, pescar, minar y crear vínculos en un pequeño pueblo”", "⭐⭐⭐⭐⭐ “Empiezas sembrando nabos y terminas encontrando paz. Stardew Valley es un abrazo pixelado que nunca envejece”"] },
     10:{ titulo: "Doki Doki Literature Club (2017)",
          info: "Empieza como un romance escolar, termina como una pesadilla psicológica.",
          resenas: ["⭐⭐⭐⭐⭐ “Comienza como un inocente simulador de citas, pero pronto se convierte en una experiencia psicológica perturbadora”", "⭐⭐⭐⭐⭐ “Lo que empieza dulce se vuelve pesadilla. Doki Doki rompe la cuarta pared… y tu tranquilidad”"] },
     11:{ titulo: "Blasphemous 2 (2023)",
          info: "Más fluido, más brutal, más bello. Una penitencia artística.",
          resenas: ["⭐⭐⭐⭐⭐ “Secuela de acción metroidvania ambientada en un universo oscuro de inspiración religiosa. Más fluido, más brutal, más hermoso”", "⭐⭐⭐⭐ “Una procesión sangrienta y poética. Blasphemous 2 es arte barroco en movimiento, penitencia y redención pixelada”"] },
     12:{ titulo: "Omori (2020)",
          info: "Una exploración emocional del dolor, la memoria y la amistad.",
          resenas: ["⭐⭐⭐⭐⭐ “Una aventura psicológica que combina ternura, trauma y surrealismo. Hermoso y devastador a partes iguales”", "⭐⭐⭐⭐⭐ “Omori no se olvida. Su historia te rompe en silencio, y cuando termina, deja un eco que no se apaga”"] }
};

const titulo = document.getElementById("titulo");
const info = document.getElementById("info");
const resenas = document.getElementById("resenas");
const audio = document.getElementById("audio");
let currentAudio = null;
let modalBootstrap = null;

document.addEventListener("DOMContentLoaded", () => {
     const modalElement = document.getElementById("modal");
     modalBootstrap = new bootstrap.Modal(modalElement, {
          backdrop: true,
          keyboard: true
     });
     
     modalElement.addEventListener("hidden.bs.modal", () => {
          if (currentAudio) {
               currentAudio.pause();
               currentAudio.currentTime = 0;
          }
     });

     document.querySelectorAll(".juego").forEach(juego => {
          juego.addEventListener("click", () => {
               const id = juego.dataset.id;
               const musica = "audio/" + juego.dataset.audio;

               titulo.textContent = juegos[id].titulo;
               info.textContent = juegos[id].info;
               resenas.innerHTML = juegos[id].resenas.map(r => `<li>${r}</li>`).join("");

               modalBootstrap.show();

               if (currentAudio) { 
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
               }
               audio.src = musica;
               currentAudio = audio;
               audio.volume = 0.6;
               audio.play().catch(() => {});
          });
     });

     const params = new URLSearchParams(window.location.search);
     const id = params.get("id");

     if (id && juegos[id]) {
          setTimeout(() => {
               const juego = document.querySelector(`.juego[data-id="${id}"]`);
               if (juego) {
                    juego.click();
               } else {
                    console.warn("No se encontró el juego con id:", id);
               }
          }, 300);
     }
});