
console.log("TRIM METHOD:- removes whitespaces");
let msg="  Yash Vaish  "
console.log(msg.trim());
console.log(msg);

// above shows immutable property of js  that the original values of the strings remain
//untouched only can be stored for saving changes.
let updmsg= msg.trim()+" this is updated string in a variable because js is immutable";
console.log(updmsg);

console.log("------------------------------");
