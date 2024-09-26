'use strict';
/*eslint-disable*/

const createNumbersGenerator = require('./createNumbersGenerator');

test('Should return first number from initial array', () => {
  const generator = createNumbersGenerator([1, 3]);

  expect(generator())
    .toBe(1);
});

test('Should return the second number after the second call', () => {
  const generator = createNumbersGenerator([1, 3]);

  generator();

  expect(generator())
    .toBe(3);
});

test('Should return undefined if numbers have finished', () => {
  const generator = createNumbersGenerator([1, 3]);

  generator();
  generator();

  expect(generator())
    .toBe(undefined);
});

test('Should return undefined for all later calls', () => {
  const generator = createNumbersGenerator([1, 3]);

  generator();
  generator();
  generator();
  generator();
  generator();

  expect(generator())
    .toBe(undefined);
});

test('Should correctly handle min value', () => {
  const generator = createNumbersGenerator([1, 3, 0, 2, 5], 2);

  expect(generator()).toBe(3);
  expect(generator()).toBe(2);
  expect(generator()).toBe(5);
  expect(generator()).toBe(undefined);
});

test('Should correctly handle max value', () => {
  const generator = createNumbersGenerator([1, 3, 0, 2, 5], 0, 2);

  expect(generator()).toBe(1);
  expect(generator()).toBe(0);
  expect(generator()).toBe(2);
  expect(generator()).toBe(undefined);
});

test('Should return undefined numbers array is empty', () => {
  const generator3 = createNumbersGenerator([]);

  expect(generator3())
    .toBe(undefined);
});
