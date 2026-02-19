//shallow copy and deep copy

//shallow copy is used to only top roperty of both array and objects

//deep copy is used to copy the nested obj and array 
//--->we need to convert the obj or array into string by using JSON.STRINGIFY
//--->  and this string need to be convert into again object by using JSON.PARSE


//deep copy
let person1 ={
    name:"king",
    age:20,
    address:{
        city:"hassan",
        pin :573201
    },
}
console.log(person1);

let personcopy = {...person1}
console.log(personcopy);



let stringify = JSON.stringify(person1)
let obj = JSON.parse(stringify)

person1.age=40;
console.log(person1);

person1.address.city='bang'
console.log(person1);
console.log(personcopy);

