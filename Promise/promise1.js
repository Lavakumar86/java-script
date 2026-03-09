let promiseEx = new Promise((resolve,reject) =>{
    if(20 > 10){
        resolve("20 is greater than 10")
    }else{
        reject("20 is not graeter")
    }
});
promiseEx.then((resolve) =>{
    console.log(resolve);
    
})
.catch((reject) =>{
    console.log(reject);
    
})