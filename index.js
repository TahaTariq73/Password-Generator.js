// Constants and variables
const charactersLenght = document.getElementById('password-lenght');
const includeUpperCase = document.getElementById('upper-case');
const includeLowerCase = document.getElementById('lower-case'); 
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');
const passwordText = document.getElementById('password');
const generateButton = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy');

// Password generator class
class Generator {
    generatePassword(charactersLenghtVal, includeUpperCaseVal,
    includeLowerCaseval, includeNumbersVal, includeSymbolsVal) {
        let charCodes = [];
        if (includeUpperCaseVal) charCodes = charCodes.concat(UPPER_CHAR_CODES);
        if (includeLowerCaseval) charCodes = charCodes.concat(LOWER_CHAR_CODES);
        if (includeNumbersVal) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
        if (includeSymbolsVal) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);

        const PASSWORD = [];
        for (let i = 0; i < charactersLenghtVal; i++) {
            const character = charCodes[Math.floor(Math.random() * charCodes.length)]
            PASSWORD.push(String.fromCharCode(character));
        }
        return PASSWORD.join(''); 

    }

    ArrayBetween2Numbers(min, max) {
        const array = [];
        for (let i = min; i <= max; i++) {
            array.push(i);
        }
        return array;
    }
}
const generator = new Generator();

// Char Codes arrays
const UPPER_CHAR_CODES = generator.ArrayBetween2Numbers(65, 90);
const LOWER_CHAR_CODES = generator.ArrayBetween2Numbers(97, 122);
const NUMBER_CHAR_CODES = generator.ArrayBetween2Numbers(48, 57);
const SYMBOLS_CHAR_CODES = generator.ArrayBetween2Numbers(33, 47).concat(
   generator.ArrayBetween2Numbers(58, 64) 
).concat(generator.ArrayBetween2Numbers(91, 96)).concat(
    generator.ArrayBetween2Numbers(123, 126)
)

// Getting values when button is press
generateButton.addEventListener('click', () => {
    const charactersLenghtVal = charactersLenght.value;
    const includeUpperCaseVal = includeUpperCase.checked;
    const includeLowerCaseval = includeLowerCase.checked; 
    const includeNumbersVal = includeNumbers.checked;
    const includeSymbolsVal = includeSymbols.checked;
    const password = generator.generatePassword(
        charactersLenghtVal, includeUpperCaseVal,
        includeLowerCaseval, includeNumbersVal, includeSymbolsVal);
    passwordText.innerText = password;
})

copyBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.style.display = "none";

    input.value = passwordText.innerText;
    input.select();
    input.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(input.value);
    input.remove();
})