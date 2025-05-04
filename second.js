//Method overriding
//Super keyword
//Inheritance in classes
//class Syntax - create objects
//Inheritance among constructor function
//How constructor function leverage it
// function Student(name,rollNo){
//     //this=>{}
//     this.name=name;
//     this.rollNo=rollNo;
//     // this.sayHello = function(){
//     //     console.log("HI my name is "+ this.name + ' and rollno is '+ this.rollNo);
//     // }
// }
//instead of making plent of method we can directly do 
// let parent = {
//     sayHello(){
//             console.log("HI my name is "+ this.name + ' and rollno is '+ this.rollNo);
//         }
// }
function Student(name,rollNo){
    //this=>{}
    this.name=name;
    this.rollNo=rollNo;
    // Object.setPrototypeOf(this,Student) //(done for you internally)
    // return this
}
// let s1 = new Student('Rohit',1);
// let s2 = new Student('Sohit',2);
// let s3 = new Student('Mohit',13);
// Object.setPrototypeOf(s1,parent); //s1->parent
// Object.setPrototypeOf(s2,parent); 
// Object.setPrototypeOf(s3,parent); 
// here we are saving memory but soemtime we need to write more than 6000 times so here comes Student.prototype={}
// Student.prototype={} //already exist
Student.prototype.sayHello= function(){
    console.log("HI my name is "+ this.name + ' and rollno is '+ this.rollNo);
}
//instead of doing this we can directly do by making classes
let s1 = new Student('Rohit',1);
let s2 = new Student('Sohit',2);
let s3 = new Student('Mohit',13);
console.log(s1,s2,s3);
s1.sayHello();
s2.sayHello();
s3.sayHello();

class Bike{
    constructor(name,cc){
        this.name = name;
        this.cc = cc;
    }
    makeNoise(){
        console.log("HI my name is "+ this.name + ' and rollno is '+ this.cc);
    }
}
let b1= new Bike('Pulsar',200);
let b2= new Bike('Pulsar',100);
console.log(b1);
console.log(b2);
b1.makeNoise();
b2.makeNoise();
//Prototypal Inheritance
// Prototypal inheritance is a feature in JavaScript where one object can inherit properties and methods from another object using the prototype chain.
let p ={x:1};
let c1={y:2};
let gp={z:3};
console.log(c1.y);
Object.setPrototypeOf(c1,p); //c1 has a backup of p c1->p
Object.setPrototypeOf(c1,gp); //c1 -x ->p | c1-> gp  //c1 has a backup of gp but not a backup of p
//we can only have one backup
// Object.assign(c1,p); //it copies property from source to target
p.x=10;
console.log(c1);
console.log(c1.x); //x is not in c1
//does c1 have a backup ? yes
// backup is gp
// x is not in gp
// does gp have a backup undefined
//search will stop -> undefined
console.log(c1.z);
//z is not in c1
//does c1 have a backup ? yes
//backup is gp
//is z in go ? Yes ->3

let gp1={x:100,y:200,z:3}
Object.setPrototypeOf(c1,gp1);
console.log(c1.y);
//Look at some important interesting properties on function
//Look at a special construcotr function
//Object
let o2=new Object();
console.log(o2); //{}
o2.x=1;
o2.y=2;
o2.z=3;
console.log(o2);
console.log(Object.keys(o2));
console.log(Object.values(o2));
console.log(Object.entries(o2));

let o3 = {a:20}
Object.assign(o3,o2);
console.log(o3);
let o4=Object.assign({x:100},o2); //overwritten
console.log(o4);
console.log(o4===o2); //o4 is not the same object as o2 in memory
//Functions can have properties
//Create object using a function
//functions
function fn1(){
    console.log('Hello',fn1.x);
}
fn1();
fn1.x=1;
fn1.y={z : 10};
console.log(fn1.y);
let o1=new fn1();
o1.x=10;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
console.log(o1);
//{}
//execute fn1 with this={}
//return {}
console.log(o1);


//this is scenario1
// --you had no constructor in child class--
// class Student1{
//     constructor(name,rollNo,marks){
//         this.name=name;
//         this.rollNo=rollNo;
//         this.marks = function(){
//             console.log(this.name,'student name'+this.rollNo);
//         }
//     }
// }
// class SportsCaptain extends Student1{

// }
// let sc1 = new SportsCaptain('Rohit',300);
// console.log(sc1);
// sc1.marks();

//scenario 2
class Student1{
    constructor(name,rollNo,){
        this.name=name;
        this.rollNo=rollNo;
    }
}
class SportsCaptain extends Student1{
constructor(name,rollNo,sport){
    super(name,rollNo); //Trigger constructor from prent class Student.constructor
    this.sport = sport;
}
}
let sc1 = new SportsCaptain('Rohit',300,'Cricket');
console.log(sc1);
let sc2=new Student1('Varun',2);
console.log(sc2);