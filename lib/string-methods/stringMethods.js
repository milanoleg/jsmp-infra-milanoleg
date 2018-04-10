'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var toCamelCase = function toCamelCase(str) {
    if (typeof str !== 'string') return;

    var s = str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
        return x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase();
    }).join('');
    return s.slice(0, 1).toLowerCase() + s.slice(1);
};

var toKebabCase = function toKebabCase(str) {
    if (typeof str !== 'string') return;

    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
        return x.toLowerCase();
    }).join('-');
};

var toSnakeCase = function toSnakeCase(str) {
    if (typeof str !== 'string') return;

    return str && str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
        return x.toLowerCase();
    }).join('_');
};

exports.toCamelCase = toCamelCase;
exports.toKebabCase = toKebabCase;
exports.toSnakeCase = toSnakeCase;