// 함수의 파라미터에 타입을 정의하는 방식
// function sum(a: number, b: number) {
//   return a + b;
// }

// sum (10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식 (가장 기본적인 모습)
// 파라미터의 개수와 인자도 개수를 맞춰줘야함 (1:1 mapping이 돼얗함) 
function sum(a: number, b: number): number {
  return a + b;
}

// 함수의 옵셔널 파라미터
// 추가적으로 들어올 수 있는 파라미터의 개수를 선택적으로 쓰고 싶을 때
function log(a: string, b?: string) {

}
log("hello world");
log("hello ts", "abc");
