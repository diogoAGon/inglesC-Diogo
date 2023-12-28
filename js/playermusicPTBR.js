document.addEventListener('DOMContentLoaded', function () {
  let musicas = [
    { titulo: 'Céu Azul', Artista: 'Charlie Brown Jr', src: '/assets/musicas/Charlie.mp3', img: '/assets/img/thumb-msc/CeuAzul.jpg' },
    { titulo: 'Chove Chuva', Artista: 'Jorge Ben Jor', src: '/assets/musicas/ChoveChuva.mp3', img: '/assets/img/thumb-msc/ChoveChuva.jpg' },
    { titulo: 'Deixe me ir', Artista: '1Kilo', src: '/assets/musicas/DeixeMeIr.mp3', img: '/assets/img/thumb-msc/Deixe-Me-Ir.jpg' }
  ];

  let musica = document.querySelector('audio');
  let playM = document.querySelector('#play');
  let pauseM = document.querySelector('#pause');
  let barra = document.querySelector('progress');
  let tempoDecorrido = document.querySelector('.inicio');
  let duracaoMusica = document.querySelector('.fim');
  let imagem = document.querySelector('img');
  let nomeMusica = document.querySelector('.descricao h2');
  let nomeArtista = document.querySelector('.descricao i');
  let anterior = document.querySelector('#previous');
  let proximo = document.querySelector('#next');
  let indexMusica = 0;

  renderizarMusica(indexMusica);

  duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

  anterior.addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
      indexMusica = musicas.length - 1;
    }
    renderizarMusica(indexMusica);
    pausarMusica(indexMusica);
  });

  proximo.addEventListener('click', () => {
    indexMusica++;
    if (indexMusica >= musicas.length) {
      indexMusica = 0;
    }
    renderizarMusica(indexMusica);
    pausarMusica(indexMusica);
  });

  musica.addEventListener('timeupdate', atualizarBarra);
  playM.addEventListener('click', tocarMusica);
  pauseM.addEventListener('click', pausarMusica);

  function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
      nomeMusica.textContent = musicas[index].titulo;
      nomeArtista.textContent = musicas[index].Artista;
      imagem.src = musicas[index].img;

      duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
  }

  function tocarMusica() {
    musica.play();
    pauseM.style.display = 'block';
    playM.style.display = 'none';
  }

  function pausarMusica() {
    musica.pause();
    pauseM.style.display = 'none';
    playM.style.display = 'block';
  }

  function atualizarBarra() {
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
  }

  function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
      campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
  }
  document.querySelector('#avanca5s').addEventListener('click', avancar5s);


  document.querySelector('#retrocede5s').addEventListener('click', retroceder5s);



  function avancar5s() {

    musica.currentTime += 5;
  }

  function retroceder5s() {

    musica.currentTime -= 5;
  }
});



// TRADUTOR 

const textareaFrom = document.querySelector(".textareaFrom");
const textareaTo = document.querySelector(".textareaTo");
const btnTranslate = document.querySelector(".btnTranslate");
const selects = document.querySelectorAll("select");

const countries = {
  "en-GB": "Inglês",
  "es-ES": "Espanhol",
  "it-IT": "Italiano",
  "ja-JP": "Japonês",
  "pt-BR": "Português",
};

selects.forEach((tag) => {
  for (let country in countries) {
    let selected;
    if (tag.classList.contains("selectFrom") && country == "pt-BR") {
      selected = "selected";
    } else if (tag.classList.contains("selectTo") && country == "en-GB") {
      selected = "selected";
    }

    const option = `<option value="${country}" ${selected}>${countries[country]}</option>`;

    tag.insertAdjacentHTML("beforeend", option);
  }
});

btnTranslate.addEventListener("click", () => {
  if (textareaFrom.value) {
    loadTranslation();
  } else {
    textareaTo.value = "";
  }
});

function loadTranslation() {
  fetch(
    `https://api.mymemory.translated.net/get?q=${textareaFrom.value}&langpair=${selects[0].value}|${selects[1].value}`
  )
    .then((res) => res.json())
    .then((data) => {
      textareaTo.value = data.responseData.translatedText;
    });
}


document.addEventListener("DOMContentLoaded", function () {
  const btnTradutor = document.querySelector(".btnTradutor");
  const container = document.querySelector(".container");

  // Inicializa o estado do contêiner
  container.style.display = "none";

  btnTradutor.addEventListener("click", function () {
    container.style.display = container.style.display === "none" ? "block" : "none";
  });
});





document.addEventListener("DOMContentLoaded", function () {
  let isClicked = false;


  function toggleColor() {
    const tradutorBtn = document.getElementById("tradutorBtn");
    isClicked = !isClicked;


    if (isClicked) {
      tradutorBtn.classList.add("clicked");
    } else {
      tradutorBtn.classList.remove("clicked");
    }
  }


  document.getElementById("tradutorBtn").addEventListener("click", toggleColor);
});

const textarea = document.querySelector(".resize");
textarea.addEventListener("keyup", e => {
  textarea.style.height = "63px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;

})

