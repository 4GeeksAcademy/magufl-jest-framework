// One euro is:

let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british poun

}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * oneEuroIs.USD ;
    return Math.floor(valueInDollar*100)/100;
};
    
// Esta es mi función que pasa de dollars a yen
const fromDollarToYen = function(valueInDollar) {
    let dollarToEuro = valueInDollar / oneEuroIs.USD;
    let euroToYen = dollarToEuro * oneEuroIs.JPY;
    return Math.floor(euroToYen * 100) / 100;
};

// Esta es mi función que pasa de yen a pound
const fromYenToPound = function(valueInYen) {
    let yenToEuro = valueInYen / oneEuroIs.JPY;
    let euroToPound = yenToEuro * oneEuroIs.GBP;
    return Math.floor(euroToPound * 100) / 100;
};



// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound , oneEuroIs }