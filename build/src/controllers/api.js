"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Api = /** @class */ (function () {
    function Api() {
    }
    Api.prototype.hello = function (req, res) {
        console.log("hello " + process.env.BASE_URL);
    };
    return Api;
}());
exports.default = new Api();
