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


    