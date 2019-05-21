import api from './api';


interface argvObject {
  os: string;
  language: string;
  order: string;
}

class Cli {

  public command: string;
  public os: string;
  public language: string;
  public order: string;

  constructor () {
    this.command = ''
    this.os = ''
    this.language = ''
    this.order = ''
  }


  // set variables to be passed to API class
  saveCommandLineInputs (command : string, argv : argvObject) {
    if (command === 'search') {
      this.command = command
      this.os = argv.os
      this.language = argv.language
      this.order = argv.order
    } else {
      console.log(" unavailable command input")
    }
  }

  // make api call 
  getMatchingIssues () {
    api.getIssues(this.os, this.language, this.order)
  }



}

export default new Cli();
