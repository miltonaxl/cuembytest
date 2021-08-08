"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamModel = void 0;
var mongoose_1 = require("mongoose");
var TeamSchema = new mongoose_1.Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    nation: {
        type: String
    },
    team: {
        type: String
    }
});
exports.teamModel = mongoose_1.model('teams', TeamSchema);
