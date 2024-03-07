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

const str =  logText<string>("abc") // logText라는 함수의 타입을 string으로 쓰겠다. (인자, 반환값이 모두 string이 될 것)
str.split('');

const login =  logText<boolean>(true) 


