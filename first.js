
// Object oriented programming(OOP) is a computer programming model that organizes software design around data, or objects, rather than functional and logic.
// An object can be defined as a data field taht has unique attributes & behavior.
// //OOPS in jS
// . A class based language (like java and c++) have a class construct which defines alll the properties that charecterize a set of objects
// .A prototype-based language has a notion of an object which serves as a template from which we get thw properties of a new object.
// .JS is design is not a class based object oriented language but a prototype based language
// .classes were introduced after ES6 in js
//JS is prototype based language and it suppose to both functional programming and object oriented programming.
let o1={
    //properties
    x:1,
    y:'abcd',
    z:true,
    //methods
    a: function(){
        console.log("hi i;m function a");
    },
    b(){
        console.log("function B");
    }
}
console.log(o1.x);
console.log(o1.y);
console.log(o1.z);
o1.a();
o1.b();
//actual objects looks like
let s1={
    name : "Mahak",
    branch: "FE_201",
    markAttendance(){
        console.log('Present');
    },
}
s1.markAttendance();
//constructor function
function student(){
    console.log('HI');
}
//create constructor func //it create empty obj
let example1=new student();
console.log(example1);
    function greet(){
        console.log(this);
        console.log("Hello");
    }
    let s2={
        name:"mahal",
        greet
    }
    console.log(s2);
    console.log(this);
    console.log(s2.greet);

    function greet1(){
        console.log(this,'greet1');
        console.log(this===s3);
        console.log('hell');
        console.log('hello my name is : ',this.name);
    }
    let name ="mahak";
    let s3={
        name,
        greet1
    }
    console.log(s3,'s3');
    s3.greet1();
    let s4 = {
        name: 'sahlu',
        greet1
    }
    s4.greet1();
    function x(){
        console.log(name);
    }
    x();
    this.greet=function(){
        console.log('greet');
        return 'Hello';
    }
    console.log(this.greet());
    //construtor function->whole purpose to create object //func name start with capital letter
    function Students(name){
        this.name = name; // called variable
        //called method
        this.greet = function(){
           console.log(`hello ${this.name} name calling method`);
        }
    }
    // Creating an object using the constructor
    let c= new Students("Menika");
    c.greet();
    // it creates inside like this let c={} c.name='Anonymous' c.greet=function(){ console.log("hello menika name calling method")};
    let c1 = new Students("Ajay");
    let c2= new Students("priya");
    c1.greet();
    c2.greet();
    // let x1 = c1.greet; //wrong not copy directly
    // x1(); //it gives undefined js has a bind method used to create a copy of it and hardcore the value of this=c1
    let c3={
        name: 'Kavi',
        greet(){
            console.log('Hello my name is',this.name);
        },
          //taking reference of c3 2sec
    }
    // setTimeout(c1.greet,2000); //wrong gives undefined
    setTimeout(c3.greet.bind(c3),2000)
function multiply(num){
    return this.val*num;
}
let double={
    val:2,
    multiply //{multiply : multiply}
}
let triple={
    val:3,
    multiply
}
console.log(double.multiply(5));
console.log(triple.multiply(5));
//instead of this we can do
function multiply(num){
    return this.val*num;
}
let double1 = multiply.bind({
    val : 2
})
console.log(double1(10));
console.log(double1(1));
//constructor function
// function Students(name){
//     this.name=name;
// }
// class Students{
//     constructor(name);
// }
//create object in bulk in class based language create obj in js func itself works/act as a constructor 
function Car(make,model,color){
    this.make=make, //set make property of Car obj
    this.model=model,
    this.color=color,
    this.start=function(){
        console.log('car start')
    }
}
const myCar= new Car("Audi","W3","BLue");
console.log(myCar);
console.log(myCar.color);
function Person(firstName,lastName,age){
    this.firstName = firstName,
    this.lastName=lastName,
    this.age=age
}
const mike = new Person("mike","grandie",23);
//not using new not create obj //if we not use new keywordit returns in standard function 
const bob =  Person("bob","grandie",23);
console.log(mike.firstName);
console.log(mike.lastName);
// console.log(bob);
const Student={
    fullName : "Rohit",
    greet: function(){
        console.log("Hello"+this.fullName);
    }
}
function executeObjectFunction(callback){
    callback();
}
//when we pass the method as callback,the value of this is lost executor function executes the callback,this is not pointing to the student object anymore
// executeObjectFunction(Student.greet);
const greet2= Student.greet.bind(Student);
executeObjectFunction(greet2,"greet2");

function Circle(radius,x,y){
    this.radius=radius;
    this.location={
        x,
        y
    }
    this.draw=function(){

    }
    this.move=function(){

    }
}
let c4=new Circle(10,0,5);
console.log(c4);
//Bind creates a copy fix it and return it
function greet(){
    console.log("Hello i'm your",this.name);
}
let s5={
    name:"Kartik"
}
let s5Hello=greet.bind(s5);
s5Hello();
greet.call(s5); //take a func call it on fall
greet.apply(s5); //Hello,My
greet.call(s5,10,20);
greet.apply(s5,[10,20]);

//Questions
//Objects & constructors

// An object can have a unique type of characteristic known as a method. Methods are like special abilities that objects can perform, and they give objects different behaviors. 

function methodOnObject(name, age, college, city, country) {
    let person ={
       name :name,
       age:age,
       college:college,
       city:city,
       country:country,
       getCity: function(){
         return person.name +" lives in "+ this.city +".";
       }
     }
    return person;
   }
   //another way
   function methodOnObject(name, age, college, city, country) {
    let person ={
       name :name,
       age:age,
       college:college,
       city:city,
       country:country,
       getCity: function(){
         return person.name +" lives in "+ this.city +".";
       }
     }
    return person;
   }
   
// The this keyword refers to the current object in which it is used. However, incorrect usage of the this keyword in JavaScript can sometimes lead to errors.

// JavaScript constructor function that accepts a fixed number of arguments (i.e name, age, and occupation) and store them as properties of an object.

class Students{
    constructor(name,age,occupation){
      this.name = name;
      this.age = age;
      this.occupation = occupation;
    }
  }
  
  function constructorArgument(name, age, occupation) {
    // You only need to implement this function and also create a constructor.
     return new Students(name,age,occupation);
  }