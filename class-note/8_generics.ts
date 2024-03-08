// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10
// logText("하이"); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T):T {
//   console.log(text);
//   return text;
// }

// logText<string>("하이"); // 함수를 호출하는 시점에 타입을 넘겨줄 수 있는 것

// function logText(text: string) {
//   console.log(text);
//   // text.split('').reverse().join('');
//   return text;
// }

// function logNum(num: number) {
//   console.log(num);
//   return num;
// }

// logText("a");
// logText(10);

// 단순히 타입을 다르게 받기 위해서 중복되는 코드를 계속 해서 생산하는건 비효율적임

// function logText(text: string | number) {
//   console.log(text);
//   // text.
//   // string과 number가 공통으로 접근할 수 있는 api만 제공해줌
//   return text;
// }

// const a = logText("a"); // const a: string | number
// // a.split('') // Number에 split 속성이 없다고 에러뜸
// logText(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>("abc"); // logText라는 함수의 타입을 string으로 쓰겠다. (인자, 반환값이 모두 string이 될 것)
str.split("");

const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface DropDown {
//   value: string;
//   selected: boolean;
// }

// const obj: DropDown = { value: "abc", selected: false };

interface DropDown<T> {
  value: T;
  selected: boolean;
}

const obj: DropDown<string> = { value: "abc", selected: false };

// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text) {
//     console.log(text);
//   });
//   return text;
// }
// logTextLength<string>(["hi", "abc"]);

// 제네릭의 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength<T extends LengthType>(text:T): T {
text.length;
return text;  
}

logTextLength("a");


// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption; // ShoppingItem에 있는 key값들 중에 한가지가 바로 제네릭이 된다.
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name") // ctrl + space