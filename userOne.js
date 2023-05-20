const users = [
    {
        userOne: 'Edgar',
        emailOne: 'edgar@gmail.com',
        passwordOne: '12345'
    },
    {
        userTwo: 'Rocio',
        emailTwo: 'rocio@gmail.com',
        passwordTwo: '98765'
    },
    {
        userThree: 'Lizeth',
        emailThree: 'lizeth@gmail.com',
        passwordThree: '24680'
    }
]

const customers = [
    {
        accountOne: 200
    },
    {
        accountTwo: 500
    },
    {
        accountThree: 300
    }
]

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