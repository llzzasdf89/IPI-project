"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var api_1 = __importDefault(require("../component/api"));
var login = /** @class */ (function (_super) {
    __extends(login, _super);
    function login() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.params = [
            {
                key: 'id',
                required: true
            },
            {
                key: 'content',
                required: true
            }
        ];
        return _this;
    }
    login.prototype.csrfCheck = function () {
        return true;
    };
    login.prototype.content = function () {
        return { msg: 'Hi, this is an api' };
    };
    return login;
}(api_1["default"]));
var instance = new login();
exports["default"] = instance.response;
