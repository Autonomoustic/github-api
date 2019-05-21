"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var api_1 = __importDefault(require("./api"));
var Cli = /** @class */ (function () {
    function Cli() {
        this.os = '';
        this.language = '';
        this.order = '';
    }
    // set variables to be passed to API class
    Cli.prototype.saveCommandLineInputs = function (argv) {
        if (['macos', 'windows', 'linux'].includes(argv.os)) {
            console.log('    match');
            this.os = argv.os;
        }
        else {
            console.log("  please enter a valid OS e.g. macos, windows, linux");
            return;
        }
        if (['javascript',
            'python',
            'c++',
            'java',
            'php'].includes(argv.language)) {
            this.language = argv.language;
        }
        else {
            console.log("  enter a valid programming language");
            return;
        }
        if (['asc', 'dec'].includes(argv.order)) {
            this.order = argv.order;
        }
        else {
            console.log("   enter a valid order 'asc' or 'dec'");
            return;
        }
        this.getMatchingIssues();
    };
    // make api call
    Cli.prototype.getMatchingIssues = function () {
        api_1.default.getIssues(this.os, this.language, this.order);
    };
    return Cli;
}());
exports.default = new Cli();
