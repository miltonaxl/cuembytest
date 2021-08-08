"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUpdateUser = exports.ValidateCreateSession = exports.validateUser = void 0;
var express_validator_1 = require("express-validator");
exports.validateUser = __spreadArray(__spreadArray(__spreadArray([], [
    express_validator_1.body('fullName', 'fullName is required. Please verify and try again').exists().isLength({ min: 4 }).isString()
]), [
    express_validator_1.body('userName', 'userName is required. Please verify and try again').exists().isLength({ min: 6 }).isString()
]), [
    express_validator_1.body('password', 'password is required. Please verify and try again').exists().isLength({ min: 8 }).isString()
]);
exports.ValidateCreateSession = __spreadArray(__spreadArray([], [
    express_validator_1.body('userName', 'userName is required. Please verify and try again').exists().isLength({ min: 6 }).isString()
]), [
    express_validator_1.body('password', 'password is required. Please verify and try again').exists().isLength({ min: 8 }).isString()
]);
exports.validateUpdateUser = [
    express_validator_1.body('fullName', 'fullName is required. Please verify and try again').exists().isLength({ min: 10 }).isString()
];
