let num1 = new Number((odd,eve)=>{
    
    if(21 % 2==1){
        odd("num is odd")
    }else{
        eve("even");
        
    }
});
num1.then((odd) =>{
    console.log(odd);
    
})
num1.catch((eve) =>{
    console.log(eve);
    
})