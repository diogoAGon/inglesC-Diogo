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


const textarea = document.querySelector("textarea");
textarea.addEventListener("keyup", e => {
  textarea.style.height = "63px";
  let scHeight = e.target.scrollHeight;
  textarea.style.height = `${scHeight}px`;

})
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
