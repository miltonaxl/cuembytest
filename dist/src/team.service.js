"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchByName = exports.getPlayerByTeam = void 0;
var team_1 = require("./refactory/team");
var getPlayerByTeam = function (payload) { return __awaiter(void 0, void 0, void 0, function () {
    var nameByTeam, items, _a, limit, skip, teams;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                nameByTeam = (payload === null || payload === void 0 ? void 0 : payload.name) ? payload === null || payload === void 0 ? void 0 : payload.name.toLowerCase() : '';
                return [4 /*yield*/, team_1.countDocumentTeam({ team: { $regex: nameByTeam, $options: "i" } })];
            case 1:
                items = _b.sent();
                _a = paginationLimitSkip(items, payload.page), limit = _a[0], skip = _a[1];
                return [4 /*yield*/, team_1.getByTeamName({ team: { $regex: nameByTeam, $options: "i" } }, limit, skip)];
            case 2:
                teams = _b.sent();
                return [2 /*return*/, {
                        page: payload.page,
                        totalPage: Math.ceil(items / 10),
                        items: teams.length,
                        totalItems: items,
                        players: teams
                    }];
        }
    });
}); };
exports.getPlayerByTeam = getPlayerByTeam;
var searchByName = function (keyword, page) { return __awaiter(void 0, void 0, void 0, function () {
    var searchMethod, items, _a, limit, skip, searchResult;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                searchMethod = { name: { $regex: keyword, $options: "i" } };
                return [4 /*yield*/, team_1.countDocumentTeam(searchMethod)];
            case 1:
                items = _b.sent();
                console.log();
                _a = paginationLimitSkip(items, page), limit = _a[0], skip = _a[1];
                return [4 /*yield*/, team_1.getByNameSearch(searchMethod, limit, skip)];
            case 2:
                searchResult = _b.sent();
                return [2 /*return*/, {
                        page: page,
                        totalPage: Math.ceil(items / 10),
                        items: searchResult.length,
                        totalItems: items,
                        players: searchResult
                    }];
        }
    });
}); };
exports.searchByName = searchByName;
var paginationLimitSkip = function (items, page) { return [Math.ceil(items / 10) === page ? 10 - ((10 * page) - items) : 10 * page, page > 1 ? 10 * (page - 1) : 0]; };
