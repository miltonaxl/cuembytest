"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBcrypt = exports.encodeBcrypt = exports.decodeToken = exports.encodeToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = require("bcrypt");
var enviroments_1 = __importDefault(require("./../config/enviroments"));
var encodeToken = function (id) { return jsonwebtoken_1.default.sign({ user: { id: id } }, enviroments_1.default.tokenSALT); };
exports.encodeToken = encodeToken;
var decodeToken = function (token) { return jsonwebtoken_1.default.verify(token, enviroments_1.default.tokenSALT); };
exports.decodeToken = decodeToken;
var encodeBcrypt = function (text) { return bcrypt_1.hashSync(text, bcrypt_1.genSaltSync(Number(enviroments_1.default.bcryptSALT))); };
exports.encodeBcrypt = encodeBcrypt;
var validateBcrypt = function (text, validate) { return bcrypt_1.compareSync(text, validate); };
exports.validateBcrypt = validateBcrypt;
