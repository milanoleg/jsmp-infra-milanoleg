'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.unique = exports.compact = exports.concat = undefined;

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var concat = _lodash2.default.concat;
var compact = _lodash2.default.compact;
var unique = _lodash2.default.uniq;

exports.concat = concat;
exports.compact = compact;
exports.unique = unique;