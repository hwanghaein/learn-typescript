// 인터페이스, 클래스 

interface Developer{
 name: string;
 skill: string; 
}

// interface Person {
//   name: string;
// }

class Person {
  name: string;
}

var developer: Developer;
var person: Person;
// developer = new Person(); // 에러

// developer = person;  // 에러
// person = developer; // 이건 가능!

// 타입 호환: 오른쪽에 있는 타입이 더 많은 속성을 갖거나, 구조적으로 더 클 때, 왼쪽과 호환이 된다.