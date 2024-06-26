// 타입 추론 기본 1

var a = 10;
// 타입추론: vscode 상에서 코드를 작성했을 때 "코드의 타입이 무엇이다"라고 정의해나가는 방식
// 기본적인 변수의 선언과 할당에 의해 타입이 추론이 된다.

function getB (b = 10){
  var c = "hi";
  return b + c;
}


// 타입 추론 기본 2

// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// var shoppingItem : Dropdown<string> = {
//   value: "abc",
//   title: "hello"
// }


// 타입 추론 기본 3
// interface Dropdown<T> {
//   value: T;
//   title: string;
// }

// interface DetailedDropdown<K> extends Dropdown<K>{
//   description: string; 
//   tag: K;
// }

// var detailedItem : Dropdown<string> = {
//   title: "abc",
//   description: "ab",
//   value: "a",
//   tag: "a"
// }


// Best Common Type -> 가장 근접한 타입을 추론한다. 유니온으로 묶어나감
var arr = [1,2,true, true, "a"]; 
