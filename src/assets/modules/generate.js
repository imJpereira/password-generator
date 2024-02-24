import {numbers, alphabetLower, alhpaberUpper, symbols, isChecked, rand} from "./elements"

export default function createNewPassword() {
    const charactersInput = document.getElementById('number-of-characters');
    const numbersInput = document.getElementById('numbers');
    const upperCaseInput = document.getElementById('uppercase');
    const lowerCaseInput = document.getElementById('lowercase');
    const symbolsInput = document.getElementById('symbols');

    const pick = [];
    const password = [];

    if (charactersInput.value > 16) {
        charactersInput.value = 15;
    } 

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

    if (pick.length === 0) return;
    
    for (let i = 0; i <= charactersInput.value - 1; i++) {
        //select random group in array
        let randomNumber = rand(0, pick.length);
        const pickedGroup = pick[randomNumber];

        //select random element in array
        randomNumber = rand(0, pickedGroup.length);
        const passwordDigit = pickedGroup[randomNumber];

        password.push(passwordDigit);
    }
    return password.join('');
}
