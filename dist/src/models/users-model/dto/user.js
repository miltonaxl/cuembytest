"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDtoUpdate = exports.UserDtoCreate = void 0;
var mongoose_1 = require("mongoose");
var UserDtoCreate = /** @class */ (function (_super) {
    __extends(UserDtoCreate, _super);
    function UserDtoCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserDtoCreate;
}(mongoose_1.Document));
exports.UserDtoCreate = UserDtoCreate;
var UserDtoUpdate = /** @class */ (function (_super) {
    __extends(UserDtoUpdate, _super);
    function UserDtoUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UserDtoUpdate;
}(mongoose_1.Document));
exports.UserDtoUpdate = UserDtoUpdate;
