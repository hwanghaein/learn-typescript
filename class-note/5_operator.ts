// function logMessage(value: any) {
//   console.log(value);
//   }
//   logMessage("hello");
//   logMessage(100);
// value가 any면, 코드를 추론하는 시점에서 type을 정의할 수 없어서 속성들을 안 보여줌

let soho: string | number | boolean; // 유니온 타입 (Union Type) : 3가지 타입 중에 하나가 될 수 있다.
function logMessage(value: string | number) {
  if (typeof value === "number") {
    // number에 대한 속성들을 바로 보여줘서 사용할 수 있게 됨
    value.toLocaleString();
  }
  if (typeof value === "string") {
    // number에 대한 속성들을 바로 보여줘서 사용할 수 있게 됨
    value.toString(); // string에 대한 속성들을 바로 보여줘서 사용할 수 있게 됨
  }
  throw new TypeError("value must be string or number");
}
logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}
interface Human {
  name: string;
  age: number;
}

function askSomeone1(someone: Developer | Human) {
  // someone.name; // 공통속성만 접근할 수 있음 (교집합)

}
askSomeone1({name: "디벨로퍼", skill: "웹 개발"})
askSomeone1({name: "캡틴", age: 100})


// somone에 어떤 속성이 들어올지 모르기 때문에 Developer의 skill이나 Human의 age를 타입 검증도 없이 바로 써버리게 되면, 코드상으로 에러가 날 수도 있다고 여기는거임
// 따라서 인터페이스 같은 여러 구조체를 유니온타입으로 쓸 때, 보장된(공통된) 속성에 대해서만 제공해줌
// skill과 age를 보장할 수 없기 때문에, 타입가드에 대한 추가적인 처리가 필요


// 인터섹션 타입: 모든 타입을 전부 다 만족하는 타입
function askSomeone2(someone: Developer & Human) {
  // someone은 Developer의 name과 skill, Human의 name과 age를 모두 포함한 3개의 속성을 갖는 하나의 타입 (합집합)
  someone.name;
  someone.skill;
  someone.age;
}


askSomeone2({name: "디벨로퍼", skill: "웹 개발", age: 34})