// Importar las funciones desde app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    // Si 1 euro son 1.07 dólares, 3.5 euros deberían ser (3.5 * 1.07)
    const dollars = fromEuroToDollar(3.5);
    expect(dollars).toBe(3.745);
});

test("1.07 dollars should be 156.5 yen", function() {
    // 1.07 dólares equivalen a 1 euro, por lo tanto deberían ser 156.5 yenes
    const yen = fromDollarToYen(1.07);
    expect(yen).toBe(156.5);
});

test("156.5 yen should be 0.87 pounds", function() {
    // 156.5 yenes equivalen a 1 euro, por lo tanto deberían ser 0.87 libras
    const pounds = fromYenToPound(156.5);
    expect(pounds).toBe(0.87);
});