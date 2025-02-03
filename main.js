let inputHolder = document.querySelector('input');
let length = 12;

const upperChars = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerChars = "qwertyuiopasdfghjklzxcvbnm";
const numbers = "0123456789";
const symbols = "~!@#$%^&*()_+-={}[]|\/.,?/':;";

const allChars = upperChars + lowerChars + numbers + symbols;

function generate() {
    let password = '';
    password += upperChars[Math.floor(Math.random() * upperChars.length)];
    password += lowerChars[Math.floor(Math.random() * lowerChars.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    inputHolder.value = password;
}

function copy() {
    inputHolder.select();
    document.execCommand('copy');
}

