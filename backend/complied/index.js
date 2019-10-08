"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var login_1 = __importDefault(require("./api/login"));
var app = express_1["default"]();
var port = 8080;
app.listen(port, function () { return console.log("App listening on port " + port + "!"); });
app.use(express_1["default"].static('frontend'));
app.get('/api', login_1["default"]);
