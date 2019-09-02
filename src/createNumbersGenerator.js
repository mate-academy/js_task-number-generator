'use strict';

/**
 * Write a function (factory) creating a function (device) returning a number
 * from an array given to a factory. Each device call should return the next
 * number from the array. If `min` and `max` were provided the device should
 * return only numbers from the given range (including `min` and `max`). If
 * there is no more matching numbers in the array return undefined.
 *
 * For example:
 *
 * const generator1 = createNumbersGenerator([1, 3])
 * console.log(generator1()); // 1
 * console.log(generator1()); // 3
 * console.log(generator1()); // undefined
 *
 * const generator2 = createNumbersGenerator([1, 3, 0, 2, 5], 2, 4)
 * console.log(generator2()); // 3
 * console.log(generator2()); // 2
 * console.log(generator2()); // undefined
 *
 * @param {number[]} numbers - array of numbers to return
 * @param {number} min - (optional)
 * @param {number} max - (optional)
 *
 * @return {number}
 */
function createNumbersGenerator(numbers = [], min, max) {
  const currentNumbers = numbers;

  return function() {
    for (let i = 0; i < currentNumbers.length; i++) {
      if (min === undefined && max === undefined) {
        const currentValue = currentNumbers[i];
        currentNumbers.splice(currentNumbers.indexOf(currentNumbers[i]), 1);
        return currentValue;
      } else if (currentNumbers[i] < max && currentNumbers[i] < min) {
        currentNumbers.splice(currentNumbers.indexOf(currentNumbers[i]), 1);
        return currentNumbers[i];
      }
    }
  };
}
module.exports = createNumbersGenerator;
