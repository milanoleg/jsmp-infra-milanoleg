'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _testData = require('./test-data');

var _index = require('../index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Concat arrays', function () {
    it('Returns a new array concatenated from two another', function () {
        var concatResult = (0, _index.concat)(_testData.firstArray, _testData.secondArray);

        _assert2.default.deepEqual(concatResult, [1, null, 'Hello', 1, false, 12, 'someString'], 'concat(firstArray, secondArray)');
    });
});

describe('Remove falsey values from array', function () {
    it('Returns a new array without falsey values', function () {
        var compactArray = (0, _index.compact)(_testData.firstArray);

        _assert2.default.deepEqual(compactArray, [1, 'Hello', 1], 'compact(firstArray)');
    });
});

describe('Get unique items from array', function () {
    it('Returns a new array with only unique items', function () {
        var uniqueArray = (0, _index.unique)(_testData.firstArray);

        _assert2.default.deepEqual(uniqueArray, [1, null, 'Hello']);
    });
});

describe('transform string to camelCase', function () {
    it('Returns a new string in camelCase', function () {
        var camelCaseStr = (0, _index.toCamelCase)(_testData.testString);

        _assert2.default.deepEqual(camelCaseStr, 'iAmTestCaseString');
    });
});

describe('transform string to kebabCase', function () {
    it('Returns a new string in kebabCase', function () {
        var kebabCaseStr = (0, _index.toKebabCase)(_testData.testString);

        _assert2.default.deepEqual(kebabCaseStr, 'i-am-test-case-string');
    });
});
describe('transform string to snakeCase', function () {
    it('Returns a new string in snakeCase', function () {
        var snakeCaseStr = (0, _index.toSnakeCase)(_testData.testString);

        _assert2.default.deepEqual(snakeCaseStr, 'i_am_test_case_string');
    });
});