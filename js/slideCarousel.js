
const modal = "modalCitazione";
const bott = "chiudiModalCitazione";

function start() {
    let items = document.querySelectorAll('.carousel .carousel-item')
    attivaCarousel(items);
    items = document.querySelectorAll('.card');
    attivaEventi(items);

    items = document.querySelectorAll("." + bott);
    console.log(items);
    attivaEventiChiusura(items);
}

function attivaCarousel(items) {
    items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (var i = 1; i < minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0]
            }
            let cloneChild = next.cloneNode(true)
            el.appendChild(cloneChild.children[0])
            next = next.nextElementSibling


        }
    })

}

function attivaEventi(items) {
    items.forEach((el) => {
        let nome = el.querySelectorAll(".testo")[0].outerText;
        let testo = el.querySelectorAll(".txt")[0].outerText;
        console.log(nome, testo);
        el.addEventListener("click", apri);
        el.nome = 'Testimonianza di ' + nome;
        el.txt = testo;
    })
}
function attivaEventiChiusura(items) {
    items.forEach((el) => {
        el.addEventListener("click", chiudi);
    })
}

function apri(elemento) {
    let el = document.getElementById(modal);
    el.style.display = "block";
    el.querySelectorAll(".modal-title")[0].innerHTML = elemento.currentTarget.nome;
    el.querySelectorAll(".modal-body")[0].innerHTML = elemento.currentTarget.txt;
    // console.log("apri", el.querySelectorAll(".modal-title"));


}

function chiudi() {
    let el = document.getElementById(modal);
    el.style.display = "none";
    console.log("chiudi");
}