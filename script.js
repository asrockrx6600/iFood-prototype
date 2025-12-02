const hamburguer = document.getElementById('hamburguer')
const menu = document.getElementById('navOptions')

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active')
})

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active')
})