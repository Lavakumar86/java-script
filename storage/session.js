let item = sessionStorage.setItem("uname","ajay");
let age = sessionStorage.setItem('age',20)

//get item
let getitem = sessionStorage.getItem("uname")

// localStorage.removeItem("age")
// localStorage.removeItem("uname")
// localStorage.clear();

let person={
    uname :"viju",
    age : 30
}

let strobj = sessionStorage.setItem("person",JSON.stringify(person));

//get
 let parse = JSON.parse(sessionStorage.getItem("person"));
console.log(parse);
 sessionStorage.removeItem("person")