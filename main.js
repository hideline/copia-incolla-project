
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

function spegniLed() {
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

    thirdCard.classList.remove('bg-white/5')
    thirdCard.classList.remove('ring-2')
    thirdCard.classList.remove('ring-indigo-500')
    buyThirdPlan.classList.add('bg-white/10')
    buyThirdPlan.classList.remove('bg-indigo-500')
}



function primaProva() {
    spegniLed()
    secondCard.classList.add('ring-1', 'ring-white/10')
    firstCard.classList.add('bg-white/5')
    firstCard.classList.remove('ring-1', 'ring-white/10')
    firstCard.classList.add('ring-2')
    firstCard.classList.add('ring-indigo-500')
    buyPlan.classList.remove('bg-white/10')
    buyPlan.classList.add('bg-indigo-500')
}

function secondaProva() {
    spegniLed()
    secondCard.classList.add('bg-white/5')
    secondCard.classList.remove('ring-1', 'ring-white/10')
    secondCard.classList.add('ring-2')
    secondCard.classList.add('ring-indigo-500')
    buySecondPlan.classList.remove('bg-white/10')
    buySecondPlan.classList.add('bg-indigo-500')
    firstCard.classList.remove('ring-2')
    firstCard.classList.remove('ring-indigo-500')
    firstCard.classList.add('ring-1', 'ring-white/10')
    thirdCard.classList.remove('ring-2')
    thirdCard.classList.remove('ring-indigo-500')
    thirdCard.classList.add('ring-1', 'ring-white/10')
}

function terzaProva() {
    spegniLed()
    thirdCard.classList.add('bg-white/5')
    thirdCard.classList.remove('ring-1', 'ring-white/10')
    thirdCard.classList.add('ring-2')
    thirdCard.classList.add('ring-indigo-500')
    buyThirdPlan.classList.remove('bg-white/10')
    buyThirdPlan.classList.add('bg-indigo-500')
    firstCard.classList.remove('ring-2')
    firstCard.classList.remove('ring-indigo-500')
    firstCard.classList.add('ring-1', 'ring-white/10')
    secondCard.classList.remove('ring-2')
    secondCard.classList.remove('ring-indigo-500')
    secondCard.classList.add('ring-1', 'ring-white/10')
}


const monthly = document.querySelector('#monthly')
const annually = document.querySelector('#annually')






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




// function changeToAnnually() {


// }

function paymentMonthly() {
    const freelancerPrice = document.querySelector('#freelancer-price')
    const startupPrice = document.querySelector('#startup-price')
    const enterprisePrice = document.querySelector('#enterprise-price')
    const freelancerText = document.querySelector('#freelancer-text')
    const startupText = document.querySelector('#startup-text')
    const enterpriseText = document.querySelector('#enterprise-text')
    annually.classList.remove('bg-indigo-500')
    monthly.classList.add('bg-indigo-500')
    freelancerPrice.innerHTML = '$15'
    startupPrice.innerHTML = '$30'
    enterprisePrice.innerHTML = '$48'
    startupText.innerHTML = '/month'
    enterpriseText.innerHTML = '/month'
    freelancerText.innerHTML = '/month'
}

function paymentAnnually() {
    const freelancerPrice = document.querySelector('#freelancer-price')
    const startupPrice = document.querySelector('#startup-price')
    const enterprisePrice = document.querySelector('#enterprise-price')
    const freelancerText = document.querySelector('#freelancer-text')
    const startupText = document.querySelector('#startup-text')
    const enterpriseText = document.querySelector('#enterprise-text')
    annually.classList.add('bg-indigo-500')
    monthly.classList.remove('bg-indigo-500')

    freelancerPrice.innerHTML = '$144'
    startupPrice.innerHTML = '$288'
    enterprisePrice.innerHTML = '$576'
    startupText.innerHTML = '/year'
    enterpriseText.innerHTML = '/year'
    freelancerText.innerHTML = '/year'
}