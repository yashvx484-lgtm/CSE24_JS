/* there are three ways to use slice method in js 
1. str.slice(start) 
2. str.slice(start,end)
3. str.slice(-start)
4. str.slice(-start,-end)
*/
console.log("SLICE METHOD:- extracts a section of a string and returns it as a new string, without modifying the original string.");
let str="Hello World";
console.log(str.slice(6));
console.log(str.slice(5,11));
console.log(str.slice(-5));
console.log(str.slice(-5,-1));