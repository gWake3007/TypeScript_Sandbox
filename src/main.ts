import "./style.css";

type IPerson = {
  name: string;
  age: number;
  greet(phrase: string): void;
};

let user: IPerson;

user = {
  name: "Anthony",
  age: 21,
  greet(phrase) {
    console.log(phrase + " " + this.name);
  },
};

user.greet("Вітання всім, я");

function firstElement<T>(arr: T[]): T {
  return arr[0];
}

let numbers = [1, 2, 3, 4, 5];
let firstNum = firstElement(numbers);

let strings = ["a", "b", "c", "d"];
let firstStr = firstElement(strings);

console.log(firstNum);
console.log(firstStr);

type Animal = { id: number; name: string; type: string; age: number };
const dog: Pick<Animal, "name" | "age"> = { name: "Rex", type: "Dog", age: 5 };

console.log(dog);
