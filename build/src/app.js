"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var yargs = require('yargs');
// Load environment variables from .env file
dotenv_1.default.config({ path: ".env" });
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.command = yargs.argv._[0];
        this.commandList();
        // this.handleCommand()
    }
    App.prototype.commandList = function () {
        yargs
            .command('search', 'search stuff', {
            title: {
                describe: 'Title of note',
                demand: true,
                alias: 's'
            },
            body: {
                describe: 'Note content',
                demand: true,
                alias: 'b'
            }
        })
            .help();
    };
    App.prototype.handleCommand = function () {
        console.log(this.command);
        console.log(yargs.argv);
        // pass command to cli class
        // use cli class to make a api call using the api class
    };
    return App;
}());
exports.default = new App().express;
