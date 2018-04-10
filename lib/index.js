'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toSnakeCase = exports.toKebabCase = exports.toCamelCase = exports.unique = exports.compact = exports.concat = undefined;

var _arrayMethods = require('./array-methods/arrayMethods');

var _stringMethods = require('./string-methods/stringMethods');

exports.concat = _arrayMethods.concat;
exports.compact = _arrayMethods.compact;
exports.unique = _arrayMethods.unique;
exports.toCamelCase = _stringMethods.toCamelCase;
exports.toKebabCase = _stringMethods.toKebabCase;
exports.toSnakeCase = _stringMethods.toSnakeCase;