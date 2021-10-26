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
const button = document.getElementById(`chose`)
console.log(button.value);
//creare una funzione con all'interno il ciclo for each per stampare le icone 
function getIcon(icons) {
    icons.forEach(icon => {
        stamp.innerHTML += `
        <section class="col">
        <div class="card">
            <i class="${icon.family} ${icon.prefix}${icon.name}  ${icon.type}"></i>
            <h6>${icon.name}</h6>
        </div>
        </section>`
    });
}
//evocare la funzione
getIcon(icons)
//creazione di aray vuoti per poi riempirli in base al tipo
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
//richiamare le icone in base al tipo selezionato 
button.addEventListener(`change`, function () {
    stamp.innerHTML = ``
    if (button.value == `all`) {
        getIcon(icons)
    } else if (button.value == `animal`) {
        getIcon(blueCard)
    } else if (button.value == `vegetable`) {
        getIcon(orangeCard)
    } else if (button.value == `user`)
        getIcon(violetCard)
})





