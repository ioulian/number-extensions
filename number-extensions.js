/**
 * A collection of number helpers
 *
 * @param {Object} namespace Namespace to use for NumberExtensions
 */
(function (namespace) {
  namespace.NumberExtensions = {};

  /**
   * Cycles current number between a range with an offset
   *
   * y = 1..cycle(3, [-2, 3]):
   *
   * [-2, -1, 0, 1, 2, 3] | [-2, -1, 0, 1, 2, 3]
   *            x++ ++ ++ >   y
   *
   * Where: [] = range, 1 = index, ++ * 3 = offset, y = result
   *
   *
   * Use cases:
   *
   * 1: Infinite carousel prev and next navigation:
   * We have current slide index 1 (2nd slide) and there are 3 items in carousel.
   * On click on next button we need to change current slide to 3 (index = 2):
   *
   * this.currentSlide = this.currentSlide.cycle(1, [0, this.numberOfSlides - 1]);
   * > this.currentSlide = 2
   *
   * If we click on next button again the slide index becomes 0 again as it starts at the beginning
   *
   * this.currentSlide = this.currentSlide.cycle(1, [0, this.numberOfSlides - 1]);
   * > this.currentSlide = 0
   *
   * 2: Autocomplete field:
   * On arrow down press we want to select the next search result, but on -1 you deselect everything:
   *
   * this.currentResultIndex = this.currentSlide.cycle(1, [-1, this.numberOfResults - 1]);
   * if (this.currentResultIndex === -1) {
   *   this.resulsts.deselectAll();
   * }
   *
   *
   * Usage and examples:
   * console.log(1..cycle(+1, [0, 3]))
   * > 2
   * console.log(1..cycle(+3, [0, 3]))
   * > 0
   * console.log(1..cycle(+4, [-3, 3]))
   * > -2
   *
   *
   * @param  {Number} number  Number to modfiy
   * @param  {Number} offset  Offset by which to cycle the number
   * @param  {Number} between Min and max values between to cycle
   * @return {Number}         Cycled number
   */
  namespace.cycle = function (number, offset, between) {
    var newNumber, betweenDifference = Math.abs(between[0] - (between[1] + 1));

    newNumber = number + offset;
    newNumber = newNumber % betweenDifference;

    if (newNumber < between[0]) {
      newNumber = betweenDifference + newNumber;
    }

    if (newNumber > between[1]) {
      newNumber = between[0] + Math.abs(between[1] + 1 - newNumber);
    }

    return newNumber;
  };

  /**
   * Scales an input number (between 0 and 1) to a given min and max values
   *
   * Use cases:
   *
   * 1: Get a random coordinate in a square with dimensions {x:40,y:50,width:20,height:20}
   * var square = {x:40,y:50,width:20,height:20};
   * console.log({
   *   x: Math.random.scale(square.x, square.x + square.width),
   *   y: Math.random.scale(square.y, square.y + square.height)
   * })
   *
   * 2: Draw a progressbar on x = 50 and with max x = 150 (100px width)
   * var progress = 0.75;
   * console.log(progress.scale(50, 150))
   * > 125
   *
   * Usage and examples:
   * Math.random().scale(30, 50);
   * > 43.5 (a random number between 30 and 50)
   *
   * @param  {Number} number Number to modify
   * @param  {Number} min    Minimum desired value
   * @param  {Number} max    Maximum desired value
   * @return {Number}        Scaled number
   */
  namespace.scale = function (number, min, max) {
    return number * (max - min) + min;
  };

  /**
   * Get a random number with maximum value
   *
   * Usage and examples:
   * console.log(50..random())
   * > 35 (a number between 0 and 50)
   *
   * @param  {Number} number Number to modify
   * @return {Number}        Random number
   */
  namespace.random = function (number) {
    return number * Math.random();
  };

  /**
   * Shortcut to Math.floor
   *
   * Usage and examples:
   * console.log(40.6.floor());
   * > 40
   *
   * @param  {Number} number Number to modify
   * @return {Number}        Number rounded to bottom
   */
  namespace.floor = function (number) {
    return Math.floor(number);
  };

  /**
   * Shortcut to Math.round
   *
   * Usage and examples:
   * console.log(40.6.round());
   * > 41
   *
   * @param  {Number} number Number to modify
   * @return {Number}        Rounded number
   */
  namespace.round = function (number) {
    return Math.round(number);
  };

  /**
   * Shortcut to Math.ceil
   *
   * Usage and examples:
   * console.log(40.6.ceil());
   * > 41
   *
   * @param  {Number} number Number to modify
   * @return {Number}        Number rounded to top
   */
  namespace.ceil = function (number) {
    return Math.ceil(number);
  };

  /**
   * Clamps a number
   *
   * Usage and examples:
   * console.log(400..clamp(0, 100));
   * > 100
   * console.log(-4..clamp(0, 100));
   * > 0
   * console.log(50..clamp(0, 100));
   * > 50
   *
   * @param  {Number} number Number to modify
   * @param  {Number} min    Minimum number value
   * @param  {Number} max    Maximum number value
   * @return {Number}        Clamped number between min and max
   */
  namespace.clamp = function (number, min, max) {
    return Math.min(Math.max(number, min), max);
  };

  /**
   * Converts degrees to radians
   *
   * Usage and examples:
   * console.log(90..toRad())
   * > 1.5707963267948966
   *
   * @param  {Number} number Number to modify
   * @return {Number}        Radians
   */
  namespace.toRad = function (number) {
    return number * Math.PI / 180;
  };

  /**
   * Converts radians to degrees
   *
   * Usage and examples:
   * console.log(1.5707963267948966.toDeg())
   * > 90
   *
   * @param  {Number} number Number to modify
   * @return {Number}        Degrees
   */
  namespace.toDeg = function (number) {
    return number * 180 / Math.PI;
  };

  /**
   * Shortcut to Math.abs
   *
   * Usage and examples:
   * console.log(-1..abs())
   * > 1
   *
   * @param  {Number} number Number to modify
   * @return {Number}        Absolute number
   */
  namespace.abs = function (number) {
    return Math.abs(number);
  };

  /**
   * Shortcut to Math.pow
   *
   * Usage and examples:
   * console.log(2..pow(3))
   * > 8
   *
   * @param  {Number} number Number to modify
   * @param  {Number} power  Power
   * @return {Number}        Number to apply power to
   */
  namespace.pow = function (number, power) {
    return Math.pow(number, power);
  };

  /**
   * Get "center" number.
   *
   * Use cases:
   *
   * 1: Getting an index of center item if you have total number of items
   * showItemWithIndex(getNumberOfItems().wholeCenter(true));
   *
   * Usage and examples:
   * // Useful for 0-based indexes
   * console.log(5..wholeCenter(true))
   * > 2
   * console.log(5..wholeCenter(false))
   * > 3
   *
   * @param  {Number} number Number to modify
   * @param  {Number} power  Usefull if you need an index for 0-based array from a number of items
   * @return {Number}        "Centered" number
   */
  namespace.wholeCenter = function (number, useFloor) {
    return Math[useFloor ? 'floor' : 'ceil'](number / 2);
  };
}(window));

