// JS 문자열 선언
// const str = "hello";

// JS 문자열 선언
let str: string = "hello";

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let items: number[] = [1, 2, 3]; // 다른 방식 (배열 리터럴 방식)

let heroes: Array<string> = ["Capt", "Thor", "Hulk"];

// TS 튜플 (배열의 모든 index에 type이 정의돼있다)
let address: [string, number] = ["gangnam", 100];

// TS 객체
let obj: object = {};

// let person: object = {
//   name: "capt",
//   age: 100
// };

// 객체를 구체적으로 정의하는 법
let person: { name: string; age: number } = {
  name: "capt",
  age: 100,
};

// TS 진위값
let show: boolean = true;