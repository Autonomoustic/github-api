import axios from 'axios'
const fs = require('fs');

class Api {

  constructor () {
  }

  async getIssues (os: string, language: string, order: string) {

    // request to retrieve issues from github api
    const result = await axios.get(process.env.BASE_URL + `/search/issues?q=${os}+label:bug+language:${language}+state:open&sort=created&order=${order}`)

    // save result to OUTPUT.text file
    fs.writeFile('OUTPUT.txt', JSON.stringify(result.data), (err: Error) => {
      if (err) throw err;

      console.log('file saved')
    })
  }
}

export default new Api();
