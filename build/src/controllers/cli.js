"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("./api"));
var Cli = /** @class */ (function () {
    function Cli() {
        this.command = '';
        this.os = '';
        this.language = '';
        this.order = '';
    }
    // set variables to be passed to API class
    Cli.prototype.saveCommandLineInputs = function (command, argv) {
        if (command === 'search') {
            this.command = command;
            this.os = argv.os;
            this.language = argv.language;
            this.order = argv.order;
        }
        else {
            console.log(" unavailable command input");
        }
    };
    //
    Cli.prototype.getMatchingIssues = function () {
        api_1.default.getIssues(this.os, this.language, this.order);
    };
    return Cli;
}());
exports.default = new Cli();
