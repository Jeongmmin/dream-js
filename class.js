'use strict';
// 클래스 : 조금 더 연관있는 데이터를 한 데 묶어놓은 컨테이너 같은 것, fields와 methods가 같이 들어있다.
// Object-oriendted programming (객체 지향 프로그래밍 oop)
// class: template (일종의 붕어빵 틀, 청사진이라고도 불린다.)
// object: instance of a class (class를 이용해서 새로운 instance를 만든 것, 팥 붕어빵, 크림 붕어빵...)
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance (기존에 사용하던 프로토타입 위에 문법상으로만 간단히 추가된 것)

// 1. Class declarations
class Person {
    // constructor(쌩성자)
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}


// object 생성
const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
// 사용자가 잘못 사용하는 것을 방지해주는 것
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // call stack을 방지하기 위해서 변수이름을 약간 다르게 설정해야 한다.
    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //   throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}

// 사용자가 잘못 사용한 경우
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon! v
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2;  //public
    #privateField = 0; //private
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        super.draw();
        console.log('🔺');
    }
    getArea() {
        return (this.width * this.height) / 2;
    }

    toString() {
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// object가 class의 instance인지 아닌지를 확인해주는 것, true와 false를 return                                        
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());

let obj = {
    value: 5
};

function change(value) {
    value.value = 7;
}
change(obj);
console.log(obj);