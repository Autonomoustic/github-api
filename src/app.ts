import express from 'express';
import dotenv from 'dotenv';
const yargs = require('yargs')

// Load environment variables from .env file
dotenv.config({ path: ".env" });

// Controllers
import cli from './controllers/cli';

class App {

  public express: express.Application;
  public command: String;

  constructor () {
    this.express = express()
    this.command = yargs.argv._[0]
    this.commandList()
    this.handleCommand()
  }

  commandList () {
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
    .help()
  }

  handleCommand () {
    console.log(this.command)
    console.log(yargs.argv)
    // pass command to cli class
    // use cli class to make a api call using the api class
  }


}


export default new App().express;
