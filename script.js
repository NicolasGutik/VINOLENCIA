const hamburguesa = document.getElementsByClassName('hamburguesa')[0]
const linksMdz = document.getElementsByClassName('linksMdz')[0]

hamburguesa.addEventListener('click', () => {
    linksMdz.classList.toggle('active')
})