import express from 'express';
import dotenv from 'dotenv';
const yargs = require('yargs')

// Load environment variables from .env file
dotenv.config({ path: ".env" });

// Controllers
import cli from './controllers/cli';

class App {

  public express: express.Application;
  public command: string;

  constructor () {
    this.express = express()
    this.command = yargs.argv._[0]
    this.commandList()
    this.handleCommand()
  }

  // list of available commands
  commandList () {
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
    .help()
  }

  // pass command line input to CLI class
  handleCommand () {
    if (this.command === 'search'){
      cli.saveCommandLineInputs(yargs.argv)
    } else {
      console.log('  invalid command input')
      return
    }
  }


}


export default new App().express;
