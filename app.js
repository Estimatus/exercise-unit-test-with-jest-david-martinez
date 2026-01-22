// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87,  // libra esterlina
}

// 1 De Euro a Dólar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// 2 De Dólar a Yen (Dólar -> Euro -> Yen)
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07; //  dólares a euros
    let valueInYen = valueInEuro * 156.5;   //  euros a yenes
    return valueInYen;
}

// 3 De Yen a Libra (Yen -> Euro -> Libra)
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5;  //  yenes a euros
    let valueInPound = valueInEuro * 0.87; //  euros a libras
    return valueInPound;
}

// Exportar las funciones para que Jest pueda usarlas
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };