// 1. string concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //substract
console.log(1 / 1); //devide
console.log(1 * 1); //multiply
console.log(5 % 2); //remainder
console.log(2 ** 3); //exoinentation(~승)

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);  //3,3
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);    //3,4
const preDecrement = --counter;
console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);      //3,3
const postDecrement = counter--;
console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);    //3,2

// 4. Assignment operators
// 할당하는 operator
let x = 3;
let y = 6;
x += y; // x = x + y;
x -= y; // x = x - y;
x *= y; // x = x * y;
x /= y; // x = x / y

// 5. Comparison operators
console.log(10 < 6); // less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6); // greater than
console.log(10 >= 6); // greater than or equal

// 중요!

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// || (or), finds the first truthy value
// 하나라도 트루면 바로 트루 나옴, 복잡한 것을 마지막에 두면 효율적으로 코드 작성 가능
console.log(`or: ${value1 || value2 || check()}`);

// && (and), finds the first falsy value
// 모두 트루면 트루, 하나라도 false면 바로 false, 
console.log(`and: ${value1 && value2 && check()}`);

// often used to compress long if-statement(복잡한것을 뒤에 배치)
// nullableObject && nullableObject.something
// null object가 null이 아닐때만 something이라는 값을 가져옴

// if (nullableObject != null) {
//     nullableObject.something;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log("😱");
    }
    return true;
}

// ! (not)
// 값을 반대로 바꿔준다.
console.log(!value1);

// 7. Equality
const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const ellie1 = {
    name: "ellie"
};
const ellie2 = {
    name: "ellie"
};
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler(퀴즈)
console.log(0 == false); //t
console.log(0 === false); //f
console.log("" == false); //t
console.log("" === false); //f
console.log(null == undefined); //t
console.log(null === undefined); //f

// 8. Conditional operators: if (조건 연산자)
// if, else if, else
const name = "df";
if (name === "ellie") {
    console.log("Welcome, Ellie!");
} else if (name === "coder") {
    console.log("You are amazing coder");
} else {
    console.log("unknown");
}

// 9. Ternary operator: ? (삼항 연산자)
// condition ? value1 : value2;
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = "IE";
switch (browser) {
    case "IE":
        console.log("go away!");
        break;
    case "Chrome":
    case "Firefox":
        console.log("love you!");
        break;
    default:
        console.log("same all!");
        break;
}

// 11. Loops (반복문)
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is executed first, 먼저 실행하고 조건 검사
// then check the condition.
do {
    console.log(`do while: ${i}`);
    i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // inline variable declaration
    console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        console.log(`i: ${i}, j:${j}`);
    }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue) 0-10까지 짝수만 나오도록

for (i = 0; i <11; i++) {
    if(i % 2 !== 0) {
        continue;
    }
    console.log(`qi. ${i}`);
        
}

// 실제는 이렇게 쓰는게 더 좋음
for (i = 0; i < 11; i++) {
    if (i % 2 === 0) {
        console.log(`q1. ${i}`);
    }
}


// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for (i = 0; i <11; i++) {
    if(i > 8) {
        break;
    }
    console.log(`q2. ${i}`);
}

