// syntax js->
const readline = require("readline");
const{isDeepStrictEqual} =require("util");
const r1= readline.createInterface({
    input: process.stdin,
    output:process.stdout,
})
// now define the function here
r1.question("Enter two numbers separated by space:",(input)=>{
    const numbers = input.split(' ').map(Number);
    const[num1,num2]=numbers;
    //sending to function where we want
    const equal = isEqual(num1,num);
    console.log(equal);
    r1.close();
})
function isEqual(num1,num2){
    // code here
}
module.exports(isEqual);

///next

const readline = require("readline");
const r1=readline.createInterface({
    input :process.stdin,
    output: process.stdout,
})
r1.question("Enter number:",(input)=>{
    const a = Number(input);
    const cube = findCube(a);
    console.log(cube);
    r1.close();
})
function findCube(a){

}
module.exports =findCube;