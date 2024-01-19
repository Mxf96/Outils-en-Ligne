let display = document.getElementById('display');

function press(digit) {
    display.value += digit;
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(err) {
        display.value = 'Erreur';
    }
}

function clearDisplay() {
    display.value = '';
}