let num = new Promise((even,odd) =>{
    if(21 % 2 ==0){
        even("num is even")
    }else{
        odd("num is odd")
    }
});
num.then((even) =>{
    console.log(even);
    
})
.catch((odd) =>{
    console.log(odd);
    
})  