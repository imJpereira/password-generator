const numbers = "0123456789";
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alhpaberUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%&*-_"

const charactersInput = document.getElementById('number-of-characters');
const button = document.getElementById("generate-password");

button.addEventListener('click', () => {
    const charactersInput = document.getElementById('number-of-characters');
    const numbersInput = document.getElementById('numbers');
    const upperCaseInput = document.getElementById('uppercase');
    const lowerCaseInput = document.getElementById('lowercase');
    const symbolsInput = document.getElementById('symbols');

    const pick = [];
    const password = [];

    if(isChecked(numbersInput)) {
        pick.push(numbers);
    }
    if(isChecked(upperCaseInput)) {
        pick.push(alhpaberUpper);
    }
    if(isChecked(lowerCaseInput)) {
        pick.push(alphabetLower);
    }
    if(isChecked(symbolsInput)) {
        pick.push(symbols);
    }
    
    for (let i = 0; i <= charactersInput.value - 1; i++) {
        //select random group in array
        let randomNumber = rand(0, pick.length);
        const pickedGroup = pick[randomNumber];

        //select random element in array
        randomNumber = rand(0, pickedGroup.length);
        const passwordDigit = pickedGroup[randomNumber];

        password.push(passwordDigit);
    }

    console.log(password.join(''));

})

function isChecked(element) {
    return element.checked;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}