"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenModel = void 0;
var mongoose_1 = require("mongoose");
var TokenSchema = new mongoose_1.Schema({
    token: String
}, { timestamps: true });
exports.tokenModel = mongoose_1.model('tokens', TokenSchema);
