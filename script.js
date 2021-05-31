const text = document.querySelector('textarea')
const buttonUpper= document.querySelector('#btnUpper')
const buttonLower = document.querySelector('#btnLower')
const buttonfirstLetterWord = document.querySelector('#btnFirstLetterWord')
const buttonfirstWordSentence = document.querySelector('#btnFirstWordSentence')

let valueText;

buttonUpper.addEventListener('click', changeTextUpper)
buttonLower.addEventListener('click', changeTextLower)
buttonfirstLetterWord.addEventListener('click', changeFirstLetterWord)
buttonfirstWordSentence.addEventListener('click', changeFirstWordSentence)

function changeTextUpper(){
    valueText = text.value
    text.value = valueText.toUpperCase();
}

function changeTextLower() {
    valueText = text.value
    text.value = valueText.toLowerCase();
}

function changeFirstWordSentence() {
    valueText = text.value
    text.value = valueText.toLowerCase().replace(/^\D|\.\s\S/g, function(i) {
        return i.toUpperCase(); 
    })
}

function changeFirstLetterWord() {
    valueText = text.value

    text.value = valueText.toLowerCase().replace(/(?:^|\s)\S/g, function(i) {
        return i.toUpperCase(); 
    })
}
