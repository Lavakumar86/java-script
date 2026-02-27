//set the item
let item1 = localStorage.setItem("aname","ajay");
let age1 = localStorage.setItem('age',20)

//get item
let etitem = localStorage.getItem("aname")

 localStorage.removeItem("age")
 localStorage.removeItem("uname")
 localStorage.clear();

let person1={
    uname :"viju",
    age : 30
}

let strobj1 = localStorage.setItem("person1",JSON.stringify(person1));

//get
 let parse1 = JSON.parse(localStorage.getItem("person1"));
console.log(parse1);
 localStorage.removeItem("person1")







 // Set primitive values
// sessionStorage.setItem("uname", "ajay");
// sessionStorage.setItem("age", 20);

// // Get primitive values
// let getName = sessionStorage.getItem("uname");
// let getAge = sessionStorage.getItem("age");

// console.log(getName);
// console.log(getAge);

// // Create object
// let person1 = {
//     uname: "ajay",
//     age: 30
// };

// // Store object (convert to string)
// sessionStorage.setItem("person1", JSON.stringify(person));

// // Get object (convert back to object)
// let parse1 = JSON.parse(sessionStorage.getItem("person"));
// console.log(parse1);

// Remove only person object
// sessionStorage.removeItem("person");

// If you want to clear everything
// sessionStorage.clear();


