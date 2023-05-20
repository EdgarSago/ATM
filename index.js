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

// Popup para buttons del header 
const openUsers = document.getElementById('openUsers')
const ocultoUsers = document.getElementById('ocultoUsers')
const closeUsers = document.getElementById('closeUsers')

openUsers.addEventListener('click', () => {
    ocultoUsers.classList.add('show')
})
closeUsers.addEventListener('click', () => {
    ocultoUsers.classList.remove('show')
})

const openAbout = document.getElementById('openAbout')
const ocultoAbout = document.getElementById('ocultoAbout')
const closeAbout = document.getElementById('closeAbout')

openAbout.addEventListener('click', () => {
    ocultoAbout.classList.add('show')
})
closeAbout.addEventListener('click', () => {
    ocultoAbout.classList.remove('show')
})

const openContacts = document.getElementById('openContacts')
const ocultoContacts = document.getElementById('ocultoContacts')
const closeContacts = document.getElementById('closeContacts')

openContacts.addEventListener('click', () => {
    ocultoContacts.classList.add('show')
})
closeContacts.addEventListener('click', () => {
    ocultoContacts.classList.remove('show')
})

// Validacion de datos
function message(type) {
    let mistake = document.getElementById(`mistake${type}`)
    mistake.classList.remove('hiddenMessage')
    mistake.classList.add('visibleMessage')
    setTimeout(() => {
        mistake.classList.remove('visibleMessage')
        mistake.classList.add('hiddenMessage')
    }, 4000)
}

function validar(user, email, password) {
    if(user === users[0].userOne && email === users[0].emailOne && password === users[0].passwordOne){
        window.location.href = 'userOne.html'
    } else if(user === users[1].userTwo && email === users[1].emailTwo && password === users[1].passwordTwo){
        window.location.href = 'userTwo.html'
    } else if(user === users[2].userThree && email === users[2].emailThree && password === users[2].passwordThree){
        window.location.href = 'userThree.html'
    } else if(user === '' && email === '' && password === ''){
        message('User')
        message('Email')
        message('Password')
    } else if(user === ''){
        message('User')
        if(email === ''){
            message('Email')
        } else if(password === ''){
            message('Password')
        }
    } else if(email === ''){
        message('Email')
        if(password === ''){
            message('Password')
        }
    } else if(password === ''){
        message('Password')
    } else{
        message('All')
    }
}

form.addEventListener('submit', (evento) => {
    evento.preventDefault()
    let user = document.querySelector('#user').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    validar(user, email, password)
})
