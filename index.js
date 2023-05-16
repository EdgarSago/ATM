const users = [
    {
        userUno: 'Edgar',
        emailUno: 'edgar@gmail.com',
        passwordUno: '12345'
    },
    {
        userDos: 'Rocio',
        emailDos: 'rocio@gmail.com',
        passwordDos: '98765'
    },
    {
        userTres: 'Lizeth',
        emailTres: 'lizeth@gmail.com',
        passwordTres: '24680'
    }
]

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
    if(user === users[0].userUno && email === users[0].emailUno && password === users[0].passwordUno){
        window.location.href = 'users.html'
    } else if(user === users[1].userDos && email === users[1].emailDos && password === users[1].passwordDos){
        window.location.href = 'users.html'
    } else if(user === users[2].userTres && email === users[2].emailTres && password === users[2].passwordTres){
        window.location.href = 'users.html'
    } else if(user === '' && email === '' && password === ''){
        message('Data')
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

form.addEventListener('submit', (evento)=>{
    evento.preventDefault()
    let user = document.querySelector('#user').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    validar(user, email, password)
})
