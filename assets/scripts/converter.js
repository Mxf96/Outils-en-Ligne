document.getElementById('conversionType').addEventListener('change', function() {
    var selectedType = this.value;
    var measurementContainer = document.querySelector('.measurement-converter-container');
    var weightContainer = document.querySelector('.weight-converter-container');
    var currencyContainer = document.querySelector('.currency-converter-container');

    measurementContainer.style.display = selectedType === 'measure' ? 'block' : 'none';
    weightContainer.style.display = selectedType === 'weight' ? 'block' : 'none';
    currencyContainer.style.display = selectedType === 'currency' ? 'block' : 'none';
});

document.getElementById('inputUnit').addEventListener('change', convertMeasurement);
document.getElementById('outputUnit').addEventListener('change', convertMeasurement);
document.getElementById('inputValue').addEventListener('input', convertMeasurement);

// Écouteurs d'événements pour le convertisseur de mesure
function convertMeasurement() {
    let inputValue = parseFloat(document.getElementById('inputValue').value);
    let inputUnit = document.getElementById('inputUnit').value;
    let outputUnit = document.getElementById('outputUnit').value;

    let inputInMeters = convertToMeters(inputValue, inputUnit);
    let outputValue = convertFromMeters(inputInMeters, outputUnit);

    document.getElementById('outputValue').value = outputValue.toFixed(2);
}

function convertToMeters(value, unit) {
    switch(unit) {
        case 'km': return value * 1000;
        case 'm': return value;
        case 'dm': return value / 10;
        case 'cm': return value / 100;
        case 'mm': return value / 1000;
        case 'micrometer': return value / 1e6;
        case 'nanometer': return value / 1e9;
        case 'miles': return value * 1609.34;
        case 'inches': return value * 0.0254;
        case 'yard': return value * 0.9144;
        case 'foot': return value * 0.3048;
        case 'nautical_mile': return value * 1852;
        default: return value;
    }
}

function convertFromMeters(value, unit) {
    switch(unit) {
        case 'km': return value / 1000;
        case 'm': return value;
        case 'dm': return value * 10;
        case 'cm': return value * 100;
        case 'mm': return value * 1000;
        case 'micrometer': return value * 1e6;
        case 'nanometer': return value * 1e9;
        case 'miles': return value / 1609.34;
        case 'inches': return value / 0.0254;
        case 'yard': return value / 0.9144;
        case 'foot': return value / 0.3048;
        case 'nautical_mile': return value / 1852;
        default: return value;
    }
}

// Convertisseur de poids
document.getElementById('weightInputUnit').addEventListener('change', convertWeight);
document.getElementById('weightOutputUnit').addEventListener('change', convertWeight);
document.getElementById('weightInputValue').addEventListener('input', convertWeight);

function convertWeight() {
    let inputValue = parseFloat(document.getElementById('weightInputValue').value) || 0;
    let inputUnit = document.getElementById('weightInputUnit').value;
    let outputUnit = document.getElementById('weightOutputUnit').value;

    let inputInKilograms = convertToKilograms(inputValue, inputUnit);
    let outputValue = convertFromKilograms(inputInKilograms, outputUnit);

    document.getElementById('weightOutputValue').value = outputValue.toFixed(2);
}

function convertToKilograms(value, unit) {
    switch(unit) {
        case 't': return value * 1000;
        case 'kg': return value;
        case 'g': return value / 1000;
        case 'mg': return value / 1e6;
        case 'short_ton': return value * 907.185;
        case 'long_ton': return value * 1016.05;
        case 'stone': return value * 6.35029;
        case 'lb': return value * 0.453592;
        case 'oz': return value * 0.0283495;
        default: return value;
    }
}

function convertFromKilograms(value, unit) {
    switch(unit) {
        case 't': return value / 1000;
        case 'kg': return value;
        case 'g': return value * 1000;
        case 'mg': return value * 1e6;
        case 'short_ton': return value / 907.185;
        case 'long_ton': return value / 1016.05;
        case 'stone': return value / 6.35029;
        case 'lb': return value / 0.453592;
        case 'oz': return value / 0.0283495;
        default: return value;
    }
}

// Convertisseur de monnaie
document.getElementById('currencyInputUnit').addEventListener('change', convertCurrency);
document.getElementById('currencyOutputUnit').addEventListener('change', convertCurrency);
document.getElementById('currencyInputValue').addEventListener('input', convertCurrency);

function convertCurrency() {
    let inputValue = parseFloat(document.getElementById('currencyInputValue').value) || 0;
    let outputUnit = document.getElementById('currencyOutputUnit').value;

    let outputValue = convertFromEuros(inputValue, outputUnit);

    document.getElementById('currencyOutputValue').value = outputValue.toFixed(2);
}

function convertFromEuros(value, unit) {
    // Assurez-vous que ces taux de change correspondent à ceux dans votre menu déroulant
    switch(unit){
        case "USD": return value * 1.09;
        case "JPY": return value * 161.09;
        case "GBP": return value * 0.86;
        case "AUD": return value * 1.65;
        case "CAD": return value * 1.47;
        case "CHF": return value * 0.95;
        case "CNY": return value * 7.84;
        case "SEK": return value * 11.38;
        case "NOK": return value * 11.38;
        case "KRW": return value * 1449.87;
        case "SGD": return value * 1.46;
        case "HKD": return value * 8.51;
        case "INR": return value * 90.37;
        case "MXN": return value * 18.65;
        case "ZAR": return value * 20.63;
        case "RUB": return value * 97.28;
        case "NZD": return value * 1.78;
        case "BRL": return value * 5.36;
        case "ARS": return value * 891.42;
        default: return value;
    };
}