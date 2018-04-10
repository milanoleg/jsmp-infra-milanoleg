import assert from 'assert';

import {
    firstArray,
    secondArray,
    testString
} from './test-data';

import {
    concat,
    compact,
    unique,
    toCamelCase,
    toKebabCase,
    toSnakeCase
} from '../index.js';

describe('Concat arrays', () => {
    it('Returns a new array concatenated from two another', () => {
        const concatResult = concat(firstArray, secondArray);

        assert.deepEqual(concatResult, [1, null, 'Hello', 1, false, 12, 'someString'], 'concat(firstArray, secondArray)');
    });
});

describe('Remove falsey values from array', () => {
    it('Returns a new array without falsey values', () => {
        const compactArray = compact(firstArray);

        assert.deepEqual(compactArray, [1, 'Hello', 1], 'compact(firstArray)');
    });
});

describe('Get unique items from array', () => {
    it('Returns a new array with only unique items', () => {
        const uniqueArray = unique(firstArray);

        assert.deepEqual(uniqueArray, [1, null, 'Hello']);
    });
});

describe('transform string to camelCase', () => {
    it('Returns a new string in camelCase', () => {
        const camelCaseStr = toCamelCase(testString);

        assert.deepEqual(camelCaseStr, 'iAmTestCaseString');
    });
});

describe('transform string to kebabCase', () => {
    it('Returns a new string in kebabCase', () => {
        const kebabCaseStr = toKebabCase(testString);

        assert.deepEqual(kebabCaseStr, 'i-am-test-case-string');
    });
});
describe('transform string to snakeCase', () => {
    it('Returns a new string in snakeCase', () => {
        const snakeCaseStr = toSnakeCase(testString);

        assert.deepEqual(snakeCaseStr, 'i_am_test_case_string');
    });
});
