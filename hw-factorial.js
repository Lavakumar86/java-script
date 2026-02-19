
//named / recursive
// function fact(n){
//     if(n==0 ){
//         return 1
//     }
//     return n  * fact(n-1)
// }
// console.log(fact(5))


// //any

// var factorial = function(n){
//     var facto =1
//     for( var i = 1; i<=n; i++){
//         facto = facto * i
//     }
//     return facto
// };
// console.log(factorial(4))



//iife
(function(n){
    var facto = 1;
    for(var j=1; j<=n; j++){
        facto = facto * j
    }
    console.log(facto);
})(4);



// function palin(str){
//     var reverse=""
//     for(var k =str.length-1; k<=0;i--){
//         reverse=reverse+str[k]
//     }
//     return str = reverse
// }console.log("lil")





(function(str){
    var reverse=""
    for(var l = str.length-1; l>=0;l--){
        reverse = reverse+str[l]
    }
    console.log(str)
})("404")



function fib(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    return fib(n-1) +fib(n-2)
}console.log(fib(5))




//largest of 3 numbers

function large(no1,no2,no3){
    if(no1>=no2 && no1>=no3){
        return no1
    }else if(no2>=no1 && no2>=no3){
        return no2
    }else{
        return no3
    }
}console.log(large(10,5,12))




///prime number
function prime(n){
    if(n<=1){
        return false
    }
    for( var i=2; i<n; i++){
        if(n%i==0){
            return false
        }
    } return true
}console.log(prime(13))






//string reverse
function stri(str){
    var rev=""
    for(var i= str.length-1; i>=0;i--){
        rev = rev+ str[i]
    } return rev 
}console.log(stri("hello"))





///reverse the number
function reverseNumber(num){
    return Number(num.toString().split("").reverse().join(""))
} console.log(reverseNumber(1234))




//second largest
function SL(arr){
    var large = -Infinity
    var second = -Infinity
    for(var i=0; i<arr.length;i++){
        if(arr[i]>large){
            second=large
            large=arr[i]
        }
        else if(arr[i]>second && arr[i] != large){
            second = arr[i]
        }
    }return second
}console.log(SL([10,32,45,21,67]));





// rotate arr k=2
function rotate(arr,k){
    var result = new Array(arr.length)

    for(var i = 0; i< arr.length; i++){
        result[i] = arr[(i+k)%arr.length]
    }return result
}console.log(rotate([1,2,3,4,5],2))





//remove duplicate
function duplicate(str){
    var result = ""
    for(var i=0; i< str.length; i++){
        if(result.indexOf(str[i]) == -1){
            result += str[i]
        }
    }return result;
}console.log(duplicate("programming"))



function rotateArray(arr, k) {
    var n = arr.length;

    for (var i = 0; i < k; i++) {
        var first = arr[0];   

        
        for (var j = 0; j < n - 1; j++) {
            arr[j] = arr[j + 1];
        }

        arr[n - 1] = first;  
    }

    return arr;
}

console.log(rotateArray([1,2,3,4,5], 2));





function leftShift(arr,k){
    for(var j=0; j<k;k++){
        var temp = a[0]
    
         for(var i = 0; i< arr.length-1;i++){
         arr[i] = arr[i+1]
         }
     arr[arr.length - 1]= temp
    }return arr
}console.log(leftShift([1, 2, 3, 4,5], 2));

   