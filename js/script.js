/* =========================================================
   SLIDER DE CONFISSÕES
   ========================================================= */

const track = document.querySelector(".confissoes-track");

const cards = document.querySelectorAll(".confissao-card");

const prevButton = document.querySelector(".slider-prev");

const nextButton = document.querySelector(".slider-next");


let currentIndex = 0;


/* Quantos cards aparecem na tela */

function getCardsPerView() {

    if (window.innerWidth <= 768) {
        return 1;
    }

    return 3;
}


/* Atualiza a posição do slider */

function updateSlider() {

    const cardsPerView = getCardsPerView();

    const cardWidth =
        cards[0].offsetWidth;

    const gap = 20;

    const moveAmount =
        (cardWidth + gap) * currentIndex;

    track.style.transform =
        `translateX(-${moveAmount}px)`;
}


/* Próximo */

nextButton.addEventListener("click", () => {

    const cardsPerView =
        getCardsPerView();

    const maxIndex =
        cards.length - cardsPerView;


    if (currentIndex < maxIndex) {

        currentIndex++;

    } else {

        currentIndex = 0;

    }

    updateSlider();

});


/* Anterior */

prevButton.addEventListener("click", () => {

    const cardsPerView =
        getCardsPerView();

    const maxIndex =
        cards.length - cardsPerView;


    if (currentIndex > 0) {

        currentIndex--;

    } else {

        currentIndex = maxIndex;

    }

    updateSlider();

});


/* Recalcula quando a tela muda de tamanho */

window.addEventListener("resize", () => {

    currentIndex = 0;

    updateSlider();

});

/* =========================================================
   HORÁRIOS DE CONFISSÕES
   ========================================================= */

const horariosConfissao = [

    {
        dia: "Terça-feira",
        horario: "19:30"
    },

    {
        dia: "Quinta-feira",
        horario: "09:00 | 15:00"
    },

    {
        dia: "Sexta-feira",
        horario: "09:00"
    },

    {
        dia: "Sábado",
        horario: "10:00"
    }

];


const confissoesTrack =
    document.querySelector("#confissoes-track");


function criarCardsConfissao() {

    horariosConfissao.forEach(confissao => {

        const card =
            document.createElement("article");

        card.classList.add("confissao-card");


        card.innerHTML = `

            <span class="confissao-dia">
                ${confissao.dia}
            </span>

            <strong class="confissao-data">
                Toda ${confissao.dia.toLowerCase()}
            </strong>

            <span class="confissao-horario">
                ${confissao.horario}
            </span>

        `;


        confissoesTrack.appendChild(card);

    });

}


criarCardsConfissao();