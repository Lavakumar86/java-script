//STRING METHODS

let str ="javascript"
//to find the length of the string
console.log(str.length);

//to find the perticular of the char 
console.log(str.indexOf("a"));
console.log(str.indexOf("e"));

//AT
// can pass both positive(reads from left to right) and negative(reads from right to left) values
//return undefined if grater index is passes 
console.log(str.at(4));
console.log(str.at(-4));
console.log(str.at(40));

//charAt
//only the positive values will take, 
//dosenot print negative and grater index value
console.log(str.charAt(6));
console.log(str.charAt(-4));
console.log(str.charAt(29));


///charcodeat
//returns ascii value of the character,
//returns Nan for both negative & grater index
console.log(str.charCodeAt("s"));


//concat 
let s1 = "programming language"
console.log(str.concat(s1));

//to uppercase
console.log(s1.toUpperCase());

//inclues
console.log(s1.includes("o"));

//starts-with
//ends-with
//replace
//replace-all
//trim
//trim-start
//trim-end
//repeat
//pad-start
//pad-end
//slice
//sub-string
//split





