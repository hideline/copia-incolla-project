
function darkMode() {
    document.querySelector('#main-html').classList.toggle('dark')
}

const menu = document.querySelector('#menu')

function apriti() {
    menu.classList.toggle('hidden')
    menu.classList.add('entering')

}
const mobileMenu = document.querySelector('#mobile-menu')
function openMobile() {
    mobileMenu.classList.toggle('hidden')
}



/////////////////////////////////////////////
const firstCard = document.querySelector('#first-card')
const buyPlan = document.querySelector('#buy-plan')

const secondCard = document.querySelector('#second-card')
const buySecondPlan = document.querySelector('#buy-second-plan')

const thirdCard = document.querySelector('#third-card')
const buyThirdPlan = document.querySelector('#buy-third-card')



function primaProva() {
    spotlightFirst()
    firstCard.classList.add('bg-white/5')
    firstCard.classList.add('ring-2')
    firstCard.classList.add('ring-indigo-500')
    buyPlan.classList.remove('bg-white/10')
    buyPlan.classList.add('bg-indigo-500')
}

function secondaProva() {
    spotlightSecond()
    secondCard.classList.add('bg-white/5')
    secondCard.classList.add('ring-2')
    secondCard.classList.add('ring-indigo-500')
    buySecondPlan.classList.remove('bg-white/10')
    buySecondPlan.classList.add('bg-indigo-500')

}

function terzaProva() {
    spotlightThird()
    thirdCard.classList.add('bg-white/5')
    thirdCard.classList.add('ring-2')
    thirdCard.classList.add('ring-indigo-500')
    buyThirdPlan.classList.remove('bg-white/10')
    buyThirdPlan.classList.add('bg-indigo-500')
}

function spotlightFirst() {
    secondCard.classList.remove('bg-white/5')
    secondCard.classList.remove('ring-2')
    secondCard.classList.remove('ring-indigo-500')
    buySecondPlan.classList.add('bg-white/10')
    buySecondPlan.classList.remove('bg-indigo-500')

    thirdCard.classList.remove('bg-white/5')
    thirdCard.classList.remove('ring-2')
    thirdCard.classList.remove('ring-indigo-500')
    buyThirdPlan.classList.add('bg-white/10')
    buyThirdPlan.classList.remove('bg-indigo-500')
}
function spotlightSecond() {
    firstCard.classList.remove('bg-white/5')
    firstCard.classList.remove('ring-2')
    firstCard.classList.remove('ring-indigo-500')
    buyPlan.classList.add('bg-white/10')
    buyPlan.classList.remove('bg-indigo-500')

    thirdCard.classList.remove('bg-white/5')
    thirdCard.classList.remove('ring-2')
    thirdCard.classList.remove('ring-indigo-500')
    buyThirdPlan.classList.add('bg-white/10')
    buyThirdPlan.classList.remove('bg-indigo-500')

}
function spotlightThird() {
    firstCard.classList.remove('bg-white/5')
    firstCard.classList.remove('ring-2')
    firstCard.classList.remove('ring-indigo-500')
    buyPlan.classList.add('bg-white/10')
    buyPlan.classList.remove('bg-indigo-500')

    secondCard.classList.remove('bg-white/5')
    secondCard.classList.remove('ring-2')
    secondCard.classList.remove('ring-indigo-500')
    buySecondPlan.classList.add('bg-white/10')
    buySecondPlan.classList.remove('bg-indigo-500')


}

const monthly = document.querySelector('#monthly')
const annually = document.querySelector('#annually')
const firstPrice = document.querySelector('#first-price')

function paymentMonthly() {
    annually.classList.remove('bg-indigo-500')
    monthly.classList.add('bg-indigo-500')
}


function paymentAnnually() {
    annually.classList.add('bg-indigo-500')
    monthly.classList.remove('bg-indigo-500')


}
// function prova() {
//     firstCard.classList.add('ring-2')
//     firstCard.classList.add('ring-indigo-500')
//     firstCard.classList.add('bg-white/5')

//     buyPlan.classList.remove('bg-white/10')
//     buyPlan.classList.add('bg-indigo-500')

//     secondCard.classList.remove('ring-indigo-500')
//     secondCard.classList.add('ring-1')
//     secondCard.classList.add('ring-white/10')
//     secondCard.classList.remove('bg-white/5')

//     buySecondPlan.classList.remove('bg-indigo-500')
//     buySecondPlan.classList.add('bg-white/10')

// }

const sun = document.getElementById('#sun')
const moon = document.getElementById('#moon')

toggleSwitch.addEventListener('change', function () {
    if (sun.checked) {
        // Aggiungi la classe per il tema chiaro
        toggleLabel.classList.add('light-theme')
    } else {
        // Rimuovi la classe per il tema chiaro
        toggleLabel.classList.remove('light-theme')
    }
});
