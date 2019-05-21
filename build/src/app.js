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
// Controllers
var cli_1 = __importDefault(require("./controllers/cli"));
var App = /** @class */ (function () {
    function App() {
        this.express = express_1.default();
        this.command = yargs.argv._[0];
        this.commandList();
        this.handleCommand();
    }
    // list of available commands
    App.prototype.commandList = function () {
        yargs
            .command('search', 'search stuff', {
            os: {
                describe: 'Pick operating system',
                demand: true,
                alias: 'os'
            },
            language: {
                describe: 'Choose programming language',
                demand: true,
                alias: 'l'
            },
            order: {
                describe: 'asc or dec order',
                demand: true,
                alias: 'o'
            }
        })
            .help();
    };
    // pass command line input to CLI class
    App.prototype.handleCommand = function () {
        if (this.command === 'search') {
            cli_1.default.saveCommandLineInputs(yargs.argv);
        }
        else {
            console.log('  invalid command input');
            return;
        }
    };
    return App;
}());
exports.default = new App().express;
