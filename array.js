let arr=[1,23,4,[7,77,22],[87,65,21]]
console.log(arr.flat(Infinity));


let ar=[1,2,7,88,3,4,5]
console.log(ar.reverse());
console.log(ar.sort((a,b)=>b-a));
console.log(ar.reduce((cur,acc)=> cur + acc));
console.log(ar.reduceRight((cur,acc)=> cur - acc));
console.log(ar.includes(88));
console.log(ar.indexOf(88));
console.log(ar.indexOf(98));
console.log(ar.lastIndexOf(5));


//for each
let array =[1,2,3,4,5,6]
let newarr=[]
console.log(
    array.forEach((val, index) =>{
        newarr.push(val + 3)
    })
);  console.log(newarr);


//map
console.log(
    array.map((value, index)=>{
        return value +5
    })
);

//find
let findarr = [200,100,150,340]
console.log(findarr.find((ele) => ele > 300));

//findindex 
console.log(findarr.findIndex((ele) => ele> 400));

//filter
console.log(findarr.fill(500, 2, 3));










