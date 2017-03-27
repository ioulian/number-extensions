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
 *   this.results.deselectAll();
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
 * @param  {Number} number  Number to modify
 * @param  {Number} offset  Offset by which to cycle the number
 * @param  {Number} between Min and max values between to cycle
 * @return {Number}         Cycled number
 */
export function cycle (number, offset, between) {
  var newNumber,
    betweenDifference = Math.abs(between[0] - (between[1] + 1));

  if (typeof offset !== 'number' || (offset % 1) !== 0) {
    throw new Error('Only integers are supported');
  }

  newNumber = number + offset;
  newNumber = newNumber % betweenDifference;

  if (newNumber < between[0]) {
    newNumber = betweenDifference + newNumber;
  }

  if (newNumber > between[1]) {
    newNumber = between[0] + Math.abs(between[1] + 1 - newNumber);
  }

  return newNumber;
}

/**
 * Scales an input number (between 0 and 1) to a given min and max values
 *
 * Use cases:
 *
 * 1: Get a random coordinate in a square with dimensions {x:40,y:50,width:20,height:20}
 * var square = {x:40,y:50,width:20,height:20};
 * console.log({
 *   x: Math.random().scale(square.x, square.x + square.width),
 *   y: Math.random().scale(square.y, square.y + square.height)
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
export function scale (number, min, max) {
  return number * (max - min) + min;
}

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
export function random (number) {
  return number * Math.random();
}

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
export function floor (number) {
  return Math.floor(number);
}

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
export function round (number) {
  return Math.round(number);
}

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
export function ceil (number) {
  return Math.ceil(number);
}

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
export function clamp (number, min, max) {
  return Math.min(Math.max(number, min), max);
}

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
export function toRad (number) {
  return number * Math.PI / 180;
}

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
export function toDeg (number) {
  return number * 180 / Math.PI;
}

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
export function abs (number) {
  return Math.abs(number);
}

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
export function pow (number, power) {
  return Math.pow(number, power);
}

/**
 * Shortcut to Math.sqrt
 *
 * Usage and examples:
 * console.log(16..sqrt())
 * > 4
 *
 * @param  {Number} number Number to modify
 * @return {Number}        Number to apply power to
 */
export function sqrt (number) {
  return Math.sqrt(number);
}

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
 * @param  {Number} useFloor  Useful if you need an index for 0-based array from a number of items
 * @return {Number}        "Centered" number
 */
export function wholeCenter (number, useFloor) {
  return Math[useFloor ? 'floor' : 'ceil'](number / 2);
}

/**
 * Loops the value between 0 and a maximum number
 *
 * Use cases:
 *
 * 1: Using "radial" values like degrees. If you only want to display values between 0 and 360 degrees, you can use this function
 *
 * Usage and examples
 * console.log(400..loop(360))
 * > 40 // degrees
 * console.log(-50..loop(360))
 * > 310 // degrees
 *
 * @param  {Number} number Number to modify
 * @param  {Number} max    Maximum value a number can get
 * @return {Number}        Looped number
 */
export function loop (number, max) {
  var mod = Math.abs(number % max);

  if (number > max) {
    return mod;
  }

  if (number < 0) {
    return max - mod;
  }

  return number;
}

export function setGlobals (overwriteGlobals = false) {
  if (typeof Number.prototype.cycle === 'undefined' || overwriteGlobals === true) {
    Number.prototype.cycle = function (offset, between) {
      return cycle(this, offset, between);
    };
  }

  if (typeof Number.prototype.scale === 'undefined' || overwriteGlobals === true) {
    Number.prototype.scale = function (min, max) {
      return scale(this, min, max);
    };
  }

  if (typeof Number.prototype.random === 'undefined' || overwriteGlobals === true) {
    Number.prototype.random = function () {
      return random(this);
    };
  }

  if (typeof Number.prototype.floor === 'undefined' || overwriteGlobals === true) {
    Number.prototype.floor = function () {
      return floor(this);
    };
  }

  if (typeof Number.prototype.round === 'undefined' || overwriteGlobals === true) {
    Number.prototype.round = function () {
      return round(this);
    };
  }

  if (typeof Number.prototype.ceil === 'undefined' || overwriteGlobals === true) {
    Number.prototype.ceil = function () {
      return ceil(this);
    };
  }

  if (typeof Number.prototype.clamp === 'undefined' || overwriteGlobals === true) {
    Number.prototype.clamp = function (min, max) {
      return clamp(this, min, max);
    };
  }

  if (typeof Number.prototype.toRad === 'undefined' || overwriteGlobals === true) {
    Number.prototype.toRad = function () {
      return toRad(this);
    };
  }

  if (typeof Number.prototype.toDeg === 'undefined' || overwriteGlobals === true) {
    Number.prototype.toDeg = function () {
      return toDeg(this);
    };
  }

  if (typeof Number.prototype.abs === 'undefined' || overwriteGlobals === true) {
    Number.prototype.abs = function () {
      return abs(this);
    };
  }

  if (typeof Number.prototype.pow === 'undefined' || overwriteGlobals === true) {
    Number.prototype.pow = function (power) {
      return pow(this, power);
    };
  }

  if (typeof Number.prototype.sqrt === 'undefined' || overwriteGlobals === true) {
    Number.prototype.sqrt = function () {
      return sqrt(this);
    };
  }

  if (typeof Number.prototype.wholeCenter === 'undefined' || overwriteGlobals === true) {
    Number.prototype.wholeCenter = function (useFloor) {
      return wholeCenter(this, useFloor);
    };
  }

  if (typeof Number.prototype.loop === 'undefined' || overwriteGlobals === true) {
    Number.prototype.loop = function (max) {
      return loop(this, max);
    };
  }
}
