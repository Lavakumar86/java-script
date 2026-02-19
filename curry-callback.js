function mul(a){
    return function(b){
        return a * b
    } 
}console.log(mul(3)(2))


//call back function 
function greet(name, callback){
    console.log(" hi " + name);
    callback();
    
}
function saybye(){
    console.log("bye");
    
}greet("lava", saybye)





let fruits = ["apple", "mango", "lichi", "graph"]
let fruitcopy = fruits
console.log(fruitcopy);


let fr1=["apple","mango", "banana"]
let fr2=[...fr1]
console.log(fr2);


let person3={
    name:"king",
    age:20
}
let person4={...person3}
console.log(person4);

let e = ['a', 'b', 'c']
let f = ['v','h']
let m = [...e, ...f]
console.log(m);

let objj={
    name:"king",
    age:10
}
let ogjjj={
    name:"kin"
}
let objjjj={...objj,...ogjjj}
console.log(objjjj);



function add1(...num){
    let sum =0;
    for(i=0;i<num.length-1;i++){
        sum += num[i]
    } return sum
}console.log(add1(1,2,3,4,5,6,7,8,9));




function greet(name = "king"){
    console.log("hi", name);
    
}greet("ring")

let person={
    name:"king",
    age:30,
    place:"palace"
}
let{name,age,place}=person
console.log(name);


