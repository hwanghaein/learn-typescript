// 타입 단언  // 타입스크립트보다 개발자가 타입을 더 잘 알고있다. ts는 신경 쓰지말고 내가 정의한 타입으로 간주해라. 

var q;
q = 20;
q = "q"
var b = q as string;

// DOM API 조작
var div = document.querySelector('div') as HTMLDivElement;
if (div) {
  div.innerHTML
}