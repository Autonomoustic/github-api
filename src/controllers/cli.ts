import api from './api';

interface argvObject {
  os: string;
  language: string;
  order: string;
}

class Cli {

  public os: string;
  public language: string;
  public order: string;

  constructor () {
    this.os = ''
    this.language = ''
    this.order = ''
  }


  // set variables to be passed to API class
  saveCommandLineInputs (argv : argvObject) {
    if (['macos','windows', 'linux'].includes(argv.os)) {
      this.os = argv.os
    } else {
      console.log("  please enter a valid OS e.g. macos, windows, linux")
      return
    }

    if (
      ['javascript',
      'python',
      'c++',
      'java',
      'php'].includes(argv.language)
    ) {
      this.language = argv.language
    } else {
      console.log("  enter a valid programming language")
      return
    }

    if (['asc', 'dec'].includes(argv.order)) {
      this.order = argv.order
    } else {
      console.log("   enter a valid order 'asc' or 'dec'")
      return
    }

    this.getMatchingIssues()
  }

  // make api call
  getMatchingIssues () {
    api.getIssues(this.os, this.language, this.order)
  }

}

export default new Cli();
