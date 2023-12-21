



// Codigo para o botao aparecer conforme os tempos.
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => { 
        document.querySelectorAll('.ELT').forEach((element) => {
            element.style.opacity = '1';
        });
    }, 2700);
    setTimeout(() => { 
        document.querySelectorAll('.ET').forEach((element) => {
            element.style.opacity = '1';
        });
    }, 2850);
    setTimeout(() => { 
        document.querySelectorAll('.ETM').forEach((element) => {
            element.style.opacity = '1';
        });
    }, 2950);
});



// TYPING
document.addEventListener("DOMContentLoaded", () => {
    const fraseElement = document.querySelector('.frase');
    const h2Element = fraseElement.querySelector('h2');
    h2Element.innerHTML = '';

    const textoOriginal = " Bem-vindo, pegue o seu cafe e bons estudos!";
    let index = 0;

    const typeText = () => {
        h2Element.innerHTML += textoOriginal.charAt(index);
        index++;

        if (index < textoOriginal.length) {
            setTimeout(typeText, 50);
        }
    };

    typeText();

    
});