/**
 * Add Number extensions to Number.prototype
 * (Safe to remove this block)
 *
 * @param  {Object}  namespace        Namespace to use for NumberExtensions
 * @param  {Boolean} updateGlobals    Add extensions to Number.prototype
 * @param  {Boolean} overwriteGlobals Override existing function in prototype if exists
 */
(function (namespace, updateGlobals, overwriteGlobals) {
  if (updateGlobals === true) {
    if (Number.prototype.cycle === undefined || overwriteGlobals === true) {
      Number.prototype.cycle = function (offset, between) {
        return namespace.cycle(this, offset, between);
      };
    }

    if (Number.prototype.scale === undefined || overwriteGlobals === true) {
      Number.prototype.scale = function (min, max) {
        return namespace.scale(this, min, max);
      };
    }

    if (Number.prototype.random === undefined || overwriteGlobals === true) {
      Number.prototype.random = function () {
        return namespace.random(this);
      };
    }

    if (Number.prototype.floor === undefined || overwriteGlobals === true) {
      Number.prototype.floor = function () {
        return namespace.floor(this);
      };
    }

    if (Number.prototype.round === undefined || overwriteGlobals === true) {
      Number.prototype.round = function () {
        return namespace.round(this);
      };
    }

    if (Number.prototype.ceil === undefined || overwriteGlobals === true) {
      Number.prototype.ceil = function () {
        return namespace.ceil(this);
      };
    }

    if (Number.prototype.clamp === undefined || overwriteGlobals === true) {
      Number.prototype.clamp = function (min, max) {
        return namespace.clamp(this, min, max);
      };
    }

    if (Number.prototype.toRad === undefined || overwriteGlobals === true) {
      Number.prototype.toRad = function () {
        return namespace.toRad(this);
      };
    }

    if (Number.prototype.toDeg === undefined || overwriteGlobals === true) {
      Number.prototype.toDeg = function () {
        return namespace.toDeg(this);
      };
    }

    if (Number.prototype.abs === undefined || overwriteGlobals === true) {
      Number.prototype.abs = function () {
        return namespace.abs(this);
      };
    }

    if (Number.prototype.pow === undefined || overwriteGlobals === true) {
      Number.prototype.pow = function (power) {
        return namespace.pow(this, power);
      };
    }

    if (Number.prototype.wholeCenter === undefined || overwriteGlobals === true) {
      Number.prototype.wholeCenter = function (useFloor) {
        return namespace.wholeCenter(this, useFloor);
      };
    }
  }
}(window, true, false));

/**
 * Tests for Number extensions
 * (Safe to remove this block)
 *
 * @param  {Object}  namespace Namespace to use for NumberExtensions
 * @param  {Boolean} runTests  Run tests on script load
 */
(function (namespace, runTests) {
  if (runTests !== true) {
    return;
  }

  function assert(result, requiredResult) {
    console.log(result === requiredResult, result, requiredResult);
  }

  console.log('Cycle:');

  assert(0..cycle(+1, [0, 1]), 1);
  assert(0..cycle(+1, [0, 5]), 1);
  assert(0..cycle(+5, [0, 5]), 5);
  assert(0..cycle(+6, [0, 5]), 0);
  assert(1..cycle(+6, [0, 5]), 1);
  assert(1..cycle(+12, [0, 5]), 1);

  assert(0..cycle(-1, [0, 1]), 1);
  assert(0..cycle(-1, [0, 5]), 5);
  assert(0..cycle(-5, [0, 5]), 1);
  assert(0..cycle(-6, [0, 5]), 0);
  assert(1..cycle(-6, [0, 5]), 1);
  assert(1..cycle(-12, [0, 5]), 1);

  console.log('Scale:');

  assert(0.75.scale(0, 100), 75);
  assert(0.50.scale(0, 100), 50);
  assert(0.50.scale(50, 150), 100);
  assert(0.25.scale(50, 150), 75);
  assert(0.25.scale(-400, -200), -350);

  console.log('Power:');

  assert(2..pow(3), 8);
}(window, false));
