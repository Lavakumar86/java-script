for (var i = 1; i <= 5; i++){
    console.log(i)
}



var j =1
while(  j <= 5 ){
    console.log(j)
    j++
}


var k =1
do{
    console.log(k)
    k++
}while(k <= 5)


function add(a,b){
    return a +b
}console.log(add(3,4))



// anynomus
var add1 = function(c,d){
    return c+ d
};
console.log(add1(3,5));

//IIFE
(function(e,f){
    console.log(e+f)
}) (3,9)


//arrow
var add2 =(g,h) => g + h
console.log(add2(7,6));


add3 = num => num + num
console.log(add3(5))



