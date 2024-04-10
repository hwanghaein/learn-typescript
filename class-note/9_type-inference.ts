var a = 10;
// 타입추론: vscode 상에서 코드를 작성했을 때 "코드의 타입이 무엇이다"라고 정의해나가는 방식
// 기본적인 변수의 선언과 할당에 의해 타입이 추론이 된다.

function getB (b = 10){
  var c = "hi";
  return b + c;
}