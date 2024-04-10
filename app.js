// Contenido de app.js 
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

// Esta es mi función que pasa de dollars a yen
const fromDollarToYen = function(valueInDollar) {
    let valueInYen = ((valueInDollar / 1.07) * 156.5);
    return valueInYen;
}

// Esta es mi función que pasa de yen a pound
const fromYenToPound = function(valueInYen) {
    let valueInPound = ((valueInYen / 156.5) * 0.87);
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }