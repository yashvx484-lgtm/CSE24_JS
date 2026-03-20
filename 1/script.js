console.log("Hello World");
// document.write("hello world");
// let x if there is no data defined then undefined null is a value which is assigned to a variable when there is no value assigned to it
/*let x;
console.log(x);*/

/* case sensitie m
Java script variable type assigning 
var and const 
Java script
*/

var num=10;
console.log(num);
console.log(typeof num);
num=true;
console.log(num);
let num1="yash";
console.log(num1);
num1=undefined;
console.log(num1);
console.log(typeof num);
console.log(typeof num1);

// //echma script 6 new type symbol type: 
// purpose of symbol is to create unique identifiers for objects
// let sym1=Symbol("id");
// let sym2=Symbol("id");
// console.log(sym1===sym2); //false because each symbol is unique
// basic explanation of symbol type in JavaScript. It is a primitive data type that represents a unique identifier. 
// Each time you create a symbol, it is guaranteed to be unique, even if it has the same description. 
// This makes symbols useful for creating unique keys for object properties or for defining constants that should not be accidentally overwritten.

// need of symbol type in JavaScript:
// 1. Unique identifiers: Symbols provide a way to create unique identifiers for object properties, 
// which can help prevent naming conflicts and ensure that properties are not accidentally overwritten.   


-----------------------------------------------------------
var num = 10;
console.log(num);
console.log(typeof(num));

num = false;
console.log(num);
console.log(typeof(num));
num = false ;

num = null ;
console.log(num);
console.log(typeof(num));
num = false ;


num = undefined ;
console.log(num);
console.log(typeof(num));
num = false ;

var sayHello = function(){
    alert("hello world");
}

var numberArray = [1,2,3];

var animals = new Array["cat" , "dog "];

var person = {
    name = ""
}

const sym1 = Symbol(4);
console.log(sym1);

const sym2 = Symbol(4);
console.log(sym2);

if(sym1==sym2){
    console.log("true");
}

else{
    console.log("false");
}


var i ;

for ( i = 0 ; i < 3 ; i+= 1){
    console.log(i);
}
