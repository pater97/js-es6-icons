//CONSEGNA 
/*
1-Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
2-coloriamo le icone per tipo 
*/

//struttura dati:
const icons = [
    {
        name: 'cat',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'crow',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dog',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dove',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'dragon',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'horse',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'hippo',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'fish',
        prefix: 'fa-',
        type: 'animal',
        family: 'fas'
    },
    {
        name: 'carrot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'apple-alt',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'lemon',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'pepper-hot',
        prefix: 'fa-',
        type: 'vegetable',
        family: 'fas'
    },
    {
        name: 'user-astronaut',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-graduate',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-ninja',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    },
    {
        name: 'user-secret',
        prefix: 'fa-',
        type: 'user',
        family: 'fas'
    }
];

//creazione della variabile per la stampa 
const stamp = document.querySelector(`.container`)
//creare una funzione con all'interno il ciclo for each per stampare le icone 
function getIcon(icons) {
    icons.forEach(icon => {
        stamp.innerHTML += `
        <section class="col">
        <div class="card ${icon.type}">
            <i class="${icon.family} ${icon.prefix}${icon.name}"></i>
            <h6>${icon.name}</h6>
        </div>
        </section>`
    });
}
//evocare la funzione
//creare una variabile per selezionare la card a cui aggiungere la classe con in colore
const card = document.querySelector(`.card`)
function cards(card) {
    for (let i = 0; i < card.clientHeight; i++) {
        const cards = card[i]
        return cards
    }
}
const blueCard = []
const orangeCard = []
const violetCard = []
//filtrare le icone per tipo e assegnare il rispettivo colore 
const colorIcon = icons.filter((icon) => {
    if (icon.type === `animal`) {
        blueCard.push(icon)
    } else if (icon.type === `vegetable`) {
        orangeCard.push(icon)
    } else if (icon.type === `user`)
        violetCard.push(icon)
})
//richiamare le funzioni con i vari array
getIcon(blueCard)
getIcon(orangeCard)
getIcon(violetCard)

