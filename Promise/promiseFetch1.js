let url5 = "https://jsonplaceholder.typicode.com/albums"
let url6 = "https://jsonplaceholder.typicode.com/posts"
let url7="https://jsonplaceholder.typicode.com/users"
let url8 ="https://jsonplaceholder.typicode.com/todos"
let url9 ="https://jsonplaceholder.typicode.com/comments"
let url10 = "https://jsonplaceholder.typicode.com/photos"


let promise1 = new Promise((resolve,reject) => {
    fetch(url5).then(resolve => resolve.json())
              .then(data => console.log(data))
              .catch((error) => {
                reject(error)
                
              })
});

let promise2 = new Promise((resolve,reject) => {
    fetch(url6).then(resolve => resolve.json())
              .then(data => console.log(data))
              .catch((error) => {
                reject(error)
                
              })
});

Promise.all([promise1, promise2])
    .then((resolve) => {
        console.log("resolve", resolve);
        
    })
    .catch((error) =>{
        console.log("error all", error);
        
    })
Promise.race([promise1, promise2])
    .then((resolve) => {
        console.log("resolve", resolve);
        
    })
    .catch((error) =>{
        console.log("error all", error);
        
    })



    ///10-03-2026

    let fetchuser = async() => {
        try{
        let response = await fetch(url5)
        let data = await response.json()
        console.log(data);       
    }
catch(error){
    console.log(error);
    
}finally{
    console.log("finally executed");
    
}
}
fetchuser()

let fetchuser1 =async () => {
    try{
        let resp = await fetch(url7)
        let data = await resp.json()
        console.log(data);
    }catch(error){
        console.log(error);
        
    }
}

