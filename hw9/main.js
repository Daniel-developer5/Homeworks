let enterBtn = document.getElementsByClassName("enter-btn")[0]

enterBtn.addEventListener('click', () => {
    enterBtn.style.display = "none"
    document.getElementsByTagName("form")[0].style.display = "block"
})

let name = document.getElementById("name")
let password = document.getElementById("pass")
let date = document.getElementById("date")
let errorMessage = document.getElementsByClassName("error-message")
let possibleErrors = [false, false, false]
let checker

function showErrorMesage(str, index, errorIndex) {
    errorMessage[index].textContent = str
    errorMessage[index].classList.add("error")
    possibleErrors[errorIndex] = true
}

function deleteErrorMessage(index, errorIndex) {
    errorMessage[index].classList.remove("error")
    errorMessage[index].textContent = ''
    possibleErrors[errorIndex] = false
}

name.addEventListener('input', () => {
    if (/[A-Z]/.test(name.value)) {
        name.classList.remove('valid')
        name.classList.add('invalid')
        showErrorMesage("Use only lowercase letter", 0, 0)
    } else {
        name.classList.remove('invalid')
        name.classList.add('valid')
        deleteErrorMessage(0, 0)
    }
})

password.addEventListener('input', () => {
    if (/[1-9]/.test(password.value)) {
        password.classList.remove('valid')
        password.classList.add('invalid')
        showErrorMesage("Don't use a number", 1, 1)
    } else {
        password.classList.remove('invalid')
        password.classList.add('valid')
        deleteErrorMessage(1, 1)
    }
})

date.addEventListener('input', () => {
    if (date.valueAsNumber >= 1167609600000) {  //Number 1167609600000 is equals 01.01.2007
        date.classList.remove('valid')
        date.classList.add('invalid')
        showErrorMesage("You too small, see you later", 2, 2)
    } else {
        date.classList.remove('invalid')
        date.classList.add('valid')
        deleteErrorMessage(2, 2)
    }
})

document.getElementById("btn").addEventListener('click', (event) => {
    event.preventDefault()
    checker = false
    possibleErrors.some((item) => {
        if(item === true) {
            return checker = true
        }
    })
    if (checker === true) {
        for (let i = 0; i < errorMessage.length; i++) {
            errorMessage[i].style.opacity = '0'
            setTimeout(() => {
                errorMessage[i].style.opacity = '1'
            },700)
        }
    } else {
        alert('You has already entered')
    }
})