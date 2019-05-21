class Student {
  fullName: string;

  constructor(public firstName: string, public middleInitional: string, public lastName: string) {
    this.fullName = firstName + " " + middleInitional + " " + lastName
  }
}


interface person {
  firstName: string;
  lastName: string;
}

function greeter(person: person) {
  return "hello " + person.firstName + " " + person.lastName
}

let user = new Student('ali', "a", "aziz")

document.body.innerHTML = greeter(user)
