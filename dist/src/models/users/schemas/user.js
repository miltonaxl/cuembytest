"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
var mongoose_1 = require("mongoose");
var uuid_1 = require("uuid");
var UserSchema = new mongoose_1.Schema({
    id: {
        type: String,
        default: uuid_1.v4().substr(0, 8).toLocaleUpperCase()
    },
    FullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });
exports.userModel = mongoose_1.model('users', UserSchema);
