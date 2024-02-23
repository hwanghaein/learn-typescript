// function logMessage(value: any) {
//   console.log(value);
//   }
//   logMessage("hello");
//   logMessage(100);
// value가 any면, 코드를 추론하는 시점에서 type을 정의할 수 없어서 속성들을 안 보여줌


  let soho: string | number | boolean;
  function logMessage(value: string | number) { // 유니온 타입 (Union Type) 
     if (typeof value === "number"){ // number에 대한 속성들을 바로 보여줘서 사용할 수 있게 됨
      value.toLocaleString();
     }
     if (typeof value === "string"){ // number에 대한 속성들을 바로 보여줘서 사용할 수 있게 됨
      value.toString(); // string에 대한 속성들을 바로 보여줘서 사용할 수 있게 됨
     }
     throw new TypeError ('value must be string or number')
    }
    logMessage("hello");
    logMessage(100);


    interface Developer{
      name: string;
      skill: string;
    }
    interface Human{
      name: string;
      age: number;

    }

    function askSomeone(someone: Developer | Human) {
      someone.name // 공통속성만 접근할 수 있음 
    }
    // somone에 어떤 속성이 들어올지 모르기 때문에 Developer의 skill이나 Human의 age를 타입 검증도 없이 바로 써버리게 되면, 코드상으로 에러가 날 수도 있다고 여기는거임
    // 따라서 인터페이스 같은 여러 구조체를 유니온타입으로 쓸 때, 보장된(공통된) 속성에 대해서만 제공해줌
