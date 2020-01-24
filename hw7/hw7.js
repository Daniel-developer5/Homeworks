function ableModal() {
    document.getElementById("wrapper").classList.toggle('active')
    document.getElementById("notactive").classList.toggle('yes')
}

let ablePass = false

function lookPassword() {
    ablePass = !ablePass
    var pass = document.getElementById("pass")
    if (!!ablePass) {
        pass.setAttribute("type", "password")
    } else {
        pass.setAttribute("type", "text")
    }
}