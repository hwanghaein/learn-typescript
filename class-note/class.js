function Person1(name, age) {
  this.name = name;
  this.age = age;
}
let hyein = new Person ("혜인", 30)


class Person1 {
  // 클래스 로직
  constructor(){ // 초기화 
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}
let haein = new Person("혜인", 30); // 생성되었습니다.



console.log(haein); // Person1 {name: "혜인", age: 30}