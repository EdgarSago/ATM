// Popup para button signOff 
const signOff = document.getElementById('signOff')
const exitContainer = document.getElementById('exitContainer')
const goBack = document.getElementById('goBack')

signOff.addEventListener('click', () => {
    exitContainer.classList.add('show')
})

// buttons dentro del button signOff
goBack.addEventListener('click', () => {
    exitContainer.classList.remove('show')
})

exit.addEventListener('click', () => {
    window.location.href = 'index.html'
})