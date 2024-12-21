// js objects is an entity having state and behavior(properties and methods)
const student = {
       fullname : "john",
       marks:8.0,
    printMarks: function() {
    console.log("marks = ", this.marks); //student.marks
    },
};

let arr = ["apple", "mango", "orange"];
console.log(arr);

//example
const employee ={
    calcTax() {
        console.log("tax rate is 10%");
    },
    calcTax2 : function() {
        console.log("tax rate is 10%");
    },
};

const john = {
    salary : 50000,
};
const john2 = {
    salary : 50000,
};

const john3 = {
    salary : 50000,
};

john__proto__ = employee;  //use to set prototype
john2__proto__ = employee;  
john3__proto__ = employee;



//classes : is a program  code template for creating objects. objs. will have state(variables) & behaviour(functions) inside.
class Tatacar {
    constructor(){
        console.log("creating new onbject");
    }
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    setBrand(brand) {
        this.brandName = brand;
    }
};

let toyota = new Tatacar();
toyota.setBrand("toyota");


//inheritance : passing down properties & methods from parents to  child class
class Parent{
    hello(){
    console.log("hello");
    }
}
class Child extends Parent {}
let obj = new Child();


//example
class Person {
    constructor(){
        this.species = "homo";
    }
    sleep(){
        console.log("sleep");
    }
    eat() {
        console.log("eat");
    }
}

class Doctor{
    work() {
        console.log("check patients");
    }
}

let johnobj  = new Doctor();

//super keyword : use to call constructor of its parent class to access parents properties and methods
class Person1 {
    constructor(){
        console.log("enter parent");
        this.species = "homo";
    }
    eat() {
        console.log("eat");
    }
}
class Doctor1 extends Person1{
    constructor(branch) {
        console.log("enter child");
        super(); //to invoke parent class constuctor
        this.branch = branch;
        console.log("exit child");
    }
    work() {
        super.eat();
        console.log("check patients");
    }
}

let johnobj1  = new Doctor1();


//example 
let DATA = "information"
class User{
    constructor(name, email){
        this.name = name;
        this.email =email;
    }
 viewData(){
    console.log("data =", DATA);
 }
}

class Admin extends User {
    constructor(name, email){
        super(name, email);
    }
    editData() {
    DATA = "some value";
    }
}
let student1 = new User("john", "j@email.com");
let student2 = new User("marry", "m@emai.com");
let student3 = new User("sony", "s@emai.com");
let student4 = new User("lucly", "l@email.com");
let admin1 = new Admin("admin", "a@email.com");



//Error handling
let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b =", b);
console.log("c =", c); //error
console.log("a+b =",a+b);
console.log("a-b =", a-b);
console.log("a*b =", a*b);

//example
let a1 = 5;
let b1 = 10;
console.log("a1 = ", a1);
console.log("b1 =", b1);
try{
console.log("c1 =", c1); //error
} catch (err) {
    console.log(err);
}
console.log("a1+b1 =",a1+b1);
console.log("a1-b1 =", a1-b1);
console.log("a1*b1 =", a1*b1);
