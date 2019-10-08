"use strict";
exports.__esModule = true;
var api = /** @class */ (function () {
    function api() {
        var _this = this;
        //readonly
        this.paramsCheck = function (req) {
            var keys = [];
            var result;
            result = {
                result: true,
                notIncluded: []
            };
            for (var key in req.query) {
                keys = keys.concat(key);
            }
            for (var _i = 0, _a = _this.params; _i < _a.length; _i++) {
                var param = _a[_i];
                if ((param.required) && !keys.includes(param.key)) {
                    result.notIncluded = result.notIncluded.concat(param.key);
                    result.result = false;
                }
            }
            return result;
        };
        this.response = function (req, res) {
            if (!_this.csrfCheck()) {
                res.status(401).json({
                    status: 401,
                    msg: 'Nonce not found!'
                });
                return;
            }
            if (!_this.permissonCheck()) {
                res.status(401).json({
                    status: 401,
                    msg: 'Permission denied!'
                });
                return;
            }
            var paramsCheckResult = _this.paramsCheck(req);
            if (!paramsCheckResult.result) {
                res.status(400).json({
                    status: 400,
                    msg: 'Params needed: ' + paramsCheckResult.notIncluded.toString()
                });
                return;
            }
            res.json(_this.content(req));
        };
    }
    api.prototype.csrfCheck = function (req) {
        return true;
    };
    ;
    api.prototype.permissonCheck = function (req) {
        return true;
    };
    api.prototype.content = function (req) {
        return { msg: 'There is no content' };
    };
    ;
    return api;
}());
exports["default"] = api;
