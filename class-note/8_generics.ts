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


function logText(text: string) {
  console.log(text);
  // text.split('').reverse().join('');
  return text;
}

function logNum(num: number) {
  console.log(num);
  return num;
}

// logText("a");
// logText(10); 


// 단순히 타입을 다르게 받기 위해서 중복되는 코드를 계속 해서 생산하는건 비효율적임 
