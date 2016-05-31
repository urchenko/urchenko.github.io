var pow = require('../js/app.js');

describe('pow function', function() {

  describe('raising x to a power n', function() {

    function makeTest(x) {
      var expected = x * x * x;
      it('should failed if raising' + x + 'to power 3 != ' + expected, function() {
        expect(pow(x, 3)).toBe(expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }

  });

  it('should failed if raising to 0 exponent != 1', function() {
    expect(pow(2, 0)).toEqual(1);
  });

  it('should failed if raising to negative exponent not a NaN', function() {
    expect(pow(4, -3)).toBeNaN();
  });

  it('should failed if raising to factorial exponent not a NaN', function() {
    expect(pow(7, 1.344)).toBeNaN();
  });

});