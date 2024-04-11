// 인터페이스, 클래스 

interface Developer{
 name: string;
 skill: string; 
}

interface Person {
  name: string;
}


var developer: Developer;
var person: Person;

// developer = person;  // 에러
// person = developer; // 이건 가능!



// 함수
var add = function(a: number){
  // ...
}

var sum = function(a: number, b: number){ // 위 함수(add)보다 구조가 더 크다.
  // ...
}

// add = sum; // 에러
sum = add; // 이건 가능


// 제네릭 
interface Empty<T> {
// ..
}
var empty1: Empty<string>;
var empty2: Empty<number>;

// empty1=empty2 // 가능
// empty2=empty1 // 가능

interface NotEmpty<T>{
data: T;
}

var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;

// notempty1=notempty2 // 에러
// notempty2=notempty1 // 에러