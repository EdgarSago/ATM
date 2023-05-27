const users = [
    {
        userOne: 'Edgar',
        emailOne: 'edgar@gmail.com',
        passwordOne: '12345',
        mainAccountOne: 150,
        savingsAccountOne: 100
    },
    {
        userTwo: 'Rocio',
        emailTwo: 'rocio@gmail.com',
        passwordTwo: '98765',
        mainAccountTwo: 300,
        savingsAccountTwo: 150
    },
    {
        userThree: 'Lizeth',
        emailThree: 'lizeth@gmail.com',
        passwordThree: '24680',
        mainAccountThree: 200,
        savingsAccountThree: 150
    }
];

document.getElementById('welcome').textContent = '¡WELCOME! ' + users[2].userThree;

let correctAudio = new Audio('assets/correct.wav');
let errorAudio = new Audio('assets/error.wav');

// accountOne
let balanceMain = document.getElementById('balanceMain').value = users[2].mainAccountThree + ' USD';
let btn_transferSavings = document.getElementById('btn_transferSavings');
let btn_depositMain = document.getElementById('btn_depositMain');
let btn_withdrawMain = document.getElementById('btn_withdrawMain');

// accountTwo
let balanceSavings = document.getElementById('balanceSavings').value = users[2].savingsAccountThree + ' USD';
let btn_transferMain = document.getElementById('btn_transferMain');
let btn_depositSavings = document.getElementById('btn_depositSavings');
let btn_withdrawSavings = document.getElementById('btn_withdrawSavings');

function message(type) {
    let mistake = document.getElementById(`mistake${type}`);
    mistake.classList.add('show');
    errorAudio.play();
    setTimeout(() => {
        mistake.classList.remove('show');
    }, 3000);
}

// form: accountOne
// button transferSavings
function mainToSavings() {
    let balanceMain = parseInt(document.getElementById('balanceMain').value);
    let balanceSavings = parseInt(document.getElementById('balanceSavings').value);
    let transferSavings = parseInt(document.getElementById('transferSavings').value);
    let total1 = balanceMain - transferSavings;
    let total2 = balanceSavings + transferSavings;
    if (total1 >= 10 && total2 <= 990) {
        document.getElementById('balanceMain').value = total1 + ' USD';
        document.getElementById('balanceSavings').value = total2 + ' USD';
        correctAudio.play();
    }else if (total2 > 990) {
        message('Savings990');
    }else if (total1 < 10) {
        message('Main10');
    } else {
        message('Amount');
    }
}

btn_transferSavings.addEventListener('click', (evento) => {
    evento.preventDefault();
    mainToSavings();
})

// button depositMain
function depositToMain() {
    let balanceMain = parseInt(document.getElementById('balanceMain').value);
    let depositMain = parseInt(document.getElementById('depositMain').value);
    let total = balanceMain + depositMain;
    if (total <= 990) {
        document.getElementById('balanceMain').value = total + ' USD';
        correctAudio.play();
    } else if(total > 990){
        message('Main990');
    } else{
        message('Amount');
    }
}

btn_depositMain.addEventListener('click', (evento) => {
    evento.preventDefault();
    depositToMain();
})

// button withdrawMain
function withdrawToMain() {
    let balanceMain = parseInt(document.getElementById('balanceMain').value);
    let withdrawMain = parseInt(document.getElementById('withdrawMain').value);
    let total = balanceMain - withdrawMain;
    if (total >= 10) {
        document.getElementById('balanceMain').value = total + ' USD';
        correctAudio.play();
    } else if(total < 10){
        message('Main10');
    } else{
        message('Amount');
    }
}

btn_withdrawMain.addEventListener('click', (evento) => {
    evento.preventDefault();
    withdrawToMain();
})

// form accountTwo
// button transferMain
function savingsToMain() {
    let balanceMain = parseInt(document.getElementById('balanceMain').value);
    let balanceSavings = parseInt(document.getElementById('balanceSavings').value);
    let transferMain = parseInt(document.getElementById('transferMain').value);
    let total1 = balanceSavings - transferMain;
    let total2 = balanceMain + transferMain;
    if (total1 >= 10 && total2 <= 990) {
        document.getElementById('balanceSavings').value = total1 + ' USD';
        document.getElementById('balanceMain').value = total2 + ' USD';
        correctAudio.play();
    }else if (total2 > 990) {
        message('Main990');
    } else if(total1 < 10){
        message('Savings10');
    } else{
        message('Amount');
    }
}

btn_transferMain.addEventListener('click', (evento) => {
    evento.preventDefault();
    savingsToMain();
})

// button depositSavings
function depositToSavings() {
    let balanceSavings = parseInt(document.getElementById('balanceSavings').value);
    let depositSavings = parseInt(document.getElementById('depositSavings').value);
    let total = balanceSavings + depositSavings;
    if (total <= 990) {
        document.getElementById('balanceSavings').value = total + ' USD';
        correctAudio.play();
    } else if(total > 990){
        message('Savings990');
    } else{
        message('Amount');
    }
}

btn_depositSavings.addEventListener('click', (evento) => {
    evento.preventDefault();
    depositToSavings();
})

// button withdrawSavings
function withdrawToSavings() {
    let balanceSavings = parseInt(document.getElementById('balanceSavings').value);
    let withdrawSavings = parseInt(document.getElementById('withdrawSavings').value);
    let total = balanceSavings - withdrawSavings;
    if (total >= 10) {
        document.getElementById('balanceSavings').value = total + ' USD';
        correctAudio.play();
    } else if(total < 10){
        message('Savings10');
    } else{
        message('Amount');
    }
}

btn_withdrawSavings.addEventListener('click', (evento) => {
    evento.preventDefault();
    withdrawToSavings();
})

// Popup para button signOff 
signOff.addEventListener('click', () => {
    exitContainer.classList.add('show');
});

// buttons dentro del button signOff
exit.addEventListener('click', () => {
    window.location.href = 'index.html';
})

goBack.addEventListener('click', () => {
    exitContainer.classList.remove('show');
})
