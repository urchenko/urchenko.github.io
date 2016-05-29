var pow = require('../js/app.js');

describe("pow", function() {

  describe("возводит x в степень n", function() {

    function makeTest(x) {
      var expected = x * x * x;
      it("при возведении " + x + " в степень 3 результат: " + expected, function() {
        expect(pow(x, 3)).toBe(expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it("при возведении в нулевую степень результат будет 1", function() {
    expect(pow(2, 0)).toEqual(1);
  });

  it("при возведении в отрицательную степень результат NaN", function() {
    expect(pow(4, -3)).toBeNaN();
  });

  it("при возведении в дробную степень результат NaN", function() {
    expect(pow(7, 1.344)).toBeNaN();
  });

});