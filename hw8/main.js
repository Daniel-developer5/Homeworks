let btn = document.getElementById("calculate-btn")
let input = document.getElementById("first")
let inputTwo = document.getElementById("second")
let result = document.getElementById("result")
let errorCheck = false

btn.addEventListener('click', function(event) {
    event.preventDefault()
    if (input.value === "" && inputTwo.value === "") {
            input.placeholder = "Enter a number!"
            input.classList.add('error')
            inputTwo.placeholder = "Enter a number!"
            inputTwo.classList.add('error')
            errorCheck = true
    } else if (input.value === ""){
            input.placeholder = "Enter a number!"
            input.classList.add('error')
            errorCheck = true
    } else if (inputTwo.value === "") {
            inputTwo.placeholder = "Enter a number!"
            inputTwo.classList.add('error')
            errorCheck = true
    } else {
        if (!!errorCheck) {
            input.classList.remove('error')
            inputTwo.classList.remove('error')
            input.placeholder = "First Number"
            inputTwo.placeholder = "Second Number"
        }
        result.setAttribute('class', 'animation')
        let mathOperator = document.getElementById("math-op")
        var selectedValue = mathOperator.value
        switch(selectedValue) {
            case '+':
                result.textContent = +input.value + +inputTwo.value
                break
            case '-':
                result.textContent = +input.value - +inputTwo.value
                break
            case '*':
                result.textContent = +input.value * +inputTwo.value
                break
            case '/':
                result.textContent = +input.value / +inputTwo.value
                break
        }
        result.addEventListener('animationend', function() {
            result.setAttribute('class', '')
        })
    }
})

let clear = document.getElementById("clear-btn").addEventListener('click', function(event) {
    event.preventDefault()
    input.value = "" 
    inputTwo.value = ""
})