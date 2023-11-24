interface Person {
  name: string;
  age: number;
}

function personInfo(person: Person): string {
  return person.name + " is " + person.age + " years old.";
}

const res = personInfo({ name: "John", age: 30 });
console.log(res);
