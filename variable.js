//자바스크립트는 매유우 유연한 언어(빨리 개발해야했었기 때문에 )
//유연함==위험
//ECMAScript 5에 추가되어있다.
//1. use strict 쓰면 위험을 줄여준다(잘못된게 있으면 그냥 실행하지 않고, 잘못되었다고 알려준다.)
'use strict'
//2.Variable, rw(read/write) 메모리에 읽고 쓰기가 가능
//let (added in ES6)

console.log("Hello World!");   
// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
//hoisting : 어디에 선언했느냐와 상관없이 항상 선언을 맨 위로 끌어올려주는것을 말함
// has no block scope (블록scope이 없다)
{
  age = 4;
  var age;
}
console.log(age);

// 3. Constant, r(read only) 값을 할당한 후에는 읽기만 가능한고 수정 불가
// 값이 절대 바뀌지 않는 것을 의미함, 값이 변경가능한것을 mutable(let) 데이터타입이라고 하는데, constant는 immutable 타입이다.
// use const whenever possible. (해킹 방지, thread safety)
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// 데이터 타입 두 가지 존재
// Immutable data types: 데이터 타입을 한번 정의하면 절대 변경 불가하다.(ex. 엘리 스펠링) premitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS(ex 엘리 이름, 나이)
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Variable types
// primitive(더 이상 나누어지지 않는 타입), single item: number, string, boolean, null, undefined, symbol
// primitive : 값 자체가 메모리에 저장
// object(single 아이템을 묶어서 하나로 관리) , box container
// object : 너무 커서 메모리에 한 번에 저장 불가, ref를 사용하여 위치 표시, object를 가르키는 ref가 메모리에 저장 된다.
// function, first-class function(이 말은 이 프로그래밍 언어에서는 함수도 변수에 할당이 가능하고 함수의 파라미터, 인자로도 전달이 되고
    //함수의 리턴타입으로 function이 사용가능하다는 말)

// number
// 다른 언어에서는 숫자에 얼마나 큰 데이터 타입을 선택할 것인지 고민해야 하는데 js에서는 number만 있으면 사용가능 심지어 number라고 안 써도 가능,
// typescript에서는 number라고 꼭 써야 한다.
const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
// 숫자 끝에 n만 붙이면 되는데 크롬과 파이어폭스만 가능
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects
// 고유한 식별자가 필요할 때 사용하는 것
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);//false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
// 실생활에서 보는 물건, 물체를 대표하는 박스 형태
const ellie = { name: 'ellie', age: 20 };
ellie.age = 21;

// 5. Dynamic typing: dynamically typed language
// c, java는 statically typed language : 변수 선언시 어떤 타입인지 같이 선언
// js는 변수 선언 시 타입을 같이 선언하지 않고 프로그램 런타임 시 할당된 값에 따라 타입이 변경가능함
// 프로토 타입에는 유용하지만 실제 업무에서는 위험할 수 있음
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0));
// 중간에 string 이 아닌 다른 타입으로 바뀌었는데 string으로 예상하고 호출하면 오류가 난다.
// 그래서 나온것이 typescript이다. 이것은 웹사이트에서 실시간으로 볼 수 없다.