let x = Math.floor(Math.random() * 6)+1;
let y = Math.floor(Math.random() * 6)+1;
let num = x+y;
console.log(num);

var expectedVal = prompt("Please choose a val b/w 2-12");
console.log(expectedVal);

if(num === expectedVal){
    console.log("Expected value is matched");
}
else{
    console.log("Expected value is not matched");
}