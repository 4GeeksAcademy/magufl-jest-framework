test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar , oneEuroIs} = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * oneEuroIs.USD;
    expect(fromEuroToDollar(3.5)).toBe(3.74); 
})

test("One dollar should be 146.26 yen", function() {
    const { fromDollarToYen , oneEuroIs } = require('./app.js');
    const yen = fromDollarToYen(2);
    const expected = 2 * 146.26;
    expect(fromDollarToYen(2)).toBe(292.52); 
})

test("One yen should be 0.005 pound ", function() {
    const { fromYenToPound , oneEuroIs } = require('./app.js');
    const yen = fromYenToPound(2);
    const expected = 2 * 0.005;
    expect(fromYenToPound(2)).toBe(0.01); 
})