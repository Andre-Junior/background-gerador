let cor1 = document.getElementById('color1')
let cor2 = document.getElementById('color2')
let h3t = document.getElementById('h3text')
let body = document.getElementById('gerador')

cor1.addEventListener('input', setGradient)
cor2.addEventListener('input', setGradient)

function setGradient () {

    body.style.background = `linear-gradient(to right, ${cor1.value}, ${cor2.value})`
    
    h3t.textContent = body.style.background
}