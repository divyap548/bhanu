//roll two dice
let x = Math.floor(Math.random() * 6)+1;
let y = Math.floor(Math.random() * 6)+1;
let num = x+y;
console.log(num);

var expectedVal = prompt("Please choose a val b/w 2-12");
console.log(expectedVal);

if(num == expectedVal){
    console.log("Expected value is matched");
}
else{
    console.log("Expected value is not matched");
}


//otp

let a = Math.floor(Math.random() * 9);
let b = Math.floor(Math.random() * 9);
let c = Math.floor(Math.random() * 9);
let d = Math.floor(Math.random() * 9);
let e = Math.floor(Math.random() * 9);
let f = Math.floor(Math.random() * 9);
let otp =''+a+b+c+d+e+f;
console.log("The otp is: " +otp);
