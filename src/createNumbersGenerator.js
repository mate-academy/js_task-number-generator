'use strict';

/**
 * Write a function (factory) accepting `numbers` array and returning a function
 * (device). Each device call should return the next number from the array. The
 * factory function should also accept `min` and `max`. If `min` and `max` are
 * provided the device should return only numbers which are not less than `min`
 * and not greater than `max`. If there is no more matching numbers in the array
 * return `undefined`.
 *
 * For example:
 *
 * const generator1 = createNumbersGenerator([1, 3])
 * console.log(generator1()); // 1
 * console.log(generator1()); // 3
 * console.log(generator1()); // undefined
 *
 * const numbers = [1, 0, 3, 2, 5];
 * const generator2 = createNumbersGenerator(numbers, 1, 3)
 * console.log(generator2()); // 1
 * console.log(generator2()); // 3
 * console.log(generator2()); // 2
 * console.log(generator2()); // undefined
 *
 * const generator3 = createNumbersGenerator([])
 * console.log(generator3()); // undefined
 *
 * @param {number[]} numbers - array of numbers to return
 * @param {number} min - (optional)
 * @param {number} max - (optional)
 */
function createNumbersGenerator(numbers = [], min, max) {
  if (!numbers) {
    return undefined;
  }

  let count = 0;
  const correctMin = min || numbers[0];
  const correctMAx = max || numbers[numbers.length - 1];
  const resultArr = numbers.filter(numb => {
    return numb >= correctMin && numb <= correctMAx;
  });

  return function() {
    for (let i = count; i < resultArr.length; i++) {
      count++;
      return resultArr[i];
    }
  };
}

module.exports = createNumbersGenerator;
