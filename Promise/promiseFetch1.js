let url5 = "https://jsonplaceholder.typicode.com/albums"
let url6 = "https://jsonplaceholder.typicode.com/posts"


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



