interface IPerson {
  name: string;
  age: number;
  personInfo(): string;
}

class Person implements IPerson {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  personInfo(): string {
    return this.name + " is " + this.age + " years old.";
  }
}

const person = new Person("John", 30);
const res = person.personInfo();
console.log(res);
