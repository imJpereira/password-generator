const numbers = "0123456789";
const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
const alhpaberUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!@#$%&*-_";

function isChecked(element) {
    return element.checked;
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export {numbers, alphabetLower, alhpaberUpper, symbols, isChecked, rand}