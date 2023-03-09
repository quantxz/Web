const inputEL = document.querySelector('#password');
const passowrdEL = document.querySelector('#password_length');
const butaoEL = document.querySelector('#copy_password');
const resetEL = document.querySelector('#reset');


function generatePassword() {
    const chars = "abcdefghijklmnopqrstuvwxyzaABCDEFGHIJKLMNOPQRSTUVWXYZ123456789-+§={}][ªº.+-*/!@#$%¨&*()¹²³£¢¬¬``~~^?°|\:;"

    let password = ""

    for(let i = 0;i < passowrdEL.value;i++){
        const random = Math.floor(Math.random() * chars.length)
        password += chars.substring(random, random + 1)
    }

    
    inputEL.value = password
    console.log(password)
}


function copy() { 
        navigator.clipboard.writeText(inputEL.value)
}


butaoEL.addEventListener('click',copy)

passowrdEL.addEventListener('input', function () {
    generatePassword()
    console.log()
})

resetEL.addEventListener('click', function () {
    passowrdEL.value = 1
    inputEL.value = null
})


generatePassword()
