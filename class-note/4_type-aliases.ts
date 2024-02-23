// interface 정의
// interface Person {
//   name: string;
//   age: number;
// }

// Person 이라는 interface 이용
// let seho: Person = {
//   name: "세호",
//   age: 30
// };

// type 정의
type Person = {
  name: string;
  age: number;
};

// Person 이라는 type 이용
let seho: Person = {
  name: "세호",
  age: 30,
};

type MyString = string;
let str: MyString = "hello";

type Todo = { id: string; title: string; done: boolean };
function getTodo(todo: Todo){

}