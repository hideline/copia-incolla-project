// array & object
const stringa = 'ciao come stai? tutto bene, grazie!'
const object = {
    id: 1,
    nome: 'Mario',
}

const array = ['ciao', 'ciao', 'ciao', 'ciao', 'ciao'];

const arrayObject = [
    {
        id: 1,
        nome: 'Genshin impact',
        img: 'https://www.google.com/search?q=genshin+impact&rlz=1C1GCEU_itIT821IT821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiJ9J6J9JLzAhXQzIUKHbJzDZQQ_AUoAXoECAEQAw&biw=1366&bih=657#imgrc=5J9J6JLzAhXQzIUKH',
        ratio: 0.5,
        price: 1,

    },
    {
        id: 1,
        nome: 'Genshin impact',
        img: 'https://www.google.com/search?q=genshin+impact&rlz=1C1GCEU_itIT821IT821&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiJ9J6J9JLzAhXQzIUKHbJzDZQQ_AUoAXoECAEQAw&biw=1366&bih=657#imgrc=5J9J6JLzAhXQzIUKH',
        ratio: 0.5,
        price: 1,
    },
    {
        id: 2,
        nome: 'Luigi',
    },
    {
        id: 2,
        nome: 'Luigi',
    },
    {
        id: 2,
        nome: 'Luigi',
    },
    {
        id: 2,
        nome: 'Luigi',
    },
    {
        id: 2,
        nome: 'Luigi',
    },
];

function semaforo() {
    switch (color) {
        case 'red':
            return 'red'
            console.log('stop');
            break;
        case 'yellow':
            console.log('wait');
            break;
        case 'green':
            console.log('go');
            break;
        default:
            console.log('stop');
            break;
    }
}


//console.log(arrayObject[0]);

// LOOP & CONDITIONALS
function startLoop() {
}
    const divElement = document.querySelector('#flexDiv');
    for (let index = 0; index < arrayObject.length; index++) {
        //let provaCard = `<div class="bg-pink-300">${arrayObject[index].nome}</div>`
        if (index === 3 || index === 6) {
            let card =`<div class="bg-green-500 rounded p-3">
            ${arrayObject[index].nome}
            </div>`;            
            flexDiv.insertAdjacentHTML('beforeend', card);
        } else {
            let card =`<div class="bg-blue-500 rounded p-3">
            ${arrayObject[index].nome}
            </div>`;            
            flexDiv.insertAdjacentHTML('beforeend', card);
        }
        // prima iterazione
        // const element = arrayObject[index];
        // console.log(element, 'element');
    }



    function coseDiProva() {
        semaforo(color);
    }



// DOM MANAGEMENT
// document.querySelector('h1').innerHTML = 'Hello World!';
// const liElement = document.createElement('li');
// document.querySelector('ul').appendChild(liElement);


// // EVENT HANDLING
// const inputElement = document.querySelector('input');
// inputElement.addEventListener('input', (event) => {
//     const inputValue = event.target.value;
//     console.log(inputValue);
//     prova = inputValue;
// });
// inputElement.addEventListener('play', (event) => {
//     display hidden
//     const inputValue = event.target.value;
//     console.log(inputValue);
// });

// function
// function prova(pippo, pluto) {
//     const prova = pippo + pluto;
//     //console.log(prova);
//     return prova;
// }
// console.log(prova(1,2));













// AJAX REQUESTS
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => console.log(json));






