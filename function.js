// Function
// - fundamental building block in the program (프로그램 구성 단위)
// - subprogram can be used multiple times (여러 번 재사용 가능)
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// 함수는 한 가지 역할 만 수행하도록 하는것이 좋다.
// function is object in JS (js 에서 function은 object이다)
function printHello() {
    console.log('Hello');
}
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// primitive parameters: passed by value (값을 전달)
// object parameters: passed by reference (ref를 전달)
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {
    name: 'ellie'
};
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
// 디폴트 값을 지정해 놓으면 사용자가 값을 전달하지 않았을 때 정해진 값을 표시가능
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// 배열 형태로 전달된다.
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }

    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie');

// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    // console.log(childMessage); //error
}
printMessage();

// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
// block 안의 값이 길어지면 가독성이 떨어진다.
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
// 조건이 맞지 않으면 빨리 리턴하고 아래에 값을 작성하는 것이 좋다.
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)(호이스팅이 가능)
// a function expression is created when the execution reaches it.
const print = function () {  // anonymous function(함수에 이름이 없는 것)
    console.log('print');
    };
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
    console.log('yes!');
};

// named function
// better debugging in debugger's stack traces (디버깅할 때 함수 이름이 나오게 하기 위해 사용)
// recursions (함수 안에서 자신 스스로를 호출하는 것) (특수한 상황에 사용, 보통은 오류난다.)
const printNo = function print() {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);



// Arrow function
// always anonymous
// const simplePrint = function () {
//   console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more, 블럭있을 때는 return값 필요하다.
    return a * b;
};

// IIFE: Immediately Invoked Function Expression 함수를 선언함과 동시에 호출하는 것
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time❤️
// function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder

function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('divide',4,2));




























function calculate(command, a, b) {
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw Error('unknown command');
    }
}
console.log(calculate('add', 2, 3));