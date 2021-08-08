"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_routes_1 = __importDefault(require("../controllers/users/user.routes"));
var token_routes_1 = __importDefault(require("../controllers/tokens/token.routes"));
var message_routes_1 = __importDefault(require("../controllers/messages/message.routes"));
var index = express_1.Router();
index.use('/users', user_routes_1.default);
index.use('/authorization', token_routes_1.default);
index.use('/messages', message_routes_1.default);
exports.default = index;
