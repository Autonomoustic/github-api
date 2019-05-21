class Api {
  constructor () {

  }

  hello (req: Request, res: Response) {
    console.log("hello " + process.env.BASE_URL);
  }
}

export default new Api();
